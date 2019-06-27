function myLog(x) {
  var i = 0, pwr = 1, base = 10, n = -1;
  if (x == 0) {
    $('#outputx').val("&infin;");
  }

  else if (x >= 0.1)
    for (i = 0; i < 10; ++i) {
      --pwr;
      while (Math.pow(base, n + 1 * Math.pow(10, pwr)) <= x) {
        n += 1 * Math.pow(10, pwr);
      }
      if (Math.pow(base, n) == x) {
        $('#outputx').val(n);
        break;
      }
    }

  else
    for (i = 0; i < 10; ++i) {
      --pwr;
      while (Math.pow(base, n - 1 * Math.pow(10, pwr)) >= x) {
        n -= 1 * Math.pow(10, pwr);
      }
      if (Math.pow(base, n) == x) {
        $('#outputx').val(n);
        break;
      }
    }
  $('#outputx').val(n);
}

$(document).ready(function () {
  $(".but-col").click(function () {
    var strx = $('#inputx').val();
    myLog(parseFloat(strx));
    $("#outlab").text(`log ( ${strx} ) =  `);
  });
});