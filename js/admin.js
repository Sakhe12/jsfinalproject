// Sample data: example
let products = JSON.parse(localStorage.getItem('products')) ? 
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        product: "Puma Jomo Sono King Senior Soccer Boots",
        price: "749",
        image: "https://i.postimg.cc/pdn3WmVN/1162213-DPBLACKWHITEBLACK-1-w-WI.jpg"
    },
    {
        id: 2,
        product: "Adidas X Speedflow Messi 4 FxG Junior Soccer Boots",
        price: "899",
        image: "https://i.postimg.cc/W1G3f1rn/1157472-SOLARGOLDCOREBLKBRIGHTYELL-1-6ra.jpg"
    },
    {
        id: 3,
        product: "Adidas PREDATOR FS Football Gloves",
        price: "999",
        image: "https://i.postimg.cc/VNrdWP19/1156867-BLUE-1-u-EX.jpg"
    },
    {
        id: 4,
        product: "Nike Phantom GT2 Academy Dynamic Fit MG Senior Soccer Boots",
        price: "1699",
        image: "https://i.postimg.cc/HxH1sFY4/1159798-GLACIERICEBLACKYELSTRIKE-1-9-Gd.jpg"
    },
    {
        id: 5,
        product: "Nike Mecurial Zoom Vapor 15 Academy MG Senior Soccer Boots",
        price: "1599",
        image: "https://res.cloudinary.com/moresport/image/upload/a_0,c_fill,f_auto,q_auto:good,w_690/v1575961299/uploads/assets/1162298-BLKDKSMKGREYSUMMITWHTVOL-1-sDa.jpg"
    },
    {
        id: 6,
        product: "Nike Phantom GT2 Academy DF FG/MG Junior Soccer Boots",
        price: "1299",
        image: "https://i.postimg.cc/SQ6WrYDS/1162307-METALICCOPPERMETALICCOPPER-1-S8c.jpg"
    }
];

function displayProducts() {
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach( (item)=>{
        if(products.length){
            console.log((`${item}: ${products[item]}`));
            tbody.innerHTML +=
            `
            <tr>
            <td>${products[item].id}</td>
            <td>${products[item].product}</td>
            <td>${products[item].price}</td>
          </tr>
            `
        
        }
    })
}
displayProducts()
