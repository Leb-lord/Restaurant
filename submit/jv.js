var count=0;     
function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue =="") {
alert("You must write something!");
      } 
else {
    document.getElementById("myUL").appendChild(li);
    count+=1;
    }
document.getElementById("myInput").value = "";
var button=document.createElement("button");
button.className="close";
button.innerHTML="Remove";
li.appendChild(button);
var rmv=document.getElementsByClassName("close");
for (i=0;i<rmv.length;i++){
rmv[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
}
    

 
}