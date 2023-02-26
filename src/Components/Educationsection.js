import React from 'react'
import { motion } from 'framer-motion'

export default function Educationsection() {
  return (
    <section className='pb-24 max-w-xl break-words'>
        <h2 className='myfont-fraunces text-3xl sm:text-4xl font-extrabold underline-offset-8 pb-8'>Education</h2>

        <div className='flex flex-col text-slate-200'>
          {data.map((m) => (
            <motion.div key={m.time}
                initial = {{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition = {{duration:0.5}}
                viewport ={{once: true}}
            >
              <div className='flex items-baseline w-full'>
                <div className="circle"><section className='w-3 h-3 rounded-full bg-fuchsia-500'></section></div>
                <div className="title ml-8 mt-1 text-sm"><b>{m.time}</b></div>
              </div>

              <div className='flex items-stretch'>
                <div className="circle w-3"><section className='ml-1 w-[2px] h-full bg-slate-200'></section></div>
                <div className="title ml-8 mt-1">{m.degree}
                  <p className='text-xs font-extralight'> - from {m.from}</p>
                  <p className='font-mono mt-2 mb-4'>CGPA - <b className='text-white'>{m.grade}</b></p>
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
    time: '2019 - January, 2023',
    degree: 'BSc in Information & Communication Engineering',
    from: 'Bangladesh University of Professionals.',
    grade: '3.79 / 4'
  },
  {
    time: '2018',
    degree: 'HSC - Higher Secondary Certificate',
    from: 'Adamjee Cantonment College.',
    grade: '5.00 / 5'
  },
  {
    time: '2016',
    degree: 'SSC - Secondary School Certificate',
    from: 'Bogura Cantonment Public School & College.',
    grade: '5.00 / 5'
  }
]