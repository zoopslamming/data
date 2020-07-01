var theData = "";

function testIt(){
  // var dataURL = "https://dashboard.edmonton.ca/resource/ymqe-r6me.json";
  // var dataURL = "https://data.cityofchicago.org/resource/f7f2-ggz5.json?$where=within_box(location, 41.885001, -87.645939, 41.867011, -87.618516)"
  var propertyAssessment = "https://data.edmonton.ca/resource/q7d6-ambg.json";
  var neightbourhoodFilter = "neighbourhood=ASPEN GARDENS";
  var streetName = "street_name=120 STREET NW";
  var houseNumber = "house_number=4031";
  // var dataURL = propertyAssessment + "?" + streetName + "&" + houseNumber;
  var dataURL = propertyAssessment + "?" + neightbourhoodFilter;

  $.getJSON(dataURL, function(data) {
    // JSON result in `data` variable
    console.log(data);

    var houseNums = [];
    var houseValue = [];
    data.map((item) =>{
      houseNums.push(item.house_number);
      houseValue.push(item.total_asmt);
    });
    new Chart(document.getElementById("bar-chart"), {
       type: 'bar',
       data: {
          labels:houseNums,
          datasets: [{
             data: houseValue,
          }]
       },
       axis: {
         x: {
           tick: {
             format: function (x) {
               return -x;
             }
           }
         }
       }
    });

  });
}
