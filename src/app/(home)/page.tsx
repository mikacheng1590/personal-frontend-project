import { Name, SelfIntroTitle, ProfessionalExperience, SelfIntro, Carousel, Video, ContactIconRow } from "@/app/(home)/_client-components";
import StartModal from "@/app/(home)/_server-components/initial-section/StartModal";

const selfIntroSection = "self-intro-section"
const professionalExperienceSection = "professional-experience-section"
const selfProjectsSection = "self-projects-section"
const contactSection = "contact-section"

type HomeProps = {
  searchParams: Promise<{
    f?: string
  }>
}

export default async function Home({
  searchParams,
}: HomeProps) {
  const { f } = await searchParams

  return (
    <main>
      {f && <StartModal queryString={f}/>}
      <section className="my-name-section h-full h-screen min-h-[400px] w-full bg-mika-yellow-50 flex items-center justify-center overflow-hidden">
        <Name />
      </section>
      <section className={`${selfIntroSection} h-screen min-h-[900px] w-full bg-mika-yellow-100 flex items-center justify-center overflow-hidden`}>
        <div className="flex flex-col items-center justify-center h-full container p-4 md:p-8">
          <div className="mb-4 md:mb-8">
            <SelfIntroTitle 
              trigger={selfIntroSection}
            />
          </div>
          <SelfIntro
            trigger={selfIntroSection}
          />
        </div>
      </section>
      <section className={`${professionalExperienceSection} overflow-x-hidden`}>
        <ProfessionalExperience />
      </section>
      <section className={`${selfProjectsSection} h-screen min-h-[800px] w-full bg-mika-blue-100 flex items-center justify-center`}>
        <div className="container">
          <h2 className="text-mika-blue-50 text-2xl md:text-6xl font-bold uppercase text-center mb-4 md:mb-8">
            Something I&apos;ve Built
          </h2>
          <Carousel />
        </div>
      </section>
      <section className={`${contactSection} h-screen min-h-[300px] md:min-h-[800px] w-full bg-mika-yellow-50 flex items-center justify-center`}>
        <div className="container flex items-center justify-center flex-col p-4 md:p-8">
          <Video
            src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc/casual-facts.mp4"
            poster="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc//casual-facts-poster.png"
            muted={false}
            className="w-full lg:w-4xl"
          />
          <div className="mt-4 md:mt-8">
            <ContactIconRow />
          </div>
        </div>
      </section>
    </main>
  );
}