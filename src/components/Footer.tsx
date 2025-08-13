import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";

const Footer = () => {
    return <div className="py-16 bg-slate-950 justify-items-center flex md:flex-row flex-col justify-around items-center md:px-20 gap-10">
        <div className="text-orange-500 place-self-center font-bold text-4xl"><p className="ml-3">V&C</p>{" "}<p>Persianas</p></div>
        <div className="grid grid-cols-1 gap-y-4">
            <div className="flex gap-16">
                <a aria-label="Enviar Whatsapp" href="https://wa.me/5493412153361"><FaWhatsapp className="place-self-center text-slate-100" size={40}/></a>
                <a aria-label="Enviar Email" href="mailto:persianaemiliano@gmail.com" ><AiOutlineMail className="place-self-center text-slate-100" size={40}/></a>
            </div>
            <div>
                <p className="text-slate-200 text-center text-2xl font-bold">Telefonos</p>
                <p className="text-slate-200 text-center text-xl">3412153361</p>
                <p className="text-slate-200 text-center text-xl">341 215-3361</p>
            </div>
        </div>
        <div className="flex items-center">
            <div className="place-self-center">
                <p className="text-slate-200 font-thin text-lg md:text-xl flex items-center">Powered by</p>
                <p className="text-slate-200 font-semibold text-2xl md:text-3xl flex items-center">Fiduxion</p>
            </div>
            <AiFillEye size="60" className="text-slate-200"/>
        </div>
    </div>
}

export default Footer;