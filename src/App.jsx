import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <div className=" overflow-x-hidden text-stone-300 antialiased ">
        <div className="fixed inset-0 -z-10 ">
          <div className="relative h-full w-full bg-primary"></div>
        </div>

        <div className="container mx-auto ">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
