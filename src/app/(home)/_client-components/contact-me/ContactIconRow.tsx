import CurtainIconLink from "../CurtainIconLink";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope className="text-2xl md:text-6xl"/>,
    link: "mailto:fungcheukman@hotmail.com"
  },
  {
    icon: <FaLinkedin className="text-2xl md:text-6xl"/>,
    link: "https://linkedin.com/in/mika-fung"
  },
  {
    icon: <FaGithub className="text-2xl md:text-6xl"/>,
    link: "https://github.com/mikacheng1590"
  }
]

export default function ContactIconRow() {
  return (
    <div className="flex justify-center items-center gap-8">
      <h6 className="text-sm md:text-3xl font-bold uppercase">
        Find me <span className="relative bottom-[3px]">@</span>
      </h6>
      {contacts.map((contact) => (
        <CurtainIconLink
          key={contact.link}
          icon={contact.icon}
          link={contact.link}
        />
      ))}
    </div>
  );
}