import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { getRandomIndices } from "@/app/_common/utils";
import COLORS from "../../_constants/colors";

type TagProps = {
  tag: string;
};

export default function Tag({ tag }: TagProps) {
  const tagRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const randomIndices = getRandomIndices(COLORS.length);
    const firstColor = COLORS[randomIndices[0]] ?? "#FFFFFF";
    gsap.set(tagRef.current, { color: firstColor });

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    for (let i = 1; i < randomIndices.length; i++) {
      tl.to(tagRef.current, {
        color: COLORS[randomIndices[i]],
        duration: 1,
        ease: "steps(1)",
      });
    }
  }, [tag]);

  return (
    <span
      className="bg-[#FCFFF7] text-xs md:text-lg font-bold uppercase py-1 px-4 inline-block text-center"
      ref={tagRef}
    >
      {tag}
    </span>
  );
}
