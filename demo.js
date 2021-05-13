// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(100,100);
btn.onclick(function(e){
	console.log(e);
});


//Implement a MyToolkit Check box
var chkbx = new MyToolkit.Button;
chkbx.move(100,100);
chkbx.onclick(function(e){
	console.log(e);
});


//Implement a MyToolkit Radio Button


//Implement a MyToolkit Text Box
var txtbx = new MyToolkit.TextBox;
txtbx.move(100,100);
txtbx.onclick(function(e){
	console.log(e);
});

//Implement a MyToolkit Scroll Bar


//Implement a MyToolkit Progress Bar


//Implement a MyToolkit Custom Widget
