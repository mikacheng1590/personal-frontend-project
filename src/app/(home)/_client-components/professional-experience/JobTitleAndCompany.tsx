type TitleAndCompanyProps = {
  className?: string;
  company: string;
  title: string;
}

export default function TitleAndCompany({
  className = "",
  company,
  title,
}: TitleAndCompanyProps) {
  return (
    <h2 className={`mb-4 md:mb-8 ${className}`}>
      <span className="text-2xl md:text-6xl font-bold uppercase">
        {title}
      </span>
      <span className="test-sm md:text-3xl font-bold uppercase">
        <span className="relative bottom-[3px]">@</span>{company}
      </span>
    </h2>
  );
}