$("#banner img").velocity({ 
  scale: 1.2},
  {delay: 500
});



$(".col-md-3").mouseover(function(){
		$(this).velocity({fontSize: "40px"});
	});	

$(".col-md-3").mouseleave(function(){
		$(this).velocity({fontSize: "30px"});
	});




function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "test123" && form.pswrd.value == "12345") {
                    window.open('member.html')/*opens the target page while Id & password matches*/
                }
                else {
                    sweetAlert("Incorrect Password or Username")/*displays error message*/
                }
            }



