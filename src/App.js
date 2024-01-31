import React from "react";
import Educationsection from "./Components/Educationsection";
import ExperienceSection from "./Components/ExperienceSection.js"
import Footer from "./Components/Footer";
import Introcard from "./Components/Introcard";
import Projectssection from "./Components/Projectssection";
import Skillsection from "./Components/Skillsection";
import Sun from "./Icons/Sun.jsx";
import Moon from "./Icons/Moon";

function App() {

  const [theme, settheme] = React.useState(null);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      settheme('dark');
    } else {
      settheme('light');
    }
  }, [])

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])


  const toggletheme = () => {
    settheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="bg-violet-50 dark:bg-zinc-900 transition-all delay-200 ease-in-out">
      <div className="w-screen text-black dark:text-white pl-4 sm:pl-[11rem]">


        <div className="max-w-xl pt-8 pb-4 pr-5 text-right">
          <button onClick={() => toggletheme()}>
            {theme && theme === 'dark' ?
              <Sun className="text-3xl" />
              :
              <Moon className="text-3xl" />
            }
          </button>
        </div>


        <Introcard />
        <ExperienceSection />
        <Projectssection />
        <Skillsection />
        <Educationsection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
