function printTime() {
              var clock = document.getElementById("clock");            // 출력할 장소 선택
              var now = new Date();                                                  // 현재시간
              var nowTime = now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
              clock.innerHTML = nowTime;           // 현재시간을 출력
              // setTimeout("printTime()",1000);         // setTimeout(“실행할함수”,시간) 시간은1초의 경우 1000
}
