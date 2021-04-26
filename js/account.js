$(document).ready(function () {
    $("form#myform").submit(function (event) {
       event.preventDefault()
        var user = $('input[name="person"]:checked').val();
        
        // alert("you selected" + user);
        if (user=="Sponsor"){
            $("form#sform").show();
            $("p#user1").html(user).val();
            $(".card>#bform").hide();
        }else if(user=="Beneficiary"){
            $(".card>#bform").show();
            $(".user2").html(user).val();
            $("form#sform").hide();
            
        }else{
            alert("Select to proceed");

        }
    })
})




$(document).ready(function(){
    $("form#sform").submit(function(){
        // $("#").;
    })
})