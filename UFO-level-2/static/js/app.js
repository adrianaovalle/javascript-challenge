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

// Create a function to filter with multiple criteria
function runmultiFilter(){
    d3.event.preventDefault();
    let datetime=d3.select("#datetime").property("value").toLowerCase().trim();
    let city=d3.select("#city").property("value").toLowerCase().trim();
    let state=d3.select("#state").property("value").toLowerCase().trim();
    let country=d3.select("#country").property("value").toLowerCase().trim();
    let shape=d3.select("#shape").property("value").toLowerCase().trim();

    // Create a dictionnary to hold all inputs
    let inputs={datetime:datetime, city:city, state:state, country:country, shape:shape};
   
    // Create a loop to filter depending on entered inputs
    let filteredTable=data;
    Object.entries(inputs).forEach(([key,value])=>{
        if (value!==""){
            filteredTable=filteredTable.filter((row)=>row[`${key}`]===value)};
    });
    let tbody=d3.select("tbody").html("");
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

//Reload the page
d3.select("#reset-btn").on("click",reset);
