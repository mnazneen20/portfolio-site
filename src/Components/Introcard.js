import React from 'react'
import myphoto from './myphoto.png'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Introcard() {
  const position = '<web developer />'
  return (
    <div className='text-slate-300 py-40 max-w-lg'>
        <div className='flex flex-col items-start gap-2 lg sm:flex-row sm:items-end sm:gap-8'>
            <img src={myphoto} alt="dewan masuma nazneen" className='w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 outline outline-offset-4 outline-2' />
            <section>
              <p className='myfont-roboto text-xl'>{position}</p>
              <h1 className='text-white font-extrabold text-4xl sm:text-5xl leading-[2.5rem] myfont-fraunces'>Dewan Masuma <br /> Nazneen</h1>
            </section>
        </div>
        <p className='myfont-roboto font-thin text-justify leading-[1.2rem] pt-8 pr-5'>Hi, I'm a web developer from Bangladesh, specializing in frontend technologies. I started learning about the web during the lockdowwn as a hobby to know how things work in the internet. Now I enjoy building user friendly and designs like aesthetically pleasing websites and want to persue my career in this path.</p>

        <ul className='flex flex-wrap gap-6 py-10'>
          <li><a href="mailto:masumanzneen2019@gmail.com" target="_blank" rel="noopener noreferrer"><MailOutlineRoundedIcon sx={{ fontSize: 44 }} /></a></li>
          <li><a href="https://github.com/mnazneen20" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 40 }} /></a></li>
          <li><a href="https://www.linkedin.com/in/dewan-masuma-nazneen16/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 40 }} /></a></li>
          <li><a href="https://twitter.com/mnazneen20" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ fontSize: 40 }} /></a></li>
          <li><a href="https://www.facebook.com/masuma.nazneen.3" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ fontSize: 40 }} /></a></li>
        </ul>
    </div>
  )
}
