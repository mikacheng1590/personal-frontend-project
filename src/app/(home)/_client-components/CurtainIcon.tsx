type CurtainIconProps = {
  className?: string;
  icon: React.ReactNode;
  link: string;
};

const hoverAnimation = "group-hover/curtain-icon:translate-y-[calc(-100%+-7px)] transition-transform duration-400 ease-out"

export default function CurtainIcon({
  className = "",
  icon,
  link
}: CurtainIconProps) {
  return (
    <a href={link} className={`${className} inline-block relative overflow-clip group/curtain-icon`}>
      <span className={`${hoverAnimation} inline-block [&>*]:text-mika-blue-50`}>{icon}</span>
      <span aria-hidden="true" className={`${hoverAnimation} inline-block absolute top-full left-0 select-none [&>*]:text-mika-blue-100`}>{icon}</span>
    </a>
  );
}