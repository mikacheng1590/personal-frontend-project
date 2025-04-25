export type CardProps = {
  title: string;
  content: React.ReactNode;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className="flip-card bg-transparent w-full h-[70vh] min-h-[600px] perspective-[1000px] group/card">
      <div className="flip-card-inner relative w-full h-full text-center transform-3d transition-transform duration-1000 group-hover/card:transform-[rotateY(180deg)]">
        <div className="flip-card-front absolute w-full h-full bg-mika-yellow-100 backface-hidden flex items-center justify-center">
          <h3 className="text-mika-orange-50 text-sm md:text-3xl font-bold uppercase p-4">{title}</h3>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-mika-yellow-50 transform-[rotateY(180deg)] backface-hidden">
          <div className="p-4 flex flex-col items-center justify-center h-full text-mika-orange-50 [&>h5]:underline [&>h5]:text-base [&>h5]:md:text-xl [&>h5]:font-bold [&>h5]:mb-2 [&>p]:text-base [&>p]:md:text-xl [&>a]:py-2 [&>a]:px-4 [&>a]:rounded [&>a]:bg-mika-orange-50 [&>a]:text-mika-yellow-100 [&>a]:font-bold [&>a]:hover:opacity-50">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}