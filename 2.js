window.onload=function () {
	alert(1)
	for (var i = 0; i < Things.length; i++) {
		Things[i].onclick=function(){
			console.log(1)
		}
	}
	// body...
}