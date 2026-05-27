import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogOut, Menu } from 'lucide-react'
import { clearAdminToken, getAdminToken } from '../utils/api'

export default function Header() {
  const navigate = useNavigate()
  const token = getAdminToken()

  const handleLogout = () => {
    clearAdminToken()
    navigate('/')
  }

  return (
    <motion.header className="navbar" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
      <div className="navbar__brand">
        <div className="navbar__mark">SC</div>
        <div>
          <div className="navbar__title">She Can Foundation</div>
          <div className="navbar__subtitle">Empower. Educate. Elevate.</div>
        </div>
      </div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <a href="#programs">Programs</a>
        <a href="#about">About</a>
        <Link to="/admin/login">Admin</Link>
      </nav>

      <div className="navbar__actions">
        {token ? (
          <button className="button button--secondary" onClick={handleLogout} title="Logout">
            <LogOut size={16} />
            Logout
          </button>
        ) : (
          <button className="navbar__menu-toggle" aria-label="menu"><Menu /></button>
        )}
      </div>
    </motion.header>
  )
}
