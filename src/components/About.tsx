import Image from "next/image";

const About = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <p className="lg:col-span-2 text-primary text-center font-bold text-5xl mb-10">Acerca de nosotros</p>
        <p className="text-primary text-justify px-5 lg:pr-32 lg:px-16 font-bold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in neque
            tincidunt, aliquet est vel, ultrices ex. Phasellus molestie velit nec eros
            fermentum egestas. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent ac nisl urna. Aliquam erat volutpat. Sed condimentum
            magna quis suscipit pellentesque. Nullam iaculis diam hendrerit magna
            viverra suscipit. Pellentesque ligula mi, iaculis non auctor sit amet, feugiat
            ut arcu. Nam dictum porta odio, a tempor nisi lacinia nec. Fusce blandit
            malesuada lorem, tincidunt bibendum turpis ullamcorper et. Vestibulum
            convallis, felis finibus molestie tempus, quam nisl vehicula nibh, eu
            fermentum orci ante eu dolor.

            Etiam a nulla justo. Aenean vitae accumsan diam. Integer imperdiet risus
            urna, in cursus risus accumsan id. Nulla augue leo, pharetra non
            sollicitudin vitae, vestibulum et felis. Curabitur imperdiet maximus dolor sit
            amet blandit. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Pellentesque eu lacus eu felis viverra
            fringilla dictum ut magna. Cras laoreet gravida purus, vel dapibus eros
            convallis ultrices. Suspendisse in libero dolor. Ut sem dui, laoreet et
            eleifend eget, ultricies eu est. Ut congue porta lectus, eget consequat
            quam feugiat in. Mauris rhoncus felis et leo ultrices, at iaculis libero
            interdum. Curabitur id rhoncus sem. </p>

        <div className="place-self-center relative lg:mr-16 w-10/12 aspect-square md:w-[600px]">
        <Image
            src="/ingenieroinstalapersiana.jpg"
            fill
            alt="Ingeniero instala persiana"
        />
        </div>
    </div>

}

export default About;