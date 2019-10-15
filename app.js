let evet = document.getElementById("yes").addEventListener("click",olustur);
let isim = document.getElementById("isim");
let soyisim = document.getElementById("soyisim");
let yas = document.getElementById("yaş");
let sonuc = document.getElementById("sonuç");
var pre = document.createElement("pre");
let ust = document.getElementById("ust")
let hayir = document.getElementById("no").addEventListener("click",listele);

function listele(e){
          sonuc.innerHTML = " İsminiz: " + isim.value +   " "
                    +  "<br/>"+" Soyisminiz:" + soyisim.value  +  " "
                    +   "<br/>"+" Yaşınız: " + yas.value ;
}
var tikla = 1;
 function olustur(e){
    if(tikla > 1){
        return false;
    }
    else{
    var maas = document.createElement("INPUT");
    maas.id = "maas";
    maas.setAttribute("type", "text");
    var element = document.createElement("p");
    element.id = "element";
    var yaz = document.createTextNode("Maaşınızı giriniz:");
    ust.appendChild(element);
    element.appendChild(yaz);
    ust.appendChild(maas);
    element.style.marginLeft = "220px" , marginTop = "10px";
    maas.style.marginLeft="195px" ,marginTop = "40px", height = "20px" , width = "150px";
    var tamam = document.createElement("button");
    tamam.id = "tamam";
    ust.appendChild(tamam);
    tamam.style.height = "40px" , width = "100px" , marginLeft = "30px";
    tamam.innerHTML = "Tamam";


tamam.addEventListener("click",finish);
function finish(){
    var son = document.createElement("p");
    ust.appendChild(son);
    son.innerHTML = " İsminiz: " + isim.value +   " "
                    +  "<br/>"+" Soyisminiz:" + soyisim.value  +  " "
                    +   "<br/>"+" Yaşınız: " + yas.value + " "
                    + "<br/>"+"Maaşınız: " + maas.value;

        
}
 tikla++;
return true;
   }
}

 