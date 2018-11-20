$(function(){
  var timer;
  var index = 0;
  $("#bnaner ol li:eq(0)").css('background-color', 'black');
  timer = setInterval(function(){
    autoPlay();
  },2000)
  function  autoPlay() {
   index++;
   if(index > 2){
     index = 0; 
     $('ul').css('left', 0);
   }
   $("#bnaner ul").css({
    left: -(index * 100) + '%'
   })
    //小圆点滚动
    $('#bnaner ol>li').eq(index).css('background-color', 'black').siblings().css('background-color', '#ccc')
  }
 $("#bnaner span").eq(0).click(function(){
  autoPlay();
 })
 
 $("#bnaner span").eq(1).click(function(){
    index--;
    if(index < 0){
      index = 2;
      $('#bnaner ul').css('left', -(4* 100) + '%');
    }
    $('#bnaner ul').css({
      left: -(index * 100) + '%'
    });
   $('#bnaner ol>li').eq(index).css('background-color', 'black').siblings().css('background-color', '#ccc');
   })
    //鼠标放上去就停止动画
    $('#bnaner').hover(function () {
      clearInterval(timer);
    }, function () {
      timer = setInterval(function () {
          autoPlay();
      }, 2000);
    });
  //点击指示器滚动
  $('#bnaner ol>li').click(function(){
    //           alert(111)
                    index = $(this).index();
                    $('#bnaner ul').css({
                        left: -(index * 100) + '%'
                    })
                $('#bnaner ol>li').eq(index).css('background-color', 'black').siblings().css('background-color', '#ccc')
   
  })
})