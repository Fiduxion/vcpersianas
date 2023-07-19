import Title from "./title"
import {AiOutlineSend} from "react-icons/ai";

const Input = ({ label }: { label: string }) => {
    return <div className="border border-black w-1/2 place-self-center">
        <input className="text-xl placeholder:text-gray-500 placeholder:opacity-60 pl-5 h-10 placeholder:font-bold flex items-center w-full" placeholder={label}></input>
    </div>
}

const TextArea = ({ label }: { label: string }) => {
    return <div className="border border-black w-1/2 h-48 place-self-center">
        <textarea  className="w-full h-full text-xl placeholder:text-gray-500 placeholder:opacity-60 placeholder:text-center pl-2 placeholder:font-bold flex items-center placeholder:pt-24" placeholder={label}></textarea>
    </div>
}

const ContactForm = () => {
    return <>
        <Title>Contactanos</Title>
        <div className="grid grid-cols-1 w-full gap-y-5">
            <Input label="Nombre" />
            <Input label="Email" />
            <Input label="Whatsapp" />
            <TextArea label="Mensaje" />
            <button className="bg-primary flex items-center justify-center gap-x-2 text-secondary w-24 rounded-lg py-2 font-bold place-self-center">Enviar <AiOutlineSend/></button>
        </div>
    </>
}

export default ContactForm;