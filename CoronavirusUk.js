
function showCoronaGraph(data, labels) {
    var context = document.getElementById("graph1").getContext('2d');
    var myChart = new Chart(context, {
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


$("#show").click(
    function () {
        data = [18, 15, 22, 16, 34, 43, 36, 56, 35, 74, 149, 186, 183, 284, 294, 214, 374, 382, 670, 652, 714, 760, 644, 568, 1034, 1103, 1152, 839, 686, 744, 1044, 842, 1029, 935, 1115, 498, 559, 1172, 837, 727, 1005, 843, 420, 338, 909, 795, 674, 739, 621, 315, 288, 693, 649, 539, 626, 346, 268, 210, 627, 494, 428, ] 
        labels =  [ "March 14", "March 15", "March 16", "March 17", "March 18", "March 19", "March 20", "March 21", "March 22", "March 23", "March 24", "March 25", "March 26", "March 27", "March 28", "March 29", "March 30", "March 31", "April 1", "April 2", "April 3", "April 4", "April 5", "April 6", "April 7", "April 8", "April 9", "April 10", "April 11", "April 12", "April 13", "April 14", "April 15", "April 16", "April 17", "April 18", "April 19", "April 20", "April 21", "April 22", "April 23", "April 24", "April 25", "April 26", "April 27", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10", "May 11", "May 12", "May 13", "May 14", "May 15"];
        showCoronaGraph(data, labels);
    }
);
