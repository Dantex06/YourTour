window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;
    const header = document.querySelector('.header');
    const isScrolled = scrollTop > 450;

    header.style.position = isScrolled ? 'fixed' : 'absolute';
    header.style.backdropFilter = isScrolled ? 'blur(10px)' : 'none';

    document.querySelector('.header_logo').src = isScrolled
        ? '../../assets/icons/logo-dark.svg'
        : '../../assets/icons/logo.svg';

    document.querySelectorAll('.header_nav-link, .header_phone').forEach(el => {
        el.style.color = isScrolled ? 'var(--black)' : 'var(--white)';
    });
});