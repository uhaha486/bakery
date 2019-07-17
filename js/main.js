$(function () {
          
      
           
    $('#main-menu').hover(
        function(){
            $(this).find('.depth2').addClass('show');

    }, function(){
        $(this).find('.depth2').removeClass('show');

    }
    )
});

/* slider*/
$(function(){
    var img_num=0;
    var img_width=100;
    var duration=3000;
    //img_width*img_num
  
    var play_slider=setInterval(function(){
        if(img_num>=3){ img_num=0;}
        $('.sliders').css('margin-left',-(img_width*img_num)+'%');
        img_num++;
    },duration);
})