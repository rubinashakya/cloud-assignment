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
    
    $('form[id="contact-form"]').on('submit', function(event){
        event.preventDefault();
    })

    $.validator.methods.phone = function( value, element ) {
        return this.optional( element ) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test( value );
    }


    $('form[id="contact-form"]').validate({
        rules: {
            firstname: 'required',
            lastname: 'required',
            emailid: {
                required: true,
                email: true,
            },
            companyname: {
                required: true,
                minlength: 3
            },
            jobtitle: 'required',
            phonenumber: {
                phone: true
            }
        },
        messages: {
            firstname: 'This field is required',
            lastname: 'This field is required',
            emailid: 'Enter a valid email',
            companyname: 'This field is reqired',
            jobtitle: 'This field is required',
            phonenumber: 'Must be a valid phone number',
        },
        
        errorElement : 'span',
        errorLabelContainer: '.errorTxt',
        submitHandler: function(form) {
            form.submit();
        }
    });
    // $(function() {
    // // Initialize form validation on the registration form.
    // // It has the name attribute "registration"
    // $(".contact-form").validate({
    //     // Specify validation rules
    //     rules: {
    //     // The key name on the left side is the name attribute
    //     // of an input field. Validation rules are defined
    //     // on the right side
    //     firstname: "required",
    //     lastname: "required",
    //     emailid: {
    //         required: true,
    //         // Specify that email should be validated
    //         // by the built-in "email" rule
    //         email: true
    //     },
    //     companyname: {
    //         required: true,
    //         minlength: 3
    //     },
    //     jobtitle: "required",
    //     phonenumber: {
    //         matches: "/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/"
    //     }
    //     },
    //     // Specify validation error messages
    //     messages: {
    //     firstname: "Please enter your firstname",
    //     lastname: "Please enter your lastname",
    //     email: "Please enter a valid email address"
    //     },
    //     // Make sure the form is submitted to the destination defined
    //     // in the "action" attribute of the form when valid
    //     submitHandler: function(form) {
    //     form.submit();
    //     }
    // });
    // });
});