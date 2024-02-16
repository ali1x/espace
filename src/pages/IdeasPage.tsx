import { useEffect, useState } from "react"
import { products } from "../data"
import Social from "../components/Social"

const IdeasPage = () => {
  const [currObject, setCurrObject] = useState<Product>()

  useEffect(() => {
    setCurrObject(products.find((item) => item.id === 'ideas'))
  }, [])

  return (
    <div className="font-cairo px-8" dir="rtl">
      <div className="mt-16 flex justify-center">
        <h1 className="mt-4 font-bold">{currObject?.name}</h1>
      </div>
      <div className="text-justify flex justify-center items-center flex-col">
        <p className="mt-10 max-w-[500px]">إذا كنت تملك الموهبة في أحد المجالات أو لديك أفكار رائدة .. تقدم لك شركتنا الدعم الكامل لصقل هذه الموهبة و تقديمها بالشكل الأفضل و التخطيط لإنجاز الأفكار مع الدعم المادي و الفني و اللوجستي .. فقط أرسل لنا المعلومات و البيانات و الملفات الخاصة بالفكرة و سيقوم فريق العمل بمراجعتها و الإتصال بك في أقرب وقت.</p>
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
export default IdeasPage
