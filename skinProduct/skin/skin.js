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
        console.log(products,localStorage.getItem('checkbox'));
        section();
        });
}
initApp();

function section(){
   products.forEach(prod=>{
    if(prod.section=="skin"){
        sect.push(prod.count);
    }
  })
  localStorage.setItem('sections',sect);
  localStorage.setItem('colr',7);
  localStorage.setItem('section',"skin");
  addDataToHTML();
  // get data cart from memory
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
}
