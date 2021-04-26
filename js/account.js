$(document).ready(function () {
    $("form#myform").submit(function (event) {
       event.preventDefault()
        var user = $('input[type="radio"]:checked').val();
        $("#user1").text(user);
        // alert("you selected" + user);
    })
})