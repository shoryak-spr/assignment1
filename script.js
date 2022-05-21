fetch('data.txt')
  .then(response => response.json())
  .then(data => {
  	// Do something with your data
  	console.log(data[0]['title']);
    let parent = document.querySelector('.container');
    console.log(parent);
    let datalen = data.length;
    console.log(datalen)
    for (let i =0 ; i < datalen; i++){
        let newButton = document.createElement('button');
        let img = document.createElement('img');
        img.setAttribute("class", "inner-img");
        img.setAttribute("src" , data[i]['previewImage'])
        newButton.appendChild(img) 
        let span = document.createElement('span');
        span.innerText = data[i]['title'];
        newButton.appendChild(document.createTextNode(data[i]['title']))
        newButton.setAttribute("class" , "inner-container")
        newButton.setAttribute("onclick" , "changeDisplay(event)")
        //newButton.innerText(data[0]['title']);
        console.log(newButton);
        parent.appendChild(newButton);
        console.log(img);
    }
    
  });


function changeDisplay(event){
    let parent = document.querySelector('.container');
    console.log(parent);
    let children = parent.children;
    for(let i=0 ; i<children.length; i++){
        children[i].classList.remove('selected');
    }
    let element = event.currentTarget;
    element.classList.add('selected');
    
    console.log(children)
    console.log(element);
    let str = element.innerText;
    console.log(str);
    let fig = element.querySelector('img');
    console.log(fig.src);
    document.getElementById("figcaption").innerText = str;
    document.getElementById("fig").querySelector('img').src = fig.src;

}

// document.addEventListener('keydown', function(e) {
//     let parent = document.querySelector('.container');
//     console.log(parent);
//     var children = parent.children;
//     var index = -1;
//     switch (e.keyCode) {
//         case 37:
//             //alert('left');
//             break;
//         case 38:
//             for(let i=0 ; i<children.length; i++){
//                 if(children[i].classList.contains('selected')){
//                     index = i;
//                     break;
//                 }

//             }
//             if(index>0){
//                 let element = children[index-1];
//                 for(let i=0 ; i<children.length; i++){
//                     children[i].classList.remove('selected');
//                 }
//                 element.classList.add('selected');
                
//                 console.log(children)
//                 console.log(element);
//                 let str = element.innerText;
//                 console.log(str);
//                 let fig = element.querySelector('img');
//                 console.log(fig.src);
//                 document.getElementById("figcaption").innerText = str;
//                 document.getElementById("fig").querySelector('img').src = fig.src;
//             }
//             //alert('up');
//             break;
//         case 39:
//             //alert('right');
//             break;
//         case 40:
//             //let parentd = document.querySelector('.container');
//             children = parent.children;
//             index = children.length;
//             for(let i=0 ; i<children.length; i++){
//                 if(children[i].classList.contains('selected')){
//                     index = i;
//                     break;
//                 }

//             }
//             if(index<children.length-1){
//                 let element = children[index+1];
//                 for(let i=0 ; i<children.length; i++){
//                     children[i].classList.remove('selected');
//                 }
//                 element.classList.add('selected');
                
//                 console.log(children)
//                 console.log(element);
//                 let str = element.innerText;
//                 console.log(str);
//                 let fig = element.querySelector('img');
//                 console.log(fig.src);
//                 document.getElementById("figcaption").innerText = str;
//                 document.getElementById("fig").querySelector('img').src = fig.src;
//             }
            
//             //alert('down');
//             break;
//     }
// });