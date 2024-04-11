$(document).ready(() => {
    const icones = [
        '<i class="fa-brands fa-apple"></i>',
        '<i class="fa-brands fa-paypal"></i>',
        '<i class="fa-brands fa-dribbble"></i>',
        '<i class="fa-brands fa-amazon"></i>',
        '<i class="fa-brands fa-hire-a-helper"></i>',
        '<i class="fa-brands fa-meta"></i>',
        '<i class="fa-brands fa-tiktok"></i>',
    ];

    const iconesC2 = [
        '<i class="fa-brands fa-stripe"></i>',
        '<i class="fa-brands fa-airbnb"></i>',
        '<i class="fa-brands fa-pinterest"></i>',
        '<i class="fa-brands fa-xbox"></i>',
        '<i class="fa-brands fa-threads"></i>',
        '<i class="fa-brands fa-opensuse"></i>',
        '<i class="fa-brands fa-neos"></i>',
    ];

    function adicionarIcones(arrayIcones, classeDiv) {
        const iconesDuplicados = arrayIcones.concat(arrayIcones); // Duplicar os ícones
        iconesDuplicados.forEach((icone) => {
            let projeto = `<div class="${classeDiv}">${icone}</div>`;
            $(`.carouselrow${classeDiv}`).append(projeto);
        });
    }

    adicionarIcones(icones, 'RSP');
    adicionarIcones(iconesC2, 'RightRSP');
});

