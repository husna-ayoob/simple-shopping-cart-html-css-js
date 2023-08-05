let items = [];

const addToCart = (productName) => {
  items.push(productName);

  document.getElementById("cart-quntity").innerHTML = items.length;
};

const getData = async () => {
  let data;
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.map((item) => {
        console.log(item);

        $(document).ready(() => {
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
          );
        });
      });
    });
};

getData();
