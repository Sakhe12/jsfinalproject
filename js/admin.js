// Sample data: example
let products = JSON.parse(localStorage.getItem('products'));

function displayProducts() {
    let tbody = document.querySelector('tbody');
    // for(let i = 0; i < products; i++) {
    //     tbody.innerHTML = `
    //     <tr>
    // //         <td>${products[i].id}</td>
    // //         <td>${products[i].product}</td>
    // //         <td>R${products[i].price}</td>
    // //         <td><button id="" onclick="">edit</button></td>
    // //         <td><button onclick="deleteProduct(${products[i].id})" id='${shoes.id}' >delete</button></td>
    // //       </tr>
    //     `
    // }
    tbody.innerHTML = ''
    products.forEach( (shoes)=>{
        shoes.id = products.indexOf(shoes) + 1
        if(products.length){
            // console.log((`${shoes}: ${shoes}`));
            tbody.innerHTML +=
            `
            <tr>
            <td>${shoes.id}</td>
            <td>${shoes.product}</td>
            <td>R${shoes.price}</td>
            <td><button id="" onclick="">edit</button></td>
            <td><button onclick="deleteProduct(${shoes.id})" id='${shoes.id}' >delete</button></td>
          </tr>
            `}
    })
}
displayProducts()
// displayProducts()
// function remove() {
//     const element = document.querySelector('id');
//     element.remove();
// }
//delete
function deleteProduct(itemId) {
    console.log(itemId)
    try {
        let newProducts = products.filter(product => {
            return itemId !== product.id
        });
        console.log(newProducts);
        
        localStorage.setItem('products', JSON.stringify(newProducts));
        console.log(JSON.parse(localStorage.getItem('products')));
        displayProducts()
    }
    catch(error){
        console.log(error);
    } 
}

// submit button
// let addItem = document.querySelector('#addItem');
// // let display = document.querySelector('#display');

// //add event listener
// saveChanges = document.querySelector("#saveChanges");

function saveChanges() {
    document.querySelector('#saveChanges')
 {
    let id = document.getElementById('id').value;
    let product = document.getElementById('product').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;



    //push an object into an array
    products.push(
        {
            id,
            product,
            price,
            image
        }
    )
    console.log(products)
    // alert('Data Saved')
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();

    // // console.log(products);
    // localStorage.setItem('products', JSON.stringify(product));
    // displayProducts()
}
}

l