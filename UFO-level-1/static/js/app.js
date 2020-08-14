// from data.js
var tableData = data;

// Create function to fill the html table with a given table value
function fillTable(data){
    var tbody=d3.select("tbody").html("");
    data.forEach ((element)=>{
        var row=tbody.append("tr");
        Object.values(element).forEach((value)=>{
            var cell=row.append("td");
            cell.text(value);
        });
    });
}

// Create the HTML table with 
fillTable(tableData);

// Create function to filter by a data and fills the HTML table with the results
function runFilter(){
    d3.event.preventDefault();
    var inputElem=d3.select("#datetime").property("value");
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputElem);
        fillTable(filteredData);
    if (filteredData.length===0) {
        d3.select(".warning").text(`No data in date ${inputElem} found`);
    }
}

// Run the filter on click
d3.selectAll("#filter-btn").on("click",runFilter);



