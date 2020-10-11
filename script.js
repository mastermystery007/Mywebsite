var toggle = true;
function chngimg() {
    if (toggle === true) {
        document.getElementById('imgplus').src  = 'giphy.gif';
        document.getElementById('toggletext').innerHTML  = 'KEEP TOGGLING';
        toggle=!toggle;
        console.log(toggle);
    } else {
       document.getElementById('imgplus').src = 'dirtydance.gif';
       document.getElementById('toggletext').innerHTML  = 'KEEP TOGGLING';
       toggle=!toggle;
       console.log(toggle);
    }
    
}
