import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HighlightedWord from "./HighlightedWord";

gsap.registerPlugin(useGSAP);

type SelfIntroProps = {
  scroller?: string;
  trigger: string;
}

export default function SelfIntro({
  scroller,
  trigger
}: SelfIntroProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | undefined>(undefined);

  useGSAP(() => {
    // Paragraph gradient animation
    gsap.set(textRef.current, {
      backgroundImage: "linear-gradient(90deg, #687C4F, #2A4E28, #003049, #316C8C)",
      backgroundSize: "300% 100%",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundPosition: "0% 50%"
    });

    gsap.to(textRef.current, {
      backgroundPosition: "100% 50%",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });

    // Create timeline for highlighted words
    const tl = gsap.timeline({
      delay: 1, // Start after text gradient animation
      scrollTrigger: {
        ...(scroller && { scroller: `.${scroller}` }),
        trigger: `.${trigger}`,
      }
    });
    setTimeline(tl);
  });

  return (
    <p 
      ref={textRef}
      className="text-base/6 md:text-3xl/10 font-bold"
    >
      Hi there! I'm Mika, a frontend developer <HighlightedWord 
        word="passionate" 
        timeline={timeline}
      /> with 3 years of experience... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in turpis pharetra, luctus sem vel, tincidunt dolor. Quisque in viverra enim. Morbi sed ligula faucibus elit pretium convallis vel sit amet mi. Phasellus ut ligula at nunc elementum dapibus. Praesent tincidunt mi id mauris placerat vestibulum. Pellentesque quis consequat risus, vitae rhoncus est. <HighlightedWord 
        word="creative" 
        timeline={timeline}
      /> Fusce id dolor eleifend, tempor metus a, gravida leo. Sed ullamcorper massa at dapibus luctus. Pellentesque quis posuere libero. Cras eleifend viverra massa, <HighlightedWord 
        word="innovative" 
        timeline={timeline}
      /> sit amet volutpat nunc tempus eget. Duis venenatis, ligula non vulputate mattis, erat justo porta ligula, et pharetra neque urna sed nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
  );
}