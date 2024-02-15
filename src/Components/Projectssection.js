import React from 'react'
import { motion } from 'framer-motion'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRef, useEffect, useState } from 'react';

export default function Projectssection() {

    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setwidth(carousel.current.scrollWidth - (carousel.current.offsetWidth - 300));
    }, [])

    // animation duration 
    let durationtime = 0.3;
    return (
        <section className='pb-28'>
            <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Projects</h2>

            <motion.div ref={carousel} className='mycarousel text-slate-700 dark:text-slate-200 cursor-grab w-full overflow-x-hidden' whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className="mycarousel-inner flex gap-6">

                    {projects.map((m) => (
                        <motion.section key={m._id} className='item bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1 sm:p-[2px] rounded-lg'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: durationtime }}
                            viewport={{ once: true }}
                        >
                            <p className='hidden'>{durationtime += 0.2}</p>
                            <section className='bg-violet-50 dark:bg-zinc-900 p-6 rounded-lg w-72 sm:w-96 h-full transition-all delay-200 ease-in-out'>
                                <h1 className='text-xl font-bold mt-4'>{m.title}</h1>
                                <p className='font-light text-sm my-3'>This is a <span className='underline underline-offset-2 decoration-fuchsia-500 text-black font-normal dark:text-white'>{m.type}</span>. {m.description}</p>

                                <p className='font-mono font-bold text-sm text-black dark:text-white tracking-wide'>
                                    · {m.tech.map(n => <span key={n}>{n} · </span>)}
                                </p>

                                <div className='flex gap-8 my-6'>
                                    {m.livelink && <a href={m.livelink} target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{ fontSize: 35 }} /></a>}
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
        title: 'Task Manager',
        type: 'Fullstack (MERN) app',
        description: "Implemented authentication, authorization and CRUD for task management.",
        tech: ['MERN stack', 'jwt', 'fetch', 'React-hook-form', 'REST API'],
        livelink: 'https://task-manager-client-iota.vercel.app/',
        githublink: 'https://github.com/mnazneen20/task-manager'
    },
    {
        _id: 2,
        title: 'USER API',
        type: 'Node.js server',
        description: "The API allows you to perform CRUD operations on user data, including user creation, retrieval, update, and deletion.",
        tech: ['Node.js', 'fs module', 'http module', 'crypto module'],
        githublink: 'https://github.com/mnazneen20/user-api',
    },
    {
        _id: 3,
        title: 'Messenger',
        type: 'Fullstack (MERN) app',
        description: "There are groups where user can have realtime communication with multiple users of a group. Implemented authentication, authorization and realtime messaging using socket connection.",
        tech: ['MERN stack', 'socket.io', 'jwt', 'fetch', 'React-hook-form', 'REST API'],
        livelink: 'https://grp-messenger-client.vercel.app/login',
        githublink: 'https://github.com/mnazneen20/grp-messenger',
    },
    {
        _id: 4,
        title: 'Shopping App',
        type: 'e-commerce website',
        description: 'It displays product catalogue in the homepage fetched from external API, product details of each item in separate page and has cart functionality.',
        tech: ['React', 'React-router', 'Pure CSS', 'fetch', 'Fakestore API'],
        livelink: 'https://tangerine-hotteok-b0302a.netlify.app/',
        githublink: 'https://github.com/mnazneen20/shopping-app'
    },
    {
        _id: 5,
        title: 'meeTube',
        type: 'video streaming website',
        description: 'It displays list of trending videos on the homepage fetched from API, video search video streaming is available, list of related videos are displayed.',
        tech: ['React', 'React-router', 'Pure CSS', 'fetch', 'YouTube V3 API'],
        livelink: 'https://wondrous-llama-6f13c6.netlify.app/',
        githublink: 'https://github.com/mnazneen20/mee-tube'
    },
]