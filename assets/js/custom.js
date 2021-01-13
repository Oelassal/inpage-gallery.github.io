var arrone = $(".row.arrone").clone();
var hoppe = $(".row.hoppe").clone();
var universal = $(".row.universal.myclass").clone();
var orbita = $(".row.orbita.myclass").clone();
var sealing = $(".row.sealing.myclass").clone();


var arrone_click= $("#arrone");
var hoppe_click= $("#hoppe");
var universal_click= $("#universal");
var orbita_click= $("#orbita");
var sealing_click= $("#sealing");


// arrone
$("#arrone").click(function(){
  $(".row.hoppe").remove();
  $(".row.universal").remove();
  $(".row.orbita").remove();
  $("row.sealing").remove();
  $(hoppe).remove();
  $(universal).remove();
  $(orbita).remove();
  $(sealing).remove();
  $(".scrollz").append(arrone);
  
  })


// hoppe
$("#hoppe").click(function(){
  $(".row.arrone").remove();
  $(".row.universal").remove();
  $(".row.orbita").remove();
  $("row.sealing").remove();
  $(arrone).remove();
  $(universal).remove();
  $(orbita).remove();
  $(sealing).remove();
  $(".scrollz").append(hoppe);
  $(hoppe).css("display","flex");


})

// universal
$("#universal").click(function(){
  $(".row.arrone").remove();
  $(".row.hoppe").remove();
  $(".row.orbita").remove();
  $("row.sealing").remove();
  $(".scrollz").append(universal);
  $(arrone).remove();
  $(hoppe).remove();
  $(orbita).remove();
  $(sealing).remove();
  $(universal).css("display","flex");

})

// orbita
$("#orbita").click(function(){
  $(".row.arrone").remove();
  $(".row.hoppe").remove();
  $(".row.universal").remove();
  $("row.sealing").remove();
  $(".scrollz").append(orbita);
  $(arrone).remove();
  $(universal).remove();
  $(arrone).remove();
  $(sealing).remove();
  $(orbita).css("display","flex");

})

// sealing system
$("#sealing").click(function(){
  $(".row.arrone").remove();
  $(".row.hoppe").remove();
  $(".row.universal").remove();
  $(".row.orbita").remove();
  $(arrone).remove();
  $(universal).remove();
  $(orbita).remove();
  $(hoppe).remove();
  $(".scrollz").append(sealing);
  $(sealing).css("display","flex");

})
