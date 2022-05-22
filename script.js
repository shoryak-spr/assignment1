// loading data from the file to the web page
var db = [];
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
        newButton.appendChild(document.createTextNode(start_and_end (data[i]['title'])))
        db.push(data[i]['title']);
        newButton.setAttribute("class" , "inner-container")
        newButton.setAttribute("onclick" , "changeDisplay(event)")
        //newButton.innerText(data[0]['title']);
        console.log(newButton);
        parent.appendChild(newButton);
        console.log(img);
    }
    
  });

console.log(db); // db for displaying the titles , cant use the inner text as it is stored with ellipsis 

  
// function that acts on clicking on any button to change the display 
function changeDisplay(event){
    let parent = document.querySelector('.container');
    console.log(parent);
    let children = parent.children;
    for(let i=0 ; i<children.length; i++){
        children[i].classList.remove('selected');
    }
    let element = event.currentTarget;
    element.classList.add('selected');
    let index =-1;
    for(let i = 0;i<children.length;i++){
        if(children[i].querySelector('img').src === element.querySelector('img').src){
            index=i;
            break;
        }
    }
    console.log(children)
    console.log(element);
    //let str = element.innerText;
    let str = db[index];
    console.log(str);
    let fig = element.querySelector('img');
    console.log(fig.src);
    //document.getElementById("figcaption").readOnly = false;
    document.getElementById("figcaption").removeAttribute('value')
    document.getElementById("figcaption").value = str;
    console.log(document.getElementById("figcaption").readOnly);
    console.log(document.getElementById("figcaption").value);
    document.getElementById("figcaption").readOnly = true;
    document.getElementById("fig").querySelector('img').src = fig.src;

}

// key navigation logic 
document.addEventListener('keydown', function(e) {
    let parent = document.querySelector('.container');
    console.log(parent);
    var children = parent.children;
    var index = -1;
    switch (e.keyCode) {
        case 38:
            for(let i=0 ; i<children.length; i++){
                if(children[i].classList.contains('selected')){
                    index = i;
                    break;
                }

            }
            if(index>0){
                let element = children[index-1];
                for(let i=0 ; i<children.length; i++){
                    children[i].classList.remove('selected');
                }
                element.classList.add('selected');
                
                console.log(children)
                console.log(element);
                let str = db[index-1];
                console.log(str);
                let fig = element.querySelector('img');
                console.log(fig.src);
                document.getElementById("figcaption").value = str;
                document.getElementById("fig").querySelector('img').src = fig.src;
            }
            //alert('up');
            break;
        case 40:
            children = parent.children;
            index = children.length;
            for(let i=0 ; i<children.length; i++){
                if(children[i].classList.contains('selected')){
                    index = i;
                    break;
                }

            }
            if(index<children.length-1){
                let element = children[index+1];
                for(let i=0 ; i<children.length; i++){
                    children[i].classList.remove('selected');
                }
                element.classList.add('selected');
                
                console.log(children)
                console.log(element);
                let str = db[index+1];
                console.log(str);
                let fig = element.querySelector('img');
                console.log(fig.src);
                document.getElementById("figcaption").value = str;
                document.getElementById("fig").querySelector('img').src = fig.src;
            }
            
            //alert('down');
            break;
    }
});


// editing the title from the editbox logic 

 
var editing = false;
 
function editCaption(){
    document.getElementById('figcaption').readOnly = false;
    editing = true;
 }
 
document.addEventListener('keydown', function(e) {
   if(!editing) return;
   if(e.keyCode == 13){
       editing = false;
       let textelement = document.getElementById('figcaption');
       document.getElementById('figcaption').readonly =true;
       let parent = document.querySelector('.container');
       console.log(parent);
        let children = parent.children;
        let index = -1;
        for(let i=0 ; i<children.length; i++){ 
            if(children[i].classList.contains('selected')){
                index = i;
                break;
            }
        }
        if(index!=-1){
            let img = children[index].querySelector('img');
            db[index] = textelement.value;
            children[index].innerText = (start_and_end(textelement.value));
            children[index].prepend(img);
        }


   }
 
});


function start_and_end(str) {
    if (str.length > 35) {
      return str.substr(0, 15) + ' ...... ' + str.substr(str.length-8, str.length);
    }
    return str;
  }
 