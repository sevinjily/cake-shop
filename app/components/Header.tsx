import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaPhoneAlt, FaPinterest, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBasketShopping, FaTwitter } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="bg-pink-300 text-white text-xl">
            
            <div className="flex justify-between items-center px-30 py-4 border-pink-100 ">
                {/*Left part*/}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                        <FaPhoneAlt/>

                        <span className="font-medium">055-420-35-44</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEnvelope/>
                        <span className="font-medium">kamalamusaeva73@gmail.com</span>
                    </div>

                </div>
                {/* Right Part*/}
                <div className="flex items-center gap-4">
            <FaTwitter className="cursor-pointer"/>
            <FaFacebook className="cursor-pointer"/>
            <FaPinterest className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
               <div className="border-1 border-white h-6 mx-2" />
               <div className="relative">

               <FaShoppingCart className="cursor-pointer"/>
                <span className="absolute font-semibold -top-4 -right-3 bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center ">0</span>
               </div>
               <FaSearch/>
</div>

            </div>

<div className="mx-8 mt-2 mb-4 border-b-2 border-dotted border-white"></div>

<div className=" bg-white w-full h-[100px] z-10 flex items-center">
  
<ul className="flex w-full text-pink-600 font-bold items-center justify-around font-quicksand">
    <li className="px-4 font-dancing ">Home</li>
    <li className="px-4 font-poppins">Blog</li>
    <li className="px-4 font-poppins">Prices</li>
    <li className="px-4 font-poppins">About Us</li>
    <li className="px-4 ">Shop</li>
    <li className="px-4">Contact Us</li>
</ul>
</div>
      {/* Dalğa aşağı hissədə */}
      {/* <div className="absolute bottom-0 left-0 w-6xl leading-[0] z-20 ">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-[100px] top-full">
      <path
        fill="#f3f4f5"  
        fillOpacity="1"
        preserveAspectRatio="none"
        d="M0,192L30,186.7C60,181,120,171,180,181.3C240,192,300,224,360,213.3C420,203,480,149,540,122.7C600,96,660,96,720,122.7C780,149,840,203,900,218.7C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,96C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
      </div> */}
    


        </header>
    )
}