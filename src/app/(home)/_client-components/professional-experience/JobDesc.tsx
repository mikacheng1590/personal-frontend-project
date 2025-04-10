type JobDescProps = {
  className?: string;
  description: string;
}

export default function JobDesc({
  className = "",
  description,
}: JobDescProps) {
  return (
    <p className={`${className} text-sm md:text-2xl`}>
      {description}
    </p>
  );
}