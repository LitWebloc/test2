//menu
$( "#burger2" ).change(function() {
    if(this.checked){
  $("#MainMenu").hide("show",300);
  $("#content").removeClass("l");
} else{
  $("#MainMenu").show();
    $("#content").addClass("l");
}
});