import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";

const Footer = () => {
    return <div className="md:h-48 bg-primary mt-14 grid items-center gap-y-2 justify-items-center grid-cols-1 md:grid-cols-5 px-20">
        <p className="text-secondary place-self-center font-bold text-4xl">MARCA GENIAL</p>
        <ImFacebook2 className="place-self-center" size={64} color="white" />
        <FaWhatsapp className="place-self-center" size={64} color="white" />
        <AiOutlineMail className="place-self-center" size={64} color="white" />
        <div className="place-self-center">
            <p className="text-secondary font-bold text-xl flex items-center">Powered by</p>
            <p className="text-secondary font-bold text-3xl flex items-center">FIDUXION <AiFillEye /></p>

        </div>
    </div>
}

export default Footer;