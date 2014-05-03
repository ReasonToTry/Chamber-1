

var wineDB = new Firebase("https://winetrackerist.firebaseio.com");
$("#submitWine").click(function(){
  var test = document.getElementById("testCanvas");
  var photoOf = test.toDataURL("image/png");
  //var photoOf = photo.getAttribute('src');
  var producer = $("#producer-label").val();
  var styleOf = $("#styleOf-label").val();
  var year = $("#year-label").val();
  var rating = $("input:radio[name=rate]:checked").val();
  var description = $("#description-label").val();
  wineDB.push({
    photo: photoOf,
    producer: producer,
    styleOf: styleOf,
    rating: rating,
    year: year,
    description: description
  });
  return false;          //This just prevents the screen from moving all over the place when clicked
});

wineDB.on('child_added', function(snapshot){
  var wines = snapshot.val();
  addContentRows();
  addPhoto(wines.photo);
  displayWines(wines.producer, wines.styleOf, wines.rating, wines.year, wines.description);

});
function addContentRows(){
  $('<div class="row newWine"><div class="large-2 columns newPhoto"><img class="newestPhoto" src="#"/></div><div class="large-10 columns details"></div></div>').appendTo("#output");

};

function addPhoto(photoOf){
  $(".newestPhoto:last").attr("src", photoOf);
  //make sure the attribute you are changing is put in quotes
};

function displayWines(producer, styleOf, year, rating, description) {
  $('.details:last').text(producer + ": " + styleOf+': ' + year + " | "+ rating + " | "+ description);
}

/*var streaming = false,
 video        = document.querySelector('#video'),
 cover        = document.querySelector('#cover'),
 canvas       = document.querySelector('#canvas'),
 photo        = document.querySelector('#photo'),
 startbutton  = document.querySelector('#startbutton'),
 width= 300,
 height = 0;

 navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia ||
 navigator.mozGetUserMedia || navigator.msGetUserMedia)

 navigator.getMedia(
 {
 video: true,
 audio: false
 },
 function(stream) {
 if (navigator.mozGetUserMedia) {
 video.mozSrcObject = stream;
 } else {
 var vendorURL = window.URL || window.webkitURL;
 video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
 }
 video.play();
 },
 function(err) {
 console.log("An error occured! " + err);
 }
 );
 */

/*
 startbutton.addEventListener('click' , function(ev){
 takepicture();
 ev.preventDefault();
 }, false);
 */

var input = document.querySelector('input[type=file]');
var x = document.getElementById("canvas");


input.onchange = function () {
  var file = input.files[0];

  //upload(file);
  drawOnCanvas(file);   // see Example 6
  //displayAsImage(file); // see Example 7
};

function drawOnCanvas(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var dataURL = e.target.result,
        c = document.querySelector('canvas'), // see Example 4
        ctx = c.getContext('2d'),
        img = new Image();

    img.onload = function() {
      c.width = img.width/2;
      c.height = img.height/2;
      ctx.drawImage(img, 0, 0, c.width, c.height);
    };

    img.src = dataURL;
  };

  reader.readAsDataURL(file);
}




	