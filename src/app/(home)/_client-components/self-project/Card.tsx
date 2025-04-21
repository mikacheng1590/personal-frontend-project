export default function Card() {
  return (
    <div className="flip-card bg-transparent w-full h-[70vh] min-h-[600px] perspective-[1000px] group/card">
      <div className="flip-card-inner relative w-full h-full text-center transform-3d transition-transform duration-1000 group-hover/card:transform-[rotateY(180deg)]">
        <div className="flip-card-front absolute w-full h-full bg-black backface-hidden">
          <h4>21 Days</h4>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-white transform-[rotateY(180deg)] backface-hidden">
          <p>Some content</p>
        </div>
      </div>
    </div>
  );
}