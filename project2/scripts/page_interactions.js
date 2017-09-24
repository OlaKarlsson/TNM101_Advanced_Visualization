const opt = {"actions":false}
showAvgRatingPerYear();


var avgRatingPerYearBtn = document.getElementById("avgRatingPerYear");
avgRatingPerYearBtn.addEventListener("click", showAvgRatingPerYear, false);

function showAvgRatingPerYear(){
  var avgRatingPerYearSpec = "scripts/average_per_year.json";

  vega.embed('#vis', avgRatingPerYearSpec, opt).then(function(result) {
  // access view as result.view
  }).catch(console.error);
}


var avgRatingPerCountryBtn = document.getElementById("avgRatingPerCountry");
avgRatingPerCountryBtn.addEventListener("click", showAvgRatingPerCountry, false);

function showAvgRatingPerCountry(){
  var avgRatingPerCountrySpec = "scripts/rating_per_country.json";
  vega.embed('#vis', avgRatingPerCountrySpec, opt).then(function(result) {
  // access view as result.view
  }).catch(console.error);
}

var bechdelRatingPerYearStackedBarBtn = document.getElementById("bechdelRatingPerYearStackedBar");
bechdelRatingPerYearStackedBarBtn.addEventListener("click", showBechdelRatingPerYearStackedBar, false);

function showBechdelRatingPerYearStackedBar(){
  var bechdelRatingPerYearStackedBarSpec = "scripts/imdb-bechel_stacked_barchart.json";
  vega.embed('#vis', bechdelRatingPerYearStackedBarSpec, opt).then(function(result) {
  // access view as result.view
  }).catch(console.error);
}