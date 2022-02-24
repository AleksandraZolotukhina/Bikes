import './pages/index.css';

import highway from "./../images/Highway.png";
import gravel from "./../images/Gravel.png";
import tt from "./../images/TT.png";

import Cervelo_Caledonia_5 from "./../images/Cervelo_Caledonia_5.png";
import Cannondale_Systemsix_Himod from "./../images/Cannondale_Systemsix_Himod.png";
import Trek_Domane_SL_7 from "./../images/Cervelo_Aspero_GRX_810.png";
import Cervelo_Aspero_GRX_810 from "./../images/Cervelo_Aspero_GRX_810.png";
import Specialized_S_Works_Diverge from "./../images/Specialized_S-Works_Diverge.png";
import Cannondale_Topstone_Lefty_3 from "./../images/Cannondale_Topstone_Lefty_3.png";
import Specialized_S_Works_Shiv from "./../images/Specialized_S-Works_Shiv.png"
import BMC_Timemachine_01 from"./../images/BMC_Timemachine_01 ONE.png";
import Cervelo_P_Series from"./../images/Cervelo_P-Series.png";

const buttonBurger = document.querySelector(".header__burger");
const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup__button_el_close");
const popupLinks = popup.querySelectorAll(".popup__link");

const road = document.querySelector(".road");
const roadTemplate = road.querySelector(".road__template");
const roadButtonNext = road.querySelector(".road__button_type_next");
const roadButtonBack = road.querySelector(".road__button_type_back");

const cloneRoad = roadTemplate.content.cloneNode(true);
let roadTitle = cloneRoad.querySelector(".page__title_place_road");
let roadText = cloneRoad.querySelector(".main-content__text_place_road");
let roadPictures = cloneRoad.querySelectorAll(".road__picture");

const bikesCards = document.querySelector(".bikes__cards");
const bikesTemplate = bikesCards.querySelector(".bikes__template");
const linkRoads = document.querySelectorAll(".bikes__item");

const switchPictures = document.querySelectorAll(".switch__picture");
const checkboxes = document.querySelectorAll(".switch__checkbox");
const arrow = document.querySelectorAll(".arrow");
const popups = document.querySelectorAll(".popup");
const email = document.querySelectorAll(".email");

const buttonEmail = document.querySelector(".button-email");
const page = document.querySelector(".page");
const footer = document.querySelector(".footer");
const copyright = document.querySelector(".copyright");
const footerEmailContainer = footer.querySelector(".footer__email-container");
const footerEmail = footer.querySelector(".footer__email");
const footerButton = footer.querySelector(".footer__button");

const bikesPlace = document.querySelector("#bikes-place");


const bikesPoints = document.querySelector(".bikes__points");
const pointsTemplate = bikesPoints.querySelector(".bikes__template-points");

const acitveBike = document.querySelector(".bikes__item_active");


const arrayRoads = [["Шоссе", 
"На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
highway],["Грэвел",
"Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
gravel],["ТТ",
"ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",tt]];


const highwayBikes = [["Cervelo Caledonia 5","https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",Cervelo_Caledonia_5 ],
["Cannondale Systemsix Himod","https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",Cannondale_Systemsix_Himod],
["Trek Domane SL-7","https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",Trek_Domane_SL_7]]
const gravelBikes = [["Cervelo Aspero GRX 810","https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",Cervelo_Aspero_GRX_810],
["Specialized S-Works Diverge","https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",Specialized_S_Works_Diverge],
["Cannondale Topstone Lefty 3","https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",Cannondale_Topstone_Lefty_3]];
const ttBikes = [["Specialized S-Works Shiv","https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9",Specialized_S_Works_Shiv],
["BMC Timemachine 01 ONE","https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",BMC_Timemachine_01],
["Cervelo P-Series","https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q",Cervelo_P_Series]]

function removePoints(){
    const points = bikesPoints.querySelectorAll(".bikes__point");
    points.forEach(point=>point.remove())
}
function appearPoints(count){
    for(let i = 0; i < count; i++){
        const clonePoints = pointsTemplate.content.cloneNode(true);
        const point = clonePoints.querySelector(".bikes__point");
        bikesPoints.append(point);
    }
}

function slider(cards,classVisible){
    let i=0;
    setInterval(function(){
        cards[i].classList.remove(classVisible);

        if(i === cards.length - 1){
            i = -1;
        }
        cards[i+1].classList.add(classVisible);
        i++;
    },2000)
}

function toggleBikes(){
    let acitveBike;
    if(window.innerWidth > 600){
        acitveBike = document.querySelector(".bikes__item_active").textContent;
    }
    else{
        acitveBike = bikesPlace.options[bikesPlace.selectedIndex].text;

    }
    let arrayBikes=[];
    switch (acitveBike){
        case "Шоссе":
            arrayBikes = highwayBikes;
            break;
        case "Грэвел":
            arrayBikes = gravelBikes;
            break;
        case "TT":
            arrayBikes = ttBikes;
            break;        
    }
    //заполняем каждую карточку велосипеда 
    arrayBikes.forEach(el=>{
        const cloneBikes = bikesTemplate.content.cloneNode(true);
        let bikesLink = cloneBikes.querySelector(".bikes__link");
        let bikesPicture = cloneBikes.querySelector(".bikes__picture");
        let bikesName = cloneBikes.querySelector(".bikes__name");

        bikesLink.href = el[1];
        bikesPicture.src = el[2];
        bikesPicture.alt = el[0];
        bikesName.textContent = el[0];
        
        bikesCards.append(cloneBikes);

    })
    const cards = document.querySelectorAll(".bikes__card");
    const card = document.querySelector(".bikes__card");
    card.classList.add("bikes__card_visible");
    slider(cards, "bikes__card_visible");

    removePoints();
    appearPoints(arrayBikes.length);
    const point = document.querySelector(".bikes__point");
    point.classList.add("bikes__point_active");
    slider(document.querySelectorAll(".bikes__point"),"bikes__point_active");
}
toggleBikes();

//удаляем карточки с велосипедами
function removeBikes(){
    const bikesCard = document.querySelectorAll(".bikes__card");
    bikesCard.forEach(bike=>bike.remove());
}

function changeActiveEl(action){
    const bikeActive = document.querySelector(".bikes__item_active");
    const index = Array.from(linkRoads).indexOf(bikeActive);
    switch (action){
        case "bikesPlace":
            if(index!==bikesPlace.selectedIndex){
                bikeActive.classList.remove("bikes__item_active");
                linkRoads[bikesPlace.selectedIndex].classList.add("bikes__item_active");
            }
            break;
        case "linkRoads":
            if(index!==bikesPlace.selectedIndex){
                bikesPlace[index].selected = true;
            }
            break;
    }

}

//при изменении select-а удаляем велосипеды и загружаем новые
bikesPlace.addEventListener("change", function(){
    removeBikes();
    toggleBikes();

    changeActiveEl("bikesPlace");
})
//загружаем новые велосипеды при нажатии  
linkRoads.forEach(el=>{
    el.addEventListener("click", function(){
        removeBikes();
        const linkActiveRoad = document.querySelector(".bikes__item_active");
        linkActiveRoad.classList.remove("bikes__item_active");
        el.classList.add("bikes__item_active");

        toggleBikes();

        changeActiveEl("linkRoads");
    })
})
let currentIndex=0
roadTitle.textContent = arrayRoads[currentIndex][0];
roadText.textContent = arrayRoads[currentIndex][1];
roadButtonBack.disabled=true;


//загружаем инфорамацию дорог из массива
function toggleRoads(){
    roadTitle.textContent = arrayRoads[currentIndex][0];
    roadText.textContent = arrayRoads[currentIndex][1];

    let i=currentIndex;
    roadPictures.forEach(el=>{
        el.src=arrayRoads[i][2];
        el.alt=arrayRoads[i][0];
        i++;
        if(i===arrayRoads.length){
            i=0;
        }
    })  
}
toggleRoads();
road.prepend(cloneRoad);

//при нажатии на кнопку ">" загружаем следующую дорогу
roadButtonNext.addEventListener("click", function(){
    roadButtonBack.disabled=false;
    currentIndex++;
    toggleRoads();
    if(currentIndex + 1 === arrayRoads.length){
        roadButtonNext.disabled=true;
    }
})

//при нажатии на кнопку "<" загружаем предыдущую дорогу
roadButtonBack.addEventListener("click", function(){  
    currentIndex = currentIndex - 1;
    roadButtonNext.disabled = false;
    toggleRoads();
    if(currentIndex === 0){
        roadButtonBack.disabled = true;
    }
})

//при нажатии на email-container появляется кнопка "ок"
footerEmail.addEventListener("click", function(){
    footerButton.classList.add("button_visible");
})

//при нажатии на кнопку "ок" появляется сообщение и блокируется доступ к кнопке и форме
footerButton.addEventListener("click", function(){
    footerEmail.value="Круто!";
    footerButton.disabled = true;
    footerEmail.disabled = true;
})

//при перемещении курсора за границу элемента кнопка "ок" исчезает
footerEmailContainer.addEventListener("mouseleave", function(){
    footerButton.classList.remove("button_visible");
})


//переключение видимости popup-а 
function togglePopup(popup) {
    popup.classList.toggle("popup_opened");
}

//открываем popup при нажатии на бургер
buttonBurger.addEventListener("click", function () {
    togglePopup(popup)
});

//закрываем popup при нажатии на крестик
popupClose.addEventListener("click", function () {
    togglePopup(popup);
})

//при переходе на другую часть страницы popup закрывается
popupLinks.forEach(el => {
    el.addEventListener("click", function () {
        togglePopup(popup);
    })
})

checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('change', function(){
        const title = document.querySelectorAll(".title");
        const names = document.querySelectorAll(".name");
        const text = document.querySelectorAll(".text");

        title.forEach(el=>{
            el.classList.toggle("title_theme_dark");
        })
        names.forEach(el=>{
            el.classList.toggle("name_theme_dark");
        })
        arrow.forEach(el=>{
            el.classList.toggle("arrow_theme_dark");
        })
        text.forEach(el=>{
            el.classList.toggle("text_theme_dark");
        })
        email.forEach(el=>{
            el.classList.toggle("email_theme_dark");
        })
        popups.forEach(el=>{
            el.classList.toggle("popup_theme_dark");
        })
        switchPictures.forEach(el=>{
            el.classList.toggle("switch__picture_theme_dark");
        })
        page.classList.toggle("page_theme_dark");
        footer.classList.toggle("footer_theme_dark");
        copyright.classList.toggle("copyright_theme_dark");
        buttonEmail.classList.toggle("button-email_theme_dark");
    })
})
