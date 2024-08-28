function insert_Row() {
    var table = document.getElementById("sampleTable");
    
    var newRow = table.insertRow(0);
    
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    
    newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
}

