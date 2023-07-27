import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return <a href="https://w.app/persianas247">
        <div className="fixed flex items-center gap-3 bottom-5 right-5 md:bottom-10 md:right-10 bg-slate-950 p-5 rounded-full">
            <h1 className="hidden md:block text-slate-100 font-semibold md:text-2xl">Contactanos</h1>
            <FaWhatsapp className=" text-slate-100 text-4xl md:text-5xl"/>
        </div>
        </a>
    
}

export default WhatsAppButton;