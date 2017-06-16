$(document).ready(function() {

    var showApp = $('.showApp')
    var showWin = $('.showWin')



    var winLists = $('.win-lists')
    var winitem = $('.win-item')


    var appBar = $('.app-bar')
    var appItems = $('.app-items')
    var appItem = $('.app-item')
    var winBar = $('.win-bar')


    var showList = $('.showList')


    winitem.each(function(index, item) {
        var winIndex = 'win' + (index + 1)

        $(this).addClass(winIndex)

        var rw = (Math.random() * 40 + 10).toFixed(0) + 'vw'
        var rh = (Math.random() * 40 + 10).toFixed(0) + 'vh'

        console.log('rw is: ' + rw)
        console.log('rh is: ' + rh)

        // TweenMax.set($(this), { width: 'relative' });
        // TweenMax.set($(this), { left: rw * 100, top: rh * 100, rgb: 'Ma' });




        // $(this).css("width", rw);
        // $(this).css("height", rh);

    })


    //SHOW WIN


    showWin.click(function() {

        var winListsW = winLists.width()
        var winitemW = winitem.width()
        var winitemL = winitem.length

        if (winitemL < 7) {

            winitemL = 2
        }
        if (winitemL > 9) {

            winitemL = 3
        }

        // console.log(winListsW)





        if ($(this).hasClass('active')) {

            winitem.each(function(index, item) {

                var thisW = $(this).width()

                var winRatioR = winitemW / thisW

                console.log(winRatioR)

                TweenMax.to($(this), 0.3, {
                    scale: winRatioR,
                    ease: Elastic.easeIn.config(1, 0.3),
                }, 0.05);

            })

            $(this).toggleClass('active')

        } else {




            winitem.each(function(index, item) {

                var thisW = $(this).width()
                var normalW = winListsW / winitemL

                var winRatio = normalW / thisW


                console.log('re: ' + thisW / normalW)

                if (thisW > normalW) {
                    TweenMax.to($(this), 0.3, {
                        scale: winRatio,
                        ease: Elastic.easeOut.config(1, 0.3),
                    }, 0.05);

                } else {

                }



            })


            $(this).toggleClass('active')
        }

    })










    // SHOW APP


    tlBar = new TimelineLite()
    tlApp = new TimelineLite()

    var appItemsW = appItems.width()

    showApp.click(function() {



        if ($(this).hasClass('active')) {

            $('.date').css("display", "block");
            $(".funItems").css("display", "none");

            appOff()


            $(this).toggleClass('active')

        } else {




            TweenMax.set($('.view'), {
                display: 'none'
            });

            $('.date').css("display", "none");

            $(".funItems").css("display", "block");
            TweenMax.from([$(".funItems")], 0.3, {
                y: -100,
                opacity: 0,
                ease: Power1.easeOut,
            })
            appOn()

            $(this).toggleClass('active')
        }

    })


    $('.app-list').click(function() {

        var appW = $(this).width()
        var appH = $(this).height()

        var appX = ($(this).offset().left - appW / 2) - ($('.view').offset().left + $('.view').width() / 2)
        var appY = ($(this).offset().top + appH / 2) - ($('.view').offset().top + $('.view').height() / 2)



        $('.view').css("display", 'block');
        TweenMax.from($('.view'), 0.3, {
            width: appW,
            height: appH,
            x: appX,
            y: appY,
            opacity: 1,
            ease: Power1.easeIn
        });

        appOff()
        showApp.removeClass('active')



        if ($(this).hasClass('files')) {

        } else {

            // console.log('no files')
        }



    })



    // var apptl = new TimelineMax();
    // var blurBg = new TimelineMax();
    // apptl.staggerFromTo($('.app-list'), 0.3, { opacity: 0, scale: 0, y: window.innerHeight }, { opacity: 1, scale: 1, y: 0, ease: Expo.easeOut, }, 0.01).pause();

    var apptl = new TimelineMax()
    var blurBg = TweenLite.to($('.bgimg'), 0.3, {
        filter: "blur(22px)"
    }).pause();

    showList.click(function(e) {

        if ($(this).hasClass('active')) {

            apptl.staggerFromTo($('.app-list'), 0.3, {
                opacity: 1,
                scale: 1,
                y: 0
            }, {
                opacity: 0,
                scale: 0,
                y: -window.innerHeight,
                ease: Expo.easeIn,
                onComplete: unBlur
            }, 0.01)

            function unBlur() {
                blurBg.reverse();
            }

            $(this).toggleClass('active')
        } else {

            apptl.staggerFromTo($('.app-list'), 0.3, {
                opacity: 0,
                scale: 0,
                y: window.innerHeight
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: Expo.easeOut,
            }, 0.01)

            blurBg.play();

            $(this).toggleClass('active')
        }
    })


    $('.fp-tableCell').click(function(e) {

        if ($(this).hasClass('active')) {

            apptl.staggerFromTo($('.app-list'), 0.3, {
                opacity: 1,
                scale: 1,
                y: 0
            }, {
                opacity: 0,
                scale: 0,
                y: -window.innerHeight,
                ease: Expo.easeIn,
                onComplete: unBlur
            }, 0.01)

            function unBlur() {
                blurBg.reverse();
            }

            $(this).toggleClass('active')
        } else {

            apptl.staggerFromTo($('.app-list'), 0.3, {
                opacity: 0,
                scale: 0,
                y: window.innerHeight
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: Expo.easeOut,
            }, 0.01)

            blurBg.play();

            $(this).toggleClass('active')
        }
    })




    // $('.app-list').mouseover(function() {
    //     TweenMax.to($(this).children(), 0.8, {
    //         scale: 1.3,
    //         ease: Elastic.easeOut.config(1, 0.3)
    //     });
    // })









    // $('.searchicon').hover(searchOver, searchOut);

    // function searchOver() {

    //     TweenMax.set($('.searchbox'), { display: 'block' });

    //     TweenMax.from($('.searchbox'), 0.8, {
    //         width: 320,
    //         ease: Elastic.easeOut.config(1, 0.3)
    //     });
    // }

    // function searchOut() {
    //     TweenMax.set($('.searchbox'), { display: 'none' });
    // }






    $('.app-list').hover(appOver, appOut);
    appItem.hover(appOver, appOut);

    function appOver() {


        TweenMax.to($(this).children(), 0.8, {
            scale: 1.3,
            ease: Elastic.easeOut.config(1, 0.3)
        });
    }

    function appOut() {
        TweenMax.to($(this).siblings().children(), 0.8, {
            scale: 1
        });
    }




    var apptm = new TimelineMax();

    var appItemL = appItem.length;
    var expandW = 100 / appItemL + 3;
    TweenMax.set(appItem, {
        height: 100 / appItemL + '%'
    });


    appItem.hover(over, out);



    function over() {
        TweenMax.to($(this), 0.3, {
            height: expandW + '%'
        });
        TweenMax.to($(this).siblings(), 0.3, {
            height: (100 - expandW) / (appItemL - 1) + '%'
        })
    }

    function out() {
        TweenMax.to(appItem, 0.3, {
            height: 100 / appItemL + '%',
            ease: Back.easeOut
        })
    }




    var funItemL = $('.funItem').length;
    var funExpandW = 100 / funItemL + 10;

    TweenMax.set($('.funItem'), {
        width: 100 / funItemL + '%'
    });

    $('.funItem').hover(funOver, funOut);


    function funOver() {
        TweenMax.to($(this), 0.3, {
            width: funExpandW + '%'
        });
        TweenMax.to($(this).siblings(), 0.3, {
            width: (100 - funExpandW) / (funItemL - 1) + '%'
        })
    }

    function funOut() {
        TweenMax.to($('.funItem'), 0.3, {
            width: 100 / funItemL + '%',
            ease: Back.easeOut
        })

    }





    $('#fullpage').fullpage({

        onLeave: function(index, nextIndex, direction) {

        },


    });




    $('.app-list').click(function(event) {

        var cw = $(this).parent().width()
        var gw = $(this).width()
        var colNum = cw / gw

        // var index = $(this).index() + 1

        // var insertNum = Math.ceil(index / colNum) * colNum.toFixed(0) - 1

        // console.log('colNum is: ' + colNum.toFixed(0))
        // console.log('index is: ' + index)
        // console.log('insertNum is: ' + insertNum)

        // if ($(this).hasClass('expand')) {

        //     TweenMax.to($(this), 0.3, { width: gw });

        //     console.log('have expand')

        //     $(this).toggleClass('expand')

        // } else {

        //     console.log('no expand')

        //     TweenMax.to($(this), 0.3, { width: '100%' });

        //     $(this).toggleClass('expand')

        // }




        // console.log($('.app-list')[insertNum])
    })

















    //FUNCTIONS

    function appOff() {

        TweenMax.to([appItems], 0.3, {
            x: -appItemsW,
            ease: Power2.easeOut,
        })

        TweenMax.to([winBar], 0.3, {
            x: 0,
            ease: Power2.easeOut,
        })

        TweenMax.to($('.bgimg'), 0.3, {
            opacity: 1,
            ease: Power2.easeOut,
        })

        TweenMax.staggerTo(appItem, 0.8, {
            scale: 0,
            ease: Power2.easeIn,
        }, 0.05);

        apptl.staggerFromTo($('.app-list'), 0.3, {
            opacity: 1,
            scale: 1,
            y: 0
        }, {
            opacity: 0,
            scale: 0,
            y: -window.innerHeight,
            ease: Expo.easeIn,
            onComplete: unBlur
        }, 0.01)


        function unBlur() {
            blurBg.reverse();
        }
    }

    function appOn() {



        TweenMax.to([appItems], 0.3, {
            x: appItemsW,
            ease: Power2.easeOut,
        })


        TweenMax.to([winBar], 0.3, {
            x: -100,
            ease: Power2.easeOut,
        })

        TweenMax.to($('.bgimg'), 0.3, {
            opacity: 0.5,
            ease: Power2.easeOut,
        })

        TweenMax.set(appItem, {
            scale: 0,
        });

        TweenMax.staggerTo(appItem, 0.8, {
            scale: 1,
            ease: Power2.easeOut,
        }, 0.05);

        apptl.staggerFromTo($('.app-list'), 0.3, {
            opacity: 0,
            scale: 0,
            y: window.innerHeight
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: Expo.easeOut,
        }, 0.01)
        blurBg.play();

    }





    //GET SLIDER $('.app-list')











    Reveal.initialize({
        mouseWheel: true,
        controls: false,

        width: "80%",
        height: "100%",
        margin: 0,
        minScale: 1,
        maxScale: 1,
        transitionSpeed: 'slow', // default/fast/slow
        // rtl: true,

        // loop: true,

        // Parallax background image
        // parallaxBackgroundImage: '/static/img/bg/bg.png',

        // parallaxBackgroundHorizontal: 50,
        // parallaxBackgroundVertical: 50,



    });





});