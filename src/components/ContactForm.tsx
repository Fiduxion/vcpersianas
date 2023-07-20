import { useForm } from "react-hook-form";
import Title from "./title";
import { AiOutlineSend, AiOutlineCheck } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { zodResolver } from '@hookform/resolvers/zod';
import { contactInfoValidation, type ContactInfo } from "~/validation/contactInfo";
import type { FieldError, UseFormRegister } from "react-hook-form/dist/types";
import { useState } from "react";

const Input = (
    {
        label,
        fieldName,
        register,
        error
    }
        :
        {
            label: string,
            fieldName: Exclude<keyof ContactInfo, "message">,
            register: UseFormRegister<ContactInfo>,
            error: FieldError | undefined
        }
) => {
    return <div className="w-1/2 place-self-center">
        <input maxLength={50} {...register(fieldName)} className={`border ${(error) ? "border-red-600 border-2" : "border-black"} text-xl placeholder:text-gray-500 placeholder:opacity-60 pl-5 h-10 placeholder:font-bold flex items-center w-full`} placeholder={label}></input>
        <p className={error ? "text-red-600" : "text-black"}>{error?.message}</p>
    </div>
}

const TextArea = ({
    label,
    register,
    error
}
    :
    {
        label: string,
        register: UseFormRegister<ContactInfo>,
        error: FieldError | undefined
    }) => {
    return <div className="w-1/2 h-48 place-self-center">
        <textarea maxLength={500} {...register("message")} className={`border ${(error) ? "border-red-600 border-2" : "border-black"} w-full h-full text-xl placeholder:text-gray-500 placeholder:opacity-60 placeholder:text-center pl-2 placeholder:font-bold flex items-center placeholder:pt-24`} placeholder={label}></textarea>
        <p className={error ? "text-red-600" : "text-black"}>{error?.message}</p>
    </div>
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<ContactInfo>({
        resolver: zodResolver(contactInfoValidation),
    });

    const [submitState, setSubmitState] = useState(-1);

    const onSubmit = (values: ContactInfo) => {
        console.log(values);
        if(/*error*/false)
        {
            setError("root",{message: "Error desconocido"});
            setSubmitState(0);
        }
        else
            setSubmitState(1);
    }

    return <>
        <Title>Contactanos</Title>
        <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="grid grid-cols-1 items-center place-items-center w-full gap-y-5">
            <Input register={register} error={errors.name} fieldName="name" label="Nombre" />
            <Input register={register} error={errors.email} fieldName="email" label="Email" />
            <Input register={register} error={errors.number} fieldName="number" label="Whatsapp" />
            <TextArea register={register} error={errors.message} label="Mensaje" />
            {
                isSubmitting ? <FaSpinner className="animate-spin" size={30}/>
                : submitState == 1 ? <div className="inline-flex items-center text-green-700 font-bold"><AiOutlineCheck size={30}/> Sus datos de contacto se enviaron con exito</div>
                : submitState == 0 ? <div className="inline-flex items-center text-red-700 font-bold"><BiErrorCircle size={30}/> Hubo un error al enviar sus datos, intentelo denuevo mas tarde</div> : <></>
            }
            <button type="submit" className="bg-primary flex items-center justify-center gap-x-2 text-secondary w-24 rounded-lg py-2 font-bold place-self-center">Enviar <AiOutlineSend /></button>
        </form>
    </>
}

export default ContactForm;