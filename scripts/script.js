'use strict'



let answers = ['not today', 'i do not see it in your future', 'absolutely', 'almost positive', 'you will fail', 'no'];
 function respond1() {

    let respond1 = document.getElementById('button');
    respond1.addEventListener ('click', answers.random);
    let article = document.getElementById('touch');
     
  

   for (let i=0; i<6; i++) {
     
      let random = Math.floor(Math.random()* answers.length -1);
       var answers = random;
       let item = answers.shift();
       answers.splice(answers.length -1, 0, item);
       answers.appendChild(article);
  }
}
respond1();
 
  var text = document.createElement('Input');
  text.setAttribute("type", "text");
  var button = document.createElement('button');
  var button = document.getElementById('button');


 
