import Image from "next/image";
import { useState } from "react";
import Title from "./title";

const images = ["cortinaaestandar.jpg","cortinaaluminio.png","cortinametalica.png"];

const Products = () => {
    const [activeImage, setActiveImage] = useState(0);

    return <div className="grid place-content-center">
        <Title>Nuestros trabajos</Title>
        <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px] relative place-self-center">
        {
            // Here the images are show
            images.map((src,index) => <Image className={activeImage == index ? "block" : "hidden"} key={"Imagen " + src} src={"/"+src} fill alt={src}/>)
        }
        </div>
        <div className="flex flex-wrap gap-y-5 pt-10 gap-x-5 place-content-center">
        {
            // The buttons used to show the images
            images.map((src,index) => <Image onClick={() => setActiveImage(index)} className={activeImage == index ? "opacity-100" : "opacity-50"} key={"Boton imagen " + src} src={"/"+src} width={100} height={100} alt={src} />)
        }
        </div>
    </div>
}

export default Products;