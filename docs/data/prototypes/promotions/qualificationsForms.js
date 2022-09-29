
//--------------- fill data on form -------
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
    if (sessionStorage["titleOfStudy2"] != "") $("#titleOfStudy2.placeholder").text(sessionStorage["titleOfStudy2"]);
}
if (sessionStorage["institution2"]) {
    if (sessionStorage["institution2"] != "") $("#institution2.placeholder").text(sessionStorage["institution2"]);
}
if (sessionStorage["countryOfStudy2"]) {
    if (sessionStorage["countryOfStudy2"] != "") $("#countryOfStudy2.placeholder").text(sessionStorage["countryOfStudy2"]);
}
if (sessionStorage["yearOfStudy2"]) {
    if (sessionStorage["yearOfStudy2"] != "") $("#yearOfStudy2.placeholder").text(sessionStorage["yearOfStudy2"]);
}


if (sessionStorage["titleOfStudyAdd"] && sessionStorage["titleOfStudyAdd"] != "")
	$("#titleOfStudyAdd").text(sessionStorage["titleOfStudyAdd"]);
else {
	$("#rowid1").text('');
	$("#titleOfStudyAddT").text('');
	$("#ChangeT").text('');
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

