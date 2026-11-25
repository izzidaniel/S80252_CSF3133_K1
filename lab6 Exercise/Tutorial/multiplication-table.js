function generateTable() {
    //get the numnbe of rows and columns from user input
    //wajib tulis const tiap kali nak cipta table 
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);

    //isNAN = is not a number
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert('Please enter valid positive integers for rows and columns.');
        return;
    }

    //pembukaan table <table> dan penutupan </table>
    let tableHTML = "<table>";
    //looping untuk rows dan columns
    //i = row
    for (let i = 1; i <= rows; i++) {
        //looping untuk columns
        tableHTML += "<tr>";
        //j = column
        for (let j = 1; j <= columns; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById('tableContainer').innerHTML = tableHTML;
}