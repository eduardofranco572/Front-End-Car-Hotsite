$(document).ready(function(){
    var video = $('#video')[0]
    var btncon = 0
    var btnconback = 0
    var pausedAtPosition = false
    var pausedAtPositionPart2 = false

    // funções que fazer a animação das partes do site passando 
    function animatePage() {
        $('.title-start').fadeOut(500, function() {
            $('.title-start').css('display', 'none')
            $('.home').css('display', 'none');
            $('.alignbtnDown').css('display', 'none')
        });

        $('.menu').toggleClass("menuclose")
        video.play()

        setTimeout(function() {
            $('.parts').css('display', 'flex')
        }, 5000)
    }

    function animateMarca(){
        $('#carousel').toggleClass("carouselClose")
        $('#btni').toggleClass("btninfosClose")
        $('#h1i, #pi').fadeOut(700);

        setTimeout(function() {
            $('#parts').css('display', 'none')
            $('.alignbtnDown').css('display', 'none')
            $('.alignbtnTop').css('display', 'none')
        }, 1000)
        
        if (video.paused) {
            video.currentTime = 15
            video.play()
        }

        setTimeout(function() {
            $('.marca').css('display', 'flex')

            setTimeout(function() {
                $('.infos-ar').css('display', 'flex')
                $('.alignbtnDown').css('display', 'flex')
                $('.alignbtnTop').css('display', 'flex')
            }, 3000)

        }, 9000)
    }

    function animateAd(){
        $('#marca').css('transition', '3s')
        $('#marca').css('display', 'none')
        $('#ad').css('display', 'flex')
        $('.alignbtnTop').css('display', 'none');
    }

    function animeteEnd(){
        $('#ad').css('transition', '3s')
        $('#ad').toggleClass("announcementClose")

        setTimeout(function() {
            $('#ad').css('display', 'none')
            $('#logoEnd').css('display', 'flex')
        }, 2000)
      
        if (video.paused) {
            video.currentTime = 26
            video.play()
        }
    }

    function footer(){
        $('#logoEnd').css('display', 'none')
        $('.alignbtn').css('display', 'none')
        $('footer').css('display', 'flex')
        $('.container').css('display', 'none')
    }

    //evento de passar o site com botão
    $('#buttonScroll').click(function() {
        switch (btncon) {
            case 0:
                animatePage()
                btncon++
                break
            case 1:
                animateMarca()
                btncon++
                break
            case 2:
                animateAd()
                btncon++
                break
            case 3:
                animeteEnd()
                btncon++
                break
            case 4:
                footer()
                btncon++
                break
            default:
                console.log(`algum ERRO, contador é: ${btncon}`)
        }
    });

    // funções que fazer a animação das partes do site voltando 
    function backtoHome(){
        $('body').css('background-color', 'rgba(0, 0, 0, 0.8)'); 
        $('body').fadeIn(500);
    
        setTimeout(function() {
            // Esconder elementos existentes gradualmente
            $('main, #parts, .home, .title-start, .alignbtnDown, .alignbtnTop').fadeOut(1000, function() {
                $('.parts, .home, .alignbtnTop').css('display', 'none');
                $('main, .title-start, .alignbtnDown').css('display', 'flex');
                $('.menu').removeClass("menuclose");
    
                // Mostrar elementos com fade-in gradual
                $('body').css('background-color', '');
                $('main, .home, .title-start, .alignbtnDown').fadeIn(1500);
            });

            // Reseta eventos
            setTimeout(function() {
                video.currentTime = 0;
            }, 1000)
            pausedAtPosition = false;
            btncon--;
            btnconback--;
        }, 500); 
    }

    function backtoMarca(){
        $('body').css('background-color', 'rgba(0, 0, 0, 0.8)'); 
        $('body').fadeIn(500);
    
        setTimeout(function() {
            // Esconder elementos existentes gradualmente
            $('main, #parts, .alignbtnDown, .alignbtnTop').fadeOut(1000, function() {
                $('#marca').css('display', 'none');
                $('main, #parts, .alignbtnDown, .h1infos, .pinfos, .alignbtnTop').css('display', 'flex');
    
                // Mostrar elementos com fade-in gradual
                $('body').css('background-color', '');
                $('main, .alignbtnDown').fadeIn(1500);
            });

            // Reseta eventos
            setTimeout(function() {
                video.currentTime = 15;
            }, 1000)
            pausedAtPositionPart2 = false;
            btncon--;
            btnconback--;
        }, 500);   
    }

    $('#buttonScrollBack').click(function() {
        switch(btncon) {
            case 1:
                console.log('voltando para o menu...');
                backtoHome();
                btnconback++;
                break;
            case 2:
                console.log('voltando para o carousel...');
                backtoMarca();
                btnconback++;
                break;
            case 3:
                backtoAd()
                console.log('voltando para o BUY ONE');
                break;
            default:
                console.log('Valor de btncon não reconhecido');
                break;
        }
    });
    

    $(video).on('timeupdate', function(){
        if (video.currentTime >= 15 && !pausedAtPosition) {
            video.pause()
            pausedAtPosition = true
            $('.alignbtnDown').css('display', 'flex')
            $('.alignbtnTop').css('display', 'flex')
        }

        if (video.currentTime >= 26 && !pausedAtPositionPart2){
            video.pause()
            pausedAtPositionPart2 = true
        }
    });

    //scroll suave de div a div
    $('.itens-powe').on('mousewheel', function(event) {
        event.preventDefault();
        var delta = event.originalEvent.deltaY;
        var targetOffset = $('.sponsors').offset().top;
    
        if (delta > 0) { // Verifica se o scroll é para baixo
            $('html, body').stop().animate({
                scrollTop: targetOffset
            }, 1000);
        }
    });

    //cursor personalizado 

    



});

