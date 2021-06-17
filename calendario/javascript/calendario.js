var app = {
  configuracoes: {
    container: $('.calendar'),
    calendar: $('.front'),
    days: $('.weeks span'),
    form: $('.back'),
    input: $('.back input'),
    buttons: $('.back ')
  },
  init: function () {
    instance = this;
    configuracoes = this.configuracoes;
    this.bindUIActions();
  },
  swap: function (currentSide, desiredSide) {
    configuracoes.container.toggleClass('flip');
    currentSide.fadeOut(600);
    currentSide.hide();
    desiredSide.show();
  },
  bindUIActions: function () {
    configuracoes.days.on('click', function () {
      instance.swap(configuracoes.calendar, configuracoes.form);
      configuracoes.input.focus();
    });
    configuracoes.buttons.on('click', function () {
      instance.swap(configuracoes.form, configuracoes.calendar);
    });
  }
}
app.init();
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var meses = [];
var dias = [];
var count = 0;
for (let index = 0; index < 11; index++) {
  let date = new Date(data.getFullYear(), index, 1); 
  let stringMes = date.toLocaleString('default', { month: 'long' });
  meses.push(stringMes.charAt(0).toUpperCase() + stringMes.slice(1));
}
for (let index = 6; index <= 12; index++) {
  let dataAtual = new Date(2009, 11, index); 
  let stringDia = dataAtual.toLocaleString('default', { weekday: 'long' });
  dias.push(stringDia.charAt(0).toUpperCase() + stringDia.slice(1));
}
function ConcatenarDataAtualComMes() {
  var diadeHj = dia + " de " + meses[mes];
  $('#divDia').text(diadeHj);
  $('#divDiaSemana').text(data.toLocaleString('default', { weekday: 'long' }).toUpperCase());
}
function ConcatenarMesAtualComAno(numMes,NumAno) {
  if (!isNaN(numMes) && numMes >= 0  && !isNaN(NumAno) && NumAno > 0) {
    let dataAtualcal = document.getElementById('divDataAtual');
    dataAtualcal.textContent = meses[numMes] + " de " + NumAno.toString();
  }else{
    let dataAtualcal = document.getElementById('divDataAtual');
    dataAtualcal.textContent = meses[data.getMonth()] + " de " + data.getFullYear().toString();
  }
}
function btnAnt_Prox() {
  ConcatenarMesAtualComAno(mes + count, ano);
  count++;
  document.getElementById('btn-left').addEventListener('click', () => lastMonth());
  document.getElementById('btn-right').addEventListener('click', () => nextMonth());
  writeMonth(mes);
  // function EscondeCalendario() {
  //   var button = document.getElementById("calendario");
  //   if (button.checked == true) {
  //     document.getElementById("calendario").hidden = false;
  //   }
  //   else {
  //     document.getElementById("calendario").hidden = false;
  //   }
  // }
}
function btnAnt_Antir() {
  ConcatenarMesAtualComAno(mes - count, ano);
  count--;
  document.getElementById('btn-left').addEventListener('click', () => lastMonth());
  document.getElementById('btn-right').addEventListener('click', () => nextMonth());
  writeMonth(mes);
  // function EscondeCalendario() {
  //   var button = document.getElementById("calendario");
  //   if (button.checked == true) {
  //     document.getElementById("calendario").hidden = false;
  //   }
  //   else {
  //     document.getElementById("calendario").hidden = false;
  //   }
  // }
}
$('#left').click(function () {
  configuracoes.container.toggleClass('front');
  ConcatenarDataAtualComMes();
  ConcatenarMesAtualComAno();
  btnAnt_Antir();
});
$('#right').click(function () {
  configuracoes.container.toggleClass('back');
  ConcatenarDataAtualComMes();
  ConcatenarMesAtualComAno();
  btnAnt_Prox();
});
let writeMonth = function(month) {
  document.getElementsByClassName('weeks').textContent = '';
  for (var i = startDay(); i > 0 ; i--) {
    dates.innerHTML += `<span class="last-month">${getTotalDays(month - 1) - (i - 1)}</span>`;
  }
  for (let i = 1; i <= getTotalDays(month); i++) {
    if (i === dia) {
      dates.innerHTML += ` <span class="active">${i}</span>`;
    } else {
      dates.innerHTML += ` <span>${i}</span>`;
    }
  }
}
let getTotalDays = function(month) {
  if (month === -1) month = 11;
  if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
}
let isLeap = function()  {
  return ((ano % 100 !== 0) && (ano % 4 === 0) || (ano % 400 === 0));
}
let startDay = function()  {
  debugger
  let start = new Date(ano, mes, 1);
  return start.getDay();
}
let lastMonth = function()  {
  if (mes !== 0) {
    mes--;
  } else {
    mes = 11;
    ano--;
  }
  setNewDate();
}
let nextMonth = function()  {
  if (mes !== 11) {
    mes++;
  } else {
    mes = 0;
    ano++;
  }
  setNewDate();
}
let setNewDate = function() {
  ConcatenarMesAtualComAno(mes,ano);
  writeMonth(mes);
}






