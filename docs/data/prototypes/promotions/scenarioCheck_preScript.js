
//--------------- fill data on form -------
//if (sessionStorage["fullName"]) {
//    if (sessionStorage["fullName"] != "") $("#fullNameS").text(sessionStorage["fullName"]);
//}
$("#fullNameS").text("Χριστόφορος Νικολάου");

//if (sessionStorage["fileNumber"]) {
//    if (sessionStorage["fileNumber"] != "") $("#fileNumberS").text(sessionStorage["fileNumber"]);
//}
$("#fileNumberS").text("123456");

if (sessionStorage["phoneNum"]) {
    if (sessionStorage["phoneNum"] != "") $("#phoneNumS").text(sessionStorage["phoneNum"]);
}
else 
	$("#phoneNumS").text("99123456");

if (sessionStorage["emailAddress"]) {
    if (sessionStorage["emailAddress"] != "") $("#emailAddressS").text(sessionStorage["emailAddress"]);
}
else 
	$("#emailAddressS").text("chris@example.com");

if (sessionStorage["positionRadio"]) {
    if (sessionStorage["positionRadio"] != "") $("#positionSelected").text(sessionStorage["positionRadio"]);
}
else
	$("#positionSelected").text(positionSelectedString);


if (sessionStorage["titleOfStudy1"]) {
    if (sessionStorage["titleOfStudy1"] != "") $("#titleOfStudy1").text(sessionStorage["titleOfStudy1"]);
}
if (sessionStorage["institution1"]) {
    if (sessionStorage["institution1"] != "") $("#institution1").text(sessionStorage["institution1"]);
}
if (sessionStorage["countryOfStudy1"]) {
    if (sessionStorage["countryOfStudy1"] != "") $("#countryOfStudy1").text(sessionStorage["countryOfStudy1"]);
}
if (sessionStorage["yearOfStudy1"]) {
    if (sessionStorage["yearOfStudy1"] != "") $("#yearOfStudy1").text(sessionStorage["yearOfStudy1"]);
}

if (sessionStorage["titleOfStudy2"]) {
    if (sessionStorage["titleOfStudy2"] != "") $("#titleOfStudy2").text(sessionStorage["titleOfStudy2"]);
}
if (sessionStorage["institution2"]) {
    if (sessionStorage["institution2"] != "") $("#institution2").text(sessionStorage["institution2"]);
}
if (sessionStorage["countryOfStudy2"]) {
    if (sessionStorage["countryOfStudy2"] != "") $("#countryOfStudy2").text(sessionStorage["countryOfStudy2"]);
}
if (sessionStorage["yearOfStudy2"]) {
    if (sessionStorage["yearOfStudy2"] != "") $("#yearOfStudy2").text(sessionStorage["yearOfStudy2"]);
}


if (sessionStorage["titleOfStudyAdd"] && sessionStorage["titleOfStudyAdd"] != "")
	$("#titleOfStudyAdd").text(sessionStorage["titleOfStudyAdd"]);
else {
	$("#rowid1").text('');
	$("#titleOfStudyAddT").text('');
	$("#ChangeT").text('');
	$("#changeQualAdd").text('');
}

if (sessionStorage["institutionAdd"] && sessionStorage["institutionAdd"] != "")
	$("#institutionAdd").text(sessionStorage["institutionAdd"]);
else
	$("#institutionAddT").text('');

if (sessionStorage["countryOfStudyAdd"] && sessionStorage["countryOfStudyAdd"] != "")
	$("#countryOfStudyAdd").text(sessionStorage["countryOfStudyAdd"]);
else
	$("#countryOfStudyAddT").text('');

if (sessionStorage["yearOfStudyAdd"] && sessionStorage["yearOfStudyAdd"] != "")
	$("#yearOfStudyAdd").text(sessionStorage["yearOfStudyAdd"]);
else
	$("#yearOfStudyAddT").text('');


if (sessionStorage["efFile"]) {
    if (sessionStorage["efFile"] != "") {
		$("#efFileU").text("Προβολή Αρχείου");
		$("#efFileUEn").text("View File");
	}
	else {
		$("#efFileU").text("");
		$("#efFileUEn").text("");
	}
}
else
	$("#efFileU").text("");
