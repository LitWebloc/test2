
//menu
$( "#burger2" ).change(function() {
    if(this.checked){
  $("#MainMenu").hide(50);
  $("#content").removeClass("l");
} else{
  $("#MainMenu").show(50);
    $("#content").addClass("l");
}
});
