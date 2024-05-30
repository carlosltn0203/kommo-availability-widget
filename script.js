$(document).ready(function() {
    $("#fecha").datepicker();

    $("#buscarDisponibilidad").click(function() {
        var fechaSeleccionada = $("#fecha").val();

        $.ajax({
            url: "https://github.com/carlosltn0203/json-/blob/1698d1d430ec31f1a884a5c29b6cbd8d99bdbade/api/dummy.js",
            method: "GET",
            data: { fecha: fechaSeleccionada },
            success: function(data) {
                mostrarDisponibilidad(data);
            },
            error: function() {
                alert("Error al obtener la disponibilidad");
            }
        });
    });

    function mostrarDisponibilidad(data) {
        var resultadoHTML = "<h2>Disponibilidad para " + data.fecha + "</h2>";
        resultadoHTML += "<ul>";

        $.each(data.personal_disponible, function(index, empleado) {
            resultadoHTML += "<li>";
            resultadoHTML += "<strong>Nombre:</strong> " + empleado.nombre + "<br>";
            resultadoHTML += "<strong>Horario:</strong> " + empleado.horarios.join(", ") + "<br>";
            resultadoHTML += "<strong>ID:</strong> " + empleado.id;
            resultadoHTML += "</li>";
        });

        resultadoHTML += "</ul>";

        $("#resultado").html(resultadoHTML);
    }
});
