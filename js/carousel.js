$(document).ready(() => {
    const titulos = ['Details, equipments und technical Data| BMW', 'Pure dominance | BMW', 'New BMW X6 Crossover-SUV Has Been Unveiled']

    for (let j = 1; j < 4; j++) {
        let projeto = `
            <div class="cardOne">
                <img src="img/carousel/img${j}.jpg" alt="">
                <h1>${titulos[j - 1]}</h1>
            </div>

        `
        $('.cards').append(projeto);
    }

    const cards = $('.cards');
    const cardWidth = $('.cardOne').outerWidth(true);
    let currentIndex = 0;
    const numCards = Math.ceil($('.cardOne').length / 1); // ceil método arredonda um número para o número inteiro mais próximo.

    function showCards(index) {
        cards.css('transform', 'translateX(' + (-index * cardWidth * 10) + 'px');
    }
    
    $('#prevButton').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            showCards(currentIndex);
            cards.addClass('transition-animation'); 
            setTimeout(() => cards.removeClass('transition-animation'), 500);
        }
    });

    $('#nextButton').click(function() {
        if (currentIndex < numCards - 1) {
            currentIndex++;
            showCards(currentIndex);
            cards.addClass('transition-animation');
            setTimeout(() => cards.removeClass('transition-animation'), 500); 
        }
    });
})
