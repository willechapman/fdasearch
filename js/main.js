// Created my search function for data to show in div with id #effects
function search(){
	$("#effects").html('');
	// Ceated variables now I need to apply for key.
	var key = ""
	// storing users input to this variable
	var searchTerm = document.getElementById("fdaSearch").value
	// Applying the api using ajax and json
	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		// I want a maximum of 15 results displayed per search
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            $("#effects").append(results + " " + "<br>")
			console.log(data.results[i].term)
          }
	    
			}
	   	},
	   // I want the objects to be retrieved.
	   type: 'GET'
	});
}