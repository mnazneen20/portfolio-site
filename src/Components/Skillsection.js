import React from 'react'
import { motion } from 'framer-motion'

export default function Skillsection() {
    let delay = 0.2;
    return (
        <section className='pb-20 max-w-xl break-words'>
            <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Skills</h2>
            <div className='flex flex-wrap gap-12 sm:gap-0 text-slate-800 dark:text-slate-200'>

                {/* displaying skill sets  */}
                {
                    myskills.map(m => (
                        <motion.ul key={m.type} className='w-1/3 sm:w-1/2 sm:mb-8'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: delay, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className='hidden'>{delay += 0.1}</p>
                            <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'><b>{m.type}</b></li>
                            {(m.items).map(n => <li key={n}>{n}</li>)}
                        </motion.ul>
                    ))
                }

            </div>
        </section>
    )
}

const myskills = [
    {
        type: 'Programming',
        items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'PHP', 'Java']
    },
    {
        type: 'Frameworks/ Web',
        items: ['MERN stack', 'Next.js', 'SCSS', 'TailwindCSS',]
    },
    {
        type: 'Tools',
        items: ['VS Code', 'Github', 'Postman', 'Illustrator', 'Figma', 'Google Colab', 'MS office', 'Google Workplace']
    },
    {
        type: 'Database',
        items: ['MongoDB', 'MySQL']
    },
]