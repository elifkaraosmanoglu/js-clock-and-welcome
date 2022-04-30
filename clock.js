let user = prompt("Lütfen Adınızı Giriniz..");
document.querySelector("#myName").textContent=user;

 
function tarihSaat() {
    let date = new Date().toLocaleString();     // Tarih,saat al
    document.getElementById("myClock").innerHTML = date;
}

// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
