fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.length > 0) {
      let temp = "";
      data.forEach(element => {
        temp += "<tr>";
        temp += "<td>" + element.athlete + "</td>";
        temp += "<td>" + element.age + "</td>";
        temp += "<td>" + element.country + "</td>";
        temp += "<td>" + element.year + "</td>";
        temp += "<td>" + element.date + "</td>";
        temp += "<td>" + element.sport + "</td>";
        temp += "<td>" + element.gold + "</td>";
        temp += "<td>" + element.silver + "</td>";
        temp += "<td>" + element.bronze + "</td>";
        temp += "<td>" + element.total + "</td></tr>";
      })

      document.getElementById("myTable").innerHTML = temp;
    }
  })
  .catch(error => console.log(error))

$(document).ready(function () {
  $('#bigTable').DataTable();
});