import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { env } from "~/env.mjs";

const WhatsAppButton = () => {
  const [hideButton, setHideButton] = useState(false);

  const router = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.scrollingElement!.scrollTop;
      setHideButton(scrolled >= 2050);
    });
  }, []);

  function gtag_report_conversion(url: string) {
    const callback = function () {
      void router.push(url);
    };

    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: env.NEXT_PUBLIC_GOOGLE_EVENT_ID,
        transaction_id: "",
        event_callback: callback,
      });
    }

    return false;
  }

  return (
    <button
      className={"transition-all duration-700 " + (hideButton ? "pointer-events-none cursor-default opacity-0" : "opacity-100")}
      aria-label="Boton flotante de Whatsapp"
      onClick={() =>
        void gtag_report_conversion(
          "https://wa.me/5493412153361/?text=Hola%20tengo%20una%20urgencia.%20Me%20comunico%20desde%20la%20web."
        )
      }
    >
      <div
        className="fixed bottom-5 right-5 flex items-center gap-3 rounded-full bg-slate-950 p-5 md:bottom-10 md:right-10"
      >
        <h1 className="hidden font-semibold text-slate-100 md:block md:text-2xl">
          Por urgencias <FaArrowRight className="inline-flex" />{" "}
        </h1>
        <div className="grid">
          <FaWhatsapp className=" place-self-center text-4xl text-slate-100 md:text-5xl" />
          <p className="block text-sm font-semibold text-slate-100 md:hidden">
            Urgencias
          </p>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
