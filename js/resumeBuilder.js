/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	"name" : "Jerico Pingul",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "0863456813",
		"email" : "jerico.pingul@gmail.com",
		"github" : "jericopingul",
		"location" : "Athlone, Ireland"
	},
	"welcomeMsg" : "Welcome to my profile",
 	"skills" : ["Java", "JavaScript", "HTML", "CSS", "SQL"],
 	"biopic" : "http://iaestelc.ie/wp-content/uploads/2015/02/Jerico_TechLead.jpg"
}

bio.display = function() {

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);


// var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);




// $("#main").append(bio.contacts.mobile)
// $("#main").append(bio.skills[0])
// $("#header").append(bio.biopic)

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(skillIndex in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs" : [
		{
			"title" : "Software Engineer Intern",
			"employer" : "Ericsson",
			"dates" : "September 2016 - December 2016",
			"description" : "Developing network management software in Java, JavaScript, HTML, CSS and SQL",
			"location" : "LM Ericsson, Athlone, Ireland"
		},
		{
			"title" : "Support Engineer Intern",
			"employer" : "SAP",
			"dates" : "February 2015 - August 2015",
			"description" : "Troubleshooting and resolving SAP systems issues for SAP customers around the world",
			"location" : "Citywest, Dublin, Ireland"
		}
	]
}

displayWork();

function displayWork() {
	for(jobIndex in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var currentJob = work.jobs[jobIndex];

		var formattedEmployer = HTMLworkEmployer
			.replace("%data%", currentJob.employer);
		var formattedWorkTitle = HTMLworkTitle
			.replace("%data%", currentJob.title);
		var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates
			.replace("%data%", currentJob.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation
			.replace("%data%", currentJob.location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription
			.replace("%data%", currentJob.description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display = function() {

}

var education = {
	"schools" : [
		{
			"name" : "Athlone Institute of Technology",
			"degree" : "MSc",
			"major" : "Software Engineering",
			"dates" : "2015-2016",
			"location" : "AIT, Athlone, Ireland",
			"url" : "www.ait.ie"
		},
		{
			"name" : "University College Dublin",
			"degree" : "BSc",
			"major" : "Electrical & Electronic Engineering",
			"dates" : "2011-2014",
			"location" : "UCD, Dublin, Ireland",
			"url" : "www.ucd.ie"
		}
	]
}

education.display = function() {

}

function displaySchools() {
	for(schoolIndex in education.schools) {
		$("#education").append(HTMLschoolStart);

		var currentSchool = education.schools[schoolIndex];

		var formattedSchoolName = HTMLschoolName
			.replace("%data%", currentSchool.name);
		var formattedSchoolDegree = HTMLschoolDegree
			.replace("%data%", currentSchool.degree);
		var formattedSchoolMajor = HTMLschoolMajor
			.replace("%data%", currentSchool.major);
		var formattedShoolLocation = HTMLschoolLocation
			.replace("%data%", currentSchool.location);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedShoolLocation);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}
displaySchools();

var projects = {
	"projects" : [
		{
			"title" : "Paws for Applause Web Application",
			"dates" : "September 2015 - December 2015",
			"description" : "Web application for managing bookings, payments and staff management for pet kennel and cattery company",
			"images" : ["images/1.PNG", "images/2.PNG"]
		}
	]
}

projects.display = function() {
	for(projectIndex in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle
			.replace("%data%", projects.projects[projectIndex].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates
			.replace("%data%", projects.projects[projectIndex].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription
			.replace("%data%", projects.projects[projectIndex].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[projectIndex].images.length > 0) {
			for(imageIndex in projects.projects[projectIndex].images) {
				var formattedImage = HTMLprojectImage
					.replace("%data%", projects.projects[projectIndex].images[imageIndex]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for(jobIndex in work_obj.jobs) {
		var newLocation = work_obj.jobs[jobIndex].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

console.log(inName(bio.name));

// $("#mapDiv").append(googleMap);