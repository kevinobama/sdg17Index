var ctx = document.getElementById("sdgChallengeChart").getContext('2d');
var data = {
    labels: ["Other", "Monero", "Litecoin", "Dash", "Zcash", "Ripple", "ETH","Bitcoin","ETC","ETP","Dogecoin",'AGI','NULS','NEO','MCM','ELA','AER','SER'],
    datasets: [{
        label: "SDG Challenge",
        data: quantity, //[5, 10, 15, 20, 30, 30, 40,60,50,45,20,35,30,25,20,15,10,5],
        backgroundColor:[
            '#597f73', 'red','green','#f46e42','#f48c42','#f4be41','#f4eb41','#bbf441','#41f44c','#419df4','#9141f4'
            ,'#42f4d7','#41f44a','#41f4e5','#9141f4','#7cf441','#597f73','#597a7f'
        ],
        //borderWidth: 2,
        //borderColor:"white",
    }]
}
var options = {
    "animation": {
        "duration": 0.1,
        "onComplete": function() {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function(bar, index) {
                    var label = this.data.labels[index];
                    ctx.fillText(label, bar._model.x, bar._model.y - 10);
                });
            });
        }
    },
    legend: {
        "display": false
    },
    title: {
        display: true,
        text: 'SDG 17 Index',
        fontSize:18,
    },
    scales: {
        yAxes: [{
            display: false,
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            scaleFontSize: 40,
            gridLines: {
                display: false
            }
        }]
    }
};

var sdgChallengeChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

console.log(quantity);