/* Dashboard Graph Creation */

$(function() {


    // Chart configuration
    // ------------------------------

    // Base
    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });

    // Configuration
    require(

        // Add necessary charts
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],


        // Charts setup
        function (ec, limitless) {

            // Initialize charts
            var line_bar = ec.init(document.getElementById('dashboard_porano'), limitless);

            // Charts options
            line_bar_options = {

                // Setup grid
                grid: {
                    x: 55,
                    x2: 45,
                    y: 35,
                    y2: 25
                },

                // Add custom colors
                color: ['#EF5350', '#03A9F4','#FF7800','#4CAF50'],

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['Comercial','Habitacional','Infraestrutura','Quantidade']
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['2012','2013','2014','2015','2016','2017']
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Valores',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Orders',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Comercial',
                        type: 'bar',
                        data: [20, 49, 70, 232, 64, 33]
                    },
                    {
                        name: 'Habitacional',
                        type: 'bar',
                        data: [26, 59, 90, 264, 60, 23]
                    },
                    {
                        name: 'Infraestrutura',
                        type: 'bar',
                        data: [26, 59, 90, 264, 60, 23]
                    },
                    {
                        name: 'Quantidade',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [20, 22, 33, 45, 120, 62]
                    }
                ]
            };

            // Apply options
            line_bar.setOption(line_bar_options);

            // Resize charts
            window.onresize = function () {
                setTimeout(function (){
                    line_bar.resize();
                }, 200);
            }
        }
    );

});
