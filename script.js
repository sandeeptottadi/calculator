let str = "";
let ans = "";
let dis = "";

function input(char) {
    if(char === "AC") {
        str = "";
        ans = "";
        dis = "";
        document.getElementById("ans").innerText = str;
        document.getElementById("dis").innerText = str;
        document.getElementById("ans").classList.add("ans-animate");
        document.getElementById("dis").classList.remove("dis-animate");
        return;
    }
    if(char === "C") {
        if(ans) {
            str = str.substring(0, str.length-1);
            document.getElementById("dis").innerText = str; 
        } else {
            str = str.substring(0, str.length-1);
            document.getElementById("ans").innerText = str;
        }
        return;
    }
    if(char === "=") calculate()
    else if(!ans) {
        str += char;
        document.getElementById("ans").innerText = str;
        if(str.length > 19) {
            document.getElementById("ans").scrollBy({
                left: 100,
                behavior: 'smooth'
            })
        }
    }
    else {
        document.getElementById("ans").classList.remove("ans-animate");
        document.getElementById("dis").classList.add("dis-animate");
        str += char;
        document.getElementById("dis").innerText = str;
        if(str.length > 19) {
            document.getElementById("dis").scrollBy({
                left: 100,
                behavior: 'smooth'
            })
        }
    }
}

function calculate() {
    s = str;
    ans = eval(s);
    str = ans;
    document.getElementById("dis").innerText = s;
    document.getElementById("ans").innerText = ans;
}