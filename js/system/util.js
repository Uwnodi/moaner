var DEBUG=false;

function logDebug(msg){
	if(DEBUG){
		console.log(msg);
	}
}

function startDebug(){
	DEBUG=true;
}

function stopDebug(){
	DEBUG=false;
}

let MoanerIsLoaded;

MoanerLoginListener();

async function MoanerLoginListener() {
  while (!MoanerIsLoaded) {
    try {
      while ((!window.CurrentScreen || window.CurrentScreen == "Login") && !isLoaded) {
		  //console.log("cherche isLoaded");
		  //console.log("window.CurrentScreen="+window.CurrentScreen);
        await new Promise(r => setTimeout(r, 2000));
      }
	  //console.log("window.CurrentScreen="+window.CurrentScreen);
	  //console.log("MoanerIsLoaded trouvé");
      MoanerIsLoaded = true; 
	  MoanerInitAlteredFns();
      
    } catch (err) { console.log(err); }
    await new Promise(r => setTimeout(r, 2000));
  }
}


function shuffle(array,seed) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
	seed=getRandomNumber(seed);

    // Pick a remaining element...
    randomIndex = seed%(array.length-1);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomNumber(seed){
	let number=Math.floor(Math.abs(Math.sin(seed)*1000));
	return number;
}