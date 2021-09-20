function byTagNames(){
    let tagNames = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = tagNames[0].innerHTML;
}
function changeP2(){
    document.getElementsById("p2").innerHTML=document.getElementsById("p1").firstChild.nodeValue;
}