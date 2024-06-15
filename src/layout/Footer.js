const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: <a href="mailto:marti.fotograaf@gmail.com">marti.fotograaf@gmail.com</a></p>
        <p>T: <a href="tel:+372 5340 0432">+372 5340 0432</a></p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/martisuvorov.photography/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/marti.suvorov.73">
            <span className="icon fab fa-facebook" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
