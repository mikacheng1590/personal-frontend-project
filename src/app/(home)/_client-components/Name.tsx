import BouncingBall from "./BouncingBall";

export default function Name() {
  return (
    <h1 className="font-bold text-mika-blue-100 text-center flex flex-col items-center lg:flex-row lg:gap-x-8">
      <span className="first-name inline-flex items-baseline">
        <span className="text-7xl md:text-9xl">M</span>
        <span className="relative inline-block">
          <BouncingBall className="absolute -left-[1px] md:left-0" />
          <span className="text-6xl md:text-8xl">l</span>
        </span>
        <span className="text-7xl md:text-9xl">KA</span>
      </span>
      <span className="last-name inline-block uppercase">
        <span className="text-7xl md:text-9xl">CHENG</span>
      </span>      
    </h1>
  )
}