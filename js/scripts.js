function handleForm(event) {
  event.preventDefault();
  let sentence = document.querySelector("#sent").value;
  let cutS = sentence.split(" ");
  let newA = [];
  cutS.forEach(function(word) {
    if(word.length >= 3){
      newA.push(word);
    }
  })
  
  let newAR = newA.reverse();
  let newerAR = newAR.join();
  let newestAR = newerAR.replaceAll(","," ");
  const para = document.createElement("p");
  document.querySelector('form').after(para);
  para.innerText = newestAR;



}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});
