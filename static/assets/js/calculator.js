

/*
Função para calcular TMB para Homens e Mulheres
Parametro: String
Data: 27/02/2010
Autor: Robison Fernandes / Alexandre Rosa.
*/		
function calcula(modo) {

   var vpeso = 0;
   var valtura = 0;
   var vidade = 0;
   var vresultado = 0;
   var vnenhuma = 0;   
   var vmoderada = 0;      
   var vintensa = 0; 

   if (modo=="homem")    
      var form = document.forms["teste"];
	else
	  var form = document.forms["teste_m"]; 
	  
    if (form.peso.value != "") {
       vpeso = parseFloat(form.peso.value);
    }

    if (form.altura.value != "") {
       valtura = parseFloat(form.altura.value);
    }

    if (form.idade.value != "") {
       vidade = parseFloat(form.idade.value);
    }
	
    if (form.nenhuma.value != "") {
       vnenhuma = parseFloat(form.nenhuma.value);
    }
	
    if (form.moderada.value != "") {
       vmoderada = parseFloat(form.moderada.value);
    }
	
    if (form.intensa.value != "") {
       vintensa = parseFloat(form.intensa.value);
    }
			
   if (modo == 'homem'){
      vresultado = parseFloat(66 + (13.7 * vpeso) + (5 * valtura) - (6.8 * vidade));
	  form.resultado.value = vresultado.toFixed(2);
	  var total = vresultado + (vresultado * 0.25);
      vnenhuma = parseFloat(total); 
      form.nenhuma.value = vnenhuma.toFixed(2);   
	  
   	  total = vresultado + (vresultado * 0.35);
      vmoderada = parseFloat(total); 
      form.moderada.value = vmoderada.toFixed(2);
	  
	  total = vresultado + (vresultado * 0.45);
      vintensa = parseFloat(total); 
      form.intensa.value = vintensa.toFixed(2);         
   }else{
      vresultado = parseFloat(655 + (9.6 * vpeso) + (1.7 * valtura) - (4.7 * vidade));
	  form.resultado.value = vresultado.toFixed(2);
	  var total = vresultado + (vresultado * 0.20);
      vnenhuma = parseFloat(total); 
      form.nenhuma.value = vnenhuma.toFixed(2);   
	  
   	  total = vresultado + (vresultado * 0.30);
      vmoderada = parseFloat(total); 
      form.moderada.value = vmoderada.toFixed(2);
	  
	  total = vresultado + (vresultado * 0.40);
      vintensa = parseFloat(total); 
      form.intensa.value = vintensa.toFixed(2);           
   } 
}

