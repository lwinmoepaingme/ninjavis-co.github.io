

$(document).ready(function () {
    navbarControl();
    firstSectionAnimation();
    secondSectionAnimation();
    phoneAnimation();
});

function firstSectionAnimation () {
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
            // var width = window.innerWidth;

            $('#animatedText').css('padding-left', '8rem');
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
            translateX: '-3.2rem'
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
                        transform: `translateX(-3.2rem)`
                    })

                    $('#service').css({
                        transition: 'all 0.1s linear',
                        opacity: 0,
                    })

                    setTimeout( () => { 

                        $('#animatedText').css('opacity', 0)
                        $('#animatedText').css('padding-left', '2.5rem')

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
}

function navbarControl() {
    $('#MobileNav').click( function (){
        anime({
            targets: '#MobileNavView',
            delay: 300,
            duration: 600,
            easing: 'easeOutQuint',
            translateX: '0%'
        })
    })

    $('#CloseNavbar').click( function (){
        anime({
            targets: '#MobileNavView',
            delay: 300,
            duration: 600,
            easing: 'easeOutQuint',
            translateX: '-100%'
        })
    })
}

function secondSectionAnimation () {
    anime({
        targets: '.myCard',
        delay: function(el, i) { return i * 500 },
        duration: 1200,
        easing: 'easeOutQuint',
        translateY: [0, -100],
        complete: function () {
            $('.myCard').each(function (v) {
                $(this).hover(function () {
                    anime({
                        targets: this,
                        scale: [1, 1.05]
                    })
                },
                function () {
                    anime({
                        targets: this,
                        scale: [1.05, 1]
                    })
                })
            })
        }
    })

    
}

function phoneAnimation () {
    $('.imgRow > img').each(function (v) {
        $(this).hover(function () {
            anime({
                targets: this,
                translateY: [0, -10]
            })
        },
        function () {
            anime({
                targets: this,
                translateY: [-10, 0]
            })
        })
    })
}