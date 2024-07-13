let product = document.querySelector('#page1');
let displayproduct=async ()=>{
    product.innerHTML='';
    let productinfo=await fetch('https://fakestoreapi.com/products');
    let finalproduct=await productinfo.json();
    finalproduct.forEach(element => {
        product.innerHTML += `<div id="productdiv">
                <img src="${element.image}">
                <div id="mini">   
                      <h3>${element.title}</h3>
                      
                </div>
                <p>Price Rs.${element.price}</p>
                
            </div>`
            
        
    });
}
displayproduct();