import Insta from "../assets/insta.svg"
import FB from "../assets/fb.svg"
import Whats from "../assets/whats.svg"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="bg-[#9d459c] py-10 grid text-white" id="footer">
      <div className="flex justify-evenly items-center">
        <div>
          <div className="mb-8">
            <h1 className="font-bold text-2xl">About Us</h1>
            <Link to="about">Who are we?</Link>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <Link to="contact">Contact Us Page</Link>
          </div>
        </div>
        <div className="pb-10">
          <h1 className="font-bold text-2xl">Social Media</h1>
          <ul>
            <li>
              <a
                href="https://facebook.com/profile.php?id=100091793221395"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/electraspace1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/004917683243821"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-8">
          <h1 className="text-4xl font-bold">Electra Space</h1>
          <span className="material-symbols-outlined text-4xl">
            rocket_launch
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <p>ElectraSpace &#169; 2024</p>
          <a
            href="mailto:electraspace@web.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            electraspace@web.de
          </a>
        </div>
        <div className="flex justify-evenly items-center mt-10">
          <a
            href="https://facebook.com/profile.php?id=100091793221395"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FB} alt="FB" className="w-8" />
          </a>

          <a
            href="https://instagram.com/electraspace1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Insta} alt="Insta" className="w-8" />
          </a>
          <a
            href="https://wa.me/004917683243821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whats} alt="Whats" className="w-8" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
