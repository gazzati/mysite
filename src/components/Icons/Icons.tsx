import { Telegram } from "./telegram"
import { GitHub } from "./github"
import { Instagram } from "./instagram"
import { LinkedIn } from "./linkedin"
import { Link } from "./link"

interface IconsProps {
  name: string
}

export default function Icons({ name }: IconsProps) {
  switch (name) {
    case "telegram":
      return <Telegram />
    case "github":
      return <GitHub />
    case "instagram":
      return <Instagram />
    case "linkedin":
      return <LinkedIn />
    case "link":
      return <Link />
    default:
      return null
  }
}
