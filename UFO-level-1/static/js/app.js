// from data.js
let tableData = data;

// Create function to fill the html table with a given table value
function fillTable(data){
    let tbody=d3.select("tbody").html("");
    data.forEach ((element)=>{
        let row=tbody.append("tr");
        Object.values(element).forEach((value)=>{
            let cell=row.append("td");
            cell.text(value);
        });
    });
}

// Create the HTML table with 
fillTable(tableData);

// Create function to filter by a data and fills the HTML table with the results
function runFilter(){
    d3.event.preventDefault();
    let inputElem=d3.select("#datetime").property("value");
    let filteredData = tableData.filter((sighting) => sighting.datetime === inputElem);
        fillTable(filteredData);
    if (filteredData.length===0) {
        d3.select(".warning").text(`No data in date ${inputElem} found`);
    }
}

// Reset to default
function reset (){
    location.reload();
};


// Run the filter on click
d3.selectAll("#filter-btn").on("click",runFilter);

//Reload the page
d3.select("#reset-btn").on("click",reset);



