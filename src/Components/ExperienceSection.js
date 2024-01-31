import React from 'react'
import { motion } from 'framer-motion'

export default function Educationsection() {
    return (
        <section className='pb-24 max-w-xl break-words'>
            <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Experience</h2>

            <div className='flex flex-col text-slate-800 dark:text-slate-200'>
                {data.map((m) => (
                    <motion.div key={m.time}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className='flex items-baseline w-full'>
                            <div className="circle"><section className='w-3 h-3 rounded-full bg-fuchsia-500'></section></div>
                            <div className="ml-8 mt-1"><b>{m.position}</b> - at <a href={m.website} target="_blank" rel="noopener noreferrer"><u className='text-sm'>{m.company}</u></a></div>
                        </div>

                        <div className='flex items-stretch'>
                            <div className="circle w-3"><section className='ml-1 w-[2px] h-full bg-slate-800 dark:bg-slate-200'></section></div>
                            <div className="title ml-8">
                                <p className='text-xs mb-3'>{m.time}</p>
                                <p className='text-sm mb-3 font-extralight'>{m.desc}</p>
                                <ul className='text-xs flex flex-wrap font-semibold w-96'>
                                    {
                                        m.technology.map((item, index) => <li className='bg-white/10 rounded-sm mr-2 mb-2 px-2 py-1' key={index}>{item}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

const data = [
    {
        time: 'May - December, 2023',
        position: 'Junior Developer (Internship)',
        company: 'Coredevs Ltd.',
        website: 'https://coredevsltd.com/',
        desc: 'worked with dynamic team to built fullstack projects · built pixel-perfect user interfaces ensuring good user experience · integrated backend APIs into frontend systems, enhancing functionality and ensuring seamless data flow between the user interface and server · contributed in developing component library for frontend projects following best practices and reusable logics',
        technology: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'SCSS', 'MERN stack', 'Nextjs']
    },
]