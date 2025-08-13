import Banner from "~/components/Banner";
import Products from "~/components/Products";
import WhatsAppButton from "~/components/WhatsAppButton";
import About from "~/components/About";
import Faq from "~/components/Faq";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-slate-900 font-poppins">
      <Head>
        <title>V&C Persianas</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Instalación, reparación y atención inmediata de persianas en Rosario y alrededores, disponibles las 24 horas"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Banner />
      <div className="space-y-32 px-5 sm:px-10 xl:px-20 2xl:px-64">
        <Products />
        <About />
        <Faq />
        {/*<ContactForm />*/}
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
