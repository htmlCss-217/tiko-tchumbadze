'use strict';

let text = "Hello World!"
document.getElementById('lorem').innerHTML = text;

var tag = document.createElement("p");
var text1 = document.createTextNode("new text from js");
tag.appendChild(text1);
var element = document.getElementById("lorem");
element.appendChild(tag);