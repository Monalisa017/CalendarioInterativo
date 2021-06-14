var app = {
    configuracoes: {
      container: $('.calendar'),
      calendar: $('.front'),
      days: $('.weeks span'),
      form: $('.back'),
      input: $('.back input'),
      buttons: $('.back button')
    },
    init: function() {
      instance = this;
      configuracoes = this.configuracoes;
      this.bindUIActions();
    },
    swap: function(currentSide, desiredSide) {
      configuracoes.container.toggleClass('flip');
      currentSide.fadeOut(600);
      currentSide.hide();
      desiredSide.show();
    },
    bindUIActions: function() {
      configuracoes.days.on('click', function(){
        instance.swap(configuracoes.calendar, configuracoes.form);
        configuracoes.input.focus();
      });
      configuracoes.buttons.on('click', function(){
        instance.swap(configuracoes.form, configuracoes.calendar);
      });
    }
  }
  app.init();
function teste(){
    configuracoes.container.toggleClass('flip');
    currentSide.fadeOut(600);
    currentSide.hide();
    desiredSide.show();
  }

function dataHoje(){
  var data = new Date();
  var diaSemana = data.getDay();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira","Sabado",)
  document.write( dia + " de " + meses[mes]);
  document.write("<br>");
  document.write(semanas[diaSemana].toUpperCase());
}

function mesAno(){
  var data = new Date()
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  document.write(meses[mes] + ano);
  mesAno.textContent = meses[mes];
}



