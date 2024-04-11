$(document).ready(() => {
    const titulos = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit?'
    ]

    for (let j = 1; j < 7; j++) {
        let projeto = `
            <details id='openCloseFaqs${j}'>
                <summary>
                    <span class="title-details">${titulos[j - 1]}</span>
                    <span class="material-symbols-outlined" id='iconsFaqs${j}'>add</span>
                </summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto quidem ipsa natus vitae nobis laborum sint fuga, debitis ducimus sed vel expedita possimus velit accusantium placeat rerum alias ab?</p>
            </details>

        `
        $('.questions').append(projeto);

        const icon = $(`#iconsFaqs${j}`);
        const details = $(`#openCloseFaqs${j}`);

        details.on('toggle', function() {
            if (details.prop('open')) {
                icon.html('remove');
            } else {
                icon.html('add');
            }
        });

    }
 
})





