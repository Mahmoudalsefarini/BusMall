'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let leftIndex; 
let middleIndex;
let rightIndex;
let rounds = 25;
let countsClick = 0;

function ProductImage(name,path){
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.shown = 0;
  ProductImage.allProduct.push(this);
}
ProductImage.allProduct = [];
// instances 

new ProductImage('bag','image/bag.jpg');
new ProductImage('banana','image/bag.jpg');
new ProductImage('bathroom','image/bathroom.jpg');
new ProductImage('boots','image/boots.jpg');
new ProductImage('breakfast','image/breakfast.jpg');
new ProductImage('bubblegum','image/bubblegum.jpg');
new ProductImage('chair','image/chair.jpg');
new ProductImage('cthulhu','image/cthulhu.jpg');
new ProductImage('dog-duck','image/dog-duck.jpg');
new ProductImage('dragon','image/dragon.jpg');
new ProductImage('pen','image/pen.jpg');
new ProductImage('pet-sweep','image/pet-sweep.jpg');
new ProductImage('scissors','image/scissors.jpg');
new ProductImage('shark','image/sweep.png');
new ProductImage('sweep','image/bag.jpg');
new ProductImage('tauntaun','image/tauntaun.jpg');
new ProductImage('unicorn','image/unicorn.jpg');
new ProductImage('usb','image/usb.gif');
new ProductImage('water-can','image/water-can.jpg');
new ProductImage('drink-glass','image/drink-glass.jpg');




function displayThreeImages(){
  leftIndex = generateRandomIndex();
  middleIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();
  while(leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex){
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();
  }
  leftImageElement.src = ProductImage.allProduct[leftIndex].path;
  middleImageElement.src = ProductImage.allProduct[middleIndex].path;
  rightImageElement.src = ProductImage.allProduct[rightIndex].path;
  ProductImage.allProduct[leftIndex].shown++
  ProductImage.allProduct[middleIndex].shown++
  ProductImage.allProduct[rightIndex].shown++

}
displayThreeImages();




function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * ProductImage.allProduct.length);
  return randomIndex;       
}


leftImageElement.addEventListener('click',handleClicking);
middleImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    countsClick++;
    if(rounds >= countsClick){
        if(event.target.id === 'left-image'){
          ProductImage.allProduct[leftIndex].votes++;
        }else if(event.target.id ==='middle-image'){
            ProductImage.allProduct[middleIndex].votes++;
        }
        else if(event.target.id ==='right-image'){
            ProductImage.allProduct[rightIndex].votes++;
        }
        displayThreeImages();
    }else{
    
    gettingList();
    leftImageElement.removeEventListener('click',handleClicking);
    middleImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    }

  }


  function gettingList(){
    let ul = document.getElementById('unList');
    for(let i = 0 ; i <ProductImage.allProduct.length; i++ ){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${ProductImage.allProduct[i].name} has ${ProductImage.allProduct[i].votes} Votes and  ${ProductImage.allProduct[i].shown} Shown` ;
    }
  
  }
