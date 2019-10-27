var section = $('.item');

function toggleAccordion() {
    $('.actives span').remove();
  section.removeClass('actives');
  $(this).addClass('actives');
  $('.actives').append("<span>" + "Discover New Amazing Brands" + "<br>" + "& products waiting for you!" + "</span>");
  
}


section.on('click', toggleAccordion);