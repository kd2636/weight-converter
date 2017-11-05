document.getElementById('output').style.visibility = 'hidden';

document.getElementById('inputValue').addEventListener('input', conversion);
document.getElementById('inputUnit').addEventListener('change', conversion);

function conversion() {
  document.getElementById('output').style.visibility = 'visible';
  var value = document.getElementById('inputValue').value;
  var unit = document.getElementById('inputUnit').value;

  if (unit == 'lbs'){
    givenPounds(value);
  }
  else if(unit == 'grm'){
    givenGrams(value);
  }
  else if(unit == 'kg'){
    givenKilograms(value);
  }
  else {
    givenOunces(value);
  }

}

function givenPounds(value){
  document.getElementById('text-1').innerHTML = 'Grams';
  document.getElementById('text-2').innerHTML = 'Kilograms';
  document.getElementById('text-3').innerHTML = 'Ounces';
  document.getElementById('output-1').innerHTML = value*453.92;
  document.getElementById('output-2').innerHTML = value*.453;
  document.getElementById('output-3').innerHTML = value*16;

}

function givenOunces(value){
  document.getElementById('text-1').innerHTML = 'Pounds';
  document.getElementById('text-2').innerHTML = 'Grams';
  document.getElementById('text-3').innerHTML = 'Kilograms';
  document.getElementById('output-1').innerHTML = value/16;
  document.getElementById('output-2').innerHTML = value*28.34;
  document.getElementById('output-3').innerHTML = value*.02834;

}

function givenGrams(value){
  document.getElementById('text-1').innerHTML = 'Pounds';
  document.getElementById('text-2').innerHTML = 'Kilograms';
  document.getElementById('text-3').innerHTML = 'Ounces';
  document.getElementById('output-1').innerHTML = value/453.92;
  document.getElementById('output-2').innerHTML = value/1000;
  document.getElementById('output-3').innerHTML = value*.035274;

}

function givenKilograms(value){
  document.getElementById('text-1').innerHTML = 'Pounds';
  document.getElementById('text-2').innerHTML = 'Grams';
  document.getElementById('text-3').innerHTML = 'Ounces';
  document.getElementById('output-1').innerHTML = value*2.204;
  document.getElementById('output-2').innerHTML = value*1000;
  document.getElementById('output-3').innerHTML = value*35.274;

}
