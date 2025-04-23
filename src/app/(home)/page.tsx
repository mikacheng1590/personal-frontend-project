"use client"

import { Name, SelfIntroTitle, HorizontalSection, SelfIntro, Carousel, Video } from "./_client-components";

const selfIntroSection = "self-intro-section"
const professionalExperienceSection = "professional-experience-section"
const selfProjectsSection = "self-projects-section"
const personalVideoSection = "personal-video-section"

export default function Home() {

  return (
    <main>
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
        <HorizontalSection />
      </section>
      <section className={`${selfProjectsSection} h-screen min-h-[800px] w-full bg-mika-blue-100 flex items-center justify-center`}>
        <div className="container">
          <h6 className="text-mika-blue-50 text-2xl md:text-6xl font-bold uppercase text-center mb-4 md:mb-8">
            Something I've Built
          </h6>
          <Carousel />
        </div>
      </section>
      <section className={`${personalVideoSection} h-screen min-h-[800px] w-full bg-mika-green-50 flex items-center justify-center`}>
        <div className="container flex items-center justify-center p-4 md:p-8">
          <Video
            src="https://txrfmzxgqvckqzumiquw.supabase.co/storage/v1/object/public/misc/showcase-hb100.mp4"
          />
        </div>
      </section>
    </main>
  );
}