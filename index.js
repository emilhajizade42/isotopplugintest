
// izotopun tanidilmasi
  var $cardbox = $('.cardbox').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
  });


 
let filterBtns = document.querySelectorAll("ul li");
[...filterBtns].forEach(function (btn) {
  btn.onclick  = function (e) {
    console.log(this);
    console.log(this.getAttribute("data-filter"));
    $cardbox.isotope({ filter: this.getAttribute("data-filter") });
  }
})




// $cardbox.isotope({ filter: '.red' });

// // filter .alkali OR .alkaline-earth items
// $cardbox.isotope({ filter: '.black' });

// filter .metal AND .transition items


// // show all items
// $cardbox.isotope({ filter: '*' });
// $cardbox.isotope({ filter: '.blue' });