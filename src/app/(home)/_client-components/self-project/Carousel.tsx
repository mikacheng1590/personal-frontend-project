import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card, { CardProps } from "./Card";

const cardData: CardProps[] = [
  {
    title: "Portfolio Website",
    content: (
      <>
        <h5>Yes You&apos;re Looking At It!</h5>
        <p>A portfolio website built with React, Tailwind CSS, and GSAP.</p>
      </>
    ),
  },
  {
    title: "21 Days",
    content: (
      <>
        <h5>Habit Builder</h5>
        <p>
          A responsive web app designed to help users build habits and stay
          accountable! Users can create habit-tracking projects, log daily
          entries, and receive reminders when they miss a day. Stay on track,
          achieve goals, and build consistency with it!
        </p>
        <a
          href="https://21-days.mikacheng.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          Try Now
        </a>
      </>
    ),
  },
  {
    title: "Price Tracker for Paula&apos;s Choice Product",
    content: (
      <>
        <h5>Let me know when the price drops!</h5>
        <p>
          I&apos;ve been using a certain Paula&apos;s Choice product for years
          and I love it! But I hate paying full price. So I built this price
          tracker to let me know when the price drops. I set a cron job to check
          the price everyday and send me an email if the price drops. For now,
          it&apos;s only tracking one product, but I will definitely upgrade it
          to track multiple products in the future.
        </p>
        <a
          href="https://github.com/mikacheng1590/personal-backend-project/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          See Some Code
        </a>
      </>
    ),
  },
  {
    title: "Kiln Craft Chronicle",
    content: (
      <>
        <h5>To document my journey into the world of pottery</h5>
        <p className="!text-sm !md:text-base">
          I&apos;ve started to do pottery recently, and realize it would be
          helpful to document my process. Wanting to build it quickly, I turned to Lovable to create an MVP, and within just 8 hours, I had a working version after building with the help of the AI tool and some debugging myself. I can see why people rave about how fast and efficient AI-powered development can be—it&apos;s incredibly empowering for rapid prototyping. That said, I also experienced firsthand why people caution about AI-generated code creating technical debt. While the tool helped me move fast, the resulting code wasn&apos;t always the most optimized or maintainable, reinforcing the importance of reviewing and refining AI output with a developer&apos;s eye.
        </p>
        <a
          href="https://kiln.mikacheng.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Now
        </a>
      </>
    ),
  },
];

export default function SelfProjectCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 9000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      // draggable={false}
      // showDots={true}
      responsive={responsive}
      // // ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlaySpeed={1000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // dotListClass="custom-dot-list-style"
      itemClass="p-3"
    >
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </Carousel>
  );
}
