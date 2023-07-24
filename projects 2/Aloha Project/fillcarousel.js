class product{

    constructor(category, name, price, imagesource) {

        this.category = category;
        this.name = name;
        this.price = price;
        this.imagesource = imagesource;

    }
}

const mainCarousel = document.getElementsByClassName("main-carousel")[0];


products = [

new Product (

"Dresses",
"Stretch Knit Dress",
"$169.00",
"images/stretch-knit-dress.jpg",
"stretch knit dress"

),

new Product(
    "Shirts",
    "Cotton Blue Shirt",
    "$89.00",
    "images/cotton-blue-shirt.webp",
    "cotton blue shirt"

),

new Product(
    "Dresses",
    "Checked stretch Dress",
    "$129.00",
    "images/checked-stretch-dress.jpg",
    "checked stretch dress"

),

new Product(
    "bags",
    "Blue Hipster Backpack",
    "$69.00",
    "images/blue-hipster-backpack.webp",
    "blue hipster backpack"
),


new Product(
    "Denim",
    "Denim Overall Shorts",
    "$89.00",
    "images/denim-overall-shorts.webp",
    "denim overall shorts"

),

 new Product(

"Dresses",
"Pink dotted dress",
"$99.00",
"images/pink-dotted-dress.webp",
"pink dotted dress"

),


new Product(

    "Dresses",
    "Blue Silk Dress",
    "$119.00",
    "images/blue-silk-dress.jpg",
    "blue silk dress"
),

new Product(
    "Shirts",
    "cotton Yellow Tshirt",
    "$39.00",
    "images/cotton-yellow-tshirt.jpg",
    "cotton yellow t-shirt"


)



];



// create a carousel-cell for each product in products




products.forEach(function(product, index){
let newCarouselcell = document.createElement("div");
 newCarouselcell.setAttribute("class","carousel-cell");


 let newCarouselImg = document.createElement("img");
 newCarouselcellImg.setAttribute("src", products[index].imageSource);
 newCarouselcellImg.setAttribute("alt", products[index].imageAlt);
 newCarouselcell.append(newCarouselcellImg);


 let newCarouselCategory = document.createElement("p");
 newCarouselCategory.setAttribute("class", "product-category");
 newCarouselCategory.innerText = products[index].category;
 newCarouselcell.append(newCarouselCategory);

 let newCarouselName = document.createElement("p");
 newCarouselName.setAttribute("class", "product-name");
 newCarouselName.innertext = products [index].name;
 newCarouselcell.append(newCarouselName);
 
 

 let newCarouselPrice = document.createElement("p");
 newCarouselPrice.setAttribute("class", "product-price");
 newCarouselPrice.innerText = products[index].price;
 newCarouselcell.append(newCarouselPrice);
 
 
 newCarouselcell.addEventListener("click", function(){

    addItemToCart();

})

mainCarousel.append(newCarouselcell);

});















