import 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'
import Tittle from './Tittle'

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage.',
      image: assets.work_mobile_app,
    },
    {
      title: 'Dashboard management',
      description: 'We help you execute your plan and deliver results.',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness app Promotion',
      description: 'We help you create content that resonates with your audience and drives engagement.',
      image: assets.work_fitness_app,
    },
  ]

  return (
    <motion.div
      id='our-work'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Tittle title='Our Latest Work' desc='From strategy to execution we craft digital solution that move your business forward' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='hover:scale-102 duration-500 transition-all cursor-pointer'
          >
            <img src={work.image} alt={work.title} className='w-full  rounded-xl' />
              <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
              <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurWork