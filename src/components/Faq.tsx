import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Title from "./Title";

interface QuestionAndAnswer {
    question: string;
    answer: string;
};

const qa: QuestionAndAnswer[] = [
    {
        question: "¿Realizan envíos?",
        answer: `Sí, en nuestro negocio de fabricación e instalación de persianas, ofrecemos servicios de envío para que 
        nuestros clientes puedan recibir sus persianas de manera conveniente en la ubicación que prefieran.`
    },
    {
        question: "¿Cuáles son las formas de pago disponibles?",
        answer: `En nuestro negocio de fabricación e instalación de persianas, ofrecemos dos opciones de pago: efectivo y
        transferencia. Así, nuestros clientes pueden elegir la modalidad que les resulte más cómoda y segura para realizar 
        sus transacciones.`
    },
    {
        question: "¿Ofrecen servicio de instalación de las persianas?",
        answer: `Sí, en nuestro negocio brindamos servicio de instalación profesional para asegurarnos de que las persianas
        se coloquen correctamente y funcionen de manera óptima en el espacio de nuestros clientes.`
    },
    {
        question: "¿Qué tipo de garantía ofrecen para las cortinas?",
        answer: `Nuestras cortinas cuentan con una garantía que cubre cualquier defecto de fabricación o problemas relacionados
        con el funcionamiento, siempre y cuando no hayan sido utilizadas previamente. Garantizamos que nuestras cortinas serán
        nuevas y sin uso al momento de ser entregadas a nuestros clientes.`
    },
    {
        question: "¿Ofrecen servicio de reparación de persianas?",
        answer: `Sí, en nuestro negocio también brindamos servicio de reparación para persianas que puedan presentar problemas
        o daños. Nuestro equipo de profesionales está capacitado para solucionar cualquier inconveniente y asegurar que las persianas
        funcionen correctamente y se mantengan en óptimas condiciones.`
    }
]

const QuestionBox = ({ question, answer }: QuestionAndAnswer) => {
    const [active, setActive] = useState(false);

    return <>
        <div className={"place-self-center w-4/6 mb-5 "}>
            <div className={"transition duration-300 ease-in-out border-x-4 border-t-4 border-orange-500 rounded-t-3xl flex justify-between items-center p-5 " + (active ? "" : "border-b")}>
                <p className="text-primary font-bold text-xl md:text-2xl">{question}</p>
                <button onClick={() => setActive(!active)}>
                    <FaArrowLeft className={"transition " + (active ? "-rotate-90" : "")} size={25} />
                </button>
            </div>
            <div className="relative">
                <p className={"transition ease-out w-full text-primary text-lg border-x-4 border-b-4 border-orange-500 rounded-b-3xl px-5 pb-2 font-bold text-justify origin-top " + (active ? "duration-300 scale-y-100" : "absolute scale-y-0")}>
                    {answer}
                </p>
            </div>
        </div>
    </>
}

const Faq = () => {
    return <div>
        <Title>Preguntas frecuentes</Title>
        <div className="grid place-content-center grid-cols-1">
            {
                qa.map((value, index) => <QuestionBox key={"Question " + index} {...value} />)
            }
        </div>
    </div>
}

export default Faq;