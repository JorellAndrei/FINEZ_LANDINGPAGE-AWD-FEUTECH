function displayMessage() {
    var emailInput = document.getElementById("exampleInputEmail1");

    if (emailInput.hasAttribute('required')) {
        window.alert("Please enter your email address.");
        event.preventDefault();
    } else {
        window.alert("Thank you for subscribing to our newsletter!");
    }
}

function direct() {
    window.open("https://youtu.be/Q-hRbywxORk");
}

const plans = document.querySelectorAll('.card');
plans.forEach(plan => {
    plan.addEventListener('click', function() {
        plans.forEach(p => p.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});