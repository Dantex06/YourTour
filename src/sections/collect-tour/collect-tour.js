document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.collect-tour_form');
    const findTourBtn = form.querySelector('.button_tour');
    const resetBtn = form.querySelector('.button_reset');
    const ageRadios = form.querySelectorAll('input[name="age"]');
    const licenseCheckbox = form.querySelector('input[name="license"]');

    ageRadios.forEach((radio, index) => {
        radio.value = index === 0 ? 'yes' : 'no';
    });

    findTourBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (!licenseCheckbox.checked) {
            alert('Пожалуйста, примите условия Лицензионного договора');
            return;
        }

        const selectedAge = form.querySelector('input[name="age"]:checked');
        if (!selectedAge) {
            alert('Пожалуйста, укажите, есть ли вам 18 лет');
            return;
        }

        if (selectedAge.value === 'no') {
            alert('Извините, вы должны быть совершеннолетним для поиска тура');
            return;
        }

        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());

        console.log('Данные формы:', formValues);

    });

    resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        form.reset();
    });
});