$(document).ready(function() {
    $('.reviews-4').slick({
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 659,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });    
    $("img.panorama").panorama();
});

$(document).ready(function() {
    $("a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }
    update();
});