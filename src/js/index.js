document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset.valueOf() - 100

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});