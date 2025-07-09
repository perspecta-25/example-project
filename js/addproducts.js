"use strict";
let products = [
    {
        name: "Октоподчето Блу",
        price: "40",
        imgName: "octo"
    },
    {
        name: "Пчеличката Дейзи",
        price: "40",
        imgName: "pchela"
    },
    {
        name: "Слончето Рафи",
        price: "20",
        imgName: "sl"
    },
    {
        name: "Котето Том",
        price: "30",
        imgName: "kot"
    },
    {
        name: "Куклата Ина",
        price: "35",
        imgName: "doll"
    },
    {
        name: "Мартенското зайче",
        price: "30",
        imgName: "zaiche"
    },
    {
        name: "Бебето Лила",
        price: "40",
        imgName: "lila"
    },

];

$(document).ready(function(){
    products.forEach(function(product){
        $("#products-showcase").append(
            `
            <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="assets/${product.imgName}.png" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${product.name}

                                </h5>
                                <!-- Product reviews-->
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                ${product.price} лв.
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Добави в
                                    кошницата</a></div>
                        </div>
                    </div>
                </div>
            `
        )
    })

});