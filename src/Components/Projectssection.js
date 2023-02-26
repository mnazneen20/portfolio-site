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

    // animation duration 
    let durationtime = 0.3;
  return (
    <section className='pb-28'>
        <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Projects</h2>

        <motion.div ref={carousel} className='mycarousel text-slate-200 cursor-grab w-full overflow-x-hidden' whileTap={{ cursor: "grabbing" }}>
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="mycarousel-inner flex gap-6">

                {projects.map((m) => (
                    <motion.section className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-[2px] rounded-lg'
                        initial = {{opacity: 0, x: -100}}
                        whileInView = {{opacity: 1, x:0}}
                        transition = {{duration: durationtime}}
                        viewport = {{once: true}}
                    >
                        <p className='hidden'>{durationtime+=0.3}</p>
                        <section className='bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full'>
                            <h1 className='text-xl font-bold mt-4'>{m.title}</h1>
                            <p className='font-light text-sm my-3'>This is a <span className='underline underline-offset-2 decoration-fuchsia-500 text-white'>{m.type}</span>. {m.description}</p>

                            <p className='font-mono font-bold text-sm text-white tracking-wide'>
                                · {m.tech.map(n => <span>{n} · </span>)}
                            </p>

                            <div className='flex gap-8 my-6'>
                                <a href={m.livelink} target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>
                                <a href={m.githublink} target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 35 }} /></a>
                            </div>
                        </section>
                    </motion.section>
                ))}
            </motion.div>
        </motion.div>
    </section>
    )
}

const projects = [
    {
        _id: 1,
        title: 'Shopping App',
        type: 'e-commerce website',
        description: 'It displays product catalogue in the homepage fetched from external API, product details of each item in separate page and has cart functionality.',
        tech: ['React', 'React-router', 'Pure CSS', 'fetch', 'Fakestore API'],
        livelink: 'https://tangerine-hotteok-b0302a.netlify.app/',
        githublink: 'https://github.com/mnazneen20/shopping-app'
    },
    {
        _id: 2,
        title: 'My Portfolio',
        type: 'react app',
        description: "It is the current website you're visiting and it is my portfolio where i tried to sum up my work, learnings, experiences.",
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        livelink: 'https://dmnazneen-portfolio.netlify.app/',
        githublink: 'https://github.com/mnazneen20/portfolio-site/',
    },
    {
        _id: 3,
        title: 'meeTube',
        type: 'video streaming website',
        description: 'It displays list of trending videos on the homepage fetched from API, video search video streaming is available, list of related videos are displayed.',
        tech: ['React', 'React-router', 'Pure CSS', 'fetch', 'YouTube V3 API'],
        livelink: 'https://wondrous-llama-6f13c6.netlify.app/',
        githublink: 'https://github.com/mnazneen20/mee-tube'
    },
    {
        _id: 4,
        title: 'REST country show',
        type: 'multipage react website',
        description: 'It displays list of all countries in the homepage, detail information of each country is in separate page, light and dark modes are available.',
        tech: ['React', 'React-router', 'Pure CSS', 'fetch', 'REST countires API'],
        livelink: 'https://kaleidoscopic-blancmange-f4cf8d.netlify.app/',
        githublink: 'https://github.com/mnazneen20/REST-countries-show'
    },
    {
        _id: 5,
        title: 'Photo Gallery',
        type: 'react SPA',
        description: 'It displys cat photos fetched from API in the homepage. There is a search option for searching desired photos, upon click on a photo a modal appears with the photo and related informations.',
        tech: ['React', 'CSS', 'Pixabay API', 'fetch'],
        livelink: 'https://mnazneen20.github.io/Photo-Gallery-App/',
        githublink: 'https://github.com/mnazneen20/Photo-Gallery-App'
    },
    {
        _id: 6,
        title: 'Sunnyside landing page',
        type: 'responsive landing page',
        description: 'It is a simple landing page design implemented from designs.',
        tech: ['HTML', 'CSS', 'JS', 'media-query'],
        livelink: 'https://mnazneen20.github.io/sunnyside-landing-page/',
        githublink: 'https://github.com/mnazneen20/sunnyside-landing-page'
    }
]