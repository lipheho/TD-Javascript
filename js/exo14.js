//Exercice 14

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var test = '';

slider.oninput = function() {
	demo.innerHTML = this.value;	
	if (slider.value<15){
		test = 'choix1';
		document.getElementById('enterprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('cheap').style.opacity = "0.5";
		
	}
	else if(slider.value<50){
		test = 'choix2';	
		document.getElementById('enterprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('cheap').style.opacity = "1";
	}	
	else if(slider.value<85){
		test = 'choix3';	
		document.getElementById('enterprise').style.opacity = "0.5";
		document.getElementById('pro').style.opacity = "1";
		document.getElementById('cheap').style.opacity = "0.5";
	}	
	else{
		test = 'choix4';		
		document.getElementById('enterprise').style.opacity = "1";
		document.getElementById('pro').style.opacity = "0.5";
		document.getElementById('cheap').style.opacity = "0.5";
	}
}