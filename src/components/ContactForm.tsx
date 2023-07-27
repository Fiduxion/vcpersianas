import { useForm } from "react-hook-form";
import Title from "./Title";
import { AiOutlineSend, AiOutlineCheck } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { zodResolver } from '@hookform/resolvers/zod';
import { contactInfoValidation, type ContactInfo } from "~/validation/contactInfo";
import type { FieldError, UseFormRegister } from "react-hook-form/dist/types";
import { useState } from "react";
import { api } from "~/utils/api";

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
    return <div className="w-4/5 md:w-1/2 place-self-center">
        <input maxLength={50} {...register(fieldName)} className={`border ${(error) ? "border-red-600 border-4" : "border-orange-500"} rounded-full border-2 text-xl bg-slate-100/10 placeholder:text-slate-300 pl-5 py-4 placeholder:font-semibold flex items-center w-full focus:outline-none focus:bg-slate-100/25 transition text-slate-100 font-semibold`} placeholder={label}></input>
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
    return <div className="w-4/5 md:w-1/2 h-48 place-self-center">
        <textarea maxLength={500} {...register("message")} className={`border ${(error) ? "border-red-600 border-2" : "border-orange-500"} w-full h-full rounded-3xl border-2 text-xl bg-slate-100/10 placeholder:text-slate-300 pl-5 py-4 placeholder:font-semibold flex items-center focus:outline-none focus:bg-slate-100/25 transition text-slate-100 font-semibold`} placeholder={label}></textarea>
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

    const { mutateAsync: sendContactMail } = api.mail.send.useMutation();

    const [submitState, setSubmitState] = useState(-1);

    const onSubmit = async (values: ContactInfo) => {
        try {
            await sendContactMail(values);
            setSubmitState(1);
        } catch {
            setError("root", { message: "Error desconocido" });
            setSubmitState(0);
        }
    }

    return <>
        <div className="pb-20">
            <Title>Contactanos</Title>
            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="grid grid-cols-1 items-center place-items-center w-full gap-y-5">
                <Input register={register} error={errors.name} fieldName="name" label="Nombre" />
                <Input register={register} error={errors.email} fieldName="email" label="Email" />
                <Input register={register} error={errors.number} fieldName="number" label="Whatsapp" />
                <TextArea register={register} error={errors.message} label="Mensaje" />
                {
                    isSubmitting ? <FaSpinner className="animate-spin" size={30} />
                        : submitState == 1 ? <div className="inline-flex items-center text-green-700 font-bold"><AiOutlineCheck size={30} /> Sus datos de contacto se enviaron con exito</div>
                            : submitState == 0 ? <div className="inline-flex items-center text-red-700 font-bold"><BiErrorCircle size={30} /> Hubo un error al enviar sus datos, intentelo denuevo mas tarde</div> : <></>
                }
                <button disabled={isSubmitting} type="submit" className="text-xl mb-5 px-12 py-4 bg-orange-500 disabled:bg-gray-500 text-slate-950 rounded-2xl font-bold">Enviar</button>
            </form>
        </div>
    </>
}

export default ContactForm;