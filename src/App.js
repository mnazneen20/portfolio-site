import Educationsection from "./Components/Educationsection";
import Footer from "./Components/Footer";
import Introcard from "./Components/Introcard";
import Projectssection from "./Components/Projectssection";
import Skillsection from "./Components/Skillsection";

function App() {
  return (
    <div className="w-screen bg-zinc-900 text-white pl-4 sm:pl-[11rem]">
    <Introcard />
    <Projectssection />
    <Skillsection />
    <Educationsection />
    <Footer />
    </div>
  );
}

export default App;
