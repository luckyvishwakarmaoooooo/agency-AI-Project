import 'react'

const Tittle = ({ title, tittle, disc, desc }) => {
  const heading = title ?? tittle
  const description = disc ?? desc

  return (
    <>
      <h2 className='text-3xl font-medium sm:text-5xl'>{heading}</h2>
      <p className='text-gray-500 dark:text-white/75 mb-6 text-center max-w-lg'>{description}</p>
    </>
  )
}

export default Tittle