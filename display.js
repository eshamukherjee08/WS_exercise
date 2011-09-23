var esha =                                                                    //object that is binding all the elements.
{
imgId : ["img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img11.jpg"],  //array storing the images.
removeImg : function(e){                                             //function to remove and replace image in main div.
	if(this.imgId.length == 0)
	{  
		this.deldiv(e);                                    //checks if array is empty then starts deleting divs.
	}
	else
	{
		var a = this.imgId.shift();                                  //else replaces images.
		e.parentNode.childNodes[3].childNodes[1].src = a;
		this.delImg();
	}
},
displayImg : function(){                                           //to display the images stored in array at footer div.
	var foot = document.getElementById('divfoot');
	var len = this.imgId.length;
	for(i=0;i<len;i++)
	{
		c = document.createElement("div");
		c.className = "dimg";
		g = document.createElement("img");
		g.className = "imag";
		g.src = this.imgId[i];
		c.appendChild(g);
		foot.appendChild(c);
	}                   
},
delImg : function(){                               //function to remove images from array as they are placed in main div.
	var fut = document.getElementById('divfoot');
	var p = fut.childNodes[1];
	p.parentNode.removeChild(p);
	
},
deldiv : function(len){                                               //function to delete div if image array is empty.
		var fk = len.parentNode;
		fk.parentNode.removeChild(fk);
}
}
