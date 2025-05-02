document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.collect-tour_form');
    const findTourBtn = form.querySelector('.button_tour');
    const resetBtn = form.querySelector('.button_reset');
    const ageRadios = form.querySelectorAll('input[name="age"]');
    const licenseCheckbox = form.querySelector('input[name="license"]');
    const phoneInput = form.querySelector('input[name="phone"]');

    ageRadios.forEach((radio, index) => {
        radio.value = index === 0 ? 'yes' : 'no';
    });

    phoneInput.addEventListener('input', function(e) {
        if (e.inputType?.includes('delete')) return;

        let numbers = this.value.replace(/\D/g, '');
        numbers = numbers.substring(0, 11);

        if (!numbers.length) {
            this.value = '+7 (';
            return;
        }

        const match = numbers.substring(1).match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        this.value = `+7 (${match[1]}${match[1]?.length === 3 ? ') ' : ''}${match[2]}${match[2]?.length === 3 ? '-' : ''}${match[3]}${match[3]?.length === 2 ? '-' : ''}${match[4]}`;
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

        const phoneValue = phoneInput.value.replace(/\D/g, '');
        if (phoneValue.length !== 11 || !phoneValue.startsWith('7')) {
            alert('Пожалуйста, введите корректный номер телефона (+7 XXX XXX-XX-XX)');
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

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const input = dropdown.querySelector('.dropdown__input');
        const button = dropdown.querySelector('.dropdown__button');

        const toggleDropdown = () => {
            dropdown.classList.toggle('dropdown--opened');

            document.querySelectorAll('.dropdown--opened').forEach(openedDropdown => {
                if (openedDropdown !== dropdown) {
                    openedDropdown.classList.remove('dropdown--opened');
                }
            });
        };

        [input, button].forEach(el => {
            el.addEventListener('click', toggleDropdown);
        });

        dropdown.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', function() {
                input.value = this.textContent;
                dropdown.classList.remove('dropdown--opened');
            });
        });

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('dropdown--opened');
            }
        });
    });
});
