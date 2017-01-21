d3.json("https://raw.githubusercontent.com/HKSTechDevelopment/back-end-repo/master/US_state_gini.json", function(error, data) {

  function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Gini</td><td>"+(d.gini)+"</td></tr>" +
      "</table>";
  }
  
  var sampleData ={}; 

  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
    .forEach(function(d){ 
      var gini = data[d]["gini"];

      sampleData[d]={ 
        gini:gini,
        color:d3.interpolate("#ffe5e5", "#660000")((parseFloat(gini) - 0.4252)/(0.5354 - 0.4252))}; 
    });

  /* draw states on id #statesvg */ 
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 

});