import { CardItem } from "./card-item"

export const Card = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
      <CardItem title="card1" description="card1" image="/hero-img.png" />
      <CardItem title="card2" description="card1" image="/hero-img.png" />
      <CardItem title="card3" description="card1" image="/hero-img.png" />
    </div>
  )
}
