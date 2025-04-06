"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type BouncingBallProps = {
  className?: string;
  bounceHeight?: number;
  mBounceHeight?: number;
  originalTop?: string;
  mOriginalTop?: string;
};

const colors = [
  "#D62828",
  "#F77F00",
  "#FCBF49",
  "#2A4E28",
  "#316C8C",
  "#A3431A",
  "#687C4F",
];

// const colors = [
//   "mika-red-100",
//   "mika-orange-50",
//   "mika-yellow-100",
//   "mika-green-100",
//   "mika-blue-50",
//   "mika-maroon-50",
//   "mika-green-50",
// ]

export default function BouncingBall({
  className = "",
  bounceHeight = 100,
  mBounceHeight = 48,
  originalTop = "-120px",
  mOriginalTop = "-60px",
}: BouncingBallProps) {
  const ballRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);

  useGSAP(() => {
    let mm = gsap.matchMedia(), breakPoint = 768

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      let isDesktop = context.conditions?.isDesktop;

      gsap.set(ballRef.current, {
        top: isDesktop ? originalTop : mOriginalTop,
      })

      let tl = gsap.timeline({
        repeat: -1,
      })

      tl.to(ballRef.current, {
        y: isDesktop ? bounceHeight : mBounceHeight,
        duration: 0.5,
        ease: "power2.in", // accelerate down
        onComplete: () => {
          setColorIndex(prev => prev + 1 > colors.length - 1 ? 0 : prev + 1);
        }
      })

      tl.to(ballRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power2.out", // decelerate up
      })
    })
  })

  return (
    <span
      className={`w-[18px] h-[18px] md:w-[24px] md:h-[24px] rounded-full ${className}`}
      ref={ballRef}
      style={{
        backgroundColor: colors[colorIndex],
      }}
    ></span>
  );
}
