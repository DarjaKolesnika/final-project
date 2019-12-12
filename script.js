// js for validation

var validated = true;

$(".btnSubmit").click(function () {
    var firstName = $("#first-name").val()
    var lastName = $("#last-name").val()
    var password = $("#password").val()
    var password2 = $("#password-confirm").val()
    var country = $("#country").val()


    if (firstName == "" || firstName.length <= 1) {
        $("#first-name-check").val("Please enter valid name")
        $("#first-name").css("border", "solid red")
        validated = false
    }
    else {
        $("#first-name-check").val(" ")
        $("#first-name").css("border", "solid green")
    }

    if (lastName == "" || lastName.length <= 1) {
        $("#last-name-check").val("Please enter valid last name")
        $("#last-name").css("border", "solid red")
        validated = false
    }
    else {
        $("#last-name-check").val(" ")
        $("#last-name").css("border", "solid green")
    }

    if (password == "" || password.length <= 7) {
        $("#password-check").val("Password should contain 8 symbols")
        $("#password").css("border", "solid red")
        validated = false
    }
    else {
        $("#password-check").val(" ")
        $("#password").css("border", "solid green")

    }

    if (password2 == "" || password != password2) {
        $("#password-confirm-check").val("Passwords do not match")
        $("#password-confirm").css("border", "solid red")
        validated = false
    }
    else {
        $("#password-confirm-check").val(" ")
        $("#password-confirm").css("border", "solid green")
    }

    if (country == "" || country.length <= 1) {
        $("#country-check").val("Please enter valid country name")
        $("#country").css("border", "solid red")
        validated = false
    }
    else {
        $("#country-check").val(" ")
        $("#country").css("border", "solid green")
    }
    if (!$("#reg-checkbox").is(':checked')) {
        $("#checkbox-check").val("Please agree with terms and conditions")
        $("#reg-checkbox").css("color", "red")
        validated = false
    }
    else {
        $("#checkbox-check").val(" ")
        $("#reg-checkbox").css("border", "none")
    }

    if (validated) {
        alert("Registration success")
    }
});


// js for chat
$("#btn-chat").click(chat);
$("#btn-input").keydown(function (e) {
    if (e.keyCode == 13) {
        chat();
    }
})

function chat() {
    var newInput = $("#btn-input").val();
    var newName = $("#btn-input-name").val();
    var d = new Date();
    var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes() + ":" +
        d.getSeconds();
    if (newInput != "" && newName != "") {
        var newMsg = $("<li>").html(newInput);
        var span = $("<span>").html(datestring + " user " + "<b>"
            + newName + "</b>" + " wrote:");
        $(".msg-receive ul:last-child").append(span);
        $(".msg-receive ul").append(newMsg);
        $("#btn-input").val("");
        setTimeout(catTalk, 1000);
    }
}

function catTalk() {
    var d = new Date();
    var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes() + ":" +
        d.getSeconds();
    var span = $("<span>").html(datestring + " user <b>kitty</b>" + " wrote:");
    var rand = Math.floor((Math.random() * 10) + 1);
    var newInput = "";
    var meow = " meow";
    for (var i = 0; i <= rand; i++) {
        newInput += meow;
    }
    var newMsg = $("<li>").html(newInput).css("background", "#b3e0ff");
    $(".msg-receive ul:last-child").append(span);
    $(".msg-receive ul").append(newMsg);
}

// hover

$(".small-img").hover(function () {
    var src = $(this).attr('src')
    $(".big-image").attr("src", src)
}
)