new WOW().init(); // init wow.js

// Start Catch elements

// Start Catch Element of Service Setion
let serviceSwitcherList = document.querySelectorAll(
  ".service .shuffle-btns span"
);

// Catch  parent of pagination Buttons
let cardsPaginationWrapper = document.querySelector(
  ".service .pagination-wrapper"
);

// Catch Cards Parent of Service Section
let cardsParent = document.querySelector(".card-parent");

// End Catch Element of Service Setion

// Start Catch NavBar Elements
let navbar = document.querySelector(".navbar"); // Catch NavBar Element
// End Catch NavBar Elements

// Start Catch Gallery Section elements

// Catch Shuffle Buttons
let gallerySwitcherList = document.querySelectorAll(
  ".gallery .shuffle-btns span"
);

// Catch Parent element of Imgs
let galleryImgParent = document.querySelector(".gallery-img-parent");

// Catch pagination Parent Element of Gallery Secton
let galleryPaginationWrapper = document.querySelector(
  ".gallery .pagination-wrapper"
);

// Catch Image View (Overlay)
let imageView = document.querySelector(".image-view");

// Catch Next Button of Gallery Popup To Switch imgs in Popup
let nextBtn = document.querySelector("#next-arrow");

// Catch Prev Button of Gallery Popup To Switch imgs in Popup
let prevBtn = document.querySelector("#prev-arrow");

// Catch ImageBox "Parent Of imgs at Popup"
let imageBox = document.querySelector(".image-box");

// Catch Exit Button of Popup
let exitBtn = document.querySelector("#exit-btn");

// Catch Counter at the bottom of Popup
let conut = document.querySelector(".conut-parent .count");

// Catch ELement of Image array length
let imageLength = document.querySelector(".conut-parent .img-length");

// End Catch Gallery Section elements

// Start Catch Counter Section elements

// Catch Counter Section Element
let counterSection = document.querySelector(".counter");

// Catch All Of Elements In Counter Section (span) Element Count
let counterNums = document.querySelectorAll(".counter-item .item-num");

// End Catch Counter Section elements

// Start Call Us Catch

// Catch All Of buttons of call-us
let callUsBtns = document.querySelectorAll(".call-us a");

// Catch main Button to Show and hidden the buttons
let callUsBtnToggle = document.querySelector(".call-us .message-btn");

// Catch The I element in the callUsBtnToggle
let callUsBtnToggleIcon = document.querySelector(".call-us .message-btn i");

// End Call Us Catch

// End Catch elements

// Start Creating Variable

// Create Boolean let to Manage counter scroll
let started = false;

// Create a counter to Popup
let numbersOfCount = 0;

// Create a new Array to filter data from galleryDataImgAndName and pushing in it  (Gallery Section)
let filter = [];

// Create a new Array to filter All Of Imgs in it (Gallery Section)
let newArrayOfImg = [];

// Create a new Array to filter All Of Data in it (Service Section)
let filterOfServiceData = [];

// Create a new Variable (service Section) Pagination Current Page to Start from Page One
let servicePaginationCurrentPage = 1;

// Create a new Variable (service Section) Pagination ELements in in Every Page
let serviceElementsInPaginations = 4;

// Create a new Variable (Gallery Section) Pagination Current Page to Start from Page One
let galleryPaginationCurrentPage = 1;

// Create a new Variable (Gallery Section) Pagination ELements in in Every Page
let galleryPaginationElamentInPage = 9;

// End Creating Variable

// Making Effect When user start Counter Setion with (window.onscroll)
window.onscroll = function () {
  /*
     If 
     window.scrolly "height of page" 
     >= counterSection.offsetTop "counter section height from top"
      - navbar.offsetHeight "navBar Height"
  */
  if (window.scrollY >= counterSection.offsetTop - navbar.offsetHeight) {
    // If Started is not true then function not run yet then run it
    if (!started) {
      // Loop at Counter element to count to dataset-load value
      counterNums.forEach((el) => startCount(el));
    }

    // Started is True then the function is run and finished
    started = true;
  }
};

/*
  -Start count Function
  -- get a argument (el) "Element Will count in it "
  -- set The Element Dataset.Goal in goal Variable
  -- make setInterval to count from 0 to goal value
  -- make a check if counter get the goal value then stop count clearInterval(count)
  -- make a divide time i need to set it and goal value
*/
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}

// Creating Array of Data of Imgs and Name (Gallery Section)
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

// Creating Array of Data of card Name and Card Img Card category (Service Section)
const cardsData = [
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

// push all data of gallery Section of Imgs and Name
filterGalleryData = galleryDataImgAndName.map((el) => {
  return el;
});

// Pushing all Of Imgs in the filterGalleryData to a new Array
newArrayOfImg = filterGalleryData.map((el) => {
  return el.imgUrl;
});

// Pushing all Of Data Of Cards to Filter Array in the filterGalleryData to a new Array
filterOfServiceData = cardsData.map((el) => {
  return el;
});

// End pushing a new data from old array to new arrays

// Loop in Shuffle Buttons (Gallery Section) to Filter with a new array with a only category user Select
gallerySwitcherList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Switch Active Class With Function
    removeActiveClass(e.target);

    // Start a condition to manage All Shuffle Buttons with all category
    switch (e.target.innerHTML) {
      case "تشطيب وجهات حجر ابيض ازازاى":
        // Make a array Empty every time to get only new data
        filterGalleryData = [];

        // Make a filter with The Buttons user Select value and name of my data to select only category
        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "تشطيب وجهات حجر ابيض ازازى";
        });

        // Change the array to change data in view
        changeArrayFrom(filterGalleryData);

        break;

      case "حجر هاشمى هيصم":
        // Make a array Empty every time to get only new data
        filterGalleryData = [];

        // Make a filter with The Buttons user Select value and name of my data to select only category
        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "حجر هاشمى هيصم";
        });

        // Change the array to change data in view
        changeArrayFrom(filterGalleryData);
        break;

      case "خرسانات نيوجيرسي":
        // Make a array Empty every time to get only new data
        filterGalleryData = [];

        // Make a filter with The Buttons user Select value and name of my data to select only category
        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "خرسانات نيوجيرسي";
        });

        // Change the array to change data in view
        changeArrayFrom(filterGalleryData);

        break;

      case "ديكورات داخلى":
        // Make a array Empty every time to get only new data
        filterGalleryData = [];

        // Make a filter with The Buttons user Select value and name of my data to select only category
        filterGalleryData = galleryDataImgAndName.filter((el) => {
          return el.name == "ديكورات داخلى";
        });

        // Change the array to change data in view
        changeArrayFrom(filterGalleryData);
        break;

      default:
        // Change the array to change data in view
        changeArrayFrom(galleryDataImgAndName);
    }
  });
});

// Handle the new array from shuffle switch and case
function changeArrayFrom(newArray) {
  // return the galleryPaginationCurrentPage = 1 to make the Pagination return to the frist page
  galleryPaginationCurrentPage = 1;

  //  put the (newArray) Argument to galleryDisplayList (Gallery Section) Function to take the last update filter array after shuffle
  galleryDisplayList(
    newArray,
    galleryImgParent,
    galleryPaginationElamentInPage,
    galleryPaginationCurrentPage
  );

  // put the (newArray) Argument to gallerySetupPagination (Gallery Section) Function to take the last update filter array after shuffle
  gallerySetupPagination(
    newArray,
    galleryPaginationWrapper,
    galleryPaginationElamentInPage
  );

  // reset array to empty to get only the new data from filter array (Gallery Section)
  newArrayOfImg = [];

  // Pushing data to array from filter array (Gallery Section)
  newArrayOfImg = newArray.map((el) => {
    return el.imgUrl;
  });
}

// Toggle Active Class from Gallery Shuffle Buttons
function removeActiveClass(e) {
  // Get All Gallery Shuffle Buttons
  gallerySwitcherList.forEach((btn) => {
    // loop and remove all active class from al buttons
    btn.classList.remove("active");

    // Get The e.target when clicked element and add to him active class
    e.classList.add("active");
  });
}

// Loop in Shuffle Buttons in service Section
serviceSwitcherList.forEach((btn) => {
  // Toggle active class from all of buttons and add it to e.target element
  btn.addEventListener("click", removeActive);

  // pushing the data from cards data to be the defult before clicked to shuffle
  serviceShuflleHanlde(cardsData);

  // select a shuffle buttons and filter the array to get a new data
  btn.addEventListener("click", function (e) {
    switch (e.target.dataset.work) {
      case "exterior-design":
        // Make a filter with The Buttons user Select value and category of my data to select only category
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "exterior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case "interior-design":
        // Make a filter with The Buttons user Select value and category of my data to select only category
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "interior-design";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      case ".anthor-works":
        // Make a filter with The Buttons user Select value and category of my data to select only category
        filterOfServiceData = cardsData.filter((el) => {
          return el.category == "anthor-works";
        });

        serviceShuflleHanlde(filterOfServiceData);
        break;

      default:
        // pushing the data from cards data to be the defult before for (All Button)
        serviceShuflleHanlde(cardsData);
    }
  });
});

// Toggle Active Class from Service Shuffle Buttons
function removeActive() {
  // loop and remove all active class from al buttons
  serviceSwitcherList.forEach((btn) => {
    // loop and remove all active class from al buttons
    btn.classList.remove("active");

    // Add Active class to this "the buttons clicked"
    this.classList.add("active");
  });
}

// toggle navBar style when scroll
window.addEventListener("scroll", function () {
  // when the window scroll bigger then or equal 82 from top
  if (window.pageYOffset >= 82) {
    // remove the background white class
    navbar.classList.remove("bg-white");
    // Add the background sliver class
    navbar.classList.add("bg-sliver");
    // Add the shadow class
    navbar.classList.add("shadow");
  } else {
    // add the background white class
    navbar.classList.remove("shadow");
    // remove the background sliver class
    navbar.classList.remove("bg-sliver");
    // remove the shadow class
    navbar.classList.add("bg-white");
  }
});

// Check if the screen smaller than the argument (Gallery Section)
function myFunction(x) {
  if (x.matches) {
    // if it true then will be in mobile screen then  will return 6 element
    galleryPaginationElamentInPage = 6;
  } else {
    // if it false then will be in large screen then  will return 9 element
    galleryPaginationElamentInPage = 9;
  }
}

// Create a Variable to get mobile screen width
var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// Creating the elements in Gallery Section  and push it in pagination
function galleryDisplayList(items, wrapper, elements_per_page, page) {
  // Reset The Parent element to a new elements only
  wrapper.innerHTML = "";

  // to start from Frist Page of pagination
  page--;

  // to get the start of array i will return
  let loopStart = elements_per_page * page;

  // to get the End of array i will return
  let loopEnd = loopStart + elements_per_page;

  // get only elements i need from array to my current page
  let paginationItems = items.slice(loopStart, loopEnd);

  // loop to create The Elements with data
  for (let i = 0; i < paginationItems.length; i++) {
    let article = document.createElement("article"); // Parent of element
    let overlay = document.createElement("div"); // the overlay over img
    let img = document.createElement("img"); // creating img element
    let span = document.createElement("span"); // creating the span to get the text of element

    let spanText = document.createTextNode(paginationItems[i].name); // create the text of element

    img.setAttribute("src", paginationItems[i].imgUrl); // set the img src from data
    img.setAttribute("alt", ""); // set in every img alt Attribute

    img.classList = "gallery-img"; // set the img class
    article.classList = "col-3 p-0 gallery-item wow bounceIn"; // set the parent class
    overlay.classList = "overlay"; // set the overlay class

    // set a event with the overlay click
    overlay.addEventListener("click", () => {
      // Reset The counter to get a new value
      numbersOfCount = 0;
      // find the img index in the array and put the index number in the counter
      numbersOfCount = newArrayOfImg.indexOf(img.getAttribute("src"));

      // view the PopUp parent of Gallery Section
      imageView.style.display = "block";

      // view the PopUp verlay of Gallery Section
      imageBox.style.display = "block";

      // set the background img and change the bottom counter and imglenght every time increase or decline counter
      imgChangeHanlde();
    });

    // append all the element to her parent

    span.appendChild(spanText);
    article.appendChild(overlay);
    article.appendChild(img);
    article.appendChild(span);

    wrapper.appendChild(article);
  }
}

// creating of Pagination buttons (Gallery Section)
function gallerySetupPagination(items, wrapper, elements_per_page) {
  // reset the element parent to get a new elements
  wrapper.innerHTML = "";

  // get the length of page of Pagination
  let pageCount = Math.ceil(items.length / elements_per_page);

  // loop to create a new buttons of Pagination
  for (let i = 1; i < pageCount + 1; i++) {
    // get the elemet created from function (counter, arrayOfData.length)
    let btn = paginationButtons(i, items);

    // Append the buttons to Pagination Parent element
    wrapper.appendChild(btn);
  }
}

// Create Pagination Buttons
function paginationButtons(page, items) {
  // Create a new element "button"
  let button = document.createElement("button");

  // Set the page numbers to buttons innerHtml
  button.innerHTML = page;

  // set the class's to buttons
  button.classList = "btn shuffle-btn-style";

  // if the page is the current page add the active class
  if (galleryPaginationCurrentPage == page) button.classList.add("active");

  // load data from array with every change of pages
  button.addEventListener("click", function (e) {
    paginationToggleButtonsActiveClass(
      e.target,
      document.querySelectorAll(".pagination-wrapper .btn")
    );
    //set the page number from  counter
    galleryPaginationCurrentPage = page;

    // get the data every time user change the page get the nw data
    galleryDisplayList(
      items, // array of data
      galleryImgParent, // parent element who will append the child
      galleryPaginationElamentInPage, // page of Pagination
      galleryPaginationCurrentPage // numbers of element will load in every page
    );
  });

  return button;
}

// get the defult data from galleryDataImgAndName when the page load get this data
galleryDisplayList(
  galleryDataImgAndName,
  galleryImgParent,
  galleryPaginationElamentInPage,
  galleryPaginationCurrentPage
);

// get the defult data from galleryDataImgAndName when the page load get this data
gallerySetupPagination(
  galleryDataImgAndName,
  galleryPaginationWrapper,
  galleryPaginationElamentInPage
);

// overlay of Popup Gallery secrion close the Popup
imageView.addEventListener("click", closePopUp);

// Exit Buton of Popup Gallery secrion close the Popup
exitBtn.addEventListener("click", closePopUp);

// display none to Popup of imgs (Gallery section)
function closePopUp() {
  // remove the overlay of popUp
  imageView.style.display = "none";
  //remove the parent of Popup
  imageBox.style.display = "none";

  //reset the counter of imgs to 0
  numbersOfCount = 0;
}

// Next Button of PopUp Of Gallery Section Action
nextBtn.addEventListener("click", function () {
  // if the conuter value equal to last img in array return array to the frist img
  numbersOfCount == newArrayOfImg.length - 1
    ? (numbersOfCount = 0) //  return array to the frist img
    : ++numbersOfCount; // if it false increase the counter +1
  imgChangeHanlde(); // load a new img to the background of popup
});

// Prev Button of PopUp Of Gallery Section Action
prevBtn.addEventListener("click", function () {
  // if the conuter value equal to first img in array return array to the last img
  numbersOfCount == 0
    ? (numbersOfCount = newArrayOfImg.length - 1) //  return array to the last img
    : --numbersOfCount; // if it false decline the counter +1
  imgChangeHanlde(); // load a new img to the background of popup
});

// load a new img to the background of popup
function imgChangeHanlde() {
  // get url from array of img and index is counter
  imageBox.style.background = `url('${newArrayOfImg[numbersOfCount]}')`;

  // set the background Position
  imageBox.style.backgroundPosition = "center";

  // set the background Size
  imageBox.style.backgroundSize = "cover";

  // set the counter of popup from numbersOfCount
  conut.innerHTML = numbersOfCount + 1;

  // set the length of array of imgs to the imageLength of popup
  imageLength.innerHTML = newArrayOfImg.length;
}

function serviceDisplayList(items, wrapper, elements_per_page, page) {
  //reset the Parent element to get the new elements of pagination page only
  wrapper.innerHTML = "";

  // to start from Frist Page of pagination
  page--;

  // to get the start of array i will return
  let loopStart = elements_per_page * page;

  // to get the End of array i will return
  let loopEnd = loopStart + elements_per_page;

  // get only elements i need from array to my current page
  let paginationItems = items.slice(loopStart, loopEnd);

  // Loop in array of pagination page to display the elements
  for (let i = 0; i < paginationItems.length; i++) {
    // Start Create Elements
    let card = document.createElement("section"); // Create the Parent card of service section

    let cardImgParent = document.createElement("div"); // Create div to take a the img of card

    let cardImage = document.createElement("img"); // create a img element to take the img src from array

    let cardInfoParent = document.createElement("div"); // create a div to be a parent of text in the card

    let h3 = document.createElement("h3"); // create h3 to take the card name in it

    let p = document.createElement("p"); // creaate p  to get the description  of card from array
    // End Create Elements

    // Start Set the Elements Attribute
    cardImage.setAttribute("src", "./assets/img/home.png"); // set the src Attribute  the take the img src from array

    cardImage.setAttribute("alt", ""); // set  the Alt Attribute to the img of card
    // End Set the Elements Attribute

    // Start Set the Elements Text
    h3.innerHTML = paginationItems[i].cardName; // set the card name and set it in to h3 head text of card

    p.innerHTML = paginationItems[i].cardText; // set the description  of card from array
    // End Set the Elements Text

    // Start set the class list
    card.classList = "card card-four border-0 shadow p-0 pb-3  wow bounceIn"; // set the card class's

    cardImgParent.classList = "card-img text-center"; // set the parent of image class's

    cardImage.classList = "shadow-sm mx-auto mt-2"; // set the card img class's

    cardImage.style.width = "50px"; // set the card img width

    cardInfoParent.classList = "px-2 mt-3"; // set the parent of text in the card class's

    h3.classList = "fs-5"; // set the head text in the card large font class with bootstarp
    // End set the class list

    //  Start append Elemetns to her parent
    wrapper.appendChild(card); // append the parent of card to service section

    card.appendChild(cardImgParent); // append the parent of img  to parent of card

    card.appendChild(cardInfoParent); // append parent of card head text to parent card

    cardImgParent.appendChild(cardImage); // append the img of card to her parent

    cardInfoParent.appendChild(h3); // append the head text to parent of text in the card

    cardInfoParent.appendChild(p); // append the description element to the parent of text
    //  End append Elemetns to her parent
  }
}

// setUp the Pagination pages and manage pages and element per page
function setupServicePagination(items, wrapper, elements_per_page) {
  // Reset the parent of service cards to empty to get the new element only from array
  wrapper.innerHTML = "";

  // get the number of page's from array length and number of card in every Pagination page
  let pageCount = Math.ceil(items.length / elements_per_page);

  // loop to create a buttons of Pagination page
  for (let i = 1; i <= pageCount; i++) {
    // save the Pagination button ro append it to the Pagination buttons paret
    let btn = paginationServiceButtons(i, items);

    // append the button to the Pagination buttons paret
    wrapper.appendChild(btn);
  }
}

// funtion to create the Pagination buttons of (service setion)
function paginationServiceButtons(page, items) {
  // Create element of button "Pagination buttons of (service setion)"
  let button = document.createElement("button");

  // Get the number of Pagination buttons of from array
  button.innerHTML = page;

  // set the Pagination buttons  class
  button.classList = "btn shuffle-btn-style";

  // make a condition to check if the current page is equal age to add class active
  if (servicePaginationCurrentPage == page) button.classList.add("active"); // add class active to button

  // add click event to the buttons
  button.addEventListener("click", function (e) {
    paginationToggleButtonsActiveClass(
      e.target,
      document.querySelectorAll(".pagination-wrapper .btn")
    );
    // change the current page number from page
    servicePaginationCurrentPage = page;

    // make a lad for a new data to next page or prev page
    serviceDisplayList(
      items,
      cardsParent,
      serviceElementsInPaginations,
      servicePaginationCurrentPage
    );
  });

  return button;
}

// handle the shuffle to reset the current page of Pagination to first page and load a new data
function serviceShuflleHanlde(newArray) {
  // reset the current page of Pagination to first page
  servicePaginationCurrentPage = 1;

  // get the new elements from  array of filter when shuffle is run
  serviceDisplayList(
    newArray,
    cardsParent,
    serviceElementsInPaginations,
    servicePaginationCurrentPage
  );

  // get the new Pagination elements from  array of  filter when shuffle is run
  setupServicePagination(
    newArray,
    cardsPaginationWrapper,
    serviceElementsInPaginations
  );
}

// function to to remove and add class active to Pagination buttons
function paginationToggleButtonsActiveClass(targetElement, buttons) {
  buttons.forEach((el) => {
    el.classList.remove("active");
    targetElement.classList.add("active");
  });
}

callUsBtnToggle.addEventListener("click", function () {
  callUsBtns.forEach((el) => {
    el.classList.toggle("show");
  });
  callUsBtnToggle.classList.toggle("show");
  callUsBtnToggleIcon.classList.toggle("fa-envelope");
  callUsBtnToggleIcon.classList.toggle("fa-xmark");
});
