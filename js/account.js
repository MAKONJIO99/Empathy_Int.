$(document).ready(function () {
    $("form#sform").hide();
    $("form#bform").hide();
    $("form#myform").submit(function (event) {
        event.preventDefault()
        var user = $('input[name="person"]:checked').val();

        // alert("you selected" + user);
        if (user == "Sponsor") {
            $("form#sform").slideDown();
            $("p#user1").html(user).val();
            $("form#bform").hide();
        } else if (user == "Beneficiary") {
            $("#bform").slideDown();
            $(".user2").html(user).val();
            $("form#sform").hide();

        } else {
            alert("Select to proceed");
            $("form#sform").hide();
            $("#bform").hide();

        }
    })
})





$(document).ready(function () {
    $("form#sform").submit(function (event) {
        event.preventDefault();
        var sfirstname = $("#sfirstname").val();
        localStorage.setItem("sfirstname", sfirstname)
        var slastname = $("#slastname").val();
        localStorage.setItem("slastname", slastname)
        var email = $("#email").val();
        localStorage.setItem("#email", email);
        var phone = $("#sphone").val();
        localStorage.setItem("sphone", phone);
        var password = $("#password").val();
        localStorage.setItem("password", password);
        var confirm = $("#confirm").val();
        localStorage.setItem("confirm", confirm);

        if (phone.length > 12) {
            // alert("Please enter correct phone number")
            $("#sphone").css("border", "1px solid red");
            $("#sphone").focus();
            return false;
        } else if (phone.length < 1) {
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

        
        return true;
       



       
        // $("form#sform").hide();




    })
    
})

$(document).ready(function () {
    $(".login").submit(function (event) {
        event.preventDefault();
        var l_email = email;
        var l_password = password;

        if (l_email != email) {
            alert("Incorect email");
        }
        if (l_password != password) {
            alert("Incorect password")
        }
    })
})