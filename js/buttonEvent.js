$(function(){

  function currentTime() {
    var now = new Date();                                                  // 현재시간
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
    return nowTime;
  }

  function sDivMsg(msg){
    var now = new Date();                                                  // 현재시간
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" ;
    return `<div class="row msg_container base_sent">
        <div class="col-md-10 col-xs-10 ">
            <div class="messages msg_sent">
                <p>${msg}</p>
                <time datetime="2009-11-13T20:00">${currentTime()}</time>
            </div>
        </div>
        <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
        </div>
    </div> `;
  }
  function rDivMsg(msg){
    var now = new Date();                                                  // 현재시간
    var nowTime =  now.getHours() + "시" + now.getMinutes() + "분" ;
    return `<div class="row msg_container base_receive">
        <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
        </div>
        <div class="col-xs-10 col-md-10">
            <div class="messages msg_receive">
                <p>${msg}</p>
                <time datetime="2009-11-13T20:00" id="clock"></time>
            </div>
        </div>
    </div> `;
  }
  var sList = [];
  var rList = [];
  var temp;


  $('#sendBtn').click(function(){
    var msg = $('#inputText').val();
    // list.push(inputText);
    sList.push(sDivMsg(msg));

    $('#show').html(sList);
    $.ajax({
        type : "POST",
        url : "4.180.98.17:8080/message",
        // crossDomain: true,
        contentType:'application/json',
        // async : false,
        dataType :'json',
        data : {"user_key":"encryptedUserKey", "type":"text", "content":"안녕하세요~"},

        beforeSend : function(e){
          // alert(JSON.stringify(e));
        },
        success : function(message){
            sList.push(rDivMsg(JSON.stringify(message)));
            $('#show').html(sList);
        },
        error : function(e){
            sList.push(rDivMsg(JSON.stringify(e)));
            $('#show').html(sList);
        },
        complete: function(e) {
          // alert(JSON.stringify(e));
        }
    })

  })

})