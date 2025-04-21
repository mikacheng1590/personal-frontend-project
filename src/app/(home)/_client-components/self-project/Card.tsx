export default function Card() {
  return (
    <div className="flip-card bg-transparent w-full h-[70vh] min-h-[600px] perspective-[1000px]">
      <div className="flip-card-inner relative w-full h-full text-center transform-3d">
        <div className="flip-card-front absolute w-full h-full bg-black">
          <h4>21 Days</h4>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-white">
          <p>Some content</p>
        </div>
      </div>
    </div>
  );
}