let app = new Vue({
    el: "#app",
    data: {
        
        present: 0,
        items: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
        title: [
            'Svezia',
            'Svizzera',
            'Gran Bretagna',
            'Germania',
            'Paradise'
        ],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        ]
        
    },
    methods:{
        isPresent: function( indexPhotos){
            console.log(indexPhotos, this.present)
            if(indexPhotos == this.present){
                return "active";
            }
            return "";
        },
        sidePresent: function( indexPhotos){
            console.log(indexPhotos, this.present)
            if(indexPhotos == this.present){
                return "opacity";
            }
            return "";
        },
        next: function(){
            this.present ++;
            if(this.present == this.items.length){
                this.present = 0;
            }
        },
        back: function(){
            this.present --;
            if(this.present < 0){
                this.present = this.items.length;
            }
        }
    }
})   
/*const text = 
let itemsContent = '';
let elementActive = 0;


for(let i=0; i<items.length; i++){
    itemsContent += `
      <div class="ms_mainPhoto col-10 item" id="item-${i}">
          <img src="${items[i]}">
          <div class="text justify-conetid-end">
            <h1 class="title text-white d-flex justify-content-end me-3">${title[i]}</h1>
            <p class="text text-white d-flex flex-row-reverse item"> ${text[i]}</p>
          </div>
       </div>`;

}
//side photos + buttons next/prev
let sideContent = '';
for(let i=0; i<items.length; i++){
    sideContent += `
     
    `;
}
    sideContent +=`
     `




let itemsContainer  = document.querySelector('.ms_itemsContainer');
itemsContainer.innerHTML = itemsContent;

let sideContainer  = document.querySelector('.ms_sidePhotos');
sideContainer.innerHTML = sideContent;

let itemActive = document.getElementById('item-'+elementActive);
itemActive.classList.add('active');


let coverActive = document.getElementById('sidePhotos-'+elementActive);
coverActive.classList.add('opacity');


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function(){
    if(elementActive!=0){
        elementActive--;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
        coverActive.classList.remove('opacity');
        coverActive= document.getElementById('sidePhotos-'+elementActive);
        coverActive.classList.add('opacity');
    } else if(elementActive==0){
        elementActive=5
        itemActive.classList.remove('active');
        coverActive.classList.remove('opacity');
        elementActive--;
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
        coverActive= document.getElementById('sidePhotos-'+elementActive);
        coverActive.classList.add('opacity');
    }
   

    
   
});
next.addEventListener('click', function(){
    if(elementActive<items.length-1){
        elementActive++;
        itemActive.classList.remove('active');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
        coverActive.classList.remove('opacity');
        coverActive= document.getElementById('sidePhotos-'+elementActive);
        coverActive.classList.add('opacity');
    }else if(elementActive==items.length-1){
        elementActive=-1
        elementActive++;
        itemActive.classList.remove('active');
        coverActive.classList.remove('opacity');
        itemActive= document.getElementById('item-'+elementActive);
        itemActive.classList.add('active');
        coverActive= document.getElementById('sidePhotos-'+elementActive);
        coverActive.classList.add('opacity');
    }
   
}); */