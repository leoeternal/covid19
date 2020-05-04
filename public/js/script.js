$("#data-graph1").hide();
$("#data-graph2").hide();
$("#data-graph3").hide();
$("#data-graph4").hide();
$("#data-graph5").hide();
$("#data-graph6").hide();
$("#data-graph7").hide();
$("#data-graph8").hide();
$("#data-graph9").hide();
$("#data-graph10").hide();
$("#data-graph11").hide();
$("#data-graph12").hide();

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark",
        title:{
            text: "Total Deaths graph of last 12 days"
        },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                { y: Number($("#data-graph12").text()) },
                { y: Number($("#data-graph11").text())},
                { y: Number($("#data-graph10").text()) },
                { y: Number($("#data-graph9").text()) },
                { y: Number($("#data-graph8").text()) },
                { y: Number($("#data-graph7").text()) },
                { y: Number($("#data-graph6").text()) },
                { y: Number($("#data-graph5").text()) },
                { y: Number($("#data-graph4").text()) },
                { y: Number($("#data-graph3").text()) },
                { y: Number($("#data-graph2").text()) },
                { y: Number($("#data-graph1").text()) }
            ]
        }]
    });
    chart.render();
    
    }