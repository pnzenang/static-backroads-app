import { pageLinks } from '../data';
import { socialLinks } from '../data';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} rel='noreferrer' className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                rel='noreferrer'
                target='_blank'
                className='nav-icon'
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
