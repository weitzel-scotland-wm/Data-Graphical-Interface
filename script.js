/**
 * Created by session2 on 10/7/15.
 */
/*http://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk*/

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data;
    data = google.visualization.arrayToDataTable([
        ['Function', 'Dollars Spent'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}