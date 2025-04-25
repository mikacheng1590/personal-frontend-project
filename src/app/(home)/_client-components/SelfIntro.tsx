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
      Hi there! I'm Mika — a <HighlightedWord 
        word="proactive" 
        timeline={timeline}
      /> and <HighlightedWord 
      word="collaborative" 
      timeline={timeline}
      /> developer with a strong passion for creating engaging digital experiences. Over the past few years, I've worked on projects ranging from interactive marketing campaigns to internal workflow automation and e-commerce features. I enjoy working closely with <HighlightedWord 
      word="cross-functional" 
      timeline={timeline}
    /> teams, solving problems creatively, and making sure every project runs smoothly from start to finish. I'm <HighlightedWord 
    word="detail-oriented" 
    timeline={timeline}
  />, <HighlightedWord 
  word="adaptable" 
  timeline={timeline}
  />, and always excited to bring ideas to life through thoughtful planning and teamwork.
    </p>
  );
}