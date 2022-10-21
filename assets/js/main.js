new WOW().init();

let serviceSwitcherList = document.querySelectorAll(
  ".service .shuffle-btns span"
);
let cards = document.querySelectorAll(".service .container .card");
let navbar = document.querySelector(".navbar");

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

let cardsParent = document.querySelector(".card-parent");
let cardsPaginationWrapper = document.querySelector(
  ".service .pagination-wrapper"
);

let counterSection = document.querySelector(".counter");
let counterNums = document.querySelectorAll(".counter-item .item-num");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= counterSection.offsetTop - navbar.offsetHeight) {
    if (!started) {
      counterNums.forEach((el) => startCount(el));
    }

    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}

let arrayOfImages = [];

const dataImageURL = [
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (1).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (2).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (3).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (4).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (5).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (6).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (7).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (8).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (9).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/حجر هاشمى هيصم/gallery (10).jpeg",
    name: "حجر هاشمى هيصم",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (1).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (2).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (3).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (4).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (5).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (6).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (7).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (8).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (9).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/ديكورات داخلى/gallery (10).jpeg",
    name: "ديكورات داخلى",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (1).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (2).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (3).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (4).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (5).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (6).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (7).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (8).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (9).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/خرسانات نيوجيرسي/galler (10).jpeg",
    name: "خرسانات نيوجيرسي",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (1).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (2).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (3).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (4).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (5).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (6).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (7).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (8).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (9).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
  {
    imgUrl: "../assets/img/تشطيب وجهات حجر ابيض ازازى/galler (10).jpeg",
    name: "تشطيب وجهات حجر ابيض ازازى",
  },
];

const cardsData = [
  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },
  {
    cardName: "الحجر الفرعوني",
    cardText:
      "بقدرته على تحمل كافة العوامل الخارجية مثل الرطوبة وأشعة الشمس والأتربة، وغيرها من العوامل الخارجية دون أن يفقد بريقه، فهو من الأحجار التي تستخدم خصيصًا لمقاومة المطر،",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },
  {
    cardName: "الحجر الهاشمي",
    cardText:
      "الحجر الهاشمي نوع من الحجر الطبيعي متعدد الاستخدامات في الديكورات والأرضيات وتشطيب الواجهات في المنازل والقصور والفلل والمباني المختلفة متميزًا بصلابته ومتفرداً بجماله",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر مايكا",
    cardText:
      "ديكورات حجر مايكا متنوعة في السوق المصري ويتم اختيار أفضل نوع من بينها للعملاء وتصميم الديكورات المميزة أو تشطيب الواجهات",
    cardImgURL: "../assets/img/home.png",
    category: "interior-design",
  },

  {
    cardName: "الحجر البازلت",
    cardText:
      "حجر البازلت تستخدم في التشطيبات الداخلية والخارجية وعمل الواجهات والديكورات لأي بناء مثل القصور أو الفلل أو المنازل",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر التدبيش",
    cardText:
      "يتسخدم التدبيش فى اسوار المنازل و الفلل و المزارع و يتميز الدبش بقدرتة العالية على امتصاص الماء",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر الهاشمي",
    cardText:
      "الحجر الهاشمي نوع من الحجر الطبيعي متعدد الاستخدامات في الديكورات والأرضيات وتشطيب الواجهات في المنازل والقصور والفلل والمباني المختلفة متميزًا بصلابته ومتفرداً بجماله",
    cardImgURL: "../assets/img/home.png",
    category: "exterior-design",
  },

  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "../assets/img/home.png",
    category: "anthor-works",
  },

  {
    cardName: "الحجر ابيض ازازاى",
    cardText:
      "الحجر الازازاى هو احد انواع الحجر الهاشمى الذي يعتبر مصدر طبيعيى للصلابة و الاناقة فى ان واحد, و يتميز الحجر الازازاى باللون الابيض الناصع و الذي لايتغير ربيقية بعوامل الزمان ابدا",
    cardImgURL: "../assets/img/home.png",
    category: "anthor-works",
  },
];

dataImageURL.forEach((el) => {
  arrayOfImages.push(el.imgUrl);
});

gallerySwitcherList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClass(e.target);

    switch (e.target.innerHTML) {
      case "تشطيب وجهات حجر ابيض ازازاى":
        let filter1 = dataImageURL.filter((el) => {
          return el.name == "تشطيب وجهات حجر ابيض ازازى";
        });
        changeArrayFrom(filter1);
        break;

      case "حجر هاشمى هيصم":
        let filter2 = dataImageURL.filter((el) => {
          return el.name == "حجر هاشمى هيصم";
        });
        changeArrayFrom(filter2);
        break;

      case "خرسانات نيوجيرسي":
        let filter3 = dataImageURL.filter((el) => {
          return el.name == "خرسانات نيوجيرسي";
        });
        changeArrayFrom(filter3);

        break;

      case "ديكورات داخلى":
        let filter4 = dataImageURL.filter((el) => {
          return el.name == "ديكورات داخلى";
        });
        changeArrayFrom(filter4);
        break;

      default:
        changeArrayFrom(dataImageURL);
    }
  });
});

function changeArrayFrom(newArray) {
  paginationCurrentPage = 1;
  displayList(
    newArray,
    galleryImgParent,
    paginationRows,
    paginationCurrentPage
  );
  setupPagination(newArray, galleryPaginationWrapper, paginationRows);

  arrayOfImages = [];
  newArray.forEach((el, i) => {
    arrayOfImages.push(el.imgUrl);
  });
}

function removeActiveClass(e) {
  gallerySwitcherList.forEach((li) => {
    li.classList.remove("active");
    e.classList.add("active");
  });
}

let serviceCurrentPage = 1;
let serviceRows = 4;

serviceSwitcherList.forEach((btn) => {
  btn.addEventListener("click", removeActive);

  serviceShuflleHanlde(cardsData);

  btn.addEventListener("click", function (e) {
    switch (e.target.dataset.work) {
      case "exterior-design":
        let filter1 = cardsData.filter((el) => {
          return el.category == "exterior-design";
        });

        serviceShuflleHanlde(filter1);
        break;

      case "interior-design":
        let filter2 = cardsData.filter((el) => {
          return el.category == "interior-design";
        });

        serviceShuflleHanlde(filter2);
        break;

      case ".anthor-works":
        let filter3 = cardsData.filter((el) => {
          return el.category == "anthor-works";
        });

        serviceShuflleHanlde(filter3);
        break;

      default:
        serviceShuflleHanlde(cardsData);
    }
  });
});

function removeActive() {
  serviceSwitcherList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function removePaginationActive() {
  document
    .querySelectorAll(".service .pagination-wrapper .btn")
    .forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
}

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

let paginationCurrentPage = 1;
let paginationRows = 9;

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    paginationRows = 6;
  } else {
    paginationRows = 9;
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function displayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";

  page--;

  let loopStart = rows_per_page * page;
  let loopEnd = loopStart + rows_per_page;

  let paginationItems = items.slice(loopStart, loopEnd);

  for (let i = 0; i < paginationItems.length; i++) {
    let article = document.createElement("article");
    let overlay = document.createElement("div");
    let img = document.createElement("img");
    let span = document.createElement("span");

    let spanText = document.createTextNode(paginationItems[i].name);

    img.setAttribute("src", paginationItems[i].imgUrl);
    img.setAttribute("alt", "");

    img.setAttribute("class", "gallery-img");
    article.classList = "col-3 p-0 gallery-item wow bounceIn";
    overlay.classList = "overlay";

    span.appendChild(spanText);
    article.appendChild(overlay);
    article.appendChild(img);
    article.appendChild(span);

    galleryImgParent.appendChild(article);
  }
}

function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButtons(i, items);

    wrapper.appendChild(btn);
  }
}

function paginationButtons(page, items) {
  let button = document.createElement("button");
  button.innerHTML = page;
  button.classList = "btn shuffle-btn-style";

  if (paginationCurrentPage == page) button.classList.add("active");

  button.addEventListener("click", function () {
    paginationCurrentPage = page;
    displayList(items, galleryImgParent, paginationRows, paginationCurrentPage);
  });

  return button;
}

displayList(
  dataImageURL,
  galleryImgParent,
  paginationRows,
  paginationCurrentPage
);

let currentImageIdx = 0;

exitBtn.addEventListener("click", function () {
  imageView.style.display = "none";
  imageBox.style.display = "none";
});

imageView.addEventListener("cllick", function () {
  this.style.display = "none";
  imageBox.style.display = "none";
});

displayList(
  dataImageURL,
  galleryImgParent,
  paginationRows,
  paginationCurrentPage
);
setupPagination(dataImageURL, galleryPaginationWrapper, paginationRows);
let conuter = 0;

document.querySelectorAll(".gallery .gallery-item .overlay").forEach((btn) => {
  btn.addEventListener("click", function () {
    counter = arrayOfImages.indexOf(
      this.parentElement.childNodes[1].getAttribute("src")
    );

    imageView.style.display = "block";
    imageBox.style.display = "block";

    nextBtnAction();
    prevBtnAction();

    imgChangeHanlde(counter);
  });
});

function nextBtnAction() {
  nextBtn.addEventListener("click", function () {
    // counter++;
    counter == arrayOfImages.length - 1 ? (counter = 0) : counter++;
    imgChangeHanlde(counter);
  });
}

function prevBtnAction() {
  prevBtn.addEventListener("click", function () {
    counter == 0 ? (counter = arrayOfImages.length - 1) : counter--;
    imgChangeHanlde(counter);
  });
}

function imgChangeHanlde(counter) {
  imageBox.style.background = `url('${arrayOfImages[counter]}')`;
  imageBox.style.backgroundPosition = "center";
  imageBox.style.backgroundSize = "cover";

  conut.innerHTML = counter + 1;
  imageLength.innerHTML = arrayOfImages.length;
}

function serviceDisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginationItems = items.slice(start, end);

  for (let i = 0; i < paginationItems.length; i++) {
    let item = paginationItems[i];

    let card = document.createElement("section");
    let cardImgParent = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardInfoParent = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let cardBtn = document.createElement("a");

    cardBtn.setAttribute("href", "#");
    cardImage.setAttribute("src", item.cardImgURL);
    cardImage.setAttribute("alt", "");
    h3.innerHTML = item.cardName;
    p.innerHTML = item.cardText;

    card.classList = "card card-four border-0 shadow p-0 pb-3  wow bounceIn";
    cardImgParent.classList = "card-img text-center";
    cardImage.classList = "shadow-sm mx-auto mt-2";
    cardImage.style.width = "50px";
    cardInfoParent.classList = "px-2 mt-3";
    h3.classList = "fs-5";
    cardBtn.classList = "card-btn";

    wrapper.appendChild(card);
    card.appendChild(cardImgParent);
    cardImgParent.appendChild(cardImage);
    card.appendChild(cardInfoParent);
    cardInfoParent.appendChild(h3);
    cardInfoParent.appendChild(p);
    cardInfoParent.appendChild(cardBtn);
  }
}

function setupServicePagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";
  let pageCount = Math.ceil(items.length / rows_per_page);

  for (let i = 1; i <= pageCount; i++) {
    let btn = paginationServiceButtons(i, items);
    wrapper.appendChild(btn);
  }
}

function paginationServiceButtons(page, items) {
  let button = document.createElement("button");
  button.innerHTML = page;
  button.classList = "btn shuffle-btn-style";

  if (serviceCurrentPage == page) button.classList.add("active");

  button.addEventListener("click", function () {
    serviceCurrentPage = page;
    serviceDisplayList(items, cardsParent, serviceRows, serviceCurrentPage);
  });

  return button;
}

function serviceShuflleHanlde(newArray) {
  serviceCurrentPage = 1;
  serviceDisplayList(newArray, cardsParent, serviceRows, serviceCurrentPage);
  setupServicePagination(newArray, cardsPaginationWrapper, serviceRows);
}
