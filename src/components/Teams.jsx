import 'react'
import { motion } from 'motion/react'
import Tittle from './Tittle'
import {teamData} from '../assets/assets'

const Teams = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Tittle title='Meet Our Team' desc='Our team of experts is dedicated to delivering exceptional results for our clients. Get to know the people behind the work.' />

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
       {teamData.map((team, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-gray-100 dark;shadow-white/5 hover:scale-103 transition-all duration-400'
        >
          <img src={team.image} alt={team.name} className='w-12 h-12 rounded-full' />
          <div className='flex-1'>
          <h3 className='text-sm font-bold'>{team.name}</h3>
          <p className='text-xs opacity-60'>{team.title}</p>
          </div>
        </motion.div>
       ) )}
      </div>
    </motion.div>
  )
}

export default Teams