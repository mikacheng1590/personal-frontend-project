import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionDef = {
  id: string;
  backgroundColor: string;
  text: string;
  element: HTMLDivElement | null;
}

type HorizontalSectionProps = {
  scroller: string;
}

const sectionsDefList = [
  {
    id: "one",
    backgroundColor: "bg-mika-maroon-100",
    text: "ONE",
    element: null
  },
  {
    id: "two",
    backgroundColor: "bg-mika-blue-50",
    text: "TWO",
    element: null
  },
]

export default function HorizontalSection({
  scroller,
}: HorizontalSectionProps) {
  const sections = useRef<SectionDef[]>(sectionsDefList);
  const triggerRef = useRef(null);  

  const addRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      sections.current[index].element = el;
    }
  }

  useGSAP(() => {
    const sectionsRefs = sections.current.map((section) => section.element);

    gsap.to(sectionsRefs, {
      xPercent: -100 * (sectionsRefs.length - 1),
      duration: 0.1,
      scrollTrigger: {
        scroller: `.${scroller}`,
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sectionsRefs.length - 1),
          // duration: 0.1,
        },
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    })
  }, [scroller]);

  return (
    <div className="h-screen flex flex-nowrap w-[200vw] overscroll-none" ref={triggerRef}>
      {sectionsDefList.map((section, index) => (
        <div key={section.id} className={`min-h-screen w-full ${section.backgroundColor} flex items-center justify-center`} ref={(e) => addRef(e, index)}>
          {section.text}
        </div>
      ))}      
    </div>
  )
}