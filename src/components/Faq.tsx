import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Title from "./title";

interface QuestionAndAnswer {
    question: string;
    answer: string;
};

const qa: QuestionAndAnswer[] = [
    {
        question: "¿Que hora es?",
        answer: `TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2`
    },
    {
        question: "¿Que hora es?",
        answer: `TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2`
    },
    {
        question: "¿Que hora es?",
        answer: `TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2`
    },
    {
        question: "¿Que hora es?",
        answer: `TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2
        TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2 TEXTO2`
    }
]

const QuestionBox = ({ question, answer }: QuestionAndAnswer) => {
    const [active, setActive] = useState(false);

    return <>
        <div className={"place-self-center w-4/6 mb-5 " + (active ? "" : "h-14")}>
            <div className={"transition duration-500 ease-in-out border-x border-t border-black flex justify-between items-center h-14 px-5 " + (active ? "" : "border-b")}>
                <p className="text-primary font-bold text-xl md:text-3xl">{question}</p>
                <button onClick={() => setActive(!active)}>
                    <FaArrowLeft className={"transition " + (active ? "-rotate-90" : "")} size={25} />
                </button>
            </div>
            <p className={"transition duration-500 ease-in-out w-full text-primary text-xl border-x border-b border-black px-5 pb-2 font-bold text-justify " + (active ? "visible opacity-100" : "invisible opacity-0")}>
                {answer}
            </p>
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