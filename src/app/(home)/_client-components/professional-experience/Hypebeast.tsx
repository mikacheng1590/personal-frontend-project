import Video from "./Video";
import JobTitleAndCompany from "./JobTitleAndCompany";
import JobDesc from "./JobDesc";
import Title from "./Title";
import Tag from "./Tag";

export default function Hypebeast() {
  return (
    <div className="h-full w-full bg-mika-maroon-100 flex justify-center">
      <div className="container overflow-y-scroll flex flex-col p-4 md:p-8">
        <JobTitleAndCompany
          company="Hypebeast"
          title="Web Developer"
          className="text-mika-yellow-50 flex items-baseline flex-col md:flex-row md:gap-2"
        />
        <JobDesc
          description="I led the development of a yearly marketing campaign website, creating immersive animations that elevated user engagement through seamless transitions and performance-optimized motion design. I also redesigned and optimized a media subsite, improving usability and site performance by 25% in collaboration with UI/UX designers. Additionally, I integrated and fine-tuned a custom video player with Connatix engineers to boost ad revenue, and automated the editorial team’s newsletter workflow with a Google Colab script, cutting manual processing time by 40% each week."
          className="text-mika-yellow-50"
        />
        <div className="flex flex-wrap gap-2 mt-4 mb-4 md:mb-8">
          <Tag tag="Vue" />
          <Tag tag="Symfony" />
          <Tag tag="Javascript" />
          <Tag tag="PHP" />
          <Tag tag="Wordpress" />
          <Tag tag="MySQL" />
        </div>

        {/* Video Section (Desktop) */}
        <div className="hidden md:flex md:gap-4 md:flex-row md:justify-end">
          <Video
            src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc/showcase-hb100.mp4"
            title="HYPEBEAST 100" />
          <Video
            src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc//showcase-pbcityguide.mp4"
            title="POPBEE CITY GUIDE" />
        </div>

        {/* Video Section (Mobile) */}
        <div className="block md:hidden w-full overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory w-full">
            <div className="snap-start w-full shrink-0">
              <Video
                autoPlay={true}
                src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc/showcase-hb100.mp4"
                title="HYPEBEAST 100" />
            </div>
            <div className="snap-start w-full shrink-0">
              <Video
                autoPlay={true}
                src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc/showcase-pbcityguide.mp4"
                title="POPBEE CITY GUIDE" />
            </div>
          </div>
        </div>

        <Title />
      </div>
    </div>
  );
}