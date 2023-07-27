import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";

const Footer = () => {
    return <div className="md:h-48 bg-slate-950 justify-items-center flex justify-around px-20">
        <p className="text-orange-500 place-self-center font-bold text-4xl">Persianas 247</p>
        <div className="flex gap-16">
            <ImFacebook2 className="place-self-center text-slate-100" size={40}/>
            <FaWhatsapp className="place-self-center text-slate-100" size={40}/>
            <AiOutlineMail className="place-self-center text-slate-100" size={40}/>
        </div>
        <div className="flex items-center">
            <div className="place-self-center">
                <p className="text-slate-200 font-thin text-xl flex items-center">Powered by</p>
                <p className="text-slate-200 font-semibold text-3xl flex items-center">Fiduxion</p>
            </div>
            <AiFillEye size="60" className="text-slate-200"/>
        </div>
    </div>
}

export default Footer;