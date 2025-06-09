var swiper = new Swiper(".mySwiper", 
{
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: 
  {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: 
  {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", 
{
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: 
  {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: 
  {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", 
{
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: 
  {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: 
  {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  
    









// fetch('products.json')
//   .then(res => res.json())
//   .then(products => {
//     const container = document.getElementById('product-container');

//     products.forEach(product => {
//       const card = document.createElement('a');
//       card.className = 'product-card';
//       card.href = product.product_url;
//       card.target = '_blank';
//       card.innerHTML = `
//         <div class="product-image-container">
//           <img src="${product.image_src}" alt="${product.name}">
//           <img src="${product.image_src_2}" class="hover-img" alt="${product.name}">
//         </div>
//         <div class="product-info">
//           <h2>${product.name}</h2>
//           <p class="price">${product.price}</p>
//           <p class="model-count">${product.model_count}</p>
//         </div>
//       `;

//       container.appendChild(card);
//     });
//   })
//   .catch(error => console.error('Error loading products:', error));








// const products = [
//     {
//         "id": 1,
//         "product_url": "https://panafrica-store.com/products/arusha-safou",
//         "image_src": "https://panafrica-store.com/cdn/shop/files/RUN-532_ARUSHA-SAFOU_1_2.jpg?v=1739438406&width=2080",
//         "image_src_2": "https://panafrica-store.com/cdn/shop/files/RUN-532_ARUSHA-SAFOU_3_2.jpg?v=1739438409&width=2080",
//         "name": "Arusha-safou",
//         "price": "149€",
//         "sizes": [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
//         "model_count": "14 modèles"
//     },
//     // Add other products here...
// ];

// const productContainer = document.getElementById('productContainer');

// products.forEach(product => {
//     const productCard = document.createElement('div');
//     productCard.className = 'product-card';

//     productCard.innerHTML = `
//         <img src="${product.image_src}" alt="${product.name}" class="product-image">
//         <h2 class="product-name">${product.name}</h2>
//         <p class="product-price">${product.price}</p>
//         <p class="product-sizes">Sizes: ${product.sizes.join(', ')}</p>
//         <a href="${product.product_url}" class="product-link">View Product</a>
//     `;

//     productContainer.appendChild(productCard);
// });
