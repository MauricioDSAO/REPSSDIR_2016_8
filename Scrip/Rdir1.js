



	imagen = new Array();
	frase = new Array();
	autor = new Array();
	STOficial = new Array;
	STParticular = new Array;
	REPSS = new Array;
	RTOficial = new Array;
	RTParticular = new Array;
	Afiliacion = new Array;
	ATOficial = new Array;
	ATParticular = new Array;
	Fecha = new Array;
	
	totalfrases = 0;

function leerCITAS(json) {
		totalfrases = json.feed.entry.length;
		for(i=0; i<totalfrases; i++) {
		imagen[i] = json.feed.entry[i].gsx$imagen.$t;	
		frase[i] = json.feed.entry[i].gsx$nomedo.$t;
		autor[i] = json.feed.entry[i].gsx$secretario.$t;
		STOficial[i]= json.feed.entry[i].gsx$secretariotelofical.$t;
		STParticular[i] = json.feed.entry[i].gsx$secretariotelparticular.$t;
		REPSS[i] = json.feed.entry[i].gsx$repss.$t;	
		RTOficial[i] = json.feed.entry[i].gsx$repsstelparticular.$t;
		RTParticular[i] = json.feed.entry[i].gsx$repssteloficial.$t;
		Afiliacion[i]= json.feed.entry[i].gsx$afiliacion.$t;
		ATOficial[i]= json.feed.entry[i].gsx$afiliacionteloficial.$t;
		ATParticular[i]= json.feed.entry[i].gsx$afiliacionteloficial.$t;
		Fecha [0]= json.feed.entry[0].updated.$t;
		}

	}


function mostrarCITAS(donde) {
		
		
		var salida = "";
		var obj=document.getElementById("numero1");
		var Fecha2 ="3";
		
		var max = totalfrases-1;
		var alea = obj.options[obj.selectedIndex].value - 1;
		var cual = alea;
		
		if (alea < 0 ){
			
			document.location.reload();
			
			}
		
		else{
			window.scroll(0, 0);
		document.getElementById('fecha').innerText = Fecha[0].substring(0,10).split('-')[2]+'/'+Fecha[0].substring(0,10).split('-')[1]+'/'+Fecha[0].substring(0,10).split('-')[0];
		document.getElementById('fondo12').style.display = 'none';
		document.getElementById('datos').style.display = 'block';
		document.getElementById('imagen').src = imagen[cual];
		document.getElementById('Estado').innerText = frase[cual];//estado
		document.getElementById('secretario2').innerText = autor[cual];//secretario
		document.getElementById('repss2').innerText = REPSS[cual];//repss
		document.getElementById('afiliacion2').innerText = Afiliacion[cual];//repss afiliacion
		
		
		
		
		document.getElementById('sCelOf1').innerText = STOficial[cual];//secretario celular oficial
		document.getElementById('aCelOf1').innerHref = "tel:"+STOficial[cual];//secretario celular oficial
		
		if(STOficial[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivSTOficial').style.display = 'none';
		}else{document.getElementById('DivSTOficial').style.display = 'block';}
		
		
		document.getElementById('sCelPar1').innerText = STParticular[cual];//secretario celular particular
		document.getElementById('aCelPar1').innerHref = "tel:"+STParticular[cual];//secretario celular particular
		
		if(STParticular[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivSTParticular').style.display = 'none';
		}else{document.getElementById('DivSTParticular').style.display = 'block';}
		
		
		
		document.getElementById('sCelOf2').innerText = RTOficial[cual];//REPSS celular oficial
		document.getElementById('aCelOf2').innerHref = "tel:"+ RTOficial[cual];//REPSS celular oficial
		
		if(RTOficial[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivRTOficial').style.display = 'none';
		}else{document.getElementById('DivRTOficial').style.display = 'block';}
		
		
		document.getElementById('sCelPar2').innerText = RTParticular[cual];//REPSS celular particular
		document.getElementById('aCelPar2').innerHref = "tel:"+ RTParticular[cual];//REPSS celular particular
		
		if(RTParticular[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivRTParticular').style.display = 'none';
		}else{document.getElementById('DivRTParticular').style.display = 'block';}
		
		
		document.getElementById('sCelOf3').innerText = ATOficial[cual];//REPSS celular oficial
		document.getElementById('aCelOf3').innerHref = "tel:"+ ATOficial[cual];//REPSS celular oficial
		
		if(ATOficial[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivATOficial').style.display = 'none';
		}else{document.getElementById('DivATOficial').style.display = 'block';}
		
		
		document.getElementById('sCelPar3').innerText = ATParticular[cual];//REPSS celular particular
		document.getElementById('aCelPar3').innerHref = "tel:"+ ATParticular[cual];//REPSS celular particular
		
		if(ATParticular[cual] == '0' ){//ocultar cel oficial
			document.getElementById('DivATParticular').style.display = 'none';
		}else{document.getElementById('DivATParticular').style.display = 'block';}
		
		
		
		
		
		
		}//fin del else
	
	
	
	
		
	}//fin de mostrar
	
	
			
			
	
