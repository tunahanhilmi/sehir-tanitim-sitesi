
const dark = "styles/dark.css";
const light = "styles/style.css";
const darkIcon = "🌙";
const lightIcon = "☀️";
const theme = document.getElementById("theme");

localStorage.setItem("mode" , 1);
var tut;

function kontrol(){
if (localStorage.getItem("mode") == 0) {
    theme.setAttribute("href", dark);
    document.getElementById("darkmodebtn").innerHTML= darkIcon;

}
else if (localStorage.getItem("mode") == 1) {
    theme.setAttribute("href", light);
    document.getElementById("darkmodebtn").innerHTML= lightIcon;
}
}




    if (localStorage.getItem("mode2") != localStorage.getItem("mode")) {
        localStorage.setItem("mode",localStorage.getItem("mode2"));
    }

    function changeTheme(){
        if (localStorage.getItem("mode") == 0) {
            theme.setAttribute("href", dark);
            document.getElementById("darkmodebtn").innerHTML= darkIcon;
            localStorage.setItem('mode', 1);
           tut = localStorage.getItem("mode");
           localStorage.setItem("mode2",tut)
        }
        else if(localStorage.getItem("mode") == 1){
            theme.setAttribute("href", light);
            document.getElementById("darkmodebtn").innerHTML= lightIcon;
           localStorage.setItem("mode", 0);
           tut = localStorage.getItem("mode");
           localStorage.setItem("mode2",tut)
        }
        }


setInterval(kontrol,1);
