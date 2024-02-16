import { useLayoutEffect } from "react"

const About = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-cairo text-2xl font-bold mb-8 mt-24 text-center">
        من نحن ؟
      </h1>
      <div className="mx-8 text-justify mb-8 max-w-[500px]">
        <p className="mb-4">
          A German / Syrian company offers jobs in the field of questionnaires,
          statistics, translation, transcription, photography, montage and many
          other fields. It provides services in the field of web design,
          software, advertising and application design.
        </p>
        <p className="mb-4">
          In addition to a distinguished work team that nurtures talents and
          delivers them to the world and success through social networking sites
          and professional and organized work.
        </p>
        <p>
          This company enjoys high credibility with employees and customers ..
          and considers them part of the partner work team in every success ..
          Work with employees and customers is carried out through contracts
          documented by both parties, with an accurate financial system that
          guarantees profits for all.
        </p>
      </div>
    </div>
  )
}
export default About
