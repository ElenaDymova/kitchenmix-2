    // При смене слайда удаляем класс checked у всех радиокнопок
    function clearCheckedState() {
        document.querySelectorAll('.quiz-type__radio--real').forEach(function (radio) {
            radio.classList.remove('checked');
        });
    }

    // Инициализация первой радиокнопки
    document.querySelector('.quiz-type__radio--real').classList.add('checked');

    // При выборе радиокнопки добавляем класс checked
    document.querySelectorAll('.quiz-type__radio--real').forEach(function (radio) {
        radio.addEventListener('change', function () {
            clearCheckedState();
            if (radio.checked) {
                radio.classList.add('checked');
            }
        });
    });