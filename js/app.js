/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
/* eslint-disable react/jsx-sort-prop-types */

var currentOp = $('.current-operand span');
var previousOp = $('.previous-operand span');
var currentHolder = '';
var previousHolder = '';

$('#all-clear').on('click', function () {
  currentOp.text('');
  previousOp.text('');
  currentHolder = '';
  previousHolder = '';
});


$('.number').on('click', function () {
  currentHolder += $(this).val();
  currentOp.text(currentHolder);
});

$('.operator').on('click', function() {
    previousHolder = currentHolder;
    previousHolder += $(this).val();
    previousOp.text(previousHolder);
    currentHolder = '';
    currentOp.text(currentHolder);
    
});


$('.delete').on('click', del);

function del() {
  var dels = currentOp.text().slice(0, -1);
  currentHolder = dels;
  currentOp.text(dels);
  
}

function compute () {

  var a,b,c;

  switch (previousOp.text().slice(-1)) {
    case '+':
    a = parseFloat(previousOp.text());
    b = parseFloat(currentOp.text());
    c = a + b;
    currentHolder = c;
    currentOp.text(currentHolder);
    something = currentOp.text();
    break;

    case '-':
    a = parseFloat(previousOp.text());
    b = parseFloat(currentOp.text());
    c = a - b;
    currentHolder = c;
    currentOp.text(currentHolder);
    something = currentOp.text();
    break;

    case '*':
    a = parseFloat(previousOp.text());
    b = parseFloat(currentOp.text());
    c = a * b;
    currentHolder = c;
    currentOp.text(currentHolder);
    something = currentOp.text();
    break;
    
    case '÷':
    a = parseFloat(previousOp.text());
    b = parseFloat(currentOp.text());
    c = a / b;
    currentHolder = c;
    currentOp.text(currentHolder);
    something = currentOp.text();
    break;

    default:
    alert('Please input a number');
      break;
  }
    previousHolder = '';
    previousOp.text(previousHolder);
}

$('#equals').on('click', compute);