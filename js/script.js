let index = 1;
let length = $('.testimonials__info>*').length
let item = $('.testimonials__item');
let direccion;
$('.testimonial__button--prev').on('click', function(e) {
    e.preventDefault();
    direccion = 'Right';
    if (index === 1) {
        index = length;
    } else {
        index--;
    }
    move();
});
$('.testimonial__button--next').on('click', function(e) {
    e.preventDefault();
    direccion = 'Left';
    if (index === length) {
        index = 1;
    } else {
        index++;
    }
    move();
});

function move() {

    item.each(function() {
        let attrItem = $(this).attr('item');
        if (attrItem == index) {
            $(this).removeClass('hideLeft hideRight showLeft showRight').addClass('show' + direccion)
        } else {
            $(this).removeClass('hideLeft hideRight showLeft showRight').addClass('hide' + direccion)
        }
    })
}