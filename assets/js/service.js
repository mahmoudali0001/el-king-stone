new WOW().init();

let serviceSwitcherList = document.querySelectorAll(
  ".service .shuffle-btns span"
);

let navbar = document.querySelector(".navbar");

let cardsParent = document.querySelector(".card-parent");
let cardsPaginationWrapper = document.querySelector(
  ".service .pagination-wrapper"
);

let cards = document.querySelectorAll(".service .container .card");

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

      case ".interior-design":
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

    card.classList = "card card-four border-0 shadow p-0 pb-3 wow bounceIn";
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

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 82) {
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-sliver");
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("bg-sliver");
    navbar.classList.remove("shadow");
    navbar.classList.add("bg-white");
  }
});
