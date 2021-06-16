$(function(){
//3. Selector de Id. Evento boton enviar correo. alerta
    $("#correo").click(function(){
        alert("El correo fue enviado correctamente");
    });
//4. Selectores de etiqueta. On y modificación de css
    $("h3").on("dblclick",function(){
        $(this).css({color:"red"});
    });

    $("h3").on("dblclick",function(){
        $(this).css({color:"red"});
    });

//5. Selector de clase. Toggle en tarjetas
    $(".tarjeta1").click(function(){
        $(".contenido1").toggle();
    })
    $(".tarjeta2").click(function(){
        $(".contenido2").toggle();
    })
    $(".tarjeta3").click(function(){
        $(".contenido3").toggle();
    })
})