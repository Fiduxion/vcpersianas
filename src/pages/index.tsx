import Banner from "~/components/Banner";
import Products from "~/components/Products";
import Division from "~/components/Division";
import About from "~/components/About";
import Faq from "~/components/Faq";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Persianas 247</title>
        <meta name="Pagina de venta de persianas con un formulario de contacto"></meta>
      </Head>
      <div className="pb-10">
        <Banner />
      </div>
      <Products />
      <Division />
      <About />
      <Division />
      <Faq />
      <Division />
      <ContactForm />
      <Footer />
    </>
  );
}
