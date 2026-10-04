import assets from '../assets/assets'
import { useEffect } from 'react'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const preferredDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(preferredDarkMode ? 'dark' : 'light')
    }
  }, [setTheme])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <button type="button" aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
        {theme === 'dark' ? (
          <img
            onClick={() => setTheme('light')}
            src={assets.sun_icon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full'
            alt="Switch to Light Mode"
          />
        ) : (
          <img
            onClick={() => setTheme('dark')}
            src={assets.moon_icon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full'
            alt="Switch to Dark Mode"
          />
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn