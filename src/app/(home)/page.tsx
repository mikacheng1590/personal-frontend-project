"use client"

import Name from "./_client-components/Name";

export default function Home() {

  return (
    <main>
      <section className="my-name-section h-screen min-h-[400px] w-full bg-mika-yellow-50 flex items-center justify-center overflow-hidden">
        <Name />
      </section>
    </main>
  );
}