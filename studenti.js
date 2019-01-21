
function Student(ime, prezime, brIndeksa) {
   this.ime = ime;
   this.prezime = prezime;
   this.brIndeksa = brIndeksa;

}



nizStudenti = new Array();

function sacuvajStudenta() {
   let ime = document.getElementById("ime").value;
let prezime = document.getElementById("prezime").value;
let brIndeksa = document.getElementById("brIndeksa").value;
   if(ime != null && prezime != null && brIndeksa != null){
      nizStudenti.push(new Student(ime, prezime, brIndeksa));
   
      // document.getElementById("brIndeksa").style.backgroundColor = "white";
      // document.getElementById("prezime").style.backgroundColor = "white";
      // document.getElementById("ime").style.backgroundColor = "white";
      // document.getElementById("ime").value = null;
      // document.getElementById("prezime").value = null;
      
      window.alert("Uspesan unos podataka!");
      prikazPodatakaStudenta();
   }
   else{ 
      window.alert("Morate upisati sve podatke");
}
console.log(nizStudenti)
 }

function prikazPodatakaStudenta(){

   for (i=0; i < nizStudenti.length; i++){

      // (prikazStudentskogKartona + (i+1) ).classList.toggle('hide');

      document.querySelector('.brojIndeksa' + (i+1)  ).innerHTML = nizStudenti[i].brIndeksa;
      document.querySelector('.imeIprezime' + ( i+1)).innerHTML = nizStudenti[i].ime + nizStudenti[i].prezime;  
      console.log(nizStudenti[i].ime)
   }
   
   
}




document.getElementById("btnSacuvajStudenta").addEventListener("click", sacuvajStudenta);






