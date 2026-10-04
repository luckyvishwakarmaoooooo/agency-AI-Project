import { useState } from 'react'
import { motion } from 'motion/react'
import Tittle from './Tittle'
import assets from '../assets/assets'

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus('')

    const form = event.currentTarget
    const formData = Object.fromEntries(new FormData(form))

    try {
      const response = await fetch('https://formsubmit.co/ajax/adityavishwakarma7601@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...formData, _subject: 'New contact form message' }),
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('The message could not be sent. Please try again.')
      }

      const enteredName = String(formData.name || 'there').trim() || 'there'
      setSubmittedName(enteredName)
      form.reset()
      setIsSuccessOpen(true)

      window.setTimeout(() => {
        setIsSuccessOpen(false)
      }, 2500)
    } catch {
      setSubmissionStatus('Sorry, your message could not be sent. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      id='contact-us'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Tittle title='Contact Us' desc='We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.' />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className='grid sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_15px_45px_rgba(79,70,229,0.08)] dark:border-gray-700 dark:bg-gray-900 sm:p-6'
      >
        <div className='sm:col-span-1'>
          <p className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-200'>Your name</p>
          <div className='flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 pl-3 transition-all duration-200 focus-within:border-primary focus-within:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:focus-within:border-indigo-400 dark:focus-within:bg-gray-800'>
            <img src={assets.person_icon} alt='person icon' className='h-4 w-4 opacity-70' />
            <input name='name' type='text' placeholder='Enter your name' className='w-full bg-transparent p-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500' required />
          </div>
        </div>

        <div className='sm:col-span-1'>
          <p className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-200'>Email id</p>
          <div className='flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 pl-3 transition-all duration-200 focus-within:border-primary focus-within:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:focus-within:border-indigo-400 dark:focus-within:bg-gray-800'>
            <img src={assets.email_icon} alt='email icon' className='h-4 w-4 opacity-70' />
            <input name='email' type='email' placeholder='Enter your email' className='w-full bg-transparent p-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500' required />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium text-gray-700 dark:text-gray-200'>Message</p>
          <textarea
            name='message'
            rows={7}
            placeholder='Enter your message'
            className='w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-indigo-400 dark:focus:bg-gray-800'
            required
          ></textarea>
        </div>

        <div className='sm:col-span-2'>
          <button type='submit' disabled={isSubmitting} className='flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-70 sm:w-max sm:justify-start'>
            {isSubmitting ? 'Sending...' : 'Submit'}
            <img src={assets.arrow_icon} alt='send icon' className='w-4' />
          </button>
        </div>
      </motion.form>
          <p role='status' aria-live='polite'>{submissionStatus}</p>
        {isSuccessOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'
            onClick={() => setIsSuccessOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setIsSuccessOpen(false)
            }}
            tabIndex={-1}
          >
            <div
              role='dialog'
              aria-modal='true'
              aria-labelledby='contact-success-title'
              className='w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-[0_25px_80px_rgba(79,70,229,0.18)] dark:border-gray-700 dark:bg-gray-900'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'>
                <span aria-hidden='true'>✓</span>
              </div>
              <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary'>Message sent</p>
              <h2 id='contact-success-title' className='text-2xl font-bold text-gray-900 dark:text-white'>Thank you, {submittedName}!</h2>
              <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300'>Your message has been received. We will get back to you soon.</p>
              <div className='mt-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800'>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: 'linear' }}
                  className='h-full rounded-full bg-linear-to-r from-primary to-indigo-400'
                />
              </div>
            </div>
          </motion.div>
        )}
    </motion.div>
  )
}

export default ContactUs