import { CardItem } from "./card-item"

export const Card = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <CardItem title="card1" description="card1" image="/hero-img.png" />
      <CardItem title="card2" description="card1" image="/hero-img.png" />
      <CardItem title="card3" description="card1" image="/hero-img.png" />
    </div>
  )
}
