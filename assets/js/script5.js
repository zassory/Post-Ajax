$(document).ready(function() {

    let username = "";

    let soloNumeros = /^[0-9]+$/;

    let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    $('#btnEnviar').click(function(e) {
        e.preventDefault();

        $("#error1").text("");

        username = $("#username").val();

        if($('#username').val() === ""){
            $("#error1").text("Debe ingresar su usuario");
            $("#error1").css("color","red");
            return;
        }

        if(!email.test(username)){
            $("#error1").text("El usuario debe ser un email válido");
            $("#error1").css("color","red");
            return;
        }

        console.log("Paso");

        username = $('#username').val();

        let formData = {
            username,
            password: $('#password').val()
        };

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                console.log('Respuesta del servidor:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error al enviar la solicitud:', error);
            }
        });
    });
});
