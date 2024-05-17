import { link } from "fs"
import Link from "next/link"


export const SideIcons = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: "/facebook.svg",
      link: "https://www.facebook.com"
    },
    {
      name: "youtube",
      icon: "/youtube.svg",
      link: "https://www.youtube.com"
    },
    {
      name: "instagram",
      icon: "/instagram.svg",
      link: "https://www.instagram.com"
    },
    {
      name: "whatsapp",
      icon: "/whatsapp.svg",
      link: "https://www.whatsapp.com"
    },

  ]
  return <div className="fixed top-[40%] right-2 space-y-4 z-10">
    {socialIcons.map((icon) => <Link href={icon.link} key={icon.name} className="block">
      <img src={icon.icon} alt={icon.name} className="w-10 h-10" />
    </Link>)}
  </div>
}
