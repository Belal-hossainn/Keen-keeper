import { FaSquareFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo-xl.png";

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] text-white py-8 text-center'>
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
                <img src={logo} alt="KeenKeeper Logo" className="w-[200px] h-auto md:w-[400px] " />

                <p className='max-w-5xl text-sm text-gray-100'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <div className="flex flex-col items-center gap-3">
                    <p className="font-medium">Social Links</p>
                    <div className="flex gap-4">
                         <FaSquareInstagram className="w-10 h-10  p-2 bg-white text-[#1F2937] rounded-full hover:scale-110 transition"/>
                         <FaSquareFacebook className="w-10 h-10  p-2 bg-white text-[#1F2937] rounded-full hover:scale-110 transition"/>
                         <FaXTwitter className="w-10 h-10  p-2 bg-white text-[#1F2937] rounded-full hover:scale-110 transition"/>
                    </div>
                </div>
                <div className='w-full border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm'>

                    <p className='text-center md:text-left'>
                        © {new Date().getFullYear()} - All rights reserved by KeenKeeper
                    </p>

                    <div className='flex gap-4 px-2'>
                        <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                        <p className='hover:underline cursor-pointer'>Terms of Service</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;