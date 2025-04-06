export default function Footer() {
  return (
      <footer className="page-footer blue-grey darken-3 footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright @fibboo
            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
          </div>
        </div>
      </footer>
  );
}