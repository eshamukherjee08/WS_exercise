function removeImg(e)                             //function that replaces the image
{   
	var a = e.name;
   var imgid = new Array();
	imgid[0] = document.getElementById('img4').src;
   imgid[1] = document.getElementById('img5').src;
	imgid[2] = document.getElementById('img6').src;
	imgid[3] = document.getElementById('img7').src;
	imgid[4] = document.getElementById('img8').src;
	imgid[5] = document.getElementById('img11').src;
	if ( a == "remove1")
	{
		var x = imgid.shift();
		document.getElementById('dimg1').src = x ;
		//var v = document.getElementById('divfoot');
		//v.removeChild(document.getElementById('l'));
	}
	if ( a == "remove2")
	{
		var y = imgid.shift();
		document.getElementById('dimg2').src = y;
	}
	if ( a == "remove3")
	{
		var z = imgid.shift();
 		document.getElementById('dimg3').src = z;
	}
}
/*function ca()                                //function that stores array.
{
  	var imgid = new Array();
	imgid[0] = document.getElementById('img4').src;
   imgid[1] = document.getElementById('img5').src;
	imgid[2] = document.getElementById('img6').src;
	imgid[3] = document.getElementById('img7').src;
	imgid[4] = document.getElementById('img8').src;
	imgid[5] = document.getElementById('img11').src; 
}*/