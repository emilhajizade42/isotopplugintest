
// izotopun tanidilmasi intilaize 
  var $cardbox = $('.cardbox').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
  });


  //  her bir  ul  elementin nin icindeki li ni for each le secir 
let filterBtns = document.querySelectorAll("ul li");
[...filterBtns].forEach(function (btn) {
  btn.onclick  = function (e) {
    console.log(this);
    console.log(this.getAttribute("data-filter"));
    $cardbox.isotope({ filter: this.getAttribute("data-filter") });
  }
})

// testleri  yoxlamaq ucun 9 -17 ci setrleri commente alin ve  sira ile 25 ve 33 u yoxlayin 



// test 1
//  asagidaki hisseni komment den cixarsaq  tekce qirmizilari filter edir  ozu , her hansi click eventi olmadan
// $cardbox.isotope({ filter: '.red' });




// test 2
//  asagidaki hisseni komment den cixarsaq qaralarin filter edir  black id -li element in onclick inde
// document.getElementById('black').onclick = function (e) {
//    $cardbox.isotope({ filter: '.black' });
// }


// bunu her bir li de dene dene etmemek ucun (ama ede bilerik) yeni her bir li ye onclick vermemek ucun bir bir  
// 9 - 17 ci setrlerdeki kod da qisa yaziriq  her birinin data-filer atributuna gore secib 


// qisa ca 
// 1 ) izotopu tanitmaq  bize lazimdi  sadece 2 class ehtiyac var
// 2 ) .cardbox  3 cu setirdeki  yeni parent olacaq olan  elementin classini  gosteririk
// 3 ) 4 cu setr item selector hissesinde ise bir basa chlid i olan elementi  clasini  gosteririk filter edilecekleri yeni
// 4 ) test 1 deki hisse  den de gorunduyu kimi sadece   filere neye gore  filter ederceyini deyirik   
// ornek   $cardbox.isotope({ filter: '.red' });  menasi >>>>>>>  cardbox un icindeki  itemSelectorunda gosterdiyimiz elemetin (evvelde gosterdiyimiz 4 setir) .red classi olanlarina gore filterle
// 