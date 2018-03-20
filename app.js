var products = [
  {
    product: "Sony A7 III",
    info: "Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis",
    price: "22.990kr",
    image: "https://picsum.photos/170/88/?random",
  },
  {
    product: "Nikon D850",
    info: "Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis",
    price: "32.990kr",
    image: "https://picsum.photos/170/88/?random",
  },
  {
    product: "Panasonic G80",
    info: "Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis",
    price: "9.490kr",
    image: "https://picsum.photos/170/88/?random",
  },
  {
  product: "Lumix G85",
  info: "Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis",
  price: "11.490kr",
  image: "https://picsum.photos/170/88/?random",
  },
  {
  product: "Pentac K3",
  info: "Info. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis",
  price: "16.490kr",
  image: "https://picsum.photos/170/88/?random",
  }
]


for (let i = 0; i < products.length; i++) {
  $('#product_container').append('<div class="item"><div class="image"><img id="product_image" src="' + products[i].image + '" alt="Something went wrong"></div><div class="text"><p class="name">' + products[i].product + '<span class="span1">' + +'</span></p><p class="info">' + products[i].info + '</p></div><div class="btn"><a href="#">Buy</a></div></div>')
}


