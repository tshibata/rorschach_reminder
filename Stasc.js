/* generated by stasc 1.5 */
Archipelago=function(){
	var n0=document.createElementNS('http://www.w3.org/2000/svg','svg');
	n0.setAttribute('width','320px');
	n0.setAttribute('height','240px');
	var n1=document.createElementNS('http://www.w3.org/2000/svg','defs');
	var n2=document.createElementNS('http://www.w3.org/2000/svg','filter');
	n2.setAttribute('id','archipelago');
	var n3=document.createElementNS('http://www.w3.org/2000/svg','feTurbulence');
	n3.setAttribute('type','turbulence');
	n3.setAttribute('baseFrequency','0.01');
	n3.setAttribute('numOctaves','10');
	n3.setAttribute('seed','1');
	n3.setAttribute('result','t');
	Object.defineProperty(n0, 'Seed',{
		set:function(v){n3.setAttribute('seed',v);},
		get:function(){return n3.getAttribute('seed');}
	});
	if(0<arguments.length){
		n0.Seed=arguments[0];
	}
	n2.appendChild(n3);
	var n4=document.createElementNS('http://www.w3.org/2000/svg','feColorMatrix');
	n4.setAttribute('in','t');
	n4.setAttribute('values','0,0,0,1.2,-0.2, 0,0,0,1.2,-0.2, 0,0,0,1.2,-0.2, 0,0,0,1.2,-0.2');
	n4.setAttribute('result','white');
	n2.appendChild(n4);
	var n5=document.createElementNS('http://www.w3.org/2000/svg','feComponentTransfer');
	n5.setAttribute('in','white');
	n5.setAttribute('result','water');
	var n6=document.createElementNS('http://www.w3.org/2000/svg','feFuncR');
	n6.setAttribute('type','table');
	n6.setAttribute('tableValues','0,0.1,1');
	n5.appendChild(n6);
	var n7=document.createElementNS('http://www.w3.org/2000/svg','feFuncG');
	n7.setAttribute('type','table');
	n7.setAttribute('tableValues','0.4,0.6,1');
	n5.appendChild(n7);
	var n8=document.createElementNS('http://www.w3.org/2000/svg','feFuncB');
	n8.setAttribute('type','table');
	n8.setAttribute('tableValues','1,0.9,0.5');
	n5.appendChild(n8);
	var n9=document.createElementNS('http://www.w3.org/2000/svg','feFuncA');
	n9.setAttribute('type','discrete');
	n9.setAttribute('tableValues','1');
	n5.appendChild(n9);
	n2.appendChild(n5);
	var n10=document.createElementNS('http://www.w3.org/2000/svg','feComponentTransfer');
	n10.setAttribute('in','white');
	n10.setAttribute('result','sand');
	var n11=document.createElementNS('http://www.w3.org/2000/svg','feFuncR');
	n11.setAttribute('type','discrete');
	n11.setAttribute('tableValues','0,1,1,1');
	n10.appendChild(n11);
	var n12=document.createElementNS('http://www.w3.org/2000/svg','feFuncG');
	n12.setAttribute('type','discrete');
	n12.setAttribute('tableValues','0,1,1,1');
	n10.appendChild(n12);
	var n13=document.createElementNS('http://www.w3.org/2000/svg','feFuncB');
	n13.setAttribute('type','discrete');
	n13.setAttribute('tableValues','1,0.5,0.5,0.5');
	n10.appendChild(n13);
	var n14=document.createElementNS('http://www.w3.org/2000/svg','feFuncA');
	n14.setAttribute('type','discrete');
	n14.setAttribute('tableValues','0,1,1,1');
	n10.appendChild(n14);
	n2.appendChild(n10);
	var n15=document.createElementNS('http://www.w3.org/2000/svg','feComponentTransfer');
	n15.setAttribute('in','white');
	n15.setAttribute('result','fertile');
	var n16=document.createElementNS('http://www.w3.org/2000/svg','feFuncA');
	n16.setAttribute('type','discrete');
	n16.setAttribute('tableValues','0,1,1');
	n15.appendChild(n16);
	n2.appendChild(n15);
	var n17=document.createElementNS('http://www.w3.org/2000/svg','feDiffuseLighting');
	n17.setAttribute('in','white');
	n17.setAttribute('lighting-color','green');
	n17.setAttribute('surfaceScale','10');
	n17.setAttribute('result','green');
	var n18=document.createElementNS('http://www.w3.org/2000/svg','feDistantLight');
	n18.setAttribute('azimuth','225');
	n18.setAttribute('elevation','45');
	n17.appendChild(n18);
	n2.appendChild(n17);
	var n19=document.createElementNS('http://www.w3.org/2000/svg','feComposite');
	n19.setAttribute('in','green');
	n19.setAttribute('in2','fertile');
	n19.setAttribute('operator','in');
	n19.setAttribute('result','plants');
	n2.appendChild(n19);
	var n20=document.createElementNS('http://www.w3.org/2000/svg','feMerge');
	var n21=document.createElementNS('http://www.w3.org/2000/svg','feMergeNode');
	n21.setAttribute('in','water');
	n20.appendChild(n21);
	var n22=document.createElementNS('http://www.w3.org/2000/svg','feMergeNode');
	n22.setAttribute('in','sand');
	n20.appendChild(n22);
	var n23=document.createElementNS('http://www.w3.org/2000/svg','feMergeNode');
	n23.setAttribute('in','plants');
	n20.appendChild(n23);
	n2.appendChild(n20);
	n1.appendChild(n2);
	n0.appendChild(n1);
	var n24=document.createElementNS('http://www.w3.org/2000/svg','rect');
	n24.setAttribute('x','0');
	n24.setAttribute('y','0');
	n24.setAttribute('width','320');
	n24.setAttribute('height','240');
	n24.setAttribute('filter','url(#archipelago)');
	n0.appendChild(n24);
	return n0;
};