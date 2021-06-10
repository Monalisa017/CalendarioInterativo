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