const appetizers={"falafel":3,"fattoush":4,"frenchfries":2,"hummus":2,"mutabbal":3,"samosa":3,"tabbouleh":4,"warak3nab":5,"":0};
const main={"burger":4,"cheese burger":4,"chicken burger":4,"sandwich":3,"fajita":4,"fish":5,"hot dog":4,"lasagna":5,"suchi":20,"pizza":4};
const drinks={"cappuccino":3,"coca cola":2,"coffee":2,"hot choclate":3,"ice cream":2,"juice":1,"milkshake":5,"pepsi":2,"":0};
const dessert={"baklawa":20,"cake":12,"cookies":8,"cupcake":4,"paincake":5,"strawberry":4,"oreo crepe":6,"narjila":3,"":0}; 
var prices=0;
var appet=Object.keys(appetizers);
var mai=Object.keys(main);
var drin=Object.keys(drinks);
var dess=Object.keys(dessert);

function print(){
  var a,m,dr,de;
  let text="<option>"
for (i=0;i<appet.length;i++){
  a+=text+appet[i];
  m+=text+mai[i];
  dr+=text+drin[i];
  de+=text+dess[i];
  document.getElementById("api").innerHTML=a+"</option>";
  document.getElementById("main").innerHTML=m+"</option>";
  document.getElementById("drinks").innerHTML=dr+"</option>";
  document.getElementById("dessert").innerHTML=de+"</option>";
}
document.getElementById("main").innerHTML+=text+""+"</option>";
document.getElementById("visibl").style.visibility="visible";
}

function newElement() {
var li1 = document.createElement("li");
var li2= document.createElement("li");
var li3= document.createElement("li");
var li4= document.createElement("li");
var element1 = document.getElementById("api").value;
var element2 = document.getElementById("main").value;
var element3 = document.getElementById("drinks").value;
var element4 = document.getElementById("dessert").value;

if (element1!="") {
  var a = document.createTextNode(element1);
  li1.appendChild(a);
  document.getElementById("myUL").appendChild(li1);
  prices+=appetizers[element1];
} 
if(element2!="") {
  var b = document.createTextNode(element2);
  li2.appendChild(b);
  document.getElementById("myUL").appendChild(li2);
  prices+=main[element2];
    }
if(element3!=""){
  var c = document.createTextNode(element3);
  li3.appendChild(c);
  document.getElementById("myUL").appendChild(li3);
  prices+=drinks[element3];
}
if (element4!=""){
  var d = document.createTextNode(element4);
  li4.appendChild(d);
  document.getElementById("myUL").appendChild(li4);
  prices+=dessert[element4];
}
var button1=document.createElement("button");
var button2=document.createElement("button");
var button3=document.createElement("button");
var button4=document.createElement("button");
button1.className="close";
button1.innerHTML="Remove";
button2.className="close";
button2.innerHTML="Remove";
button3.className="close";
button3.innerHTML="Remove";
button4.className="close";
button4.innerHTML="Remove";
li1.appendChild(button1);
li2.appendChild(button2);
li3.appendChild(button3);
li4.appendChild(button4);
var rmv=document.getElementsByClassName("close");
for (i=0;i<rmv.length;i++){
rmv[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  var decrease=div.textContent.slice(0,div.textContent.length-6);
  for (i=0;i<mai.length;i++){
    if(appet[i]==decrease){
      prices-=appetizers[decrease];
      price(prices);
      break;}
    if (mai[i]==decrease){
      prices-=main[decrease];
      price(prices);
      break;}
    if (drin[i]==decrease){
      prices-=drinks[decrease];
      price(prices);
      break;}
    if (dess[i]==decrease){
      prices-=dessert[decrease];
      price(prices);
      break;}
    }
  }
  }
price(prices); }


function price(prices){
  document.getElementById("prices").innerHTML=prices+"$";
}

function submit(){
  window.location.reload();
}
