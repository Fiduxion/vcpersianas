import Image from "next/image";
import { useState } from "react";
import Title from "./Title";

interface Image {
    src: string;
    alt: string;
}

const images: Image[] = [
    {
        src: "doscortinasmetalicas.avif",
        alt: "Dos cortinas metalicas"
    },
    {
        src: "cortinametalicaconpuerta.avif",
        alt: "Una cortina metalica con puerta"
    },
    {
        src: "trescortinasmetalicas.avif",
        alt: "Tres cortinas metalicas"
    },
    {
        src: "persianametalicagrande.avif",
        alt: "Una persiana metalica grande"
    },
    {
        src: "persianacuadradatraslucida.avif",
        alt: "Una persiana que permite ver al otro lado",
    },
    {
        src: "trespersianasmetalicasdistintotamanio.avif",
        alt: "Tres persianas metalicas de distinto tamaño"
    }
];

const Products = () => {
    const [activeImage, setActiveImage] = useState(0);

    return <div className="grid place-content-center pt-10">
        <Title>Nuestros trabajos</Title>
        <div className="w-screen grid">
            <div className="h-[250px] w-10/12 md:h-[500px] relative place-self-center">
                {
                    // Here the images are show
                    images.map((img, index) => <Image priority={index==0} className={"object-scale-down " + (activeImage == index ? "block" : "hidden")} key={"Imagen " + img.src} sizes="(max-width: 2000px) 83vw" src={"/" + img.src} fill alt={img.alt} />)
                }
            </div>
        </div>
        <div className="flex flex-wrap gap-y-5 pt-10 gap-x-5 place-content-center">
            {
                // The buttons used to show the images
                images.map((img, index) => <div className="h-[100px] w-[100px] relative" key={"Boton imagen " + img.src}><Image priority onClick={() => setActiveImage(index)} className={"object-cover " + (activeImage == index ? "opacity-100" : "opacity-50")} sizes="100px" src={"/" + img.src} fill alt={img.alt} /></div>)
            }
        </div>
    </div>
}

export default Products;