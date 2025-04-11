"use client"

import { Name, SelfIntroTitle, HorizontalSection, SelfIntro } from "./_client-components";

const mainContainer = "main-container"
const selfIntroSection = "self-intro-section"
const workSection = "work-section"

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
      <section className={`${workSection} overflow-x-hidden`}>
        <HorizontalSection />
      </section>
    </main>
  );
}