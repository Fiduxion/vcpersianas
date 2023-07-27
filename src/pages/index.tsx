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
    <div className="font-poppins bg-slate-900">
      <Head>
        <title>Persianas 247</title>
        <meta name="Pagina de venta de persianas con un formulario de contacto"></meta>
      </Head>
      <Banner />
      <div className="2xl:px-64 xl:px-20 sm:px-10 px-5 space-y-32">
        <Products />
        <About />
        <Faq />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
