function school(){
    document.getElementById("tenthmatter").style.display='block';
    document.getElementById("intermatter").style.display='none';
    document.getElementById("btechmatter").style.display='none';
    document.getElementById("mtechmatter").style.display='none';
    document.getElementById("ed_heading").innerText='10th Standard'

}function inter(){
    document.getElementById("tenthmatter").style.display='none';
    document.getElementById("intermatter").style.display='block';
    document.getElementById("btechmatter").style.display='none';
    document.getElementById("mtechmatter").style.display='none';
    document.getElementById("ed_heading").innerText='Intermediate'

}

function btech(){
    document.getElementById("tenthmatter").style.display='none';
    document.getElementById("intermatter").style.display='none';
    document.getElementById("btechmatter").style.display='block';
    document.getElementById("mtechmatter").style.display='none';
    document.getElementById("ed_heading").innerText='Undergraduation - B.Tech'

}

function mtech(){
    document.getElementById("tenthmatter").style.display='none';
    document.getElementById("intermatter").style.display='none';
    document.getElementById("btechmatter").style.display='none';
    document.getElementById("mtechmatter").style.display='block';
    document.getElementById("ed_heading").innerText='Postgraduation - M.Tech'

}