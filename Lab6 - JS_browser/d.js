function add_row() {

    var table = document.getElementById("tbl");
    var second_col = document.getElementById("second_col");
    var third_col = document.getElementById("third_col");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = rowCount + 1;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = second_col.value;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = third_col.value;

}