var app = {
    configuracoes: {
      container: $('.calendar'),
      calendar: $('.front'),
      days: $('.weeks span'),
      form: $('.back'),
      input: $('.back input'),
      buttons: $('.back ')
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
  $('#left').click(function(){
    configuracoes.container.toggleClass('front');
    // currentSide.fadeOut(600);
    // currentSide.hide();
    // desiredSide.show();
    dataAtual(); 
    mesAnoAtual();
    }); 
  $('#right').click(function(){
    configuracoes.container.toggleClass('back');
    currentSide.fadeOut(600);
    currentSide.hide();
    desiredSide.show();
    dataAtual();
    mesAnoAtual();

    });



  $( document ).ready(function() {
    
  });

function dataAtual(){
  var data = new Date();
  var diaSemana = data.getDay();
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
  var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira","Sabado",)
  var diadeHj = dia + " de " + meses[mes];
 $('#divDia').text(diadeHj);
 $('#divDiaSemana').text(semanas[diaSemana].toUpperCase());


}
function mesAnoAtual(){ 
    var data = new Date()
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    var AnoAtual = ano;
    var AnoAtual = (meses[mes] + " de " + AnoAtual);
    $('#divAno').text(AnoAtual);
  }









