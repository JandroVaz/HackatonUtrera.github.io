$(document).ready(inicializarEventos);

function inicializarEventos() {
    pintarMapa();
    dialog();
    $("#opener").on("click", function() {
        $("#dialog").dialog("open");
    });

}

function dialog() {
    $(function() {
        $("#dialog").dialog({

            autoOpen: false,
            title: "Ubicacion del concurso",
            width: 500,
            maxWidth: 500,
            height: 420,
            maxHeight: 420,
            resizable: true,
            modal: true,
            fluid: true,
            show: {
                effect: "blind",
                duration: 100
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });
    });
};

function pintarMapa() {
    var cajaMapa = $("#mapaGoogleMaps");
    // $(".ui-dialog-titlebar").css("background-color","#001A46")
    cajaMapa.append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.7105727621833!2d-5.780909149399512!3d37.183348653639314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd127f0ea7440cdf%3A0xf9fa588c67a65cf0!2sCasa%20Surga!5e0!3m2!1ses!2ses!4v1643838853181!5m2!1ses!2ses" width="450" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
}


$(window).resize(function() {
    fluidDialog();
});

// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function(event, ui) {
    fluidDialog();
});

function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function() {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50)) {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    });

}