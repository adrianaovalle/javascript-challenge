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

// Create a function to filter with multiple criteria
function runmultiFilter(){
    var datetime=d3.select("#datetime").property("value").toLowerCase().trim();
    var city=d3.select("#city").property("value").toLowerCase().trim();
    var state=d3.select("#state").property("value").toLowerCase().trim();
    var country=d3.select("#country").property("value").toLowerCase().trim();
    var shape=d3.select("#shape").property("value").toLowerCase().trim();

    // Create a dictionnary to hold all inputs
    let inputs={datetime:datetime, city:city, state:state, country:country, shape:shape};
   
    // Create a loop to filter depending on entered inputs
    let filteredTable=data;
    Object.entries(inputs).forEach(([key,value])=>{
        if (value!==""){
            filteredTable=filteredTable.filter((row)=>row[`${key}`]===value)};
    });
    var tbody=d3.select("tbody").html("");
    fillTable(filteredTable);
    if (filteredTable.length===0) {
        d3.select(".warning").text(`No data with this criteria found.`)};
};


// Reset to default
function reset (){
        location.reload();
};


// Run the filter on click
d3.select("#filter-btn").on("click",runmultiFilter);
d3.select("#reset-btn").on("click",reset);
