$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    
    $('.video-block[data-video]').one('click', function() {
        var $this = $(this);
        var width = $this.attr("width");
        var height = $this.attr("height");
        $this.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    $('#testimonial-carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    $('.form-group .form-control').each(function () {
        var a = $(this);
        a.focus(function () {
            $(this).parent().addClass("active");

        }).blur(function () {
            if (a.val() != '') {
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
        if (a.val() != '') {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });

    const links = document.querySelectorAll(".navbar a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    $(".search-btn").click(function(){
        $(this).parent().toggleClass("search-open");
    });
});