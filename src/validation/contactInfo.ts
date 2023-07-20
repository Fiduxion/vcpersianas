import {z} from "zod";

export const contactInfoValidation = z.object({
    name: z.string().max(50).nonempty("Complete este campo"),
    email: z.string().email("Email invalido").max(50).nonempty("Complete este campo"),
    number: z.string().max(30,"El numero telefonico no puede tener mas de 30 caracteres").nonempty("Complete este campo"),//.regex(new RegExp('/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/'), "Telefono invalido").nonempty("Complete este campo"),
    message: z.string().max(500).nonempty("Complete este campo")
})

export type ContactInfo = z.infer<typeof contactInfoValidation>;