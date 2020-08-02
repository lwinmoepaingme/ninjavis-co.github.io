$(document).ready(function () {

    anime({
        targets: '#Logo',
        delay: 1000,
        duration: 1500,
        easing: 'easeOutBack',
        opacity: 1,
        translateY: [100, 0]
    });

    var tl = anime.timeline({
        easing: 'easeOutBack',
        targets: '.text',
        delay: function(el, i) { return i * 500 },
        duration: 1000,
        begin: () => {
            var width = window.innerWidth;
            if(width <= 330) {
                $('#animatedText').css('padding-left', '4rem');
                return
            }

            $('#animatedText').css('padding-left', '7rem');
        }
    });
    
    tl
        .add({
            targets: '#vi',
            opacity: 1,
        })
        .add({
            targets: ['#sion'],
            delay: function(el, i) { return 0 },
            opacity: 1,
            translateX: '-3rem'
        })
        .add({
            targets: '#vi',
            opacity: 0,
            complete: function () {
                anime({
                    targets: '#Logo',
                    translateY: [0, -20],
                    duration: 500,
                    easing: 'easeOutBack',
                    direction: 'alternate',
                })
            }
        })
        .add({
            targets: ['#sion', '#mis'],
            delay: function(el, i) { return 0 },
            opacity: 1,
            translateX: '-1rem'
        })
        .add({
            targets: ['#mis', '#sion'],
            delay: function(el, i) { return 0 },
            opacity: 0,
            complete: function () {
                anime({
                    targets: '#Logo',
                    translateY: [0, -20],
                    duration: 500,
                    easing: 'easeOutBack',
                    direction: 'alternate',
                })
            }
        })
        .add({
            targets: ['#service'],
            delay: function(el, i) { return 0 },
            opacity: 1,
            translateX: '-8.5rem',
            complete: () => {
                setTimeout(() => {
                    console.log('Calling')
                    
                    $('#vi').css({
                        transition: 'all 0.5s linear',
                        opacity: 1,
                    })
                    $('#sion').css({
                        transition: 'all 0.5s linear',
                        opacity: 1,
                        transform: `translateX(-3rem)`
                    })

                    $('#service').css({
                        transition: 'all 0.1s linear',
                        opacity: 0,
                    })

                    setTimeout( () => { 

                        $('#animatedText').css('opacity', 0)
                        $('#animatedText').css('padding-left', '3rem')

                        anime({
                            targets: '#Logo',
                            translateY: [0, -20],
                            duration: 1500,
                            direction: 'alternate',
                            easing: 'easeOutBack',
                        })
                        
                        setTimeout(() => {
                            $('#service').hide();
                            $('#animatedText').css({
                                opacity: 1
                            })
                        }, 1000);
                    }, 1000)
                }, 1000)
            }
        });
});