/* ------------------------------------------------------------------------------
 *
 *  # C3.js - bars and pies
 *
 *  Demo setup of bars, pies and chart combinations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Dashboard - Recuperações Judiciais Requeridas por Ano CAIXA
    // ------------------------------

    // Generate chart
    var combined_chart = c3.generate({
        bindto: '#c3-combined-chart',
        size: { height: 400 },
        color: {
            pattern: [ '#286fa8', '#ff7800', '#009688']
        },
        data: {
            columns: [
                ['Varejo', 2, 3, 0, 0, 0, 0, 0, 15, 20, 10],
                ['Atacado', 0, 0, 4, 5, 10, 20, 41, 112, 151, 27],
                ['Total', 2, 3, 4, 5, 10, 20, 41, 127, 171, 37],
            ],
            type: 'bar',
            types: {
                Total: 'spline',
            },
            groups: [
                ['Atacado','Varejo']
            ]
        }
    });


    // Resize chart on sidebar width change
    $(".sidebar-control").on('click', function() {
        pie_chart.resize();
        donut_chart.resize();
        bar_chart.resize();
        bar_stacked_chart.resize();
        combined_chart.resize();
        scatter_chart.resize();
    });
});