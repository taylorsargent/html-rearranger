var $h1Below = $('<h1>');
var $ulBelow = $('<ul>');
var $liBelow = $('<li>');

var $h1Above = $('<h1>');
var $ulAbove = $('<ul>');

$h1Below.html('Below ground veggies');

$('body').append($h1Below);
$('body').append($ulBelow);

$h1Above.html('Above ground veggies');

$('body').append($h1Above);
$('body').append($ulAbove);

$('ul li').each(function () {
  if($(this).hasClass('below')){
    $ulBelow.append($(this))
  } else{
    $ulAbove.append($(this))
  }
});
