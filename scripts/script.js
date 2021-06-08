'use strict'



let answers = ['not today', 'i do not see it in your future', 'absolutely', 'almost positive', 'you will fail', 'no'];
 function respond1() {
<<<<<<< HEAD
    let respond1 = document.getElementById('button');
    respond1.addEventListener ('click', answers.button)
    let article = document.createElement('article');
    respond1.appendChild(article);
=======
     let respond1 = document.getElementById('button');
     respond1.addEventListener ('click', answers.respond1)

>>>>>>> 7068271b91c7231d2026ae41ac96240f9ff935b7
 }

  respond1();

  for (let i=0; i<6; i++) {
      let random = Math.floor(Math.random()* answers.length -1);

       let item = answers.shift();
       answers.splice(answers.length -1, 0, item);
  
  }
  
   answers.appendChild(article);
  
  var text = document.createElement('Input');
  text.setAttribute("type", "text");

<<<<<<< HEAD
  var button = document.createElement('button');
  var button = document.getElementById('button');


  var button = respond1();
=======
var button = respond1();
>>>>>>> 7068271b91c7231d2026ae41ac96240f9ff935b7
