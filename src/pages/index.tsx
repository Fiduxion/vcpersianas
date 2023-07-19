import Banner from "~/components/banner";
import Products from "~/components/products";
import Division from "~/components/division";
import About from "~/components/About";
import Faq from "~/components/Faq";
export default function Home() {
  return (
    <>
      <div className="pb-10">
        <Banner />
      </div>
      <Products />
      <Division />
      <About />
      <Division />
      <Faq />
    </>
  );
}
