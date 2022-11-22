const swiper = new Swiper('.swiper', {

    speed: 400,
    spaceBetween: 100,
    effect: 'cards',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*BUTTON*/

const btnUp = {
    el: document.querySelector('.button'),
    show() {
        this.el.classList.remove('button-hide');
    },
    hide() {
        this.el.classList.add('button-hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollHeight;
            scrollY > 2000 ? this.hide() : this.show();
        });
        document.querySelector('.button').onclick = () => {
            window.scrollTo({
                top: 10000,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

/*TIMER */
document.addEventListener('DOMContentLoaded', function() {
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const hours = 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 30 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;


        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

        $hours.dataset.title = declensionNum(hours, ['часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});