import Service from "./Service"

import { products } from "../data"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <div className="font-cairo" id="services">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-1">
        <path fill="#9d459c" fillOpacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="font-cairo text-2xl font-bold mb-4" dir="rtl">إكتشف أحدث خدماتنا ...</h1>
        <p dir="rtl" className="text-center mx-8 text-gray-500">نحن نقدم خدمات في مجال تصميم المواقع الإلكترونية والبرمجيات والإعلان وتصميم التطبيقات و المزيد</p>
      </div>
      <div className="flex justify-evenly items-center flex-wrap mt-8">
        {
          products.map(item => {
            return <Link to={`/services/${item.id}`} key={item.id}>
              <Service item={item}/>
            </Link>
          })
        }
      </div>
      <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9d459c" fillOpacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,133.3C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}
export default Services