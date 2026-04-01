import { APP_NAME } from '../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{APP_NAME}</strong>
          <p>Find your dream home today.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
        <div className="footer-copy">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
