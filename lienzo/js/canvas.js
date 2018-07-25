var frame = window.requestAnimationFrame||
			window.mozRequedAnimationFrame||
			window.webkitRequestAnimationFrame||
			window.msRequesAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var sprite = new Image();
sprite.src ="img/opcion3.png";

var numeroo5=0;
var ubicacionxo5=0;

var numero5=0;
var ubicacion5=0;

function movimientoopcion5(){
	
	if(numeroo5 >= 918) {numeroo5=0}else{numeroo5+=10}

    for (var i = 0; i <= numeroo5; i+=153) {
	  
	    if (numeroo5>=i) {ubicacionxo5 =i}
    }
    if (numero5>=1000) {numero5=0} else {numero5+=5}

    	for (var a = 0; a <=numero5; a+=10) {
    		if(numero5>=a) {ubicacion5=a}
    	}

// por defecto pra borar el imagen
ctx.clearRect(ubicacion5,100,153,141);

//=//=========================================
//=======================================
//        CIELO I
//========================================
var cielo1={
	gradientex:0,
	gradientey:0,
	gradientex1:0,
	gradientey1:500,
	coloresquina:"blue",
	esquina0:0,
	esquina1:1,
	coloresquinaI:"white",
	puntox:0,
	puntoy:0,
	puntox1:1000,
	puntoy1:500,
	visualizar:function(){
		var grd = ctx.createLinearGradient(cielo1.gradientex,cielo1.gradientey,cielo1.gradientex1,cielo1.gradientey1);
grd.addColorStop(cielo1.esquina0,cielo1.coloresquina);
grd.addColorStop(cielo1.esquina1,cielo1.coloresquinaI);
ctx.fillStyle=grd;
ctx.fillRect(cielo1.puntox,cielo1.puntoy,cielo1.puntox1,cielo1.puntoy1);
	}

}
cielo1.visualizar();


//========================================
//        CIELO II
//========================================
var cieloII={
	ancholinea:1,
	colorcontorno:"rgba(255,0,255,1)",
	gradientex:0,
	gradientey:300,
	gradientex1:0,
	gradientey1:500,
	esquina0:0,
	coloresquina:"#40c4ff",
	esquina1:1,
	coloresquina1:"white",
	puntox:0,
	puntoy:350,
	puntox1:1000,
	puntoy1:1000,
	visualizar1:function(){
		ctx.lineWidth=cieloII.ancholinea;
ctx.strokeStyle = cieloII.colorcontorno;
var grd = ctx.createLinearGradient(cieloII.gradientex,cieloII.gradientey,cieloII.gradientex1,cieloII.gradientey1);
grd.addColorStop(cieloII.esquina0,cieloII.coloresquina);
grd.addColorStop(cieloII.esquina1,cieloII.coloresquina1);
ctx.fillStyle=grd;
ctx.fillRect(cieloII.puntox,cieloII.puntoy,cieloII.puntox1,cieloII.puntoy1);
	}
}
cieloII.visualizar1();


//========================================
//        sol
//========================================
var sol={
	puntox:30,
	puntoy:30,
	radio:70,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#E9FE33",
	colorcontorno:"yellow",
	visualizar2:function(){
		ctx.beginPath();
ctx.arc(sol.puntox,sol.puntoy,sol.radio,sol.puntox1,sol.puntoy1);
ctx.fillStyle=sol.colorfon;
ctx.fill();
ctx.strokeStyle=sol.colorcontorno;
ctx.stroke();
	}
}
sol.visualizar2();


//==========================
//   MONTAÑAS
//===========================
 
 // montaña I 
  var montaña1={
  	colorfon:"#6400FF",
  	puntox:40,
  	puntoy:350,
  	lineax:220,
  	lineay:100,
  	linea2x: 375,
  	linea2y:350,
  	ancholinea:1,
  	colorcontorno:"#6400FF",
  	visualizar3:function(){
  		ctx.beginPath();
ctx.fillStyle =montaña1.colorfon;
ctx.moveTo(montaña1.puntox,montaña1.puntoy);
ctx.lineTo(montaña1.lineax,montaña1.lineay);
ctx.lineTo(montaña1.linea2x,montaña1.linea2y);
ctx.fill();
ctx.lineWidth=montaña1.ancholinea;
ctx.strokeStyle=montaña1.colorcontorno;
ctx.stroke();
  	}
  }
montaña1.visualizar3();



// montaña I.2 
var montaña2={
	colorfon:"#FFFFFF",
	puntoiniciox:220,
	puntoinicioy:100,
	lineax:160,
	lineay:180,
	linea2x:220,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#FFFFFF",
	visualizar4:function(){
		ctx.beginPath();
ctx.fillStyle =montaña2.colorfon;
ctx.moveTo(montaña2.puntoiniciox,montaña2.puntoinicioy);
ctx.lineTo(montaña2.lineax,montaña2.lineay);
ctx.lineTo(montaña2.linea2x,montaña2.linea2y);
ctx.fill();
ctx.lineWidth=montaña2.ancholinea;
ctx.strokeStyle=montaña2.colorcontorno;
ctx.stroke();
	}
}
 montaña2.visualizar4();


// montaña I.3
var montaña3={
	colorfon:"#D1D2FF",
	puntoiniciox:220,
	puntoinicioy:100,
	lineax:270,
	lineay:180,
	linea2x:220,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#D1D2FF",
	visualizar5:function(){
		ctx.beginPath();
ctx.fillStyle =montaña3.colorfon;
ctx.moveTo(montaña3.puntoiniciox,montaña3.puntoinicioy);
ctx.lineTo(montaña3.lineax,montaña3.lineay);
ctx.lineTo(montaña3.linea2x,montaña3.linea2y);
ctx.fill();
ctx.lineWidth=montaña3.ancholinea;
ctx.strokeStyle=montaña3.colorcontorno;
ctx.stroke();
	}
}
montaña3.visualizar5();
  

// montaña 4
var montaña4={
	colorfon:"#3200FF",
	puntoiniciox:220,
	puntoinicioy:350,
	lineax:420,
	lineay:100,
	linea2x:575,
	linea2y:350,
	ancholinea:1,
	colorcontorno:"#3200FF",
	visualizar6:function(){
		ctx.beginPath();
ctx.fillStyle =montaña4.colorfon;
ctx.moveTo(montaña4.puntoiniciox,montaña4.puntoinicioy);
ctx.lineTo(montaña4.lineax,montaña4.lineay);
ctx.lineTo(montaña4.linea2x,montaña4.linea2y);
ctx.fill();
ctx.lineWidth=montaña4.ancholinea;
ctx.strokeStyle=montaña4.colorcontorno;
ctx.stroke();
	}
}
  montaña4.visualizar6();


// montaña 5
var montaña5={
	colorfon:"#FFFFFF",
	puntoiniciox:420,
	puntoinicioy:100,
	lineax:355,
	lineay:180,
	linea2x:420,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#FFFFFF",
	visualizar7:function(){
		ctx.beginPath();
ctx.fillStyle =montaña5.colorfon;
ctx.moveTo(montaña5.puntoiniciox,montaña5.puntoinicioy);
ctx.lineTo(montaña5.lineax,montaña5.lineay);
ctx.lineTo(montaña5.linea2x,montaña5.linea2y);
ctx.fill();
ctx.lineWidth=montaña5.ancholinea;
ctx.strokeStyle=montaña5.colorcontorno;
ctx.stroke();
	}
} 
  montaña5.visualizar7();    


// montaña 6 
 var montaña6={
	colorfon:"#D1D2FF",
	puntoiniciox:420,
	puntoinicioy:100,
	lineax:470,
	lineay:180,
	linea2x:420,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#D1D2FF",
	visualizar8:function(){
		ctx.beginPath();
ctx.fillStyle =montaña6.colorfon;
ctx.moveTo(montaña6.puntoiniciox,montaña6.puntoinicioy);
ctx.lineTo(montaña6.lineax,montaña6.lineay);
ctx.lineTo(montaña6.linea2x,montaña6.linea2y);
ctx.fill();
ctx.lineWidth=montaña6.ancholinea;
ctx.strokeStyle=montaña6.colorcontorno;
	}
} 
montaña6.visualizar8();



// montaña 7
 var montaña7={
	colorfon:"#6400FF",
	puntoiniciox:420,
	puntoinicioy:350,
	lineax:620,
	lineay:100,
	linea2x:775,
	linea2y:350,
	ancholinea:1,
	colorcontorno:"#6400FF",
	visualizar9:function(){
		ctx.beginPath();
ctx.fillStyle = montaña7.colorfon;
ctx.moveTo(montaña7.puntoiniciox,montaña7.puntoinicioy);
ctx.lineTo(montaña7.lineax,montaña7.lineay);
ctx.lineTo(montaña7.linea2x,montaña7.linea2y);
ctx.fill();
ctx.lineWidth=montaña7.ancholinea;
ctx.strokeStyle=montaña7.colorcontorno;
ctx.stroke();
	}
}
 montaña7.visualizar9();


// montaña 8
  var montaña8={
	colorfon:"#FFFFFF",
	puntoiniciox:620,
	puntoinicioy:100,
	lineax:555,
	lineay:180,
	linea2x:620,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#FFFFFF",
	visualizar10:function(){
		ctx.beginPath();
ctx.fillStyle =montaña8.colorfon;
ctx.moveTo(montaña8.puntoiniciox,montaña8.puntoinicioy);
ctx.lineTo(montaña8.lineax,montaña8.lineay);
ctx.lineTo(montaña8.linea2x,montaña8.linea2y);
ctx.fill();
ctx.lineWidth=montaña8.ancholinea;
ctx.strokeStyle=montaña8.colorcontorno;
ctx.stroke();
	}
}
 montaña8.visualizar10(); 
 


// montaña 9
   var montaña9={
	colorfon:"#D1D2FF",
	puntoiniciox:620,
	puntoinicioy:100,
	lineax:670,
	lineay:180,
	linea2x:620,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#D1D2FF",
	visualizar11:function(){
		ctx.beginPath();
ctx.fillStyle =montaña9.colorfon;
ctx.moveTo(montaña9.puntoiniciox,montaña9.puntoinicioy);
ctx.lineTo(montaña9.lineax,montaña9.lineay);
ctx.lineTo(montaña9.linea2x,montaña9.linea2y);
ctx.fill();
ctx.lineWidth=montaña9.ancholinea;
ctx.strokeStyle=montaña9.colorcontorno;
	}
}
  montaña9.visualizar11();
       

// montaña 10
    var montaña10={
	colorfon:"#3200FF",
	lineax:620,
	lineay:350,
	linea1x:820,
	linea1y:100,
	linea2x:975,
	linea2y:350,
	ancholinea:1,
	colorcontorno:"#3200FF",
	visualizar12:function(){
		ctx.beginPath();
ctx.fillStyle =montaña10.colorfon;
ctx.lineTo(montaña10.lineax,montaña10.lineay);
ctx.lineTo(montaña10.linea1x,montaña10.linea1y);
ctx.lineTo(montaña10.linea2x,montaña10.linea2y);
ctx.fill();
ctx.lineWidth=montaña10.ancholinea;
ctx.strokeStyle=montaña10.colorcontorno;
ctx.stroke();
	}
}
 montaña10.visualizar12();
 


// montaña 11
   var montaña11={
	colorfon:"#FFFFFF",
	puntoiniciox:820,
	puntoinicioy:100,
	lineax:755,
	lineay:180,
	linea2x:820,
	linea2y:260,
	ancholinea:1,
	colorcontorno:"#FFFFFF",
	visualizar13:function(){
		ctx.beginPath();
ctx.fillStyle =montaña11.colorfon;
ctx.moveTo(montaña11.puntoiniciox,montaña11.puntoinicioy);
ctx.lineTo(montaña11.lineax,montaña11.lineay);
ctx.lineTo(montaña11.linea2x,montaña11.linea2y);
ctx.fill();
ctx.lineWidth=montaña11.ancholinea;
ctx.strokeStyle=montaña11.colorcontorno;
ctx.stroke();
	}
}
 montaña11.visualizar13();    


// montaña 12
    var montaña12={
	colorfon:"#D1D2FF",
	puntoiniciox:820,
	puntoinicioy:100,
	lineax:870,
	lineay:180,
	linea2x:820,
	linea2y:260,
	ancholinea:0,
	colorcontorno:"#D1D2FF",
	visualizar14:function(){
		ctx.beginPath();
ctx.fillStyle =montaña12.colorfon;
ctx.moveTo(montaña12.puntoiniciox,montaña12.puntoinicioy);
ctx.lineTo(montaña12.lineax,montaña12.lineay);
ctx.lineTo(montaña12.linea2x,montaña12.linea2y);
ctx.fill();
ctx.lineWidth=montaña12.ancholinea;
ctx.strokeStyle=montaña12.colorcontorno;
ctx.beginPath();
	}
}
  montaña12.visualizar14(); 
       

//===============
// ===linia===
 var linea0={
 	puntoiniciox:900,
 	puntoinicioy:220,
 	lineax:900,
 	lineay:600,
 	ancholinea:18,
 	colorcontorno:"#6A0015",
 	visualizar15:function(){
 		ctx.moveTo(linea0.puntoiniciox,linea0.puntoinicioy);
ctx.lineTo(linea0.lineax,linea0.lineay);
ctx.stroke();
ctx.lineWidth=linea0.ancholinea;
ctx.strokeStyle=linea0.colorcontorno;
ctx.stroke();
ctx.beginPath();
 	}
 }
 linea0.visualizar15();





//===============
// ===linia===
 var linea00={
 	puntoiniciox:900,
 	puntoinicioy:220,
 	lineax:900,
 	lineay:600,
 	ancholinea:18,
 	colorcontorno:"#6A0015",
 	visualizar16:function(){
 		ctx.moveTo(linea00.puntoiniciox,linea00.puntoinicioy);
ctx.lineTo(linea00.lineax,linea00.puntoinicioy);
ctx.stroke();
ctx.lineWidth=linea00.ancholinea;
ctx.strokeStyle=linea00.colorcontorno;
ctx.stroke();
ctx.beginPath();
 	}
 }
 linea00.visualizar16();



//===============
// ===pino I===
  var pino0={
	colorfon:"#003219",
	puntox:850,
	puntoy:270,
	linea1x:900,
	linea1y:160,
	linea2x:960,
	linea2y:270,
	ancholinea:1,
	colorcontorno:"#003219",
	visualizar17:function(){
		ctx.fillStyle =pino0.colorfon;
ctx.lineTo(pino0.puntox,pino0.puntoy);
ctx.lineTo(pino0.linea1x,pino0.linea1y);
ctx.lineTo(pino0.linea2x,pino0.linea2y);
ctx.fill();
ctx.lineWidth=pino0.ancholinea;
ctx.strokeStyle=pino0.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
pino0.visualizar17();



//===============
// ===pino II===
  var pino00={
	colorfon:"#003219",
	lineax:850,
	lineay:240,
	linea1x:900,
	linea1y:150,
	linea2x:960,
	linea2y:240,
	ancholinea:1,
	colorcontorno:"#003219",
	visualizar18:function(){
		ctx.fillStyle =linea00.colorfon;
ctx.lineTo(pino00.lineax,pino00.lineay);
ctx.lineTo(pino00.linea1x,pino00.linea1y);
ctx.lineTo(pino00.linea2x,pino00.linea2y);
ctx.fill();
ctx.lineWidth=pino00.ancholinea;
ctx.strokeStyle=pino00.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
pino00.visualizar18();


//===============
// ===pino III===
  var pino000={
	colorfon:"#028B19",
	lineax:850,
	lineay:200,
	linea1x:900,
	linea1y:100,
	linea2x:960,
	linea2y:200,
	ancholinea:1,
	colorcontorno:"#028B19",
	visualizar18:function(){
		ctx.fillStyle =pino000.colorfon;
ctx.lineTo(pino000.lineax,pino000.lineay);
ctx.lineTo(pino000.linea1x,pino000.linea1y);
ctx.lineTo(pino000.linea2x,pino000.linea2y);
ctx.fill();
ctx.lineWidth=pino000.ancholinea;
ctx.strokeStyle=pino000.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
pino000.visualizar18();





//========================================
//        montaña REDONDA I
//========================================
var montañaRedonda={
	puntox:895,
	puntoy:500,
	radio:180,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:0,
	colorcontorno:"#00780A",
	visualizar19:function(){
ctx.arc(montañaRedonda.puntox,montañaRedonda.puntoy,montañaRedonda.radio,montañaRedonda.puntox1,montañaRedonda.puntoy1);
ctx.fillStyle=montañaRedonda.colorfon;
ctx.fill();
ctx.lineWidth=montañaRedonda.ancholinea;
ctx.strokeStyle=montañaRedonda.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
montañaRedonda.visualizar19();




//===============
// ===linia===
 var lineaA={
 	puntoiniciox:140,
 	puntoinicioy:220,
 	lineax:140,
 	lineay:600,
 	ancholinea:18,
 	colorcontorno:"#6A0015",
 	visualizar20:function(){
 		ctx.moveTo(lineaA.puntoiniciox,lineaA.puntoinicioy);
ctx.lineTo(lineaA.lineax,lineaA.lineay);
ctx.stroke();
ctx.lineWidth=lineaA.ancholinea;
ctx.strokeStyle=lineaA.colorcontorno;
ctx.stroke();
ctx.beginPath();
 	}
 }
lineaA.visualizar20();
 


//========================================
//       ARBOL RAMA I
//========================================
var arbol={
	puntox:180,
	puntoy:200,
	radio:40,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#028B19",
	ancholinea:0,
	colorcontorno:"#028B19",
	visualizar21:function(){
        ctx.arc(arbol.puntox,arbol.puntoy,arbol.radio,arbol.puntox1,arbol.puntoy1);
ctx.fillStyle=arbol.colorfon;
ctx.fill();
ctx.lineWidth=arbol.ancholinea;
ctx.strokeStyle=arbol.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
arbol.visualizar21();



//========================================
//       ARBOL RAMA II
//========================================
var rama={
	puntox:110,
	puntoy:200,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#005119",
	ancholinea:0,
	colorcontorno:"#005119",
	visualizar22:function(){
        ctx.arc(rama.puntox,rama.puntoy,rama.radio,rama.puntox1,rama.puntoy1);
ctx.fillStyle=rama.colorfon;
ctx.fill();
ctx.lineWidth=rama.ancholinea;
ctx.strokeStyle=rama.colorcontorno;
ctx.stroke();
ctx.beginPath();	
	}
}
rama.visualizar22();


//========================================
//       ARBOL RAMA III
//========================================
var rama1={
	puntox:140,
	puntoy:200,
	radio:50,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#005119",
	ancholinea:1,
	colorcontorno:"#005119",
	visualizar23:function(){
		ctx.arc(rama1.puntox,rama1.puntoy,rama1.radio,rama1.puntox1,rama1.puntoy1);
ctx.fillStyle=rama1.colorfon;
ctx.fill();
ctx.lineWidth=rama1.ancholinea;
ctx.strokeStyle=rama1.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
rama1.visualizar23();


//========================================
//       ARBOL RAMA IV
//========================================
var rama2={
	puntox:160,
	puntoy:250,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#003219",
	ancholinea:1,
	colorcontorno:"#003219",
	visualizar24:function(){
		ctx.arc(rama2.puntox,rama2.puntoy,rama.radio,rama2.puntox1,rama2.puntoy1);
ctx.fillStyle=rama2.colorfon;
ctx.fill();
ctx.lineWidth=rama2.ancholinea;
ctx.strokeStyle=rama2.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
rama2.visualizar24();




//========================================
//        montaña redonda II
//========================================
var monte={
	puntox:80,
	puntoy:500,
	radio:210,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00B40A",
	ancholinea:1,
	colorcontorno:"#7cb342",
	visualizar25:function(){
		ctx.arc(monte.puntox,monte.puntoy,monte.radio,monte.puntox1,monte.puntoy1);
ctx.fillStyle=monte.colorfon;
ctx.fill();
ctx.lineWidth=monte.ancholinea;
ctx.strokeStyle=monte.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
monte.visualizar25();


//========================================
//        montaña II.I
//========================================
var monte1={
	puntox:20,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:1,
	colorcontorno:"#00780A",
	visualizar26:function(){
		ctx.arc(monte1.puntox,monte1.puntoy,monte1.radio,monte1.puntox1,monte1.puntoy1);
ctx.fillStyle=monte1.colorfon;
ctx.fill();
ctx.lineWidth=monte1.ancholinea;
ctx.strokeStyle=monte1.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
monte1.visualizar26();


ctx.arc(monte1.puntox,monte1.puntoy,monte1.radio,monte1.puntox1,monte1.puntoy1);
ctx.fillStyle=monte1.colorfon;
ctx.fill();
ctx.lineWidth=monte1.ancholinea;
ctx.strokeStyle=monte1.colorcontorno;
ctx.stroke();
ctx.beginPath();
//========================================
//        montaña II.II
//========================================
var monte2={
	puntox:80,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:1,
	colorcontorno:"#00780A",
	visualizar27:function(){
	ctx.arc(monte2.puntox,monte2.puntoy,monte2.radio,monte2.puntox1,monte2.puntoy1);
ctx.fillStyle=monte2.colorfon;
ctx.fill();
ctx.lineWidth=monte2.ancholinea;
ctx.strokeStyle=monte2.colorcontorno;
ctx.stroke();
ctx.beginPath();	
	}
}
monte2.visualizar27();



//========================================
//        montaña II.III
//========================================
var monte3={
	puntox:140,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:1,
	colorcontorno:"#00780A",
	visualizar28:function(){
		ctx.arc(monte3.puntox,monte3.puntoy,monte3.radio,monte3.puntox1,monte3.puntoy1);
ctx.fillStyle=monte3.colorfon;
ctx.fill();
ctx.lineWidth=monte3.ancholinea;
ctx.strokeStyle=monte3.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
monte3.visualizar28();


//========================================
//        montaña II.IV
//========================================
var monte4={
	puntox:200,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:1,
	colorcontorno:"#00780A",
	visualizar29:function(){
		ctx.arc(monte4.puntox,monte4.puntoy,monte4.radio,monte4.puntox1,monte4.puntoy1);
ctx.fillStyle=monte4.colorfon;
ctx.fill();
ctx.lineWidth=monte4.ancholinea;
ctx.strokeStyle=monte4.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
monte4.visualizar29();



//========================================
//        montaña II.IVs
//========================================
var monte5={
	puntox:260,
	puntoy:500,
	radio:30,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"#00780A",
	ancholinea:1,
	colorcontorno:"#00780A",
	visualizar30:function(){
		ctx.arc(monte5.puntox,monte5.puntoy,monte5.radio,monte5.puntox1,monte5.puntoy1);
ctx.fillStyle=monte5.colorfon;
ctx.fill();
ctx.lineWidth=monte5.ancholinea;
ctx.strokeStyle=monte5.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
monte5.visualizar30();



//========================================
//        manzanas
//========================================
var manzana={
	puntox:100,
	puntoy:250,
	radio:5,
	puntox1:0,
	puntoy1:2*Math.PI,
	colorfon:"red",
	ancholinea:1,
	colorcontorno:"red",
	visualizar31:function(){
		ctx.arc(manzana.puntox,manzana.puntoy,manzana.radio,manzana.puntox1,manzana.puntoy1);
ctx.fillStyle=manzana.colorfon;
ctx.fill();
ctx.lineWidth=manzana.ancholinea;
ctx.strokeStyle=manzana.colorcontorno;
ctx.stroke();
ctx.beginPath();
	}
}
manzana.visualizar31();


//recortar el dibujo de la imagen
//ctx.draw(imagen,x1,y1,recortex,recortey,x2,y2)
ctx.drawImage(sprite, ubicacionxo5,0,153,141,ubicacion5,300,200,200);
frame(movimientoopcion5);


}

//declaramos la funcion para qye se ejecute
movimientoopcion5();