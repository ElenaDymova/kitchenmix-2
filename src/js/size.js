let ranges = document.querySelectorAll('.quiz-size__range');

ranges.forEach(function(range) {
    let rangeNum = range.closest('.quiz-size__section').querySelector('.quiz-size__number');

    range.oninput = function() {
        rangeNum.textContent = this.value;
    }

    range.addEventListener('input', function() {
       let percentage = (range.value / range.max) * 100;
    
        // Изменяем цвет полосы прогресса в зависимости от значения ползунка
        range.style.background = 'linear-gradient(to right, #FBD846 0%, #FBD846 ' + percentage + '%, #DCDCDC ' + percentage + '%, #DCDCDC 100%)';
      });
});