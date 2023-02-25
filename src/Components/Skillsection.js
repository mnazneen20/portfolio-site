import React from 'react'
import { motion } from 'framer-motion'

export default function Skillsection() {
  return (
    <section className='pb-20 max-w-xl break-words'>
        <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Skills</h2>
        <div className='flex flex-wrap gap-12 sm:gap-0 text-slate-200'>

            <motion.ul className='w-1/3 sm:w-1/2 sm:mb-8'
                initial = {{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition = {{duration:0.7}}
                viewport ={{once: true}}
            >
                <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'><b>Programming</b></li>
                {programming.map(m => <li key={m}>{m}</li>)}
            </motion.ul>

            <motion.ul className='w-1/3 sm:w-1/2 sm:mb-8'
                initial = {{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition = {{duration:0.7}}
                viewport ={{once: true}}
            >
                <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'><b>Frameworks/ Web</b></li>
                {frameworks.map(m => <li key={m}>{m}</li>)}
            </motion.ul>

            <motion.ul className='w-1/3 sm:w-1/2 sm:mb-8'
                initial = {{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition = {{delay:0.3, duration:0.7}}
                viewport ={{once: true}}
            >
                <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'><b>Tools</b></li>
                {tools.map(m => <li key={m}>{m}</li>)}
            </motion.ul>
            
            <motion.ul className='w-1/3 sm:w-1/2 sm:mb-8'
                initial = {{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition = {{delay:0.3, duration:0.7}}
                viewport ={{once: true}}
            >
                <li className='mb-4 underline underline-offset-4 decoration-2 decoration-fuchsia-500'><b>Database</b></li>
                {database.map(m => <li key={m}>{m}</li>)}
            </motion.ul>
        </div>
    </section>
  )
}


const programming = ['HTML5','CSS3', 'JavaScript', 'Python', 'PHP', 'Java']
const frameworks = ['React', 'Bootstrap', 'Tailwind','NodeJS', 'ExpressJS']
const database =['MongoDB', 'MySQL']
const tools = ['VS Code', 'Github', 'Postman', 'Illustrator', 'Figma', 'Google Colab', 'MS office', 'Google Workplace']