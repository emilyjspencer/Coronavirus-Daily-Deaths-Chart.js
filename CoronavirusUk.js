
function showCoronaGraph(data, labels) {
    var context = document.getElementById("graph").getContext('2d');
    var graph = new Chart(context, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Daily Coronavirus Deaths in the UK',
                data: data,
            }]
        },
    });
}

