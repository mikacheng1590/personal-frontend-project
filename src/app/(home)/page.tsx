"use client"

import { Name, SelfIntroTitle, HorizontalSection } from "./_client-components";

const mainContainer = "main-container"
const selfIntroSection = "self-intro-section"
const workSection = "work-section"

export default function Home() {

  return (
    <main className={`${mainContainer} relative overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-screen w-full no-scrollbar`}>
      <section className="my-name-section relative h-screen min-h-[400px] w-full bg-mika-yellow-50 flex items-center justify-center overflow-hidden snap-center">
        <Name />
      </section>
      <section className={`${selfIntroSection} relative h-screen min-h-[400px] w-full bg-mika-yellow-100 flex items-center justify-center overflow-hidden snap-center`}>
        <div className="flex flex-col items-center justify-center h-full container p-4 md:p-8">
          <div className="mb-4 md:mb-8">
            <SelfIntroTitle 
              scroller={mainContainer}
              trigger={selfIntroSection}
            />
          </div>
          
          <p className="text-base/6 md:text-3xl/10 text-mika-green-50 font-bold">
            Hi there! I’m Mika, a frontend developer with 3 years of experience... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in turpis pharetra, luctus sem vel, tincidunt dolor. Quisque in viverra enim. Morbi sed ligula faucibus elit pretium convallis vel sit amet mi. Phasellus ut ligula at nunc elementum dapibus. Praesent tincidunt mi id mauris placerat vestibulum. Pellentesque quis consequat risus, vitae rhoncus est. Fusce id dolor eleifend, tempor metus a, gravida leo. Sed ullamcorper massa at dapibus luctus. Pellentesque quis posuere libero. Cras eleifend viverra massa, sit amet volutpat nunc tempus eget. Duis venenatis, ligula non vulputate mattis, erat justo porta ligula, et pharetra neque urna sed nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </section>
      <section className={`${workSection} relative snap-center overflow-x-hidden`}>
        <HorizontalSection scroller={mainContainer} />
      </section>
    </main>
  );
}