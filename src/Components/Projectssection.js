import React from 'react'
import { motion } from 'framer-motion'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRef, useEffect, useState } from 'react';

export default function Projectssection() {

    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setwidth(carousel.current.scrollWidth - (carousel.current.offsetWidth-300));
    }, [])

  return (
    <section className='pb-28'>
        <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Projects</h2>

        <motion.div ref={carousel} className='mycarousel text-slate-200 cursor-grab w-full overflow-x-hidden' whileTap={{ cursor: "grabbing" }}>
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="mycarousel-inner flex gap-6">


                {/* item 1 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.3}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>Shopping App</h1>
                        <p className='font-light text-sm my-3'>This is a <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>e-commerce website</span>. It displays product catalouge in the homepage fetched from external API, product details of each item in separate page and has cart functionality.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>React · Pure CSS · Fakestore API · fetch </p>

                        <div className='flex gap-8 my-6'>
                            <a href="https://tangerine-hotteok-b0302a.netlify.app/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/shopping-app" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>


                {/* item 2 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.6}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>Portfolio</h1>
                        <p className='font-light text-sm my-3'>This is a <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>react app</span>. It is the current website you're visiting and it is my portfolio where i tried to sum up my work, learnings, experiences.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>React · Tailwind CSS · Framer Motion</p>

                        <div className='flex gap-8 my-6'>
                            <a href="/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/portfolio-site" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>


                {/* item 3 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.9}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>meeTube</h1>
                        <p className='font-light text-sm my-3'>This is <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>video streaming website</span>. It displays list of trending videos on the homepage fetched from API, video search video streaming is available, list of related videos are displayed.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>React · Pure CSS · YouTube V3 API · fetch </p>

                        <div className='flex gap-8 my-6'>
                            <a href="https://wondrous-llama-6f13c6.netlify.app/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/mee-tube" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>

                

                {/* item 4 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.12}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>REST country show</h1>
                        <p className='font-light text-sm my-3'>This is a <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>multipage react website</span>. It displays list of all countries in the homepage, detail information of each country is in separate page, light and dark modes are available.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>React · Pure CSS · REST countires API · fetch </p>

                        <div className='flex gap-8 my-6'>
                            <a href="https://kaleidoscopic-blancmange-f4cf8d.netlify.app/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/REST-countries-show" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>


                {/* item 5 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.15}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>Photo Gallery</h1>
                        <p className='font-light text-sm my-3'>This is a<span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>react SPA</span>. It displys random photos fetched from API. There is a search option for searching desired photos, upon click on a photo a modal appears with the photo and related informations.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>React · Pure CSS · Pixabay API · fetch </p>

                        <div className='flex gap-8 my-6'>
                            <a href="https://mnazneen20.github.io/Photo-Gallery-App/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/Photo-Gallery-App" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>



                {/* item 6 **************************** */}
                <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                    initial = {{opacity: 0, x: -100}}
                    whileInView = {{opacity: 1, x:0}}
                    transition = {{duration: 0.18}}
                    viewport = {{once: true}}
                >
                    <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                        <h1 className='text-xl font-bold mt-4'>Sunnyside</h1>
                        <p className='font-light text-sm my-3'>This is a simple <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>responsive landing page</span>. It is a simple landing page design implemented from designs.</p>

                        <p className='font-mono font-bold text-sm text-white tracking-wide'>HTML · CSS · Javascript </p>

                        <div className='flex gap-8 my-6'>
                            <a href="https://mnazneen20.github.io/sunnyside-landing-page/" target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                            <a href="https://github.com/mnazneen20/sunnyside-landing-page" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                        </div>
                    </section>
                </motion.section>   


            </motion.div>
        </motion.div>
    </section>
    )
}