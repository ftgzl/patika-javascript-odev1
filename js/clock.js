function askName(){
  const name = prompt("Adınız nedir?", "");
  document.getElementById("myName").innerHTML= name;
}

function showTime() {
  const days = ['Pazartesi', 'Salı', "Çarşamba", "Perşembe","Cuma", "Cumartesi", "Pazar"];
  let day = new Date(); 
  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let lastTime = h + ":" + m + ":" + s + " " + days[day.getDay()-1];
  document.getElementById("myClock").innerText=lastTime;
  document.getElementById("myClock").textContent = lastTime;

  setTimeout(showTime, 1000);
}

askName()
showTime();