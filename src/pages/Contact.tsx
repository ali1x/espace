import Social from "../components/Social"

const Contact = () => {
  return (
    <div className="mt-16 font-cairo" dir="rtl">
        <h1 className="font-bold text-xl text-center mb-8 mt-32">تواصل معنا على منصات التواصل الإجتماعي التالية:</h1>
        <div className="mx-8 flex justify-center items-center">
            <Social />
        </div>
    </div>
  )
}
export default Contact