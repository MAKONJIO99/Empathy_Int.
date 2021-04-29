//USER SELECTION FORM
$(document).ready(function () {
    $("form#sform").hide();
    $("form#bform").hide();
    $("form#myform").submit(function (event) {
        event.preventDefault()
        var user = $('input[name="person"]:checked').val();

        // alert("you selected" + user);
        if (user == "Sponsor") {
            $("form#sform").fadeIn();
            $("p#user1").html(user).val();
            $("form#bform").fadeOut();

            // $(".login2").hide();
        } else if (user == "Beneficiary") {
            $("#bform").fadeIn();
            $(".user2").html(user).val();
            $("form#sform").fadeOut();
            return false;
            // $(".login").hide();

        } else {
            alert("Select to proceed");
            $("form#sform").hide();
            $("#bform").hide();
            $(".victory>img").addClass("logo2");
            return false;

        }
        $(".victory>img").addClass("logo");
        return true;
    })
})




//SPONSOR FORM
$(document).ready(function () {
    $("form#sform").submit(function (event) {
        event.preventDefault();
        var sfirstname = $("#sfirstname").val();

        var slastname = $("#slastname").val();

        var email = $("#semail").val();

        var phone = $("#sphone").val();

        var password = $("#password").val();

        var confirm = $("#confirm").val();


        var user = {
            sfirstname,
            slastname,
            email,
            phone,
            password,
            confirm
        };

        if (phone.length > 12) {
            // alert("Please enter correct phone number")
            $("#sphone").css("border", "1px solid red");
            $("#sphone").focus();
            return false;
        } else if (phone.length < 10 || phone.length > 12) {
            $("#pp").text("This field is required")
            $("#pp").css("color", "red");
            $("#sphone").focus();
            return false;
        }

        if (sfirstname.length < 1) {
            alert("This field is required")
            return false;
        }
        if ((slastname.length < 1)) {
            alert("This filed is required");
            return false;
        }
        if (password.length < 6) {
            alert("Too short");
            return false;
        }
        if (password != confirm) {
            $("#pp1").text("Password does not match");
            $("#password").css("border", "1px solid red");
            $("#confirm").css("border", "1px solid red");
            $("#pp1").css("color", "red");
            return false


        }
        localStorage.setItem("user", JSON.stringify(user));

        // $("form#sform").hide();
        // $(".login").slideDown();
        window.location.href = "login.html";
        return true;

    })
    //LOGIN FORM
    $(document).ready(function () {
        $(".login").submit(function (event) {
            event.preventDefault();
            var l_email = $("#myemail").val();
            
            var l_password = $("#mypassword").val();

            var userinfo=JSON.parse((localStorage.getItem("user")))
            

            if(l_email!=userinfo.email) {
                alert("Incorect email");
                return false;
            }
            if(l_password!=userinfo.password){
                alert("Incorect password");
                return false;
            }


            // if (l_email.length < 8) {
            //     alert("Incorect email");
            //     return false;
            // }
            // if (l_password.length < 6) {
            //     alert("Incorect password");
            //     return false;
            // }
            window.location.href = "profile.html";
            return true;
        })
    })

})

//BENEFICIARY FORM

$(document).ready(function () {
    $(".login2").hide();
    $("form#bform").submit(function (event) {
        event.preventDefault();
        var bfname = $("#bfirstname").val();
        localStorage.setItem("bfirstname", bfname);
        var blname = $("#blastname").val();
        localStorage.setItem("#blastname", blname);
        var bphone = $("#bphone").val();
        localStorage.setItem("#bphone", bphone);
        var gender = $('input[name="gender"]:checked').val();
        localStorage.setItem("gender", gender);
        var country = $("#bcountry").val();
        localStorage.setItem("country", country);

        if (bfname.length < 1) {
            alert("fill your name");
            return false;
        }
        if (blname.length < 1) {
            alert("Fill your name");
            return false;
        }
        if (bphone.length > 10 || bphone.length < 10) {
            alert("incorect phone");
            return false;
        }
        // $("#bform").hide()
        // $(".login2").slideDown();
        window.location.href = "login.html";
        return true;
    })
})

// $(document).ready(function () {
//     var storedemail = localStorage.getItem("email")
//     console.log(storedemail);
// })