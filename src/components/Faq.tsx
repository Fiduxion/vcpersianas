import { useState } from "react";
import { FaArrowLeft, FaArrowDown } from "react-icons/fa";

interface QuestionAndAnswer {
    question: string;
    answer: string;
};

const qa: QuestionAndAnswer[] = [
    {
        question: "¿Que hora es?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in neque tincidunt, aliquet est vel,
        ultrices ex.Phasellus molestie velit nec eros fermentum egestas.Interdum et malesuada fames ac ante
        ipsum primis in faucibus.Praesent ac nisl urna.Aliquam erat volutpat.Sed condimentum magna quis
        suscipit pellentesque.Nullam iaculis diam hendrerit magna viverra suscipit.Pellentesque ligula mi,
        iaculis non auctor sit amet, feugiat ut arcu.`
    },
    {
        question: "¿Que hora es?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in neque tincidunt, aliquet est vel,
        ultrices ex.Phasellus molestie velit nec eros fermentum egestas.Interdum et malesuada fames ac ante
        ipsum primis in faucibus.Praesent ac nisl urna.Aliquam erat volutpat.Sed condimentum magna quis
        suscipit pellentesque.Nullam iaculis diam hendrerit magna viverra suscipit.Pellentesque ligula mi,
        iaculis non auctor sit amet, feugiat ut arcu.`
    },
    {
        question: "¿Que hora es?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in neque tincidunt, aliquet est vel,
        ultrices ex.Phasellus molestie velit nec eros fermentum egestas.Interdum et malesuada fames ac ante
        ipsum primis in faucibus.Praesent ac nisl urna.Aliquam erat volutpat.Sed condimentum magna quis
        suscipit pellentesque.Nullam iaculis diam hendrerit magna viverra suscipit.Pellentesque ligula mi,
        iaculis non auctor sit amet, feugiat ut arcu.`
    },
    {
        question: "¿Que hora es?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in neque tincidunt, aliquet est vel,
        ultrices ex.Phasellus molestie velit nec eros fermentum egestas.Interdum et malesuada fames ac ante
        ipsum primis in faucibus.Praesent ac nisl urna.Aliquam erat volutpat.Sed condimentum magna quis
        suscipit pellentesque.Nullam iaculis diam hendrerit magna viverra suscipit.Pellentesque ligula mi,
        iaculis non auctor sit amet, feugiat ut arcu.`
    }
]

const QuestionBox = ({ question, answer }: QuestionAndAnswer) => {
    const [active, setActive] = useState(false);

    return <>
        <div className={"place-self-center w-1/2 mb-5 " + (active ? "" : "h-14")}>
            <div className={"border-x border-t border-black flex justify-between items-center h-14 px-5 " + (active ? "" : "border-b")}>
                <p className="text-primary font-bold text-3xl">{question}</p>
                <button onClick={() => setActive(!active)}>
                    {
                        active ?
                            <FaArrowDown size={25} /> :
                            <FaArrowLeft size={25} />
                    }
                </button>
            </div>
            <p className={"w-full text-primary text-xl border-x border-b border-black px-5 pb-2 font-bold text-justify " + (active ? "block" : "hidden")}>
                {answer}
            </p>
        </div>
    </>
}

const Faq = () => {
    return <div>
        <p className="text-primary text-center font-bold text-5xl pb-5">Preguntas frequentes</p>
        <div className="grid place-content-center grid-cols-1">
            {
                qa.map((value, index) => <QuestionBox key={"Question " + index} {...value} />)
            }
        </div>
    </div>
}

export default Faq;