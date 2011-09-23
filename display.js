var esha =
{
imgId : ["img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img11.jpg"],
removeImg : function(e){
	if(this.imgId.length == 0)
	{  
		this.deldiv(e);
	}
	else
	{
		var a = this.imgId.shift();
		e.parentNode.childNodes[3].childNodes[1].src = a;
		this.delImg();
	}
},
displayImg : function(){
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
delImg : function(){
	var fut = document.getElementById('divfoot');
	var p = fut.childNodes[1];
	p.parentNode.removeChild(p);
	
},
deldiv : function(len){
		var fk = len.parentNode;
		fk.parentNode.removeChild(fk);
}
}
