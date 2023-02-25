import React from 'react'
import { motion } from 'framer-motion'

import myphoto from './myphoto.png'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Introcard() {
  const position = '<web developer />'
  return (
    <div className='text-slate-300 pt-40 pb-20 max-w-xl'>
        <div className='flex flex-col items-start gap-4 lg sm:flex-row sm:items-end sm:gap-8'>
            <img src={myphoto} alt="dewan masuma nazneen" className='w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 outline outline-offset-4 outline-2' />
            <section>
              <motion.p className='text-xl'
                initial = {{opacity:0, x:50}}
                whileInView = {{opacity:1, x:0}}
                transition = {{delay:1, type: "spring", duration:0.6}}
                viewport = {{once:true}}
              >{position}</motion.p>
              <h1 className='text-white font-extrabold text-4xl sm:text-5xl leading-[2.5rem] myfont-fraunces'>Dewan Masuma <br /> Nazneen</h1>
            </section>
        </div>
        <p className='font-thin text-justify leading-[1.2rem] pt-8 pr-5'>Hi, I'm a web developer from Bangladesh, specializing in frontend development. I started learning about the web during the lockdown as a hobby to know how things work in the internet. With time now I have started enjoying to build user friendly websites that are aesthetically pleasing. I have just completed my BSc and now I am looking forward to persue my career in software development.</p>

        <ul className='flex flex-wrap gap-1.5 py-4'>
          <motion.li className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    initial = {{opacity: 0, y: -30}}
                    whileInView = {{opacity: 1, y:0}}
                    transition = {{type: "spring", duration: 0.7}}
                    viewport = {{once: true}}
                >
                  <a href="mailto:masumanzneen2019@gmail.com" target="_blank" rel="noopener noreferrer"><MailOutlineRoundedIcon sx={{ fontSize: 32 }} /></a>
          </motion.li>


          <motion.li className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    initial = {{opacity: 0, y: -30}}
                    whileInView = {{opacity: 1, y:0}}
                    transition = {{type: "spring", duration: 1.2}}
                    viewport = {{once: true}}
          >
            <a href="https://github.com/mnazneen20" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 30 }} /></a>
          </motion.li>


          <motion.li className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    initial = {{opacity: 0, y: -30}}
                    whileInView = {{opacity: 1, y:0}}
                    transition = {{type: "spring", duration: 1.7}}
                    viewport = {{once: true}}
          >
            <a href="https://www.linkedin.com/in/dewan-masuma-nazneen16/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 30 }} /></a>
          </motion.li>


          <motion.li className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    initial = {{opacity: 0, y: -30}}
                    whileInView = {{opacity: 1, y:0}}
                    transition = {{type: "spring", duration: 2.2}}
                    viewport = {{once: true}}
          >
            <a href="https://twitter.com/mnazneen20" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ fontSize: 30 }} /></a>
          </motion.li>


          <motion.li className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
                    initial = {{opacity: 0, y: -30}}
                    whileInView = {{opacity: 1, y:0}}
                    transition = {{type: "spring", duration: 2.7}}
                    viewport = {{once: true}}
        >
            <a href="https://www.facebook.com/masuma.nazneen.3" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ fontSize: 30 }} /></a>
          </motion.li>
        </ul>
    </div>
  )
}