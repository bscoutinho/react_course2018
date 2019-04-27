/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - chart combinations
 *
 *  Google Visualization combo chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Combo chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCombo);


// Chart settings
function drawCombo() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Ano', 'Varejo', 'Atacado'],
        ['1969',  2,       1],
        ['2008',  1,       1],
        ['2009',  0,       3],
        ['2010',  0,       4],
        ['2011',  0,       2],
        ['2012',  0,       10],
        ['2013',  0,       20],
        ['2014',  0,       41],
        ['2015',  8,       127],
        ['2016',  10,      171],
        ['2017',  3,       37]
    ]);


    // Options
    var options_combo = {
        fontName: 'Roboto',
        height: 400,
        fontSize: 12,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        seriesType: "bars",
        series: {
            5: {
                type: "line",
                pointSize: 5
            }
        },
        tooltip: {
            textStyle: {
                fontName: 'Roboto',
                fontSize: 13
            }
        },
        vAxis: {
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
    var combo = new google.visualization.ComboChart($('#google-combo')[0]);
    combo.draw(data, options_combo);
}


// Resize chart
// ------------------------------

$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawCombo();
    }
});
