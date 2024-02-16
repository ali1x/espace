import FB from "../assets/fb_b.svg"
import Insta from "../assets/insta_b.svg"
import Whats from "../assets/whats_b.svg"
import Env from "../assets/env_b.svg"

const Social = () => {
  return (
    <ul className="md:w-[500px]">
      <li className="flex items-center border-2 shadow-inner rounded-lg mb-4 p-2 h-16">
        <a
          href="https://facebook.com/profile.php?id=100091793221395"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FB} alt="fb" className="w-6 ml-4" />
          صفحتنا على فيسبوك
        </a>
      </li>
      <li className="flex items-center border-2 shadow-inner rounded-lg mb-4 p-2 h-16">
        <a
          href="https://instagram.com/electraspace1"
          className="flex "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Insta} alt="fb" className="w-6 ml-4" />
          صفحتنا على انستاجرام
        </a>
      </li>
      <li className="flex items-center border-2 shadow-inner rounded-lg mb-4 p-2 h-16">
        <a
          href="https://wa.me/004917683243821"
          className="flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whats} alt="fb" className="w-6 ml-4" />
          عبر تطبيق واتساب
        </a>
      </li>
      <li className="flex items-center border-2 shadow-inner rounded-lg mb-4 p-2 h-16">
        <a
          href="mailto:electraspace@web.de"
          className="flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Env} alt="fb" className="w-6 ml-4" />
          عبر البريد الإلكتروني electraspace@web.de
        </a>
      </li>
    </ul>
  )
}
export default Social
