'use client';
import { url } from "inspector";
import { useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


export const SlideShow = () => {
  // const slideRef = useRef<SlideshowRef>(null)
  const slides = [
    {
      "url": "/hero-img.png"
    },
    {
      "url": "/hero-img.png"
    },
    {
      "url": "/hero-img.png"
    }
  ]
  return <Slide>
    {slides.map((slide, index) => <div key={index} className={`w-full h-[50vh]`}>
      <img src={slide.url} alt="hero-image" className="w-full h-full object-cover" />
    </div>)}
  </Slide>


}
