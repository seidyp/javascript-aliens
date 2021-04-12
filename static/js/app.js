// from data.js
const tableData = data;

// get table references with d3.select()
const tbody = d3.select("tbody");

// parse out data and create html table
function buildTable(data) {
  tbody.html("");
  for (var i = 0; i < data.length; i++) {
    var record = data[i];
    // console.log(record);

    var row = tbody.append("tr");
    row.append("td").text(record.datetime);
    // console.log(record.datetime);
    row.append("td").text(record.city);
    row.append("td").text(record.state);
    row.append("td").text(record.country);
    row.append("td").text(record.shape);
    row.append("td").text(record.durationMinutes);
    row.append("td").text(record.comments);
  };
};


// define a function handleClick() that takes no arguments
// the job of this function is to 
function handleClick() {

  // Grab the #datetime value from the filter with d3.select().property()
  
  const date = d3.select("#datetime").property("value");
  // store the tableData into a local variable called filteredData
  
  var filteredData = tableData.filter(d => d.datetime === date);
  console.log(filteredData);

  buildTable(filteredData);
};
// Attach an event to listen for the form button #filter-btn to be clicked, it should call your handleClick function
var form = d3.select("#filter-btn");
form.on("click", handleClick);

// Build the table with your buildTable function when the page loads
buildTable(tableData);
