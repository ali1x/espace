import { useEffect, useState, useLayoutEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { products } from "../data"
import emailjs from "emailjs-com"
import { PulseLoader } from "react-spinners"
import Social from "../components/Social"

const ServicePage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const nav = useNavigate()
  const { serviceId } = useParams()

  const [currObject, setCurrObject] = useState<Product>()
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "",
  })

  useEffect(() => {
    if (!serviceId) {
      nav("/")
    }
    setCurrObject(products.find((item) => item.id === serviceId))
    setFormData((prev) => {
      return {
        ...prev,
        service: products.find((item) => item.id === serviceId)
          ?.subOptions[0] as string,
      }
    })
  }, [serviceId, nav])

  const sendHandler = async () => {
    setSuccess("")
    setError("")

    if (!formData.name || !formData.number || !formData.email) {
      setError("يرجى ملئ جميع الخانات بالبيانات.")
      return
    }

    setIsLoading(true)

    const message = `
      الإسم: ${formData.name}
      الإيميل: ${formData.email}
      رقم الهاتف: ${formData.number}
      الخدمة: ${formData.service}
    `

    const params = {
      from_name: formData.name,
      message: message,
    }

    await emailjs
      .send("espaceapp_2024", "template_3qw03g7", params, "XwUQOxD3N5cqODHrM")
      .then(() => {
        setSuccess("تم إرسال الطلب بنجاح")
      })
      .catch(() => {
        setError("حدث خطأ ما, رجاءً أعد المحاولة.")
      })

    setIsLoading(false)
  }

  return (
    <div className="font-cairo px-8 flex flex-col justify-center items-center" dir="rtl">
      <div className="mt-16 flex justify-center">
        <h1 className="mt-4 font-bold">{currObject?.name}</h1>
      </div>
      <h1 className="mt-8">
        أملئ الإستمارة التالية حتى نتواصل معك و نقدم العرض الأفضل لخدمتك:
      </h1>
      <div className="mt-4 pb-4 border-2 rounded-lg md:w-[500px]">
        <div className="mt-2 p-2 px-4">
          <h1 className="">الإسم الكامل:</h1>
          <input
            type="text"
            className="px-2 py-1 rounded-lg border-2 w-full mt-2"
            placeholder="John Doe"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="p-2 px-4">
          <h1 className="">رقم الهاتف:</h1>
          <input
            type="text"
            className="px-2 py-1 rounded-lg border-2 w-full mt-2"
            placeholder="009639XXXXXX"
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
        </div>
        <div className="p-2 px-4">
          <h1 className="">الإيميل:</h1>
          <input
            type="email"
            className="px-2 py-1 rounded-lg border-2 w-full mt-2"
            placeholder="name@example.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="p-2 px-4">
          <h1 className="">الخدمة:</h1>
          <select
            name="service"
            className="text-sm w-full border-2 outline-none truncate rounded-lg px-2 py-1"
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          >
            {currObject?.subOptions.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-center items-center mt-4">
          {isLoading ? (
            <PulseLoader color="#065F46" />
          ) : (
            <button
              className="py-2 px-4 bg-emerald-800 rounded-lg text-white font-bold text-sm"
              onClick={sendHandler}
            >
              إرسال
            </button>
          )}
        </div>
        {success && (
          <div className="flex justify-center items-center mt-4">
            <h3 className="text-emerald-700">{success}</h3>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center mt-4">
            <h3 className="text-red-700">{error}</h3>
          </div>
        )}
      </div>
      <div className="my-4">
        <h1 className="my-4">
          أو تواصل معنا عبر مواقع التواصل الإجتماعي التالية:
        </h1>
        <div>
          <Social />
        </div>
      </div>
      <div className="border-t-2 mt-8 mb-10">
        <h1 className="text-blue-500 font-bold ">
          هل ترغب في تقديم هذه الخدمة و كسب المال ؟
          <Link to={`/provide/${serviceId}`} className="mr-4 underline underline-offset-2">
            إضغط هنا...
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default ServicePage
