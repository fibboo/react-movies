export default function Header() {
  return (
      <nav className="blue-grey darken-2">
        <div className="nav-wrapper">
          <a href="/react-movies" className="brand-logo"><i className="material-icons">live_tv</i>Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/fibboo" target='_blank'>Github</a></li>
          </ul>
        </div>
      </nav>
  )
}
