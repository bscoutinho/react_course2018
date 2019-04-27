/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - stacked bars
 *
 *  Google Visualization stacked bar chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Stacked bars
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawBarStacked);


// Chart settings
function drawBarStacked() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Ano', 'Varejo', 'Atacado'],
        ['2012',  0,       0],
        ['2013',  0,       983],
        ['2014',  0,       3362],
        ['2015',  14196,   23593],
        ['2016',  10000,   83377],
        ['2017',  0,       111]
    ]);


    // Options
    var options_bar_stacked = {
        fontName: 'Roboto',
        height: 400,
        fontSize: 12,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        isStacked: true,
        tooltip: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 13
            }
        },
        hAxis: {
            gridlines:{
                color: '#e5e5e5',
                count: 10
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                fontSize: 12
            }
        }
    };

    // Draw chart
    var bar_stacked = new google.visualization.BarChart($('#google-bar-stacked')[0]);
    bar_stacked.draw(data, options_bar_stacked);
}


// Resize chart
// ------------------------------

$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawBarStacked();
    }
});
