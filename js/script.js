	var prenda;
	var color;
	var logo;
	var res;
	


 function changes(){

 	var prenda = document.getElementById('prenda');
	var color = document.getElementById('color');
	var logo = document.getElementById('logo');
	var logoExtra = document.getElementById('logoextra');
	var res = document.getElementById('res');

 	if (prenda.value)
 		{ 	
 			color.style.display = "inline";
 			res.src = "img/"+prenda.value+"-blanco.png";
 			
 		}

 	if (color.value) {

 		logo.style.display = "inline";
 		res.src = "img/"+prenda.value+"-"+color.value+".png";
 	}

 	if(logo.value){

 		res.src = "img/"+prenda.value+"-"+color.value+"-"+logo.value+".png";


 	}

}






