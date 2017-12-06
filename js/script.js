 //Start button for starting the count/game
 function startGame(){
 var number = document.getElementById("given_num").value;
 //document.getElementById("test").innerHTML = number;
 var count = 0;
 var interval = setInterval(function () {
	count++;
	document.getElementById("test").innerHTML = count;
	if (count % 3 == 0){
		document.getElementById("box1").style.backgroundColor = 'red';
	}
	else{
		document.getElementById("box1").style.backgroundColor = 'white';
	}
	if(count % 5 ==0)
	{
		document.getElementById("box2").style.backgroundColor = 'red';
	}
	else{
		document.getElementById("box2").style.backgroundColor = 'white';
	}
	
	if (count >= number)
	{clearInterval(interval);}
	}, 1000);
}
