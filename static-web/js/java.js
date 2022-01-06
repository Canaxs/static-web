$(document).ready(function(){
    $("#mobile-menu-icon").click(function(){
        $(".mobile-menu-area").css({display: "block"});
        $(".mobile-menu-area").animate({top: "0%"},500);
    });
    $("#exit").click(function(){
        $(".mobile-menu-area").animate({top: "-100%"},500);
    });


});
var us = "";
var sepet = 0;
var medicinesepet = new Array();
var medicinesepetmoney = new Array();
                var use="";
                var medicinecounter = 0;

                var householdcounter = 0;

                var naturalcounter = 0;

                var dietcounter = 0;

                var medicines = 0;
                var medicine = ["Urinonvef Cranberry","Osteozinc","Omepa","Magnimore","Urinonvef Cranberry","Osteozinc","Omepa","Magnimore"];
                var medicinemoney = [12,15,10,5,8,4,6,7,8,54,54];
                var medicinetext = ["Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum","Lorem İpsum"];
                var images = ["medicine1","medicine2","medicine3","medicine4","medicine1","medicine2","medicine3","medicine4"];
                for(var i = 0;i<medicine.length;i++) {
                    medicinecounter++;
                }
                if(medicinecounter % 4 == 0) {
                    medicinecounter = medicinecounter / 4;
                } 
                else {
                    medicinecounter = (medicinecounter / 4);
                }
                for(var i = 0;i<medicinecounter;i++){
                    for(var k = 0;k<4;k++){
                        if(medicine[medicines] != undefined){
                            use += "<div class='shop-box'><div class='shop-box-image'><image src='images/"+images[medicines]+".jpg'/></div><div class='shop-box-text'><h3>"+medicine[medicines]+"</h3><p>"+medicinemoney[medicines]+"$</p><a href='#' class='sepetekle' onclick='medicinem("+medicinemoney[medicines]+")'>Sepete Ekle</a></div></div>";
                            medicines++;
                        }
                    }
                    us += "<div class='shop-box-4'>"+use+"</div>";
                    use="";
                }
                document.getElementById("shop-dom-50").innerHTML= us;

function medicinem(money){
    var tut = 0;
    for(var i = 0;i<medicinemoney.length;i++) {
        if(money == medicinemoney[i]) {
            tut += i;
        }
    }
    sepet+= money;
    medicinesepetmoney[medicinesepetmoney.length+1]= money;
    medicinesepet[medicinesepet.length+1] = medicine[tut];
    document.getElementById("shoppinge").innerHTML = "Shopping: "+sepet+"$";
}
function shopedelete(top){
    medicinesepet[top] = undefined;
    sepet= sepet - medicinesepetmoney[top];
    Shope();
}
function shopefulldelete() {
    for(var i = 0;i<medicinesepet.length;i++) {
        medicinesepet[i] = undefined;
    }
    sepet = 0;
    Shope();
}
function Shope(){
    var html2 = "";
    for(var i=0;i<medicinesepet.length;i++) {
        if(medicinesepet[i] != undefined){
        var htmle = "<tr><td><img src='images/"+images[0]+".jpg'</td><td>"+medicinesepet[i]+"</td><td>"+medicinesepetmoney[i]+"</td><td>1</td><td onclick='shopedelete("+i+")' class='shopesil'>Sil</td></tr>";
        html2+=htmle;
        }
    }
    var html = "<section class='shop-area'><div class='shopping-title'><h3>Shopping Cart</h3><div class='emp'><div class='empty' onclick='shopefulldelete()'>Empty Card</div></div></div><div class='tabbble'><div class='tabbble-2'><table><tr><td>İmage</td><td>Name</td><td>Price</td><td>QTY</td><td>Actions</td></tr>"+html2+"<tr><td colspan='5'>Toplam: "+sepet+"$</td></tr></table></div></div></section>";
    document.getElementById("badi").innerHTML = html;
}
function Control(){
    var s = 0;
    var username = ["deneme","deu@gmail.com","debis@gmail.com","2021@gmail.com","2022@gmail.com","java@gmail.com","html@gmail.com","css@gmail.com","js@gmail.com","python"];
    var password = ["12345","deneme","password","deu","debis","202020","123456789","789456","4561233","123456"];
    var kontrol = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    for(var i =0;i<username.length;i++) {
        if(user == username[i] && pass == password[i]) {
            s++;
        }
    }
    if(s==1) {
        window.location="index.html";
    }
    else {
        document.getElementById("he5").innerHTML = "Giriş Başarısız Tekrar Deneyiniz";
    }
}