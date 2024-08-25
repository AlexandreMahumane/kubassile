import { AboutUs } from "./components/about-us";
import { Carousel } from "./components/carousel";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Service } from "./components/service";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="max-w-7xl  mx-auto">
        {" "}
        <Service />
        <AboutUs />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
