import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      &copy; {new Date().getFullYear()}
      <a
        className={css.footerLink}
        href="https://www.linkedin.com/in/geraldine-mailla-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Geraldine Mailla
      </a>
    </footer>
  );
};
