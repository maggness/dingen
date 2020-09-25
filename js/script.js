var swagtekst = document.querySelector('#swag');
var detekst = document.querySelector('#tekst');
var gedaantekst = document.querySelector('#gedaan');
var letterstekst = document.querySelector('#letters');
var letterstekst1 = document.querySelector('#letters1');
var letterstekst2 = document.querySelector('#letters2');
var letterstekst3 = document.querySelector('#letters3');
var letterstekst4 = document.querySelector('#letters4');
var letterstekst5 = document.querySelector('#letters5');
var letterstekst6 = document.querySelector('#letters6');
var form = document.querySelector('#hetwoord');
var letters = ['a', 'b', 'c', 'd', 'e' ,'f' ,'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var gedaan = 0;
var min = 0; var max = 25; var min2 = 0; var max2 = 25; var min3 = 0; var max3 = 25; var min4 = 0; var max4 = 25; var min5 = 0; var max5 = 25; var min6 = 0; var max6 = 25;

function monkecheck() {
    var woord = form.aword.value ;
    console.log(woord.length);

  if (letterstekst.textContent == woord) {
    detekst.textContent = "You did it!";
    swagtekst.hidden = true;
  } else {
    gedaan =  gedaan + 1;
    gedaantekst.textContent = "Times typed " + gedaan;

    if ( woord.length == "1" ) {
      monkescript();
    }

    if ( woord.length == "2" ) {
      monkescript();
      monkescript2();
    }

    if ( woord.length == "3" ) {
      monkescript();
      monkescript2();
      monkescript3();
    }

    if ( woord.length == "4" ) {
      monkescript();
      monkescript2();
      monkescript3();
      monkescript4();
    }

    if ( woord.length == "5" ) {
      monkescript();
      monkescript2();
      monkescript3();
      monkescript4();
      monkescript5();
    }

    if ( woord.length == "6" ) {
      monkescript();
      monkescript2();
      monkescript3();
      monkescript4();
      monkescript5();
      monkescript6();
    }

    monketekst();
    event.preventDefault();
  }

}

function monkescript() {

  var letterNummer1 = Math.floor( Math.random() * (max-min+1) ) + min ;

  letterstekst1.textContent = letters[letterNummer1];
  console.log(letterNummer1);

}

function monkescript2() {
  var letterNummer2 = Math.floor( Math.random() * (max2-min2+1) ) + min2 ;

  letterstekst2.textContent = letters[letterNummer2];
  console.log(letterNummer2);
}

function monkescript3() {
  var letterNummer3 = Math.floor( Math.random() * (max3-min3+1) ) + min3 ;

  letterstekst3.textContent = letters[letterNummer3];
  console.log(letterNummer3);
}

function monkescript4() {
  var letterNummer4 = Math.floor( Math.random() * (max4-min4+1) ) + min4 ;

  letterstekst4.textContent = letters[letterNummer4];
  console.log(letterNummer4);
}

function monkescript5() {
  var letterNummer5 = Math.floor( Math.random() * (max5-min5+1) ) + min5 ;

  letterstekst5.textContent = letters[letterNummer5];
  console.log(letterNummer5);
}

function monkescript6() {
  var letterNummer6 = Math.floor( Math.random() * (max6-min6+1) ) + min6 ;

  letterstekst6.textContent = letters[letterNummer6];
  console.log(letterNummer6);
}


function monketekst () {
  var monkeletters = letterstekst1.textContent + letterstekst2.textContent + letterstekst3.textContent + letterstekst4.textContent + letterstekst5.textContent + letterstekst6.textContent;
  letterstekst.textContent = monkeletters;
  console.log(monkeletters);
}

swagtekst.addEventListener("click", monkecheck);
