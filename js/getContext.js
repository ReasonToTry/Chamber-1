/**
 * Created with JetBrains WebStorm.
 * User: jackcrishjr
 * Date: 5/1/14
 * Time: 10:07 PM
 * To change this template use File | Settings | File Templates.
 */

var pMailDB = new Firebase("https://pmail.firebaseio.com/");

/*
  var $marq = $("<marquee></marquee>");
  $marq.html("<h2>Is it working</h2>");
  $(".side-nav").append($marq);
*/

pMailDB.on('child_added', function(snapshot){
  //console.log(snapshot.val());
  for(var i= 0; i<snapshot.val().length; i++ ){
    var $contactItem = $('<li></li>');
    $contactItem.attr("id", i);
    $contactItem.attr("class", "foundContact");
    $contactItem.text(snapshot.val()[i].name);
    $contactItem.appendTo("#contactList");
    console.log("success");
    //console.log(snapshot.val()[i].name);
  }

});

function addContentRows(){
  $('<div class="large-12 columns newPhoto"></div>').appendTo("#contactList");

};






