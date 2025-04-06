export default function Footer() {
  return (
      <footer className="page-footer blue-grey darken-3 footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright <a href='https://t.me/fibboo' target='_blank'>@fibboo</a>
            <a className="grey-text text-lighten-4 right" href="https://github.com/fibboo" target='_blank'>Github</a>
          </div>
        </div>
      </footer>
  );
}