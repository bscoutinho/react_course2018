/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - lines
 *
 *  Google Visualization line chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Line chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawLineChart);


// Chart settings
function drawLineChart() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Acessos', 'Usuários', 'Unidades'],
        ['01/10/17', 21, 6],
        ['03/10/17', 16, 6],
        ['05/10/17', 19, 5],
        ['07/10/17', 14, 5],
        ['09/10/17', 15, 4],
        ['11/10/17', 20, 5],
        ['13/10/17', 16, 3],
        ['15/10/17', 30, 4],
        ['17/10/17', 24, 5],
        ['19/10/17', 21, 5],
        ['21/10/17', 18, 5],
        ['23/10/17', 12, 5],
        ['25/10/17', 11, 3],
        ['27/10/17', 17, 6],
        ['29/10/17', 12, 5],
        ['01/11/17', 22, 5],
        ['03/11/17', 18, 6],
        ['05/11/17', 17, 6],
        ['07/11/17', 21, 7],
        ['09/11/17', 23, 8]
    ]);

    // Options
    var options = {
        fontName: 'Roboto',
        height: 400,
        curveType: 'function',
        fontSize: 12,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        pointSize: 4,
        tooltip: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 13
            }
        },
        vAxis: {
            title: 'Acessos por Dia',
            titleTextStyle: {
                fontSize: 13,
                italic: false
            },
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
    var line_chart = new google.visualization.LineChart($('#google-line')[0]);
    line_chart.draw(data, options);
}


// Resize chart
// ------------------------------

$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawLineChart();
    }
});
