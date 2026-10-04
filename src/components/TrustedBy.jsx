import 'react'
import { company_logos } from '../assets/assets'
import { motion } from 'motion/react'

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-10 lg:px-24 px-4 sm:px-12 xl:px-40 text-gray-700 dark:text-white/80 '
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className='font-semibold'
      >
        Trusted by Leading Companies
      </motion.h3>

      <div className='flex items-center m-4 gap-10 flex-wrap justify-center'>
        {company_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true }}
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
          />
        ))}
      </div>
    </motion.div>
  )
}

export default TrustedBy