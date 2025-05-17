window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;
    const header = document.querySelector('.header');
    const isScrolled = scrollTop > 450;

    header.style.position = isScrolled ? 'fixed' : 'absolute';
    header.style.backdropFilter = isScrolled ? 'blur(10px)' : 'none';

    document.querySelectorAll('.header_logo, .header_logo-mobile').forEach(el => {
        el.style.filter = isScrolled ? 'brightness(0)' : 'brightness(1)';
    });

    document.querySelectorAll('.header_nav-link, .header_phone').forEach(el => {
        el.style.color = isScrolled ? 'var(--black)' : 'var(--white)';
        if(isScrolled){
            el.classList.add('header_nav-link_black');
            el.classList.remove('header_nav-link_white');
        }
        else {
            el.classList.add('header_nav-link_white');
            el.classList.remove('header_nav-link_black');
        }
    });
});