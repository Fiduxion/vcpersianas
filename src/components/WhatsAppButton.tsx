import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const WhatsAppButton = () => {
    const [hideButton,setHideButton] = useState(false);

    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrolled = document.scrollingElement!.scrollTop;
        setHideButton(scrolled >= 2050);
      });
    }, []);

    return <a className={hideButton ? "pointer-events-none cursor-default" : ""} aria-label="Boton flotante de Whatsapp" href="https://wa.me/5493413923576/?text=Hola%20tengo%20una%20urgencia.%20Me%20comunico%20desde%20la%20web.">
        <div className={((hideButton) ? "opacity-0" : "opacity-100") + " fixed duration-700 transition-all opacity-100 flex items-center gap-3 bottom-5 right-5 md:bottom-10 md:right-10 bg-slate-950 p-5 rounded-full"}>
            <h1 className="hidden md:block text-slate-100 font-semibold md:text-2xl">Por urgencias <FaArrowRight className="inline-flex" /> </h1>
            <div className="grid">
                <FaWhatsapp className=" text-slate-100 text-4xl md:text-5xl place-self-center" />
                <p className="block md:hidden text-slate-100 text-sm font-semibold">Urgencias</p>
            </div>
        </div>
    </a>

}

export default WhatsAppButton;