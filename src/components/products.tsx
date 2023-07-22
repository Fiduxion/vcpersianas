import Image from "next/image";
import { useState } from "react";
import Title from "./Title";

interface Image {
    src: string;
    alt: string;
}

const images: Image[] = [
    {
        src: "cortinametalicaconpuerta.jpg",
        alt: "Una cortina metalica con puerta"
    },
    {
        src: "doscortinasmetalicas.jpg",
        alt: "Dos cortinas metalicas"
    },
    {
        src: "trescortinasmetalicas.jpg",
        alt: "Tres cortinas metalicas"
    }
];

const Products = () => {
    const [activeImage, setActiveImage] = useState(0);

    return <div className="grid place-content-center">
        <Title>Nuestros trabajos</Title>
        <div className="w-screen grid">
            <div className="h-[250px] w-10/12 md:h-[500px] relative place-self-center">
                {
                    // Here the images are show
                    images.map((img, index) => <Image className={"object-scale-down " + (activeImage == index ? "block" : "hidden")} key={"Imagen " + img.src} src={"/" + img.src} fill alt={img.alt} />)
                }
            </div>
        </div>
        <div className="flex flex-wrap gap-y-5 pt-10 gap-x-5 place-content-center">
            {
                // The buttons used to show the images
                images.map((img, index) => <div className="h-[100px] w-[100px] relative" key={"Boton imagen " + img.src}><Image onClick={() => setActiveImage(index)} className={"object-cover " + (activeImage == index ? "opacity-100" : "opacity-50")} src={"/" + img.src} fill alt={img.alt} /></div>)
            }
        </div>
    </div>
}

export default Products;