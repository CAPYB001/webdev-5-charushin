import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">OM</span>
          OMDB Movies
        </Link>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Поиск
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

