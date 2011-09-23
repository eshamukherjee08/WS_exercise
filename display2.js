function removeImg(e)                             //function that replaces the image
{   
	var a = e.name;
	if ( a == "remove1")
	{
		var x = imgid.shift();
		document.getElementById('dimg1').src = x ;
		hatao(imgid.length,a);
	}
	if ( a == "remove2")
	{
		var y = imgid.shift();
		document.getElementById('dimg2').src = y;
		hatao(imgid.length,a);
	}
	if ( a == "remove3")
	{
		var z = imgid.shift();
 		document.getElementById('dimg3').src = z;
		hatao(imgid.length,a);
	}
}
function hatao(len,a)                                                    //for removing elements.
{  
	var v = document.getElementById('divfoot');
	var w = document.getElementById('divmain');
	if(len == "" || len == undefined)                                    //removing divisions once array is empty.
	{                                                        
		if ( a == "remove1")
		{ 
			w.removeChild(document.getElementById('div1'));
		}
		if ( a == "remove2")
		{ 
			w.removeChild(document.getElementById('div2'));  
		}
		if ( a == "remove3")
		{  
			w.removeChild(document.getElementById('div3'));
		}
	}
		if (len == 6)                                                      //for removing images from array.
		{
	  		v.removeChild(document.getElementById('i4')); 
		}
		if (len == 5)
		{
	  		v.removeChild(document.getElementById('i5')); 
		}
		if (len == 4)
		{
	  		v.removeChild(document.getElementById('i6')); 
		}
		if (len == 3)
		{
	  		v.removeChild(document.getElementById('i7')); 
		}
		if (len == 2)
		{
	  		v.removeChild(document.getElementById('i8')); 
		}
		if (len == 1)
		{
	  		v.removeChild(document.getElementById('i11')); 
		} 
}