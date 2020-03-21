let v=document.querySelector("#res");
function display(x) {
	// body...
	if(v.innerHTML=="No input!") v.innerHTML="";
	v.innerHTML+=x;
}
function solve() {
	// body...
	const x=document.getElementById("res").innerText ;
	console.log(x);
	if(x=="") {
		v.innerHTML="No input!";
		return;
	}
	let ans=eval(x)*eval(x);
	v.innerHTML=ans;
}
function cls() {
	// body...
	v.innerHTML="";
}