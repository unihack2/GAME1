let bdy = document.querySelector(".box2");
let colours = {
          0: "violet",
          1: "indigo",
          2: "blue",
          3: "green",
          4: "yellow",
          5: "orange",
          6: "red"
};
let time = 1100;
function inifinity() {
          let p1 = Math.floor(Math.random() * 18);
          let p2 = Math.floor(Math.random() * 18);
          let num = Math.floor(Math.random() * 7);
          let newdiv = document.createElement("div");
          newdiv.style.left = p1 + "rem";
          newdiv.style.top = p2 + "rem";
          newdiv.setAttribute("class","new");
          for (let i in colours) {
                    if (i == num) {
                              newdiv.style.backgroundColor = colours[i];
                    }
          }
          bdy.append(newdiv);
          check();
          setTimeout(() => {
                    bdy.removeChild(newdiv);
                    check2();
          }, time);
};
let p = document.querySelector("p");
let h = document.querySelector("h1");
let h3 = document.querySelector("h3");
let slt = document.querySelector("select");
let score = 0;
let highscore = 0;
let check = () => {
          let cl = document.querySelector(".new");
          cl.addEventListener("click", () => {
                    score++;
                    time = time-8;
                     p.innerText = "Score = " + score;
                     bdy.removeChild(cl);
                     inifinity();
          });
};
let check2 = () => {
          if (st.disabled == true) {
                    inifinity();
          } else {
                    return 0;
          }
};
slt.addEventListener("click",()=>{
          if(slt.value=="two") {
                    h3.style.color = "#82667F";
          }else {
                    h3.style.color = "black"; 
          }
});
let st = document.getElementById("st");
let rs = document.getElementById("rs");
st.addEventListener("click", () => {
          if(slt.value=="one") {
             h3.innerText = "59s";
          timer();       
          }
          slt.disabled = true;
          st.disabled = true;
          st.style.transform = "scale(0.8)";
          inifinity();
          rs.addEventListener("click", reset=() => {
                    st.style.transform = "scale(1)";
                    rs.style.transform = "scale(0.9)";
                    setInterval(()=>{
                              rs.style.transform = "scale(1)";   
                    },200)
                    if(score>=highscore) {
                              highscore = score;
                              h.innerText = "High score = " + highscore;
                    }
                    score = 0;
                    time = 1000;
                    st.disabled = false;
                    slt.disabled = false;
                    h3.innerText = "1m"
                    p.innerText = "Score = 0";
          })
});
let timer=()=>{
          setTimeout(()=>{
                    let time = parseFloat(h3.innerText);
                    if(time==0||slt.disabled==false) {
                              reset();
                              return 0;
                    }
                    h3.innerText = (time-1)+"s";  
                    timer();
          },1000);
}
