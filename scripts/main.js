
let items = [];

const addToCart = (productName) =>{

    items.push(productName);

    document.getElementById('cart-quntity').innerHTML = items.length;

}

const getData   = async () => {

    // let data = await fetch('https://fakestoreapi.com/products');
    
    // console.log(data);

    let data;
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((json)=>{
    //   console.log(json)
        // let parser = new DOMParser;
        
        // let doc = parser.parseFromString(json, 'text/html')

        // console.log(doc)

            // json.forEach(item=>{

            //     console.log(item)

            // });
            
            json.map(item=>{
                console.log(item);

                $(document).ready(()=>{
                    $("#container").append(
                        `
                        <div class="product-item">
                        <img src="${item.image}"/>
                        <div>
                            <h3 >${item.title}</h3>
                            <h4>$ ${item.proce}/ lb </h4>
                            <p> ${item.description}</p>
                            <button onclick="addToCart(${item})"> Add to cart</button>
                        </div>
                    </div>
                        `
                    )
                }

                )




























                    // // if(item.id === 1){
                    // //         console.log(item)
                    // //         document.getElementById('product-name').innerHTML = item.title;
                    // // }
                    // // document.getElementById('container').append('<p> sagara </p>')
                    // //  document.getElementById('container').innerHTML = '<p> Sagara </p>';

                    // // document.getElementById('container').append = `
                    
                    // //     <p> ${item.price} </p>
                    
                    // // `

                    // document.getElementById('container').append(`${item.price}`)

            })



    })
} 




getData();