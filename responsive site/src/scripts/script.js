$(document).ready(function(){
  $("#nav li").click(function(e){
    e.preventDefault();
    $("#nav li.active").removeClass("active");//remove any active class
    $(".main").load("src/tem/hobbies.html", function(){
      alert("hobbies temp loaded.");
    });
  });
});
