import Image from "next/image";

const About = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <p className="lg:col-span-2 text-primary text-center font-bold text-5xl mb-10">Acerca de nosotros</p>
        <p className="text-primary text-justify px-5 lg:px-16 font-bold text-lg">
            ¡Bienvenidos a Persianas247, tu solución integral para instalación, reparación y atención inmediata de persianas en Rosario!

            En Persianas247, nos especializamos en brindar servicios completos para tus persianas. Contamos con un equipo profesional altamente capacitado y con una amplia experiencia en el campo, lo que nos permite garantizar resultados excepcionales en cada proyecto que emprendemos.

            Lo que nos hace destacar es nuestra dedicación a la máxima satisfacción del cliente. Estamos disponibles las 24 horas del día, los 7 días de la semana, para atender tus llamados y acudir rápidamente a solucionar cualquier problema con tus persianas. Nuestra premisa es la inmediatez, comprendemos lo valioso que es tu tiempo y nos esforzamos por brindar soluciones rápidas y efectivas.

            En Persianas247, utilizamos materiales y herramientas de vanguardia para garantizar la durabilidad y resistencia en cada instalación y reparación que realizamos. Sea cual sea el tamaño o la complejidad del trabajo, estamos preparados para superar tus expectativas y ofrecerte un servicio de calidad.

            Ya sea que necesites una reparación urgente o desees instalar nuevas persianas, nuestro equipo se adapta a tus necesidades específicas y te brinda un servicio personalizado.

            Confía en Persianas247 para obtener resultados excepcionales y un servicio confiable en la ciudad de Rosario. Estamos aquí para mejorar tu espacio con nuestras soluciones profesionales de persianas, disponibles las 24 horas, los 7 días de la semana.

            ¡No dudes en contactarnos en cualquier momento y permítenos demostrarte por qué somos la mejor opción para tus persianas! </p>

        <div className="place-self-center relative w-10/12 aspect-square md:w-[600px]">
            <Image
                className="object-cover"
                src="/ingenieroinstalapersiana.jpg"
                fill
                alt="Ingeniero instala persiana"
            />
        </div>
    </div>

}

export default About;