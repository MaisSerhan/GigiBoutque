var srcs=[];
let sect=[];
let products=[];
const initApp = () => {
    
    localStorage.setItem('checkbox', JSON.stringify([]));
    fetch('https://boutiquegigi.github.io/GigiBoutquessss/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        localStorage.setItem('checkbox', JSON.stringify(data));
        section();
        });
}
initApp();

function section(){
   products.forEach(prod=>{
    if(prod.section=="access"){
        sect.push(prod.count);
    }
  })
  localStorage.setItem('sections',sect);
  localStorage.setItem('colr',14);
  localStorage.setItem('section',"access");
  addDataToHTML();
  // get data cart from memory
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
}
