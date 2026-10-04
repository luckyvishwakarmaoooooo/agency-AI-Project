import 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'
import Tittle from './Tittle'
import ServiceCard from './ServiceCard'
const Services = () => {
   
    const servicesData =[
        {
            title:'Advertising',    
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },

        {
            title:'Content marketing',    
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon,
        },

        {
            title:'Content writing',    
            description: 'we help you create content that resonates with your audience and drives engagement.',
            icon: assets.content_icon,
        },
        {
            title:'Social media',    
            description: 'we help you build a strong social media presence and connect with your audience.',
            icon: assets.social_icon,
        },

    ]

  return (
    <motion.div
      id='services'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-7 lg:px-24 px-4 sm:px-12 pt-30  xl:px-40 text-gray-700 dark:text-white/80 '
    >
     <img src="{assets.bgImage2}" alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

     <Tittle title ='How can we help?' disc='We offer a range of services to help you grow your business and reach your goals.'/>

     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.1 }}
       viewport={{ once: true }}
       className='flex flex-col md:grid md:grid-cols-2'
     >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
     </motion.div>
    </motion.div>
  )
}

export default Services