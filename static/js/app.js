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
  // passing form inputs to lowercase to match data
  
  const date = d3.select("#datetime").property("value");
  const city = d3.select("#city").property("value").toLowerCase();
  const state = d3.select("#state").property("value").toLowerCase();
  const country = d3.select("#country").property("value").toLowerCase();

  // store the tableData into a local variable called filteredData
  // running through multiple else if conditionals to determine which tables to pull in based on filters
  
  if (date && city && state && country) {
    var filteredDataDate = tableData.filter(d => d.datetime === date);
    var filteredDataCity = filteredDataDate.filter(d => d.city === city);
    var filteredDataState = filteredDataCity.filter(d => d.state === state);
    var filteredDataCountry = filteredDataState.filter(d => d.country === country);
    buildTable(filteredDataCountry);
  } else if (date && state && country) {
    var filteredDataDate = tableData.filter(d => d.datetime === date);
    var filteredDataState = filteredDataDate.filter(d => d.state === state);
    var filteredDataCountry = filteredDataState.filter(d => d.country === country);
    buildTable(filteredDataCountry);
  } else if (city && state && country) {
    var filteredDataCity = tableData.filter(d => d.city === city);
    var filteredDataState = filteredDataCity.filter(d => d.state === state);
    var filteredDataCountry = filteredDataState.filter(d => d.country === country);
    buildTable(filteredDataCountry);  
  } else if (date && city && state) {
    var filteredDataDate = tableData.filter(d => d.datetime === date);
    var filteredDataCity = filteredDataDate.filter(d => d.city === city);
    var filteredDataState = filteredDataCity.filter(d => d.state === state);
    buildTable(filteredDataState);
  } else if (state && country) {
    var filteredDataState = tableData.filter(d => d.state === state);
    var filteredDataCountry = filteredDataState.filter(d => d.country === country);
    buildTable(filteredDataCountry);
  } else if (city && state) {
    var filteredDataCity = tableData.filter(d => d.city === city);
    var filteredDataState = filteredDataCity.filter(d => d.state === state);
    buildTable(filteredDataState);
  } else if (date && city) {
    var filteredDataDate = tableData.filter(d => d.datetime === date);
    var filteredDataCity = filteredDataDate.filter(d => d.city === city);
    buildTable(filteredDataCity);
  } else if (date) {
    var filteredDataDate = tableData.filter(d => d.datetime === date);
    buildTable(filteredDataDate);
  } else if (city) {
    var filteredDataCity = tableData.filter(d => d.city === city);
    buildTable(filteredDataCity);
  } else if (state) {
    var filteredDataState = tableData.filter(d => d.state === state);
    buildTable(filteredDataState);
  } else if (country) {
    var filteredDataCountry = tableData.filter(d => d.country === country);
    buildTable(filteredDataCountry);
  } else {
    buildTable(tableData);
  };

};

// Attach an event to listen for the form button #filter-btn to be clicked, it should call your handleClick function
var form = d3.select("#filter-btn");
form.on("click", handleClick);

// Build the table with your buildTable function when the page loads
buildTable(tableData);
