try{
    console.log(window);
}
catch(err){
     console.log(`${err.name} : ${err.message}`);
 }

 const h1s = document.getElementsByTagName('h1');
 let h1Text = "";
 h1s[0].innerHTML = "Pulisic is back";

setInterval(()=>{
 for(h1 of h1s){
    h1.innerHTML = "Banjo is a good boy";
    h1.className =  " tiem"
 }
 h1s[0].className = "text-primary";
 h1s[1].className = "text-danger";
 h1s[2].className = "text-success";
 h1s[3].className = "text-warning";
 h1s[4].className = "text-light";
},5000);

setInterval(()=>{
    for(h1 of h1s){
       h1.innerHTML = "Banjo is a good boy";
       h1.className =  " tiem"
    }
    h1s[1].className = "text-primary";
 h1s[2].className = "text-danger";
 h1s[3].className = "text-success";
 h1s[4].className = "text-warning";
 h1s[0].className = "text-light";
   },6000);

setInterval(()=>{
    for(h1 of h1s){
       h1.innerHTML = "Banjo is a good boy";
       h1.className =  " tiem"
    }
    h1s[2].className = "text-primary";
 h1s[3].className = "text-danger";
 h1s[4].className = "text-success";
 h1s[0].className = "text-warning";
 h1s[1].className = "text-light";
   },7000);

setInterval(()=>{
    for(h1 of h1s){
       h1.innerHTML = "Banjo is a good boy";
       h1.className =  " tiem"
    }
    h1s[3].className = "text-primary";
 h1s[4].className = "text-danger";
 h1s[0].className = "text-success";
 h1s[1].className = "text-warning";
 h1s[2].className = "text-light";
   },8000);

   setInterval(()=>{
      for(h1 of h1s){
         h1.innerHTML = "Banjo is a good boy";
         h1.className =  " tiem"
      }
      h1s[4].className = "text-primary";
   h1s[0].className = "text-danger";
   h1s[1].className = "text-success";
   h1s[2].className = "text-warning";
   h1s[3].className = "text-light";
     },9000);

const div = document.createElement('div');