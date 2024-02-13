import Container2 from "./components/Container2/Container2";
import Container3 from "./components/Container3/Container3";
import Container4 from "./components/Container4/Container4";
import Container5 from "./components/Container5/Container5";
import Container6 from "./components/Container6/Container6";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner";
import Container7 from "./components/Container7/Container7";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { container3, container6 } from "./contents/Data";
import Container8 from "./components/Container8/Container8";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileHeader />
      <Hero />
      <Container8 />
      <Container3 data={container3[0]}/>
      <Container4 />
      <Container3 data={container3[1]} repeat={true}/>
      <Container5 />
      {/* <Container6 data={container6} /> */}
      <Banner />
      <Container7 />
      <ContactBanner />
      <Footer />
    </main>
  );
}
