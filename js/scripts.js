$.backstretch("img/field.jpg");

var toggleInfo = function(){
  $('#info-tag').toggle();
};

var toggleWormDescription = function(){
  $('#apeworm-description').slideToggle();
  $('#worm-chevron').toggleClass("fa-chevron-down fa-chevron-up");
}

var toggleHummediaDescription = function(){
  $('#hummedia-description').slideToggle();
  toggleChevron($('#hummedia-chevron'));
}

var toggleApeDescription = function(){
  $('#ape-description').slideToggle();
  toggleChevron($('#ape-chevron'));	
}