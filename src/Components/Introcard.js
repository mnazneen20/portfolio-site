import React from 'react'
import { motion } from 'framer-motion'

import myphoto from './myphoto.png'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Introcard() {
  let animateduration = 0.3;
  const position = '<web developer />';
  return (
    <div className='text-slate-800 dark:text-slate-300 pt-10 pb-20 max-w-xl'>
      <div className='flex flex-col items-start gap-4 lg sm:flex-row  sm:items-end sm:gap-8'>
        {/* profile photo  */}
        <motion.img src={myphoto} alt="dewan masuma nazneen" className='w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 outline outline-offset-4 outline-2'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          viewport={{ once: true }}
        />
        <section>
          {/* occupation here  */}
          <motion.p className='text-xl'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, type: "spring", duration: 0.5 }}
            viewport={{ once: true }}
          >
            {position}
          </motion.p>
          <motion.h1 className='text-slate-900 dark:text-white font-extrabold text-4xl sm:text-5xl leading-[2.5rem] myfont-fraunces'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", duration: 0.6 }}
            viewport={{ once: true }}
          >Dewan Masuma <br /> Nazneen</motion.h1>
        </section>
      </div>
      {/* introduction text here  */}
      <motion.p className='font-extralight text-justify leading-[1.2rem] pt-8 pr-5'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "spring", duration: 0.6 }}
        viewport={{ once: true }}
      >
        👋Hi. Welcome to my slice of the internet. I'm a passionate web developer with a strong skill set in <strong><u>JavaScript</u></strong> along with a solid grasp of full-stack technologies like <strong><u>MERN stack</u></strong> and <strong><u>Next.js</u></strong>.
        <br />
        I enjoy Frontend development as I feel it's a creative outlet for me where I can blend functionality with aesthetics. I find joy in transforming design concepts into interactive and visually appealing websites. I take pride in my meticulous attention to detail throughout the development process, ensuring that every line of code contributes to a seamless and efficient user experience.
        <br />
        <br />
        I believe I am a quick learner and self-motivated and these are the core of my work ethic. In the fast-paced world of web development, I embrace challenges as opportunities to expand my knowledge and skill set.
        <br />
        <br />
        Feel free to explore my portfolio to get a glimpse of my work, and you can reach out to me through the following handles..👇
      </motion.p>

      <ul className='flex flex-wrap gap-1.5 py-4'>
        {
          // mapping through socials 
          socials.map(m => (
            <motion.li key={m.linkto} className='p-3 rounded-full hover:text-zinc-900 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", duration: animateduration }}
              viewport={{ once: true }}
            >
              <p className='hidden'>{animateduration += 0.7}</p>
              <a title={m.title} href={m.linkto} target="_blank" rel="noopener noreferrer">{m.icon}</a>
            </motion.li>
          ))
        }
      </ul>
    </div>
  )
}


// data of the social icons in the card introduction 
const socials = [
  {
    icon: <React.Fragment><MailOutlineRoundedIcon sx={{ fontSize: 32 }} /></React.Fragment>,
    linkto: 'mailto:masumanazneen2019@gmail.com',
    title: 'Email'
  },
  {
    icon: <React.Fragment><GitHubIcon sx={{ fontSize: 30 }} /></React.Fragment>,
    linkto: 'https://github.com/mnazneen20',
    title: 'Github'
  },
  {
    icon: <React.Fragment><LinkedInIcon sx={{ fontSize: 30 }} /></React.Fragment>,
    linkto: 'https://www.linkedin.com/in/dewan-masuma-nazneen16/',
    title: 'LinkedIn'
  },
  {
    icon: <React.Fragment><CodeIcon sx={{ fontSize: 30 }} /></React.Fragment>,
    linkto: 'https://leetcode.com/mnazneen20/',
    title: 'LeetCode'
  }
]