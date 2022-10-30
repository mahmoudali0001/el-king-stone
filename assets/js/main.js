new WOW().init(); // init wow.js

//--------------------------------------- Start Catching elements ---------------------------------//

let serviceSwitcherList = document.querySelectorAll(
  ".service .shuffle-btns span"
);

let cardsPaginationWrapper = document.querySelector(
  ".service .pagination-wrapper"
);

let cardsParent = document.querySelector(".card-parent");

let navbar = document.querySelector(".navbar"); // Catch NavBar Element

let gallerySwitcherList = document.querySelectorAll(
  ".gallery .shuffle-btns span"
);

let galleryImgParent = document.querySelector(".gallery-img-parent");

let galleryPaginationWrapper = document.querySelector(
  ".gallery .pagination-wrapper"
);

let imageView = document.querySelector(".image-view");

let nextBtn = document.querySelector("#next-arrow");

let prevBtn = document.querySelector("#prev-arrow");

let imageBox = document.querySelector(".image-box");

let exitBtn = document.querySelector("#exit-btn");

let conut = document.querySelector(".conut-parent .count");

let imageLength = document.querySelector(".conut-parent .img-length");

let counterSection = document.querySelector(".counter");

let counterNums = document.querySelectorAll(".counter-item .item-num");

let callUsBtns = document.querySelectorAll(".call-us a");

let callUsBtnToggle = document.querySelector(".call-us .message-btn");

let callUsBtnToggleIcon = document.querySelector(".call-us .message-btn i");

//---------------------------------------- End Catch elements ---------------------------------------- //

// ------------------------------------- Start Creating Global Variable ------------------------------ //

let started = false;

let numbersOfCount = 0;

let filter = [];

let newArrayOfImg = [];

let filterOfServiceData = [];

let servicePaginationCurrentPage = 1;

let serviceElementsInPaginations = 4;

let galleryPaginationCurrentPage = 1;

let galleryPaginationElamentInPage = 9;

// ------------------------------------- End Creating Global Variable ------------------------------ //

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

//---------------------------------------------- Start Counter Sedtion count when scroll ---------------------------------------- //
window.addEventListener("scroll", function () {
  if (window.scrollY >= counterSection.offsetTop - navbar.offsetHeight) {
    if (!started) {
      counterNums.forEach((el) => startCount(el));
    }

    started = true;
  }
});

//---------------------------------------------- End Counter Sedtion count when scroll ---------------------------------------- //

// ------------------------------------------ Start Start Count Function ----------------------------------- //
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
// ------------------------------------------  End Count Function ----------------------------------- //

// --------------------------------------- Start Creating Array of Objects galleryDataImgAndName --------------------------- //
const galleryDataImgAndName = [
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (1).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (2).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (3).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (4).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (5).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (6).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (7).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (8).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (9).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/حجر هاشمى هيصم/gallery (10).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (1).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (2).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (3).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (4).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (5).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (6).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (7).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (8).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (9).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/ديكورات داخلى/gallery (10).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (1).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (2).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (3).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (4).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (5).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (6).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (7).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (8).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (9).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/خرسانات نيوجيرسي/galler (10).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (1).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (2).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (3).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (4).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (5).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (6).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (7).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (8).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (9).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "./assets/img/تشطيب وجهات حجر ابيض ازازى/galler (10).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
];
// --------------------------------------- End Creating Array of Objects galleryDataImgAndName --------------------------- //

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

// ------------------------------------------ Start pushing data to fliter ----------------------------------- //
filterGalleryData = galleryDataImgAndName.map((el) => {
  return el;
});
// ------------------------------------------ End pushing data to fliter ----------------------------------- //

// ------------------------------------- Start pushing data to newArrayOfImg ------------------------------- //
newArrayOfImg = filterGalleryData.map((el) => {
  return el.imgUrl;
});
// ------------------------------------- End pushing data to newArrayOfImg ------------------------------- //

// --------------------------------------- Start loop in shuffle buttons of Gallery ---------------------------- //
gallerySwitcherList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClass(e.target);

    switch (e.target.innerHTML) {
      case "تشطيب وجهات حجر ابيض ازازاى":
        filterGalleryData = [];

        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "تشطيب وجهات حجر ابيض ازازى";
        });

        changeArrayFrom(filterGalleryData);

        break;

      case "حجر هاشمى هيصم":
        filterGalleryData = [];

        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "حجر هاشمى هيصم";
        });

        changeArrayFrom(filterGalleryData);
        break;

      case "خرسانات نيوجيرسي":
        filterGalleryData = [];

        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "خرسانات نيوجيرسي";
        });

        changeArrayFrom(filterGalleryData);

        break;

      case "ديكورات داخلى":
        filterGalleryData = [];

        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "ديكورات داخلى";
        });

        changeArrayFrom(filterGalleryData);
        break;

      default:
        changeArrayFrom(galleryDataImgAndName);
    }
  });
});
// --------------------------------------- End loop in shuffle buttons of Gallery ---------------------------- //

// --------------------------------------- Start ChangeArray Function  ---------------------------- //
function changeArrayFrom(newArray) {
  galleryPaginationCurrentPage = 1;

  galleryDisplayList(
    newArray,
    galleryImgParent,
    galleryPaginationElamentInPage,
    galleryPaginationCurrentPage
  );

  gallerySetupPagination(
    newArray,
    galleryPaginationWrapper,
    galleryPaginationElamentInPage
  );

  newArrayOfImg = [];

  newArrayOfImg = newArray.map((el) => {
    return el.imgUrl;
  });
}
// --------------------------------------- End ChangeArray Function  ---------------------------- //

// --------------------------------------- Start removeActiveClass Function  ---------------------------- //
function removeActiveClass(e) {
  gallerySwitcherList.forEach((btn) => {
    btn.classList.remove("active");

    e.classList.add("active");
  });
}
// --------------------------------------- End removeActiveClass Function  ---------------------------- //

// ------------------------------------- Start pushing data to filterOfServiceData ------------------------------- //
filterOfServiceData = cardsData.map((el) => {
  return el;
});
// ------------------------------------- End pushing data to filterOfServiceData ------------------------------- //

// --------------------------------------- Start loop in shuffle buttons of Service ---------------------------- //
serviceSwitcherList.forEach((btn) => {
  btn.addEventListener("click", removeActive);

  serviceShuflleHanlde(cardsData);

  btn.addEventListener("click", function (e) {
    switch (e.target.dataset.work) {
      case "exterior-design":
        filterOfServiceData = [];
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "exterior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case "interior-design":
        filterOfServiceData = [];
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "interior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case ".anthor-works":
        filterOfServiceData = [];
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

// ---------------------------------------- Start manage Screen Width function  ------------------------------- //
function manageScreenWidth(x) {
  if (x.matches) {
    galleryPaginationElamentInPage = 6;
  } else {
    galleryPaginationElamentInPage = 9;
  }
}
var x = window.matchMedia("(max-width: 700px)");
manageScreenWidth(x);
x.addListener(manageScreenWidth);
// ---------------------------------------- End manage Screen Width function  ------------------------------- //

// ---------------------------------------- Start galleryDisplayList function  ------------------------------- //
function galleryDisplayList(items, wrapper, elements_per_page, page) {
  wrapper.innerHTML = "";

  page--;

  let loopStart = elements_per_page * page;

  let loopEnd = loopStart + elements_per_page;

  let paginationItems = items.slice(loopStart, loopEnd);

  for (let i = 0; i < paginationItems.length; i++) {
    let article = document.createElement("article");
    let overlay = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");

    let spanText = document.createTextNode(paginationItems[i].name);

    img.setAttribute("src", paginationItems[i].imgUrl);
    img.setAttribute("alt", "");

    img.classList = "gallery-img";
    article.classList = "col-3 p-0 gallery-item wow bounceIn";
    overlay.classList = "overlay";

    overlay.addEventListener("click", () => {
      numbersOfCount = 0;

      numbersOfCount = newArrayOfImg.indexOf(img.getAttribute("src"));

      imageView.style.display = "block";

      imageBox.style.display = "block";

      imgChangeHanlde();
    });

    span.appendChild(spanText);
    article.appendChild(overlay);
    article.appendChild(img);
    article.appendChild(span);

    wrapper.appendChild(article);
  }
}
// ---------------------------------------- End galleryDisplayList function  ------------------------------- //

// ------------------------------------- Start gallerySetupPagination function  ---------------------- //
function gallerySetupPagination(items, wrapper, elements_per_page) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / elements_per_page);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButtons(i, items);

    wrapper.appendChild(btn);
  }
}

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

// ----------------------------------- Start get the defult data from galleryDataImgAndName ------------------- //
galleryDisplayList(
  galleryDataImgAndName,
  galleryImgParent,
  galleryPaginationElamentInPage,
  galleryPaginationCurrentPage
);

gallerySetupPagination(
  galleryDataImgAndName,
  galleryPaginationWrapper,
  galleryPaginationElamentInPage
);
// ----------------------------------- End get the defult data from galleryDataImgAndName ------------------- //

// ----------------------------------- Start imageView Click ------------------- //
imageView.addEventListener("click", closePopUp);
// ----------------------------------- End imageView Click ------------------- //

// ----------------------------------- Start exitBtn Click ------------------- //
exitBtn.addEventListener("click", closePopUp);
// ----------------------------------- End exitBtn Click ------------------- //

// ----------------------------------- Start closePopUp Function ------------------- //
function closePopUp() {
  imageView.style.display = "none";

  imageBox.style.display = "none";

  numbersOfCount = 0;
}
// -------------------------------------- End closePopUp Function --------------------------------- //

// ----------------------------------------- Start nextBtn Click ---------------------------------- //
nextBtn.addEventListener("click", function () {
  numbersOfCount == newArrayOfImg.length - 1
    ? (numbersOfCount = 0)
    : ++numbersOfCount;
  imgChangeHanlde();
});
// -------------------------------------------- End nextBtn Click ----------------------------------- //

// --------------------------------------------- Start prevBtn Click --------------------------------- //
prevBtn.addEventListener("click", function () {
  numbersOfCount == 0
    ? (numbersOfCount = newArrayOfImg.length - 1)
    : --numbersOfCount;

  imgChangeHanlde();
});
// --------------------------------------------- End prevBtn Click --------------------------------- //

// --------------------------------------------- Start imgChangeHanlde Function  --------------------------------- //
function imgChangeHanlde() {
  imageBox.style.background = `url('${newArrayOfImg[numbersOfCount]}')`;

  imageBox.style.backgroundPosition = "center";

  imageBox.style.backgroundSize = "cover";

  conut.innerHTML = numbersOfCount + 1;

  imageLength.innerHTML = newArrayOfImg.length;
}
// --------------------------------------------- End imgChangeHanlde Function  --------------------------------- //

// --------------------------------------------- Start PreventDefault of span of gallery Image  --------------------------------- //
document.querySelectorAll(".gallery .gallery-item span").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
// --------------------------------------------- End PreventDefault of span of gallery Image  --------------------------------- //

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

// --------------------------------------------- Start paginationToggleButtonsActiveClass Function  --------------------------------- //
function paginationToggleButtonsActiveClass(targetElement, buttons) {
  buttons.forEach((el) => {
    el.classList.remove("active");
    targetElement.classList.add("active");
  });
}
// --------------------------------------------- End paginationToggleButtonsActiveClass Function  --------------------------------- //

// ------------------------------------------------------ Start callUsBtnToggle Click  ---------------------------------- //
callUsBtnToggle.addEventListener("click", function () {
  callUsBtns.forEach((el) => {
    el.classList.toggle("show");
  });
  callUsBtnToggle.classList.toggle("show");
  callUsBtnToggleIcon.classList.toggle("fa-envelope");
  callUsBtnToggleIcon.classList.toggle("fa-xmark");
});
// -------------------------------------------------------- End callUsBtnToggle Click  -------------------------------------------- //
