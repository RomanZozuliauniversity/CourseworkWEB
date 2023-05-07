(function () {

    const testimonialsSlides = [
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">Софія Гарсіа</h4>
            <p class="item__citation">Я купував стікери в цьому магазині для своєї колекції та був дуже розчарований. 
            Багато стікерів були дуже прості та неякісно надруковані. Крім того, доставка зайняла дуже багато часу, 
            тому я був не задоволений своїм досвідом покупки.”</p>
            <p class="item__date">15 Квітня, 2022</p>
        </div>`,
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">Анна Лоуренс</h4>
            <p class="item__citation">“Я знайшов у цьому магазині чудові стікери для своєї ноутбук. 
            Вони мають чудовий дизайн та якісний друк. Замовлення прийшло швидко та було добре упаковано. 
            Дуже задоволений своїм покупкою!”</p>
            <p class="item__date">25 Березня, 2022</p>
        </div>`,
        `<div class="content__item">
            <img src="img/decoration.svg" alt="" class="item__decoration">
            <h4 class="item__name">Елізабет Росс</h4>
            <p class="item__citation">"Я дуже задоволений покупкою стікерів у цьому магазині! 
            Вони мають широкий вибір якісних і оригінальних дизайнів, які підійшли мені і моїм друзям.
             Доставка була швидкою та без проблем, а ціна була дуже адекватною. 
             Я точно рекомендую цей магазин всім, хто любить стікери і хоче прикрасити свої речі чудовими додатками."</p>
            <p class="item__date">22 Березня, 2022</p>
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderSlides(testimonialsSlides) {

        const slideContainer = document.querySelector('.testimonials__slide__container');
        slideContainer.innerHTML = testimonialsSlides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= testimonialsSlides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += testimonialsSlides[secondSlideIdx];
        }
    };

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= testimonialsSlides.length) {
            currentSlideIdx = 0;
        };
        renderSlides(testimonialsSlides);
    };

    renderSlides(testimonialsSlides);

    const btnNext = document.querySelector('.carousel__btn__next');
    btnNext.addEventListener('click', nextSlide)


    const btnPrev = document.querySelector('.carousel__btn__prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? testimonialsSlides.length - 1 : currentSlideIdx - 1;
        renderSlides(testimonialsSlides);
    });
setInterval(nextSlide, 3000);

})();