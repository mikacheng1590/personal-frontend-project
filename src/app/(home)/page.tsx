"use client"

import { Name, SelfIntroTitle, HorizontalSection, SelfIntro, Carousel } from "./_client-components";

const mainContainer = "main-container"
const selfIntroSection = "self-intro-section"
const professionalExperienceSection = "professional-experience-section"
const selfProjectsSection = "self-projects-section"

export default function Home() {

  return (
    <main className={`${mainContainer} h-screen w-full`}>
      <section className="my-name-section h-full min-h-[400px] w-full bg-mika-yellow-50 flex items-center justify-center overflow-hidden">
        <Name />
      </section>
      <section className={`${selfIntroSection} h-full min-h-[900px] w-full bg-mika-yellow-100 flex items-center justify-center overflow-hidden`}>
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
      <section className={`${selfProjectsSection} h-full min-h-[800px] w-full bg-mika-blue-100 flex items-center justify-center`}>
        <div className="container">
          <h6 className="text-mika-blue-50 text-2xl md:text-6xl font-bold uppercase text-center mb-4 md:mb-8">
            Self Projects
          </h6>
          <Carousel />
        </div>
      </section>
    </main>
  );
}