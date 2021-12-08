console.log('Hey Devs! Lemme know how it looks.');

$(document).ready( () => {
    $('.preloader').fadeOut();
});

var mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$('#sendBtn').click(function (e) {
    e.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let msg = $('#message').val();
    let text = encodeURIComponent(msg);

    let message = name +" having email: "+ email + " says that => " + text;

    let token = "1724343797:AAGPUhvJlUU0gYrr1mzbnmORsssl_dgndE8";
    let chatID = "1149842523";
    
    let telegramAPI = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatID + "&text=" + message;
    
    if (name == "" || email == "" || message == "") {
        alert('All Fields Are Required');
    }
    else {
        let sending = "<i class='fa fa-refresh' id='loading'></i> Sending";
        $('#sendBtn').html(sending);

        $.ajax({
            url: telegramAPI,
            method: 'get',
            responseType: 'json',
            success: function(data) {
                $('#contactForm')[0].reset();
                alert = "<i class='fa fa-check'></i> Message Sent!";
                $('#status').html(alert);
                let sent = "<i class='fa fa-check'></i> Sent";
                $('#sendBtn').html(sent);
            },
            error: function (data) {
                alert = "Failed To Send Message.";
                $('#status').html(alert);
                let failed = "<i class='fa fa-times'></i> Not Sent";
                $('#sendBtn').html(failed);
            },
        });
    }
});