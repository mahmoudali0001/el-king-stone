new WOW().init();

//--------------------------------------- Start Catching elements ---------------------------------//

let serviceSwitcherList = document.querySelectorAll(
  ".service .shuffle-btns span"
);

let navbar = document.querySelector(".navbar");

let cardsParent = document.querySelector(".card-parent");
let cardsPaginationWrapper = document.querySelector(
  ".service .pagination-wrapper"
);

let callUsBtns = document.querySelectorAll(".call-us a");

let callUsBtnToggle = document.querySelector(".call-us .message-btn");

let callUsBtnToggleIcon = document.querySelector(".call-us .message-btn i");

let cards = document.querySelectorAll(".service .container .card");

//--------------------------------------- End Catching elements ---------------------------------//

// ------------------------------------- Start Creating Global Variable ------------------------------ //

let servicePaginationCurrentPage = 1;

let serviceElementsInPaginations = 4;
// ------------------------------------- End Creating Global Variable ------------------------------ //

// ---------------------------------- Start Creating Array of Array of Objects cardsData ---------------------------- //
const cardsData = [
  {
    cardName: "الحجر الهاشمي",
    cardText:
      "الحجر الهاشمي نوع من الحجر الطبيعي متعدد الاستخدامات في الديكورات والأرضيات وتشطيب الواجهات في المنازل والقصور والفلل والمباني المختلفة متميزًا بصلابته ومتفرداً بجماله",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر مايكا",
    cardText:
      "ديكورات حجر مايكا متنوعة في السوق المصري ويتم اختيار أفضل نوع من بينها للعملاء وتصميم الديكورات المميزة أو تشطيب الواجهات",
    cardImgURL: "./assets/img/home.png",
    category: "interior-design",
  },
  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },
  {
    cardName: "الحجر الفرعوني",
    cardText:
      "بقدرته على تحمل كافة العوامل الخارجية مثل الرطوبة وأشعة الشمس والأتربة، وغيرها من العوامل الخارجية دون أن يفقد بريقه، فهو من الأحجار التي تستخدم خصيصًا لمقاومة المطر،",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر البازلت",
    cardText:
      "حجر البازلت تستخدم في التشطيبات الداخلية والخارجية وعمل الواجهات والديكورات لأي بناء مثل القصور أو الفلل أو المنازل",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر التدبيش",
    cardText:
      "يتسخدم التدبيش فى اسوار المنازل و الفلل و المزارع و يتميز الدبش بقدرتة العالية على امتصاص الماء",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر الهاشمي",
    cardText:
      "الحجر الهاشمي نوع من الحجر الطبيعي متعدد الاستخدامات في الديكورات والأرضيات وتشطيب الواجهات في المنازل والقصور والفلل والمباني المختلفة متميزًا بصلابته ومتفرداً بجماله",
    cardImgURL: "./assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "./assets/img/home.png",
    category: "anthor-works",
  },

  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "./assets/img/home.png",
    category: "anthor-works",
  },
];
// ---------------------------------- End Creating Array of Array of Objects cardsData ---------------------------- //

// ---------------------------------------- Start Nav Bar add Class when scroll ------------------------------- //
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 82) {
    navbar.classList.remove("bg-white");

    navbar.classList.add("bg-sliver");

    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");

    navbar.classList.remove("bg-sliver");

    navbar.classList.add("bg-white");
  }
});
// ---------------------------------------- End Nav Bar add Class when scroll ------------------------------- //

// --------------------------------------- Start loop in shuffle buttons of Service ---------------------------- //
serviceSwitcherList.forEach((btn) => {
  btn.addEventListener("click", removeActive);

  serviceShuflleHanlde(cardsData);

  btn.addEventListener("click", function (e) {
    switch (e.target.dataset.work) {
      case "exterior-design":
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "exterior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case "interior-design":
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "interior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case ".anthor-works":
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "anthor-works";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      default:
        serviceShuflleHanlde(cardsData);
    }
  });
});
// --------------------------------------- End loop in shuffle buttons of Service ---------------------------- //

// --------------------------------------- Start removeActive Function  ---------------------------- //
function removeActive() {
  serviceSwitcherList.forEach((btn) => {
    btn.classList.remove("active");

    this.classList.add("active");
  });
}
// --------------------------------------- End removeActive Function  ---------------------------- //

// --------------------------------------------- Start serviceDisplayList Function  --------------------------------- //
function serviceDisplayList(items, wrapper, elements_per_page, page) {
  wrapper.innerHTML = "";

  page--;

  let loopStart = elements_per_page * page;

  let loopEnd = loopStart + elements_per_page;

  let paginationItems = items.slice(loopStart, loopEnd);

  for (let i = 0; i < paginationItems.length; i++) {
    let card = document.createElement("section");

    let cardImgParent = document.createElement("div");

    let cardImage = document.createElement("img");

    let cardInfoParent = document.createElement("div");

    let h3 = document.createElement("h3");

    let p = document.createElement("p");

    cardImage.setAttribute("src", "./assets/img/home.png");

    cardImage.setAttribute("alt", "");

    h3.innerHTML = paginationItems[i].cardName;

    p.innerHTML = paginationItems[i].cardText;

    card.classList = "card card-four border-0 shadow p-0 pb-3  wow bounceIn";

    cardImgParent.classList = "card-img text-center";

    cardImage.classList = "shadow-sm mx-auto mt-2";

    cardImage.style.width = "50px";

    cardInfoParent.classList = "px-2 mt-3";

    h3.classList = "fs-5";

    wrapper.appendChild(card);

    card.appendChild(cardImgParent);

    card.appendChild(cardInfoParent);

    cardImgParent.appendChild(cardImage);

    cardInfoParent.appendChild(h3);

    cardInfoParent.appendChild(p);
  }
}
// --------------------------------------------- End serviceDisplayList Function  --------------------------------- //

// --------------------------------------------- Start setupServicePagination Function  --------------------------------- //
function setupServicePagination(items, wrapper, elements_per_page) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / elements_per_page);

  if (pageCount > 1) {
    for (let i = 1; i <= pageCount; i++) {
      let btn = paginationServiceButtons(i, items);

      wrapper.appendChild(btn);
    }
  }
}
// --------------------------------------------- End setupServicePagination Function  --------------------------------- //

// --------------------------------------------- Start paginationServiceButtons Function  --------------------------------- //
function paginationServiceButtons(page, items) {
  let button = document.createElement("button");

  button.innerHTML = page;

  button.classList = "btn shuffle-btn-style";

  if (servicePaginationCurrentPage == page) button.classList.add("active"); // add class active to button

  button.addEventListener("click", function (e) {
    paginationToggleButtonsActiveClass(
      e.target,
      document.querySelectorAll(".pagination-wrapper .btn")
    );

    servicePaginationCurrentPage = page;

    serviceDisplayList(
      items,
      cardsParent,
      serviceElementsInPaginations,
      servicePaginationCurrentPage
    );
  });

  return button;
}
// --------------------------------------------- End paginationServiceButtons Function  --------------------------------- //

// --------------------------------------------- Start serviceShuflleHanlde Function  --------------------------------- //
function serviceShuflleHanlde(newArray) {
  servicePaginationCurrentPage = 1;

  serviceDisplayList(
    newArray,
    cardsParent,
    serviceElementsInPaginations,
    servicePaginationCurrentPage
  );

  setupServicePagination(
    newArray,
    cardsPaginationWrapper,
    serviceElementsInPaginations
  );
}
// --------------------------------------------- End serviceShuflleHanlde Function  --------------------------------- //

// ------------------------------------- Start paginationButtons function  --------------------------- //
function paginationButtons(page, items) {
  let button = document.createElement("button");

  button.innerHTML = page;

  button.classList = "btn shuffle-btn-style";

  if (galleryPaginationCurrentPage == page) button.classList.add("active");

  button.addEventListener("click", function (e) {
    paginationToggleButtonsActiveClass(
      e.target,
      document.querySelectorAll(".pagination-wrapper .btn")
    );

    galleryPaginationCurrentPage = page;

    galleryDisplayList(
      items,
      galleryImgParent,
      galleryPaginationElamentInPage,
      galleryPaginationCurrentPage
    );
  });

  return button;
}
// ------------------------------------- End paginationButtons function  --------------------------- //

// --------------------------------------------- Start paginationToggleButtonsActiveClass Function  --------------------------------- //
function paginationToggleButtonsActiveClass(targetElement, buttons) {
  buttons.forEach((el) => {
    el.classList.remove("active");
    targetElement.classList.add("active");
  });
}
// --------------------------------------------- End paginationToggleButtonsActiveClass Function  --------------------------------- //
