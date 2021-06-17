var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var meses = [];
var dias = [];

for (let index = 0; index < 12; index++) {
  let date = new Date(data.getFullYear(), index, 1);
  let stringMes = date.toLocaleString('default', { month: 'long' });
  meses.push(stringMes.charAt(0).toUpperCase() + stringMes.slice(1));
}
for (let index = 6; index <= 12; index++) {
  let dataAtual = new Date(2009, 11, index);
  let stringDia = dataAtual.toLocaleString('default', { weekday: 'long' });
  dias.push(stringDia.charAt(0).toUpperCase() + stringDia.slice(1));
}

const $toggle = $('#togglebtn');

 $toggle.on('click', function() {
   if ($(this).hasClass('active')) {
     $(this).removeClass('active');
   } else {
     $(this).addClass('active');
   }
 });



var funCalendario = {
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
    currentSide.fadeOut("slow");
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
  },
  startDay: function () {
    let start = new Date(ano, mes, 1);
    return start.getDay();
  },
  writeMonth: function (month) {

    var weeks = document.getElementById('weeks');
    weeks.innerHTML = '';

    for (var i = this.startDay(); i > 0; i--) {
      var d = document.createElement("div");
      d.classList.add("day");
      d.classList.add("blank");
      document.getElementById("weeks").appendChild(d);
    }

    for (let i = 0; i < this.getTotalDays(month); i++) {
      if (i === dia) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day active";
        d.innerHTML = tmp;
        document.getElementById("weeks").appendChild(d);

      } else {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + i;
        d.className = "day";
        d.innerHTML = tmp;
        document.getElementById("weeks").appendChild(d);
      }
    }
    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("weeks").appendChild(clear);


  },
  getTotalDays: function (month) {
    if (month === -1) month = 11;
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;
    } else {
      return this.isLeap() ? 29 : 28;
    }
  },
  isLeap: function () {
    return ((ano % 100 !== 0) && (ano % 4 === 0) || (ano % 400 === 0));
  },
  lastMonth: function () {
    debugger
    if (mes == 0) {
      mes = 11;
      ano--;
    } else {
      mes--;
    }

    this.setNewDate();
  },
  nextMonth: function () {
    debugger
    if (mes == 11) {
      mes = 0;
      ano++;
    } else {
      mes++;
    }

    this.setNewDate();
  },
  setNewDate: function () {
    this.concatenarMesAtualComAno(mes, ano);
    this.writeMonth(mes);
  },
  concatenarDataAtualComMes: function () {
    var diadeHj = dia + " de " + meses[mes];
    $('#divDia').text(diadeHj);
    $('#divDiaSemana').text(data.toLocaleString('default', { weekday: 'long' }).toUpperCase());
  },
  concatenarMesAtualComAno: function (numMes, NumAno) {
    if (!isNaN(numMes) && numMes >= 0 && !isNaN(NumAno) && NumAno > 0) {
      let dataAtualcal = document.getElementById('divDataAtual');
      dataAtualcal.textContent = meses[numMes] + " de " + NumAno.toString();
    } else {
      let dataAtualcal = document.getElementById('divDataAtual');
      dataAtualcal.textContent = meses[data.getMonth()] + " de " + data.getFullYear().toString();
    }
  }
}

 funCalendario.init();
 funCalendario.concatenarDataAtualComMes();
 funCalendario.concatenarMesAtualComAno(mes, ano);
 document.getElementById('btn-left').addEventListener('click', () => funCalendario.lastMonth());
 document.getElementById('btn-right').addEventListener('click', () => funCalendario.nextMonth());
 funCalendario.writeMonth(mes);