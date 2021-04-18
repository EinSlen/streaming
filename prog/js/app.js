const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++) {
         let td = tr[i].getElementsByTagName('td')[0];
         if(td) {
             let textvalue = td.textContent || td.innerHTML;
             if(textvalue.toUpperCase().indexOf(filter) > -1) {
                 tr[i].style.display = "";
             } else { 
                 tr[i].style.display = "none";
             }
         }
    }
}

const searchActive = () => {
    var myTable = document.getElementById('myTable');
    myTable.style.visibility = "visible";
}

const searchDesactive = () => {
    var myTable = document.getElementById('myTable');
    myTable.style.visibility = "hidden";
}

audio1.pause();

function playAudio() {
    var audio1 = document.getElementById("bandetitleaudio");
    var audiostart = document.getElementById("audiostart");
    var audiostop = document.getElementById("audiostop");

    audio1.play();
    audiostart.style.visibility = "hidden";
    audiostop.style.visibility = "visible";
} 

function stopAudio() {
    var audio1 = document.getElementById("bandetitleaudio");
    var audiostart = document.getElementById("audiostart");
    var audiostop = document.getElementById("audiostop");

    audio1.pause();
    audiostop.style.visibility = "hidden";
    audiostart.style.visibility = "visible";
}

document.getElementById("bandetitle3").onclick = function () { location.href="page/"; };

document.getElementById("serie1").onclick = function () { location.href="pages/"; };
document.getElementById("serie2").onclick = function () { location.href="pages/"; };
document.getElementById("serie3").onclick = function () { location.href="pages/"; };
document.getElementById("serie4").onclick = function () { location.href="pages/"; };
document.getElementById("serie5").onclick = function () { location.href="pages/"; };
document.getElementById("serie6").onclick = function () { location.href="pages/"; };
document.getElementById("serie7").onclick = function () { location.href="pages/"; };
document.getElementById("serie8").onclick = function () { location.href="pages/"; };

document.getElementById("sserie1").onclick = function () { location.href="pages/"; };
document.getElementById("sserie2").onclick = function () { location.href="pages/"; };
document.getElementById("sserie3").onclick = function () { location.href="pages/"; };
document.getElementById("sserie4").onclick = function () { location.href="pages/"; };
document.getElementById("sserie5").onclick = function () { location.href="pages/"; };
document.getElementById("sserie6").onclick = function () { location.href="pages/"; };
document.getElementById("sserie7").onclick = function () { location.href="pages/"; };
document.getElementById("sserie8").onclick = function () { location.href="pages/"; };

document.getElementById("fserie1").onclick = function () { location.href="pages/"; };
document.getElementById("fserie2").onclick = function () { location.href="pages/"; };
document.getElementById("fserie3").onclick = function () { location.href="pages/"; };
document.getElementById("fserie4").onclick = function () { location.href="pages/"; };
document.getElementById("fserie5").onclick = function () { location.href="pages/"; };
document.getElementById("fserie6").onclick = function () { location.href="pages/"; };
document.getElementById("fserie7").onclick = function () { location.href="pages/"; };
document.getElementById("fserie8").onclick = function () { location.href="pages/"; };

document.getElementById("tr1").onclick = function () { location.href="pages/"; };
document.getElementById("tr2").onclick = function () { location.href="pages/"; };
document.getElementById("tr3").onclick = function () { location.href="pages/"; };
document.getElementById("tr4").onclick = function () { location.href="pages/"; };
document.getElementById("tr5").onclick = function () { location.href="pages/"; };
document.getElementById("tr6").onclick = function () { location.href="pages/"; };
document.getElementById("tr7").onclick = function () { location.href="pages/"; };
document.getElementById("tr8").onclick = function () { location.href="pages/"; };
