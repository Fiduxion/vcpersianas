import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const WhatsAppButton = () => {
    return <a aria-label="Boton flotante de Whatsapp" href="https://wa.me/5493413923576/?text=Hola%20tengo%20una%20urgencia.%20Me%20comunico%20desde%20la%20web.">
        <div className="fixed flex items-center gap-3 bottom-5 right-5 md:bottom-10 md:right-10 bg-slate-950 p-5 rounded-full">
            <h1 className="hidden md:block text-slate-100 font-semibold md:text-2xl">Por urgencias <FaArrowRight className="inline-flex" /> </h1>
            <div className="grid">
                <FaWhatsapp className=" text-slate-100 text-4xl md:text-5xl place-self-center" />
                <p className="block md:hidden text-slate-100 text-sm font-semibold">Urgencias</p>
            </div>
        </div>
    </a>

}

export default WhatsAppButton;