//not the right user
if ((!sessionStorage["id"]) || (sessionStorage["id"].toLowerCase() != "chris")){
    window.location="#p/promotions/badLogin";
    //use this to stop all other events
    appModel.stopScripts = true;  
//if is the right user load userNamesSignOut component
} else {
    //prepare user data object 
    var useData = {
        "type": "userNamesSignOut",
        "content" : {
            "en" : {"userName" : sessionStorage["id"],"logout":"Sign out"},
            "el" : {"userName" : sessionStorage["id"],"logout":"Αποσύνδεση"}
        }
    };
    //take care of multilanguage hasle 
    appView.prepareMultiLanguage(useData);
                    
    //render using mustache
    var userDataContent = Mustache.render
    (DSFTemplates.componentTemplates[useData.type]
        , useData);

    //render on page
    $("#before-main").html(userDataContent);

}

var currentRouteId;
var currentRouteNo;
var positionSelectedString;

function openPage(name) {

    var newURL= "#p/promotions" + '/' + name;
    window.location=newURL;
}

function forwardPageOnRoute(steps) {

	var nextRoutId=parseInt(currentRouteNo) + steps;
    var newURL= "#r/" + currentRouteId + '/' + nextRoutId;
    window.location=newURL;
}

function nextPageOnRoute() {

	forwardPageOnRoute(1);
}

function selectPositionString(id) {
	if (id == 1)
		positionSelectedString = "Βοηθός Διευθυντής Α' Μέσης Γενικής Εκπαίδευσης για τη Πληροφορική - Επιστήμη Η.Υ.";
	else if (id == 2)
		positionSelectedString = "Επιθεωρητής Μέσης Γενικής Εκπαίδευσης για τη Πληροφορική - Επιστήμη Η.Υ.";
	else if (id == 3)
		positionSelectedString = "Καθηγητής Παιδαγωγικού Ινστιτούτου για τη Πληροφορική";
	else if (id == 4)
		positionSelectedString = "Deputy Principal A' Secondary General Education for Informatics - Computer Science";
	else if (id == 5)
		positionSelectedString = "Inspector Secondary General Education for Informatics - Computer Science";
	else if (id == 6)
		positionSelectedString = "Pedagogical Institute Teacher for Informatics";
	else if (id == 11)
		positionSelectedString = "Βοηθός Διευθυντής Α' Μέσης Γενικής Εκπαίδευσης για τη Πληροφορική - Επιστήμη Η.Υ.";
	else if (id == 12)
		positionSelectedString = "Καθηγητής Παιδαγωγικού Ινστιτούτου για τη Πληροφορική";
	else if (id == 13)
		positionSelectedString = "Deputy Principal Secondary General Education for Informatics - Computer Science";
	else if (id == 14)
		positionSelectedString = "Pedagogical Institute Teacher for Informatics";
	else
		positionSelectedString = "Wrong position ID. Cannot retreive position description";
}

function selectPosition(id) {

	selectPositionString(id);
	nextPageOnRoute();
}

function viewPosition(id) {

	selectPositionString(id);
	if (id <= 10)
		forwardPageOnRoute(4);
	else
		openPage("scenarioCheckHistory");
		
}
