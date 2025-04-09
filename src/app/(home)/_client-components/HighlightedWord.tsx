import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type HighlightedWordProps = {
  timeline?: gsap.core.Timeline;
  word?: string;
};

export default function HighlightedWord ({
  timeline,
  word = "hello"
}: HighlightedWordProps) {
  const wordRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.set(wordRef.current, {
      display: "inline",
      color: "hsl(87, 22%, 40%)",
      backgroundImage: `linear-gradient(
        transparent 50%,
        #58c4ff 50%,
        #EAE2B7 85%,
        transparent 85%,
        transparent 100%
      )`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "0% 100%",
    });    

    if (timeline) {
      timeline.to(wordRef.current, {
        backgroundSize: "100% 100%",
        duration: 1,
        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        stagger: 0.1
      }, ">");
    }
  }, [timeline]);
  
  return (
    <span ref={wordRef}>{word}</span>
  );
};
