$("body").css("left","240px");
$( "#burger2" ).change(function() {
    if(this.checked){
  $("#MainMenu").css("left","-240px");
  $("body").css("left","0px");
  $("body").css("width","100%");
} else{
  $("#MainMenu").css("left","0px");
  $("body").css("width","80%");
  $("body").css("left","240px");

}
});