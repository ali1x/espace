import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data"
import emailjs from "emailjs-com"
import { PulseLoader } from "react-spinners"

type FormValues = {
  firstName: string
  lastName: string
  dob: Date
  gender: string
  exp: string
  expyears: string
  salary: string
  whatsapp: string
  phone: string
  servicetype: string
}

const Provide = () => {
  const [currObject, setCurrObject] = useState<Product>()

  const nav = useNavigate()
  const { serviceId } = useParams()
  const { register, handleSubmit } = useForm<FormValues>()
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormValues) => {
    setSuccess("")
    setError("")

    console.log(data)

    if (
      !data.firstName ||
      !data.lastName ||
      !data.dob ||
      !data.exp ||
      !data.expyears ||
      !data.gender ||
      !data.phone ||
      !data.servicetype ||
      !data.whatsapp
    ) {
      window.scrollTo(0, 0)
      setError("يرجى ملئ جميع الخانات بالبيانات.")
      return
    }

    setIsLoading(true)

    const message = `
      الإسم الأول: ${data.firstName}
      الإسم الأخير: ${data.lastName}
      تاريخ الميلاد: ${data.dob}
      الجنس: ${data.gender}
      الخدمة المراد تقديمها: ${currObject?.name}
      نوع الخدمة المراد تقديمها: ${data.servicetype}
      نوع الخبرة في المجال: ${data.exp}
      عدد سنوات الخبرة: ${data.expyears}
      المبلغ المالي المراد لقاء الخدمة: ${data.salary}
      رقم واتساب للتواصل: ${data.whatsapp}
      رقم هاتف للتواصل: ${data.phone}
    `
    const params = {
      from_name: `${data.firstName} ${data.lastName}`,
      message: message,
    }

    await emailjs
      .send("espaceapp_2024", "template_nnf05hn", params, "XwUQOxD3N5cqODHrM")
      .then(() => {
        window.scrollTo(0, 0)
        setSuccess("تم إرسال الطلب بنجاح")
      })
      .catch(() => {
        window.scrollTo(0, 0)
        setError("حدث خطأ ما, رجاءً أعد المحاولة.")
      })

    setIsLoading(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!serviceId) {
      nav("/")
    }
    setCurrObject(products.find((item) => item.id === serviceId))
  }, [serviceId, nav])

  return (
    <div
      className="mt-20 font-cairo px-8 flex justify-center items-center"
      dir="rtl"
    >
      <div>
        <div className="flex justify-center items-center">
          <h1 className="font-bold">{currObject?.name}</h1>
        </div>

        {success && (
          <div className="flex justify-center items-center py-4 mt-8 mb-8 bg-emerald-700 rounded-lg">
            <h3 className="text-white font-bold text-xl">{success}</h3>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center py-4 mt-8 mb-8 bg-red-700 rounded-lg">
            <h3 className="text-white font-bold text-xl">{error}</h3>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-4">
            <label htmlFor="firstName" className="mb-2">
              الإسم الأول:
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="lastName" className="mb-2">
              الإسم الأخير:
            </label>
            <input
              type="text"
              {...register("lastName")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="dob" className="mb-2">
              تاريخ الميلاد:
            </label>
            <input
              type="date"
              {...register("dob")}
              className="outline-none rounded border-2 px-2 py-1 w-full"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="gender" className="mb-2">
              الجنس:
            </label>
            <div className="flex justify-evenly items-center border-2 rounded mb-1">
              <label htmlFor="gender">ذكر:</label>
              <input type="radio" value="ذكر" {...register("gender")} />
            </div>
            <div className="flex justify-evenly items-center border-2 rounded">
              <label htmlFor="gender">أنثى:</label>
              <input type="radio" value="أنثى" {...register("gender")} />
            </div>
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="servicetype" className="mb-2">
              نوع الخدمة المراد تقديمها:
            </label>
            <select
              className="text-sm w-full border-2 outline-none truncate rounded px-2 py-1"
              {...register("servicetype")}
            >
              <option value=""></option>
              {currObject?.subOptions.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="exp" className="mb-2">
              الخبرة في مجال هذه الخدمة:
            </label>
            <select
              {...register("exp")}
              className="outline-none rounded border-2 px-2 py-1 w-full"
            >
              <option value="شهادة جامعية">شهادة جامعية</option>
              <option value="تدريب خاص">تدريب خاص</option>
              <option value="مجهود شخصي و اهتمام">مجهود شخصي و اهتمام</option>
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="expyears" className="mb-2">
              عدد سنين الخبرة في هذا المجال:
            </label>
            <input
              type="text"
              {...register("expyears")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="salary" className="mb-2">
              ما هو المبلغ المالي الذي ترغب بالحصول عليه مقابل هذه الخدمة
              (بالليرة السورية)
            </label>
            <input
              type="text"
              {...register("salary")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="whatsapp" className="mb-2">
              رقم واتساب للتواصل:
            </label>
            <input
              dir="ltr"
              type="text"
              {...register("whatsapp")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="phone" className="mb-2">
              رقم هاتف للتواصل:
            </label>
            <input
              dir="ltr"
              type="text"
              {...register("phone")}
              className="outline-none rounded border-2 px-2 py-1"
            />
          </div>

          <div className="flex justify-center items-center mb-8">
            {isLoading ? (
              <PulseLoader color="#065F46" />
            ) : (
              <button
                type="submit"
                className="py-2 px-4 outline-none rounded-lg bg-emerald-700 text-white font-bold"
              >
                إرسال
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
export default Provide
