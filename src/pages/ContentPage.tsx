import { useEffect, useState } from "react"
import { products } from "../data"
import Social from "../components/Social"

const ContentPage = () => {
  const [currObject, setCurrObject] = useState<Product>()

  useEffect(() => {
    setCurrObject(products.find((item) => item.id === 'content'))
  }, [])

  return (
    <div className="font-cairo px-8" dir="rtl">
      <div className="mt-16 flex justify-center">
        <h1 className="mt-4 font-bold">{currObject?.name}</h1>
      </div>
      <div className="text-justify flex justify-center items-center flex-col">
        <p className="mt-10 max-w-[500px]">إذا كنت تملك الموهبة الكافية و المحتوى الهادف و ترغب ببدء رحلتك في عالم السوشيال ميديا .. تقدم لك شركتنا كل الدعم الفني و التسويقي و اللوجستي و الإمكانيات التي تحتاجها .. يمكنك إرسال بعض من أعمالك مع شرح بسيط عن المحتوى الذي تقدمه و سيقوم الفريق الفني بمراجعة هذه البيانات و الإتصال بك في أقرب وقت.</p>
        <div>
          <p className="mt-4">أرسل بياناتك و الملفات المرفقة على:</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <Social />
      </div>
    </div>
  )
}
export default ContentPage
