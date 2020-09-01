$(document).ready(function(){
      
    $('#mode').change(function(){
      if ($(this).is(':checked')) {
        $('html').attr('data-theme',"light-theme");
      }
      else{
        $('html').attr('data-theme',"dark-theme");
      }
    });
   
    $('.followers h2, .card_body h2').each(function () {
      var $this = $(this);
      $({ CounterNum: 0 }).animate({ CounterNum: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.CounterNum));
        }
      });
    });

});