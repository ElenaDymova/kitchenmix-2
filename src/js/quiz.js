document.addEventListener("DOMContentLoaded", function() {
    let showNextButton = document.querySelector('.quiz-main__button');
    let quizMain = document.querySelector('.quiz-main');
    let quizType = document.querySelector('.quiz-type');
    let quizTypeButton = document.getElementById("showQuizType");
    let quizDivs = document.querySelectorAll('.quiz__next');
    let currentDivIndex = 0;
    

    showNextButton.addEventListener("click", function() {
        quizMain.style.display = "none";
        quizType.style.display = "block";
    });

    quizTypeButton.addEventListener("click", function() {
        quizType.style.display = "none";

        if (window.innerWidth < 768) {
            // Mobile
            quizMain.style.display = "block";
        } else if (window.innerWidth >= 768 && window.innerWidth < 1140) {
            // Tablet
            quizMain.style.display = "grid";
            quizMain.style.gridTemplateColumns = "354px 1fr";
        } else {
            // Desktop
            quizMain.style.display = "grid";
            quizMain.style.gridTemplateColumns = "620px 1fr";
        }
    });

    function showDiv(index) {
        quizDivs.forEach((div, i) => {
            div.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        if (currentDivIndex < quizDivs.length - 1) {
            currentDivIndex++;
            showDiv(currentDivIndex);
        }
    }

    function prevSlide() {
        if (currentDivIndex > 0) {
            currentDivIndex--;
            showDiv(currentDivIndex);
        }
    }

    document.querySelectorAll('.button__quiz--next').forEach(function (button) {
        button.addEventListener('click', nextSlide);
    });

    document.querySelectorAll('.button__quiz--back').forEach(function (button) {
        button.addEventListener('click', prevSlide);
    });
});




// //quiz
// const quiz = document.querySelector('#quiz');
// const quizItems = Array.from(quiz.children);
// const knowPrice = document.querySelector('.count__button');

// if (knowPrice) {
//     thirstWindow = document.querySelector('.count__calc');
//     secondWindow = document.querySelector('.type');

//     knowPrice.addEventListener("click", function(e){
//         thirstWindow.style.display = "none";
//         secondWindow.style.display = "block";
//     });
// };

// quizItems.forEach(function (section, index) {
//     section.classList.add('hidden');

//     if (index != 0) {
//         section.classList.add('hidden');
//     }

//     section.dataset.index = index;

//     section.addEventListener('click', function () {

//         section.classList.add('hidden');

//         const nextSlideIndex = +section.dataset.index + 1;
//         console.log(nextSlideIndex);

//         const nextSlide = section.querySelector(`[data-index="${nextSlideIndex}"]`);
//         nextSlide.classList.remove('hidden');
//     });
// });