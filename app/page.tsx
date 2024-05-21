import { AboutSchool } from "@/components/about-school";
import { Card } from "@/components/card";
import { SlideShow } from "@/components/slide-show";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <SlideShow />
      <AboutSchool />
      <Card />
    </main>
  );
}
