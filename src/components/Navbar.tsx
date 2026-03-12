import { useEffect, useState } from 'react'
import { TbFileDownload } from 'react-icons/tb'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <span className="nav-logo">jd.dev</span>
        <ul className="nav-links">
          <li><a onClick={() => scrollTo('about')} style={{ cursor: 'pointer' }}>About</a></li>
          <li><a onClick={() => scrollTo('experience')} style={{ cursor: 'pointer' }}>Experience</a></li>
          <li><a onClick={() => scrollTo('skills')} style={{ cursor: 'pointer' }}>Skills</a></li>
          <li><a onClick={() => scrollTo('projects')} style={{ cursor: 'pointer' }}>Projects</a></li>
          <li><a onClick={() => scrollTo('contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
          <li>
            <a href="/Jaydip_resume.pdf" target="_blank" className="nav-resume">
              <TbFileDownload style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
