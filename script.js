/**
 * Created by session2 on 10/7/15.
 */
/*http://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk*/

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Function', 'US General Expenditure(in millions)'],
        ['Education', 600],
        ['Public Welfare', 520],
        ['Hospitals', 67],
        ['Health', 63],
        ['Highways', 112],
        ['Police Protection', 15],
        ['Correction', 48],
        ['Natural Resources', 21],
        ['Parks and Recreation', 6],
        ['Governmental Administration', 53],
        ['Interest on General Debt', 46],
        ['Other and Unallocable', 133]
    ]);

    var options = {
        title: 'General US Expenditure by Function(in millions)',
        pieHole: 0.5,
        backgroundColor: "gray"
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}