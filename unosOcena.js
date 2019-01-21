function upisOcene (){

   
}


document.getElementById('pred1').addEventListener("click",upisOcene);


// function Student(ime, prezime, brIndeksa, brOcena, ocena) {
//    this.ime = ime;
//    this.prezime = prezime;
//    this.brIndeksa = brIndeksa;
//    this.brOcena = brOcena;
//    this.ocena = ocena;
// }



// Student.prototype.prosek = function () {
//    zb = 0;
//    for (i = 0; i < this.ocena.length; i++) {
//       zb += Number(this.ocena[i]);
//    }
//    this.pros = Number((zb / this.ocena.length).toFixed(2))
// }

// Student.prototype.ispit = function () {
//    return Number(30 - this.brOcena);
// }

// Student.prototype.imeIprezime = function () {
//    return this.ime + " " + this.prezime;
// }

// let ime = document.getElementById("ime").value;
// let prezime = document.getElementById("prezime").value;
// let brIndeksa = document.getElementById("brIndeksa").value;
// let brOcena = document.getElementById("brOcena").value;
// let ocena = document.getElementById("ocene").value;

// nizOcena = new Array();

// i = 1;
// function dodajOcenu() {
 

//    brOcena = document.getElementById("brOcena").value;

//    if (brOcena <= 30 && brOcena != null) {

//       if (i <= brOcena) {
//          if (document.getElementById("ocene").value != "") {
//             nizOcena.push(document.getElementById("ocene").value);
//             i++;
//          }
//          else window.alert("Niste uneli ocenu!");
        
//       }
//       else {
//          document.getElementById("ocene").setAttribute("readonly", "readonly");
//          document.getElementById("ocene").style.backgroundColor = "red";
//          window.alert("Uneli ste izabran broj ocena!");

//       }
//    }
//    else window.alert("Makismalna broj ocena je 30");

// }
// document.getElementById("btnDodajOcenu").addEventListener("click", dodajOcenu);


// nizStudenti = new Array();

// function sacuvajStudenta() {
//    if (i > brOcena) {
//       ime = document.getElementById("ime").value;
//       prezime = document.getElementById("prezime").value;
//       brIndeksa = document.getElementById("brIndeksa").value;
//       brOcena = document.getElementById("brOcena").value;
//       ocena = document.getElementById("ocene").value;
//       nizStudenti.push(new Student(ime, prezime, brIndeksa, brOcena, ocena));
//       nizOcena = [];
//       i = 1;

//       document.getElementById("brIndeksa").style.backgroundColor = "white";
//       document.getElementById("prezime").style.backgroundColor = "white";
//       document.getElementById("ime").style.backgroundColor = "white";
//       document.getElementById("ime").value = null;
//       document.getElementById("prezime").value = null;
//       document.getElementById("brIndeksa").value = null;
//       document.getElementById("ocene").removeAttribute("readonly");
//       document.getElementById("brOcena").value = null;
//       document.getElementById("ocene").style.backgroundColor = "white";
   

//       window.alert("Uspesan unos podataka!");
//    }
//    else
//       window.alert("Morate upisati sve ocene");

//    console.log(nizStudenti);
// }




// document.getElementById("btnSacuvajStudenta").addEventListener("click", sacuvajStudenta);



// function prikaziStudenta() {
//    info = document.getElementById("prikazBrIndeksa").value;

//    for (j = 0; j < nizStudenti.length; j++) {
//       nizStudenti[j].prosek();
//       if (nizStudenti[j].brIndeksa == info) {
//          document.getElementById("par").innerHTML = "Indeks: " + info + "<br>" + "Student: " + nizStudenti[j].ime + " " + nizStudenti[j].prezime + '<br>' + "Prosek: " + nizStudenti[j].pros +
//             " <br>" + "Broj ispita do kraja studija:" + Number(30 - nizStudenti[j].brOcena);
//          document.getElementById("prikazBrIndeksa").value = " ";
//       }
//    }
// }


// document.getElementById("btnPrikazStudenta").addEventListener("click", prikaziStudenta);

// function prikazNaj(){
//    uspeh=new Array();
//    for (let j=0;j<nizStudenti.length;j++){
//       nizStudenti[j].prosek();
//       uspeh[j]=nizStudenti[j].pros;
//       console.log(uspeh);
//    }
//    //sortiranje elemenata u nizu uspeh po opadajucem redosledu - od najveceg do najmanjeg
//    for (let i=0;i<uspeh.length;i++){
//       for (let j=i+1;j<uspeh.length;j++){
//          if (uspeh[i]<uspeh[j]){
//          pom=uspeh[i];
//          uspeh[i]=uspeh[j];
//          uspeh[j]=pom;
//          }
//       }
//    }
  
//    document.getElementById("par1").innerHTML=uspeh[0];
//    }

// document.getElementById("btnPrikaziNajUspeh").addEventListener("click", prikazNaj);





