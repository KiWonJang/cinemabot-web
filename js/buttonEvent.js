$(function(){

  function currentTime() {
    var now = new Date();
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
    return nowTime;
  }

  function sDivMsg(msg){
    var now = new Date();
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" ;
    return `<div class="row msg_container base_sent">
        <div class="col-md-10 col-xs-10 message-inner-s">
            <div class="messages msg_sent">
                <p>${msg}</p>
                <time datetime="2009-11-13T20:00">${currentTime()}</time>
            </div>
        </div>
        <div class="col-md-2 col-xs-2 avatar">
            <img src="image/profile.png" class=" img-responsive ">
        </div>
    </div> `;
  }
  function rDivMsg(msg){
    var now = new Date();
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" ;
    return `<div class="row msg_container base_receive">
        <div class="col-md-2 col-xs-2 avatar">
            <img src="image/popcorn.png" class=" img-responsive">
        </div>
        <div class="col-xs-10 col-md-10 message-inner-r">
            <div class="messages msg_receive">
                <p>${msg}</p>
                <time datetime="2009-11-13T20:00" id="clock" >${currentTime()}</time>
            </div>
        </div>
    </div> `;
  }
  function tDivMsg(msg){
    return `<div id="total">${msg}</div> `;
  }

  var sList = [];

  $('#sendBtn').click(function(){
    var msg = $('#inputText').val();
    sList.push(sDivMsg(msg));
    $('#show').html(sList);
    var input = document.getElementById("inputText");
    input.value = null;
    $.ajax({
        type : "POST",
        url : "http://54.180.98.17:8080/message",
        contentType:'application/json',
        // async : false,
        dataType :'json',
        data : JSON.stringify({content: msg}),
        success : function(message){
            var s = JSON.stringify(message["message"]["text"]);
            s = s.substring(1,s.length-1);
            sList.push(tDivMsg(rDivMsg(s)));
            $('#show').html(sList);
            $('.msg_container_base').scrollTop(320*sList.length);
        },
        error : function(e){
            sList.push(rDivMsg(JSON.stringify(e)));
            $('#show').html(sList);
        }
    })
  })
})
