
  var hist = [];
  function insert(num) {
  document.form.result.value = document.form.result.value + num;
}

function clean() {
  document.form.result.value = "";
}

function back() {
  var val = document.form.result.value;
  document.form.result.value = val.substring(0, val.length - 1);
}

function equal(history) {
  var val = document.form.result.value;
  if(val) {
    document.form.result.value = eval(val);
  }
  hist.push(val);
  document.getElementById('history').innerHTML = hist;
}
function int()
{
    var color = "#FFFFFF";
    var inp = document.getElementsByName('num');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].value == "int" && inp[i].checked) {
            document.getElementById('dot').style.display = 'none';
        }
    }
}
function full()
{
    var color = "#FFFFFF";
    var inp = document.getElementsByName('num');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].value == "full" && inp[i].checked) {
            document.getElementById('dot').style.display = 'block';
        }
    }
}
function showDiv(){
  document.getElementById("history").style.visibility = "visible";
}
