const productcontainer = document.getElementById("product-container");

let pitchArray = [];

function GetDataFromServer()
{
    fetch("http://localhost:3000/data")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
      console.log(data)
        pitchArray = data.products;
        CardList(pitchArray)
    })
    .catch((err)=>{
        console.log(err)
    })
}
GetDataFromServer()

function CardList(pitchArray)
{
    let products = pitchArray.map((el) => Card(el.name,el.price,el.image_src,el.id))
    productcontainer.innerHTML = products.join("")
}

function Card(title,price,image,id)
{
    let singleCard = `
    <div class="card" style="width:18rem;margin:10px;">
        <a href="./description.html"><img src=${image} class="card-img-top" alt="${title}"></a>
        
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-price">${price}</p>
        </div>
    </div>
    `;
    return singleCard;
}
