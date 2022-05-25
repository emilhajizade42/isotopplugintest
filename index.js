

  var $cardbox = $('.cardbox').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
  });


  
$cardbox.isotope({ filter: '.red' });

// filter .alkali OR .alkaline-earth items
$cardbox.isotope({ filter: '.black' });

// filter .metal AND .transition items


// show all items
$cardbox.isotope({ filter: '*' });
$cardbox.isotope({ filter: '.blue' });


$("ul")