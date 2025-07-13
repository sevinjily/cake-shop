import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaPinterest,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBasketShopping, FaTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-pink-300 text-white text-xl">
      <div className="flex justify-between items-center px-30 py-4 border-pink-100 ">
        {/*Left part*/}
        <div className="flex items-center gap-6 ">
          <div>KamaCake</div>
         
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex w-full text-pink-600 font-bold items-center justify-around font-quicksand">
            <li className="px-4 font-dancing ">Home</li>
            <li className="px-4 font-poppins">Blog</li>
            <li className="px-4 font-poppins">Prices</li>
            <li className="px-4 font-poppins">About Us</li>
            <li className="px-4 ">Shop</li>
            <li className="px-4">Contact Us</li>
          </ul>
        </div>
        {/* Right Part*/}
        <div className="flex items-center gap-4">
          <FaTwitter className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <div className="border-1 border-white h-6 mx-2" />
          <div className="relative">
            <FaShoppingCart className="cursor-pointer" />
            <span className="absolute font-semibold -top-4 -right-3 bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center ">
              0
            </span>
          </div>
          <FaSearch />
        </div>
      </div>

      <div className=" mt-2 mb-4 border-b-3 border-dashed border-white"></div>
    </header>
  );
}
