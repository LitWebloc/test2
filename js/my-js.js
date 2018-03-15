
$( "#burger2" ).change(function() {
    if(this.checked){
  $("#MainMenu").css("display","none");
  $("#content").removeClass("l");
} else{
  $("#MainMenu").css("display","inline-block");
    $("#content").addClass("l");
}
});