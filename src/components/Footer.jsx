import 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'

const Footer = ({ theme} ) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
             <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='logo' className='w-32 sm:w-44'/>   
                <p className='max-w-md mt-5 mb-5'>From strategy to execution, we craft digital solutions that move your business forward.</p> 

                <ul className='flex flex-wrap gap-4 text-gray-700 dark:text-gray-400 sm:gap-8'>
                    <li><a className='hover:text-primary' href='#hero'>Home</a></li>
                    <li><a className='hover:text-primary' href='#about'>About</a></li>
                    <li><a className='hover:text-primary' href='#services'>Services</a></li>
                    <li><a className='hover:text-primary' href='#our-work'>Our work</a></li>
                    <li><a className='hover:text-primary' href='#contact-us'>Contact us</a></li>  
                </ul>
              </div>
             <div className='w-full max-w-md text-gray-600 dark:text-gray-400'>
              <h3 className='text-base font-semibold'>Subscribe to our newsletter</h3>
              <p className='mt-2 mb-6 text-sm'>The latest updates and insights delivered to your inbox Weekly.</p>
              <div className='flex flex-col gap-2 text-sm sm:flex-row'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
                <button className='w-full p-3 bg-primary text-white text-sm px-6 rounded sm:w-auto'>Subscribe</button>
              </div>
             </div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        <div className='pb-6 text-sm text-gray-500 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left'>
            <p>&copy; {new Date().getFullYear()} Agency.ai - All rights reserved.</p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <img src={assets.facebook_icon} alt='facebook icon' className='w-4 h-4 sm:w-5 sm:h-5'/>
                <img src={assets.twitter_icon} alt='twitter' className='w-4 h-4 sm:w-5 sm:h-5'/>
                <img src={assets.instagram_icon} alt='instagram icon' className='w-4 h-4 sm:w-5 sm:h-5'/>
                <img src={assets.linkedin_icon} alt='linkedin icon' className='w-4 h-4 sm:w-5 sm:h-5'/>
            </div>
        </div>                      
            </motion.div>
  )
}

export default Footer