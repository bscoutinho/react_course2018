$(function() {

    // Switchery toggles
    // ------------------------------

    var switches = Array.prototype.slice.call(document.querySelectorAll('.switch'));
    switches.forEach(function(html) {
        var switchery = new Switchery(html, {color: '#286fa8'});
    });

});

$(function() {

    // Primary file input
    $(".file-styled-primary").uniform({
        fileButtonClass: 'action btn btn-warning',
        fileButtonHtml:"Escolher Arquivo",
        fileDefaultHtml:"Nenhum arquivo selecionado",
    });

});

/* Locale Pt-BR Highcharts */
var highchartsOptions = Highcharts.setOptions({
        lang: {
            loading: 'Aguarde...',
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            exportButtonTitle: "Exportar",
            printButtonTitle: "Imprimir",
            rangeSelectorFrom: "De",
            rangeSelectorTo: "Até",
            rangeSelectorZoom: "Periodo",
            printChart: 'Imprimir Gráfico',
            downloadPNG: 'Download imagem PNG',
            downloadJPEG: 'Download imagem JPEG',
            downloadPDF: 'Download documento PDF',
            downloadSVG: 'Download imagem SVG'
            // resetZoom: "Reset",
            // resetZoomTitle: "Reset,
            // thousandsSep: ".",
            // decimalPoint: ','
        }
    }
);
