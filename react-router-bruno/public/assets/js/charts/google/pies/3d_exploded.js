/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - sliced 3D donut
 *
 *  Google Visualization sliced 3D donut chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Sliced 3D donut chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawExploded3d);


// Chart settings
function drawExploded3d() {

    // Data
    var data = google.visualization.arrayToDataTable([
        ['Unidade', 'Acessos'],
        ['7643', 55],
        ['7646', 32],
        ['7639', 46],
        ['2896', 90],
        ['1357', 38],
        ['2419', 20],
        ['7657', 33],
        ['5466', 72],
        ['1103', 33],
        ['852', 29],
        ['1531', 61],
        ['4571', 74],
        ['3296', 52]
    ]);


    // Options
    var options = {
        fontName: 'Roboto',
        height: 300,
        width: 540,
        chartArea: {
            left: 50,
            width: '95%',
            height: '95%'
        },
        is3D: true,
        pieSliceText: 'label',
        slices: {  
            2: {offset: 0.15},
            8: {offset: 0.1},
            10: {offset: 0.15},
            11: {offset: 0.1}
        }
    };


    // Instantiate and draw our chart, passing in some options.
    var pie_3d_exploded = new google.visualization.PieChart($('#google-3d-exploded')[0]);
    pie_3d_exploded.draw(data, options);
}