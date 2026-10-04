import React from 'react'

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [visible, setVisible] = React.useState(false)

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setVisible(true)
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        setVisible(false)
        setPosition({ x: 0, y: 0 })
      }}
      className='group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 transition-all duration-300 hover:border-primary hover:shadow-[0_0_0_1px_rgba(80,68,229,0.15)] dark:shadow-white/10 dark:hover:border-indigo-400'
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      ></div>

      <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
          <img src={service.icon} alt={service.title} className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard