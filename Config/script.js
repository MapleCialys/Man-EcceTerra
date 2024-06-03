function loadvar()
{
	var doc = {
				f: document.getElementById("fonctions"),
				m: document.getElementById("methodes"),
				sf: document.getElementById("sidef"),
				sm: document.getElementById("sidem"),
				c: document.getElementById("contact"),
				sc: document.getElementById("contact_button"),
				o: document.getElementById("outils"),
				so: document.getElementById("sideo"),
			  }
	return(doc);
}

function showf() 
{
	var doc = loadvar();
	doc.f.style.display = "block";
	doc.m.style.display = "none";
	doc.c.style.display = "none";
	doc.o.style.display = "none";
	doc.sf.classList.add('active');
	doc.sc.classList.remove('active');
	doc.sm.classList.remove('active');
	doc.so.classList.remove('active');
}

function showm() 
{
	var doc = loadvar();
	doc.m.style.display = "block";
	doc.f.style.display = "none";
	doc.c.style.display = "none";
	doc.o.style.display = "none";
	doc.sm.classList.add('active');
	doc.sc.classList.remove('active');
	doc.sf.classList.remove('active');
	doc.so.classList.remove('active');
}

function showc()
{
	var doc = loadvar();
	doc.sc.classList.add('active');
	doc.m.style.display = "none";
	doc.sm.classList.remove('active');
	doc.f.style.display = "none";
	doc.sf.classList.remove('active');
	doc.c.style.display = "block";
	doc.so.classList.remove('active');
	doc.o.style.display = "none";
}

function showo()
{
	var doc = loadvar();
	doc.o.style.display = "block";
	doc.m.style.display = "none";
	doc.c.style.display = "none";
	doc.f.style.display = "none";
	doc.so.classList.add('active');
	doc.sc.classList.remove('active');
	doc.sm.classList.remove('active');
	doc.sf.classList.remove('active');
}

function convim()
{
	var decim = null;
	let pied = Number(document.getElementById("pieds").value);
	let pouce = document.getElementById("pouces").value;
	if (pouce.includes("/"))
	{
		let x = Number(pouce.substr(pouce.indexOf(" ")+1,pouce.indexOf("/")-pouce.indexOf(" ")-1));
		let y = Number(pouce.substr(pouce.indexOf("/")+1));
		decim = x / y;
		decim += Number(pouce.substring(0, pouce.indexOf(" ")));	
	}
	if (decim != null)
		pouce = decim;
	let ret = pied * 0.3048 + Number(pouce) * 0.0254;
	ret = Math.round((ret+Number.EPSILON)*10000)/10000;
	document.getElementById("retconvim").innerHTML = isNaN(ret) ? "Erreur de syntaxe" : ret + " m.";
}

function convmi()
{
	let metre = Number(document.getElementById("metres").value);
	let ret = Math.round(((metre * 3.28084)+Number.EPSILON)*10000)/10000;
	document.getElementById("retconvmi").innerHTML = isNaN(ret) ? "Erreur de syntaxe" : ret + "'";
}

function convm2p2()
{
	let m2 = Number(document.getElementById("metres2").value);
	let ret = Math.round(((m2 * 10.76391041671)+Number.EPSILON)*10000)/10000;
	document.getElementById("retconvm2p2").innerHTML = isNaN(ret) ? "Erreur de syntaxe" : ret + " p²";
}

function convp2m2()
{
	let p2 = Number(document.getElementById("pieds2").value);
	let ret = Math.round(((p2 * 0.09290304)+Number.EPSILON)*10000)/10000;
	document.getElementById("retconvp2m2").innerHTML = isNaN(ret) ? "Erreur de syntaxe" : ret + " m²";
}

function switchsup(code)
{
	let pm = document.getElementById("convp2m2");
	let mp = document.getElementById("convm2p2");
	let mi = document.getElementById("convmi");
	let im = document.getElementById("convim");
	let retpm = document.getElementById("retconvp2m2").innerHTML;
	let retmp = document.getElementById("retconvm2p2").innerHTML;
	let retim = document.getElementById("retconvim").innerHTML;
	let retmi = document.getElementById("retconvmi").innerHTML;

	if (code == "mp")
	{
		mp.style.display = "none";
		pm.style.display = "block";
		let num = Number(retmp.substring(0, retmp.indexOf(" ")));
		document.getElementById("pieds2").value = num != 0 ? num : "";
			convp2m2();
	}
	else if (code == "pm")
	{
		pm.style.display = "none";
		mp.style.display = "block";
		let num = Number(retpm.substring(0, retpm.indexOf(" ")));
		document.getElementById("metres2").value = num != 0 ? num : "";
		convm2p2();
	}
	else if (code == "im")
	{
		im.style.display = "none";
		mi.style.display = "block";
		let num = Number(retim.substring(0, retim.indexOf(" ")));
		document.getElementById("metres").value = num != 0 ? num : "";
		convmi();
	}
	else if (code == "mi")
	{
		mi.style.display = "none";
		im.style.display = "block";
		let num = Number(retmi.substring(0, retmi.indexOf("'")));
		document.getElementById("pieds").value = num != 0 ? num : "";
		convim();
	}
}

function zoom(img)
{
	if (img.offsetHeight == "100")
		img.style.height = "200px";
	else if (img.offsetHeight == "200")
		img.style.height = "100px";
}

function powerSearch(txt)
{
	const allListItem = document.querySelectorAll("li");
	if (txt.length > 3)
	{

		allListItem.forEach((x) => 
		{
			dataKey = x.dataset.key;
			if (dataKey.includes(txt.toLowerCase()))
				x.style.display = "list-item";
			else
			x.style.display = "none";
		});
	}
	else
		allListItem.forEach((x) => x.style.display = "list-item");
	if (txt == "Kim over the top")
	{
		document.querySelector("HTML").style.backgroundColor = "#DDA0DD";
		document.querySelector(".side-nav").style.backgroundColor = "#DDA0DD";
		document.querySelector("input").style.color = "deeppink";
		document.querySelector(".side-nav").style.borderRight = "2px solid deeppink";
		document.querySelectorAll("h3").forEach(x=>x.style.color = "deeppink");
		document.getElementById("search").value = "";
		powerSearch("");
	}
	if (txt == "Marc-Alexandre")
	{
		document.querySelector(".nav-logo").innerHTML = "<img src='Images\\mab.png' alt='logo' width='250px'><h2>Manuel</h2>";
		document.querySelector("HTML").style.backgroundImage = "url(Images/maback.jpg)";
		document.getElementById("search").value = "";
		powerSearch("");
	}
}