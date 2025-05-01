import JobTitleAndCompany from "./JobTitleAndCompany";
import JobDesc from "./JobDesc";
import Title from "./Title";
import Tag from "./Tag";

export default function YoovAsiaTop() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <div className="h-full w-full bg-mika-blue-50 flex justify-center">
        <div className="container p-4 md:p-8">
          <JobTitleAndCompany
            company="Yoov Internet Technology"
            title="Full Stack Developer"
            className="text-mika-blue-100 flex flex-col md:gap-2"
          />
          <JobDesc
            description="I developed 20+ reusable components to support a no-code platform revamp and built key company website features, including an API server and CMS. I collaborated with marketing and design teams to align development with business goals, executed SEO strategies and A/B testing for a 20% performance boost, and created a custom WordPress plugin that improved lead conversion rates by 25% through streamlined contact form data collection."
            className="text-mika-blue-100"
          />
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag tag="React" />
            <Tag tag="Vue" />
            <Tag tag="Typescript" />
            <Tag tag="Express.js" />
            <Tag tag="PostgreSQL" />
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-mika-orange-50 flex justify-center">
        <div className="container p-4 md:p-8 flex flex-col h-full">
          <JobTitleAndCompany
            company="AsiaTop Loyalty"
            title="Web Developer"
            className="text-mika-yellow-50 flex flex-col md:gap-2"
          />
          <JobDesc
            description="I collaborated with cross-functional teams to deliver new e-commerce app features using Vue, boosting app downloads by 3%. I integrated secure payment gateways (PayMe, Binance Pay, UnionPay) to support reliable C2B transactions for 20,000+ users. Additionally, I designed and developed API endpoints for features like inventory management, CRUD operations, and third-party integrations including Binance Pay and Xoxoday."
            className="text-mika-yellow-50"
          />
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag tag="Vue" />
            <Tag tag="Javascript" />
            <Tag tag="Kotlin" />
            <Tag tag="PostgreSQL" />
          </div>
          <Title />
        </div>
      </div>
    </div>
  );
}
