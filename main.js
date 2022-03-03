/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _images_Highway_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/Highway.png */ \"./images/Highway.png\");\n/* harmony import */ var _images_Gravel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/Gravel.png */ \"./images/Gravel.png\");\n/* harmony import */ var _images_TT_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/TT.png */ \"./images/TT.png\");\n/* harmony import */ var _images_Cervelo_Caledonia_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/Cervelo_Caledonia_5.png */ \"./images/Cervelo_Caledonia_5.png\");\n/* harmony import */ var _images_Cannondale_Systemsix_Himod_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../images/Cannondale_Systemsix_Himod.png */ \"./images/Cannondale_Systemsix_Himod.png\");\n/* harmony import */ var _images_Cervelo_Aspero_GRX_810_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../images/Cervelo_Aspero_GRX_810.png */ \"./images/Cervelo_Aspero_GRX_810.png\");\n/* harmony import */ var _images_Specialized_S_Works_Diverge_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../images/Specialized_S-Works_Diverge.png */ \"./images/Specialized_S-Works_Diverge.png\");\n/* harmony import */ var _images_Cannondale_Topstone_Lefty_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../images/Cannondale_Topstone_Lefty_3.png */ \"./images/Cannondale_Topstone_Lefty_3.png\");\n/* harmony import */ var _images_Specialized_S_Works_Shiv_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../images/Specialized_S-Works_Shiv.png */ \"./images/Specialized_S-Works_Shiv.png\");\n/* harmony import */ var _images_BMC_Timemachine_01_ONE_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../images/BMC_Timemachine_01 ONE.png */ \"./images/BMC_Timemachine_01 ONE.png\");\n/* harmony import */ var _images_Cervelo_P_Series_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../images/Cervelo_P-Series.png */ \"./images/Cervelo_P-Series.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar swiper = new Swiper('.road', {\n  initialSlide: 0,\n  loop: true,\n  breakpoints: {\n    320: {\n      allowTouchMove: true\n    },\n    600: {\n      allowTouchMove: false\n    }\n  },\n  navigation: {\n    nextEl: '.road__button_type_next',\n    prevEl: '.road__button_type_back'\n  }\n});\nvar breakpoint = window.matchMedia('(min-width:600px)');\nvar swiperBikes;\n\nvar breakpointChecker = function breakpointChecker() {\n  if (breakpoint.matches === true) {\n    if (swiperBikes !== undefined) {\n      swiperBikes.destroy(true, true);\n    }\n  } else {\n    return enableSwiper();\n  }\n};\n\nfunction enableSwiper() {\n  swiperBikes = new Swiper(\".swiper-bikes\", {\n    allowTouchMove: true,\n    autoplay: {\n      delay: 2500\n    },\n    pagination: {\n      el: '.bikes__points',\n      type: 'bullets',\n      clickable: true\n    }\n  });\n}\n\nbreakpoint.addEventListener(\"change\", breakpointChecker);\nbreakpointChecker();\nvar buttonBurger = document.querySelector(\".header__burger\");\nvar popup = document.querySelector(\".popup\");\nvar popupClose = popup.querySelector(\".popup__button_el_close\");\nvar popupLinks = popup.querySelectorAll(\".popup__link\");\nvar road = document.querySelector(\".road\");\nvar roadTemplate = road.querySelector(\".road__template\");\nvar bikesCards = document.querySelector(\".bikes__cards\");\nvar bikesTemplate = bikesCards.querySelector(\".bikes__template\");\nvar linkRoads = document.querySelectorAll(\".bikes__item\");\nvar switchPictures = document.querySelectorAll(\".switch__picture\");\nvar checkboxes = document.querySelectorAll(\".switch__checkbox\");\nvar arrow = document.querySelectorAll(\".arrow\");\nvar popups = document.querySelectorAll(\".popup\");\nvar email = document.querySelectorAll(\".email\");\nvar buttonEmail = document.querySelector(\".button-email\");\nvar page = document.querySelector(\".page\");\nvar footer = document.querySelector(\".footer\");\nvar copyright = document.querySelector(\".copyright\");\nvar footerEmailContainer = footer.querySelector(\".footer__email-container\");\nvar footerEmail = footer.querySelector(\".footer__email\");\nvar footerButton = footer.querySelector(\".footer__button\");\nvar bikesPlace = document.querySelector(\"#bikes-place\");\nvar arrayRoads = [[\"Шоссе\", \"На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.\", _images_Highway_png__WEBPACK_IMPORTED_MODULE_1__], [\"Грэвел\", \"Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.\", _images_Gravel_png__WEBPACK_IMPORTED_MODULE_2__], [\"ТТ\", \"ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.\", _images_TT_png__WEBPACK_IMPORTED_MODULE_3__]];\nvar highwayBikes = [[\"Cervelo Caledonia 5\", \"https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN\", _images_Cervelo_Caledonia_5_png__WEBPACK_IMPORTED_MODULE_4__], [\"Cannondale Systemsix Himod\", \"https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J\", _images_Cannondale_Systemsix_Himod_png__WEBPACK_IMPORTED_MODULE_5__], [\"Trek Domane SL-7\", \"https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF\", _images_Cervelo_Aspero_GRX_810_png__WEBPACK_IMPORTED_MODULE_6__]];\nvar gravelBikes = [[\"Cervelo Aspero GRX 810\", \"https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE\", _images_Cervelo_Aspero_GRX_810_png__WEBPACK_IMPORTED_MODULE_6__], [\"Specialized S-Works Diverge\", \"https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9\", _images_Specialized_S_Works_Diverge_png__WEBPACK_IMPORTED_MODULE_7__], [\"Cannondale Topstone Lefty 3\", \"https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8\", _images_Cannondale_Topstone_Lefty_3_png__WEBPACK_IMPORTED_MODULE_8__]];\nvar ttBikes = [[\"Specialized S-Works Shiv\", \"https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9\", _images_Specialized_S_Works_Shiv_png__WEBPACK_IMPORTED_MODULE_9__], [\"BMC Timemachine 01 ONE\", \"https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835\", _images_BMC_Timemachine_01_ONE_png__WEBPACK_IMPORTED_MODULE_10__], [\"Cervelo P-Series\", \"https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q\", _images_Cervelo_P_Series_png__WEBPACK_IMPORTED_MODULE_11__]];\nvar index = 0;\n\nwhile (index < arrayRoads.length) {\n  var _road = roadTemplate.content.querySelector(\".swiper-slide\").cloneNode(true);\n\n  _road.querySelector(\".page__title_place_road\").textContent = arrayRoads[index][0];\n  _road.querySelector(\".main-content__text_place_road\").textContent = arrayRoads[index][1];\n  var imageArray = Array.from(_road.querySelectorAll(\".road__picture\"));\n  imageArray[0].src = arrayRoads[index][2];\n\n  if (index === 2) {\n    imageArray[1].src = arrayRoads[0][2];\n    swiper.addSlide(index, _road);\n    break;\n  }\n\n  imageArray[1].src = arrayRoads[index + 1][2];\n  swiper.addSlide(index, _road);\n  index++;\n}\n\nfunction toggleBikes() {\n  var acitveBike;\n\n  if (window.innerWidth > 600) {\n    acitveBike = document.querySelector(\".bikes__item_active\").textContent;\n  } else {\n    acitveBike = bikesPlace.options[bikesPlace.selectedIndex].text;\n  }\n\n  var arrayBikes = [];\n\n  switch (acitveBike) {\n    case \"Шоссе\":\n      arrayBikes = highwayBikes;\n      break;\n\n    case \"Грэвел\":\n      arrayBikes = gravelBikes;\n      break;\n\n    case \"TT\":\n      arrayBikes = ttBikes;\n      break;\n  } //заполняем каждую карточку велосипеда \n\n\n  arrayBikes.forEach(function (el, index) {\n    var cloneBikes = bikesTemplate.content.querySelector(\".bikes__card\").cloneNode(true);\n    var bikesLink = cloneBikes.querySelector(\".bikes__link\");\n    var bikesPicture = cloneBikes.querySelector(\".bikes__picture\");\n    var bikesName = cloneBikes.querySelector(\".bikes__name\");\n    bikesLink.href = el[1];\n    bikesPicture.src = el[2];\n    bikesPicture.alt = el[0];\n    bikesName.textContent = el[0];\n    bikesCards.append(cloneBikes);\n  });\n}\n\ntoggleBikes(); //удаляем карточки с велосипедами\n\nfunction removeBikes() {\n  var bikesCard = document.querySelectorAll(\".bikes__card\");\n  bikesCard.forEach(function (bike) {\n    return bike.remove();\n  });\n}\n\nfunction changeActiveEl(action) {\n  var bikeActive = document.querySelector(\".bikes__item_active\");\n  var index = Array.from(linkRoads).indexOf(bikeActive);\n\n  switch (action) {\n    case \"bikesPlace\":\n      if (index !== bikesPlace.selectedIndex) {\n        bikeActive.classList.remove(\"bikes__item_active\");\n        linkRoads[bikesPlace.selectedIndex].classList.add(\"bikes__item_active\");\n      }\n\n      break;\n\n    case \"linkRoads\":\n      if (index !== bikesPlace.selectedIndex) {\n        bikesPlace[index].selected = true;\n      }\n\n      break;\n  }\n} //при изменении select-а удаляем велосипеды и загружаем новые\n\n\nbikesPlace.addEventListener(\"change\", function () {\n  removeBikes();\n  toggleBikes();\n  changeActiveEl(\"bikesPlace\");\n}); //загружаем новые велосипеды при нажатии  \n\nlinkRoads.forEach(function (el) {\n  el.addEventListener(\"click\", function () {\n    removeBikes();\n    var linkActiveRoad = document.querySelector(\".bikes__item_active\");\n    linkActiveRoad.classList.remove(\"bikes__item_active\");\n    el.classList.add(\"bikes__item_active\");\n    toggleBikes();\n    changeActiveEl(\"linkRoads\");\n  });\n}); //при нажатии на email-container появляется кнопка \"ок\"\n\nfooterEmail.addEventListener(\"click\", function () {\n  footerButton.classList.add(\"button_visible\");\n}); //при нажатии на кнопку \"ок\" появляется сообщение и блокируется доступ к кнопке и форме\n\nfooterButton.addEventListener(\"click\", function () {\n  footerEmail.value = \"Круто!\";\n  footerButton.disabled = true;\n  footerEmail.disabled = true;\n}); //при перемещении курсора за границу элемента кнопка \"ок\" исчезает\n\nfooterEmailContainer.addEventListener(\"mouseleave\", function () {\n  footerButton.classList.remove(\"button_visible\");\n}); //переключение видимости popup-а \n\nfunction togglePopup(popup) {\n  popup.classList.toggle(\"popup_opened\");\n} //открываем popup при нажатии на бургер\n\n\nbuttonBurger.addEventListener(\"click\", function () {\n  togglePopup(popup);\n}); //закрываем popup при нажатии на крестик\n\npopupClose.addEventListener(\"click\", function () {\n  togglePopup(popup);\n}); //при переходе на другую часть страницы popup закрывается\n\npopupLinks.forEach(function (el) {\n  el.addEventListener(\"click\", function () {\n    togglePopup(popup);\n  });\n});\ncheckboxes.forEach(function (checkbox) {\n  checkbox.addEventListener('change', function () {\n    var title = document.querySelectorAll(\".title\");\n    var names = document.querySelectorAll(\".name\");\n    var text = document.querySelectorAll(\".text\");\n    title.forEach(function (el) {\n      el.classList.toggle(\"title_theme_dark\");\n    });\n    names.forEach(function (el) {\n      el.classList.toggle(\"name_theme_dark\");\n    });\n    arrow.forEach(function (el) {\n      el.classList.toggle(\"arrow_theme_dark\");\n    });\n    text.forEach(function (el) {\n      el.classList.toggle(\"text_theme_dark\");\n    });\n    email.forEach(function (el) {\n      el.classList.toggle(\"email_theme_dark\");\n    });\n    popups.forEach(function (el) {\n      el.classList.toggle(\"popup_theme_dark\");\n    });\n    switchPictures.forEach(function (el) {\n      el.classList.toggle(\"switch__picture_theme_dark\");\n    });\n    page.classList.toggle(\"page_theme_dark\");\n    footer.classList.toggle(\"footer_theme_dark\");\n    copyright.classList.toggle(\"copyright_theme_dark\");\n    buttonEmail.classList.toggle(\"button-email_theme_dark\");\n  });\n});\n\n//# sourceURL=webpack://six-project/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://six-project/./src/pages/index.css?");

/***/ }),

/***/ "./images/BMC_Timemachine_01 ONE.png":
/*!*******************************************!*\
  !*** ./images/BMC_Timemachine_01 ONE.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fff5f0bbd88d499cfd6a.png\";\n\n//# sourceURL=webpack://six-project/./images/BMC_Timemachine_01_ONE.png?");

/***/ }),

/***/ "./images/Cannondale_Systemsix_Himod.png":
/*!***********************************************!*\
  !*** ./images/Cannondale_Systemsix_Himod.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ee5083b0ef69f91665d.png\";\n\n//# sourceURL=webpack://six-project/./images/Cannondale_Systemsix_Himod.png?");

/***/ }),

/***/ "./images/Cannondale_Topstone_Lefty_3.png":
/*!************************************************!*\
  !*** ./images/Cannondale_Topstone_Lefty_3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0820076c18ce08557a83.png\";\n\n//# sourceURL=webpack://six-project/./images/Cannondale_Topstone_Lefty_3.png?");

/***/ }),

/***/ "./images/Cervelo_Aspero_GRX_810.png":
/*!*******************************************!*\
  !*** ./images/Cervelo_Aspero_GRX_810.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f460ba47587ca1287e0b.png\";\n\n//# sourceURL=webpack://six-project/./images/Cervelo_Aspero_GRX_810.png?");

/***/ }),

/***/ "./images/Cervelo_Caledonia_5.png":
/*!****************************************!*\
  !*** ./images/Cervelo_Caledonia_5.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d15b021069ceea444166.png\";\n\n//# sourceURL=webpack://six-project/./images/Cervelo_Caledonia_5.png?");

/***/ }),

/***/ "./images/Cervelo_P-Series.png":
/*!*************************************!*\
  !*** ./images/Cervelo_P-Series.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"841ce4610fc4ee1c4339.png\";\n\n//# sourceURL=webpack://six-project/./images/Cervelo_P-Series.png?");

/***/ }),

/***/ "./images/Gravel.png":
/*!***************************!*\
  !*** ./images/Gravel.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f32be38a54a6edbc72c6.png\";\n\n//# sourceURL=webpack://six-project/./images/Gravel.png?");

/***/ }),

/***/ "./images/Highway.png":
/*!****************************!*\
  !*** ./images/Highway.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3912ed437428d089594.png\";\n\n//# sourceURL=webpack://six-project/./images/Highway.png?");

/***/ }),

/***/ "./images/Specialized_S-Works_Diverge.png":
/*!************************************************!*\
  !*** ./images/Specialized_S-Works_Diverge.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"072da001666c8ba7ebed.png\";\n\n//# sourceURL=webpack://six-project/./images/Specialized_S-Works_Diverge.png?");

/***/ }),

/***/ "./images/Specialized_S-Works_Shiv.png":
/*!*********************************************!*\
  !*** ./images/Specialized_S-Works_Shiv.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8901a59a8baa9e258b09.png\";\n\n//# sourceURL=webpack://six-project/./images/Specialized_S-Works_Shiv.png?");

/***/ }),

/***/ "./images/TT.png":
/*!***********************!*\
  !*** ./images/TT.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5090de92b5519c50344.png\";\n\n//# sourceURL=webpack://six-project/./images/TT.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;