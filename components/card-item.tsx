'use client';
import Image from "next/image"
import Tilt from "react-parallax-tilt";


interface CardProps {
  title: string
  description: string
  image: string
}

export const CardItem = ({ title, description, image }: CardProps) => {
  return (
    <Tilt className="border-2 rounded-md p-4">
      <div>
        <Image src={image} width={300} height={200} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </Tilt>
  )
}
