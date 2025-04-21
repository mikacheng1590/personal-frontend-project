import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';

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
    }
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
      <Card />
      <Card />
      <Card />
    </Carousel> 
  );
}