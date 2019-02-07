function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
     }
		}
		htp.send(null);
}
	getfile("dynamic.json",function(text){
		let data=JSON.parse(text);
		console.log(data);
		profile(data.profile);
		career(data.career);
		edu(data.education);
		lang(data.languages);
})
var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);

	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);

	var proll=document.createElement("p");
	proll.textContent=p.roll;
	left.appendChild(proll);

	var pInstitute=document.createElement("p");
	pInstitute.textContent=p.Institute;
	left.appendChild(pInstitute);

	var pPlace=document.createElement("p");
	pPlace.textContent=p.Place;
	left.appendChild(pPlace);
}
var right=document.querySelector(".right");
function career(car){
    var hc=document.createElement("h1");
	hc.innerHTML="Resume";
	right.appendChild(hc);

	var cc=document.createElement("h2");
    cc.innerHTML="career objective:";
	right.appendChild(cc);

	var chr=document.createElement("hr");
	right.appendChild(chr);

	var cp=document.createElement("p");
	cp.innerHTML=car.Info;
	right.appendChild(cp);
	}

	function edu(e){
		var ed=document.createElement("h2");
		ed.innerHTML="educational details:";
		right.appendChild(ed);
		var ehr=document.createElement("hr");
		right.appendChild(ehr);
		var etable=document.createElement("table");
		etable.border="1";
		var tr1="<tr><td>S</td><td>Degree</td><td>Institute</td><td>Year Of Passing</td></tr>";

		var tr2=" ";
		for(var i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].Degree+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Yop+"</td></tr>";
       
		}
		etable.innerHTML=tr1+tr2;
		right.appendChild(etable);
		}	
    function lang(l){
    	var lh=document.createElement("h2");
    	lh.textContent="languages known";
    	
    	right.appendChild(lh);
    	var ul=document.createElement("ul");
    	right.appendChild(ul);
    	for(i=0;i<l.length;i++){
    		var li=document.createElement("li");
    		li.textContent=l[i].lang;
    		ul.appendChild(li);
    	}


    }





