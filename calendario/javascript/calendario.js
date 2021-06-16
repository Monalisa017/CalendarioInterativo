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




$('#left').click(function () {
  configuracoes.container.toggleClass('front');
  dataAtual();
  mesAnoAtual();
  btnAnt_Prox();
});
$('#right').click(function () {
  configuracoes.container.toggleClass('back');
  dataAtual();
  mesAnoAtual();
  btnAnt_Prox();
});

// $( document ).ready(function() {

// });

function dataAtual() {
  var data = new Date();
  var diaSemana = data.getDay();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado",)
  var diadeHj = dia + " de " + meses[mes];
  $('#divDia').text(diadeHj);
  $('#divDiaSemana').text(semanas[diaSemana].toUpperCase());


}
function mesAnoAtual() {
  var data = new Date()
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  var AnoAtual = ano;
  var AnoAtual = (meses[mes] + " de " + AnoAtual);
  $('#divAno').text(AnoAtual);
}
var count = 0;
function btnAnt_Prox() {
  let nomesMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  let dataAtual = new Date();
  let diaAtual = dataAtual.getDate();
  let numeroMes = dataAtual.getMonth() + count;
  let anoAtual = dataAtual.getFullYear();
  count++;

  let dataAtualcal = document.getElementById('divDataAtual');

  
  dataAtualcal.textContent = nomesMes[numeroMes] + " de " + anoAtual.toString();
  
  document.getElementById('btn-left').addEventListener('click', () => lastMonth());
  document.getElementById('btn-right').addEventListener('click', () => nextMonth());




  let writeMonth = (month) => {
    debugger
    for (var i = startDay(); i > 0 ; i--) {
      dates.innerHTML += `<span class="last-month">${getTotalDays(month - 1) - (i - 1)}</span>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
      if (i === diaAtual) {
        dates.innerHTML += ` <span class="active">${i}</span>`;
      } else {
        dates.innerHTML += ` <span>${i}</span>`;
      }
    }
  }

  let getTotalDays = month => {
    if (month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return 31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;

    } else {

      return isLeap() ? 29 : 28;
    }
  }

  let isLeap = () => {
    return ((anoAtual % 100 !== 0) && (anoAtual % 4 === 0) || (anoAtual % 400 === 0));
  }

  let startDay = () => {
    debugger
    let start = new Date(anoAtual, numeroMes, 1);
    return start.getDay();
    // return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1;
  }

  let lastMonth = () => {

    if (numeroMes !== 0) {
      numeroMes--;
    } else {
      numeroMes = 11;
      currentYear--;
    }

    setNewDate();
  }

  let nextMonth = () => {
    if (numeroMes !== 11) {
      numeroMes++;
    } else {
      numeroMes = 0;
      anoAtual++;
    }

    setNewDate();
  }

  let setNewDate = () => {
    dataAtual.setFullYear(anoAtual, numeroMes, diaAtual);
    dataAtualcal.textContent = nomesMes[numeroMes] + 'de' + anoAtual.toString();
    writeMonth(numeroMes);
  }

  writeMonth(numeroMes);

  window.addEventListener("load", selection());
  function EscondeCalendario() {
    var button = document.getElementById("calendario");

    if (button.checked == true) {
      document.getElementById("calendario").hidden = false;
    }
    else {
      document.getElementById("calendario").hidden = false;
    }
  }
}
