const mbar = document.querySelector("#mbar"),
      mult = document.querySelector("#mult"),
      divide = document.querySelector("#divide"),
      minus = document.querySelector("#minus"),
      dot = document.querySelector("#dot"),
      nine = document.querySelector("#nine"),
      plus = document.querySelector("#plus"),
      eight = document.querySelector("#eight"),
      seven = document.querySelector("#seven"),
      six = document.querySelector("#six"),
      five = document.querySelector("#five"),
      four = document.querySelector("#four"),
      three = document.querySelector("#three"),
      two = document.querySelector("#two"),
      one = document.querySelector("#one"),
      zero = document.querySelector("#zero"),
      equals = document.querySelector("#equals"),
      clear = document.querySelector("#clear"),
      bar = document.querySelector("#bar"),
      mba = document.querySelector("#mba");
    

//console.log(mult);
//mbar.append(mult);
var mbaContent = mba.textContent;
var barContent = mba.textContent;

const clik = (e)=>{
    e.preventDefault;
    const bell = mbaContent;
   mba.textContent = ' '; 
    bar.append(bell);
    
}

function add(init, end){
    res = init + end;
    return res;
}
const cli = (e)=>{
    e.preventDefault;
    mbaContent = ' ';
    mbaContent = +e.target.textContent;
    mba.append(e.target.textContent);
}

const clic = (e)=>{
    let cont = +mbar.textContent;
    console.log(cont);
    
    
    bar.append(e.path[0].innerText);
    }

const act = (e)=>{
    
    console.log(mbar.textContent);
    console.log(mbar.textContent.indexOf())
    console.log(+(mbar.textContent.slice(mbar.textContent.indexOf("*")+1 ,mbar.textContent.length)))
}

const cls=(e)=>{
    bar.textContent = "";
    mba.textContent = "";
}
clear.addEventListener("click",cls);
//document.querySelector("button").addEventListener("click",cli);

plus.addEventListener("click",clik);
mult.addEventListener("click",clik);
divide.addEventListener("click",clik);
minus.addEventListener("click",clik);
dot.addEventListener("click",cli);
//minus.addEventListener("click",cli);
nine.addEventListener("click",cli);
eight.addEventListener("click",cli);
seven.addEventListener("click",cli);
six.addEventListener("click",cli);
five.addEventListener("click",cli);
four.addEventListener("click",cli);
three.addEventListener("click",cli);
two.addEventListener("click",cli);
one.addEventListener("click",cli);
zero.addEventListener("click",cli);
equals.addEventListener("click",act);



