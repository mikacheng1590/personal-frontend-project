import Hypebeast from "./Hypebeast"
import YoovAsiaTop from "./YoovAsiaTop"
import HorizontalSection, { HorizontalSectionProps } from "../HorizontalSection"

const sectionsDefList = [
  {
    id: "hypebeast",
    component: <Hypebeast />,
    element: null
  },
  {
    id: "yoov-asiatop",
    component: <YoovAsiaTop />,
    element: null
  },
]

export default function ProfessionalExperience ({
  scroller
}: Omit<HorizontalSectionProps, "sectionsDefList">
) {
  return (
    <HorizontalSection
      scroller={scroller}
      sectionsDefList={sectionsDefList}
    />
  )
}