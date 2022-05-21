fetch('data.txt')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });

function demo (event){
    let element = event.currentTarget;
    console.log(element);
    let str = element.innerText;
    console.log(str);
    let fig = element.querySelector('img');
    console.log(fig.src);
    document.getElementById("figcaption").innerText = str;
    document.getElementById("fig").querySelector('img').src = fig.src;
}