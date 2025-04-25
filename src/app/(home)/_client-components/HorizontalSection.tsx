import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionDef = {
  id: string;
  component: React.ReactNode;
  element: HTMLDivElement | null;
}

export type HorizontalSectionProps = {
  scroller?: string;
  sectionsDefList: SectionDef[];
}

export default function HorizontalSection({
  scroller,
  sectionsDefList
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
      delay: 0.1,
      scrollTrigger: {
        ...(scroller && { scroller: `.${scroller}` }),
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        // snap: {
        //   snapTo: 1 / (sectionsRefs.length - 1),
        //   duration: 0.1,
        // },
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    })
  }, [scroller]);

  return (
    <div className="h-screen md:min-h-[800px] flex flex-nowrap w-[200vw] overscroll-none" ref={triggerRef}>
      {sectionsDefList.map((section, index) => (
        <div key={section.id} className="min-h-screen w-full flex items-center justify-center" ref={(e) => addRef(e, index)}>
          {section.component}
        </div>
      ))}      
    </div>
  )
}