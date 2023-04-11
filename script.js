
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
function loadMore() {
    let load_more = document.getElementById("dopblock");
    load_more.classList.remove("dopblock");
        let load_more_second = document.getElementById("dopblock_second");
    load_more_second.classList.remove("dopblock");
        let loadMore = document.getElementById("loadMore");
        loadMore.classList.add("dopblock");
    
}
function submit() {
  let userName = document.getElementById("userName").value;
  console.log("User name number: " + userName);
  let userMail = document.getElementById("userMail").value;
  console.log("User mail number: " + userMail);
  let userPhoneNumber = document.getElementById("userPhoneNumber").value;
  console.log("User phone number: " + userPhoneNumber);
  let userBrieflyDescribe = document.getElementById(
    "userBrieflyDescribe"
  ).value;
  console.log("Describe brief: "+userBrieflyDescribe);

  let user = {
    Name: document.getElementById("userName").value,
    Mail: document.getElementById("userMail").value,
    userPhoneNumber: document.getElementById("userPhoneNumber").value,
    BrieflyDescribe: document.getElementById("userBrieflyDescribe").value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");

}
// services-settings__analytic-block
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
function analytic_block() {
  let audience_block = document.getElementById("analytic_analytic_block");
  audience_block.classList.remove("close-element");
  let data_block = document.getElementById("analytic_data_block");
  data_block.classList.add("close-element");
  let advertising_block = document.getElementById("analytic_advertising_block");
  advertising_block.classList.add("close-element");
}
// services-settings__analytic-elements
function analytic_audience() {
  let analytic_audience = document.getElementById("analytic_audience");
  analytic_audience.classList.remove("close-element");
  let analytic_hypothesis = document.getElementById("analytic_hypothesis");
  analytic_hypothesis.classList.add("close-element");
  let analytic_propensity = document.getElementById("analytic_propensity");
  analytic_propensity.classList.add("close-element");
  let analytic_attribution = document.add("analytic_attribution");
  analytic_attribution.classList.add("close-element");
  let analytic_product = document.getElementById("analytic_product");
  analytic_product.classList.add("close-element");
}
function analytic_hypothesis() {
  let analytic_audience = document.getElementById("analytic_audience");
  analytic_audience.classList.add("close-element");
  let analytic_hypothesis = document.getElementById("analytic_hypothesis");
  analytic_hypothesis.classList.remove("close-element");
  let analytic_propensity = document.getElementById("analytic_propensity");
  analytic_propensity.classList.add("close-element");
  let analytic_attribution = document.add("analytic_attribution");
  analytic_attribution.classList.add("close-element");
  let analytic_product = document.getElementById("analytic_product");
  analytic_product.classList.add("close-element");
}
function analytic_propensity() {
  let analytic_audience = document.getElementById("analytic_audience");
  analytic_audience.classList.add("close-element");
  let analytic_hypothesis = document.getElementById("analytic_hypothesis");
  analytic_hypothesis.classList.add("close-element");
  let analytic_propensity = document.getElementById("analytic_propensity");
  analytic_propensity.classList.remove("close-element");
  let analytic_attribution = document.add("analytic_attribution");
  analytic_attribution.classList.add("close-element");
  let analytic_product = document.getElementById("analytic_product");
  analytic_product.classList.add("close-element");
}
function analytic_attribution() {
  let analytic_audience = document.getElementById("analytic_audience");
  analytic_audience.classList.add("close-element");
  let analytic_hypothesis = document.getElementById("analytic_hypothesis");
  analytic_hypothesis.classList.add("close-element");
  let analytic_propensity = document.getElementById("analytic_propensity");
  analytic_propensity.classList.add("close-element");
  let analytic_attribution = document.getElementById("analytic_attribution");
  analytic_attribution.classList.remove("close-element");
  let analytic_product = document.getElementById("analytic_product");
  analytic_product.classList.add("close-element");
}
function analytic_product() {
  let analytic_audience = document.getElementById("analytic_audience");
  analytic_audience.classList.add("close-element");
  let analytic_hypothesis = document.getElementById("analytic_hypothesis");
  analytic_hypothesis.classList.add("close-element");
  let analytic_propensity = document.getElementById("analytic_propensity");
  analytic_propensity.classList.add("close-element");
  let analytic_attribution = document.getElementById("analytic_attribution");
  analytic_attribution.classList.add("close-element");
  let analytic_product = document.getElementById("analytic_product");
  analytic_product.classList.remove("close-element");
}

// services-settings__data-block
function data_block() {
  var audience_block = document.getElementById("analytic_analytic_block");
  audience_block.classList.add("close-element");
  var data_block = document.getElementById("analytic_data_block");
  data_block.classList.remove("close-element");
  var audience_block = document.getElementById("analytic_advertising_block");
  audience_block.classList.add("close-element");
}
// services-settings__data-elements
function data_assessment() {
  let data_assessment = document.getElementById("data_assessment");
  data_assessment.classList.remove("close-element");
  let data_websolution = document.getElementById("data_websolution");
  data_websolution.classList.add("close-element");
  let data_cloudsolution = document.getElementById("data_cloudsolution");
  data_cloudsolution.classList.add("close-element");
  let data_reporting = document.getElementById("data_reporting");
  data_reporting.classList.add("close-element");
}
function data_websolution() {
  let data_assessment = document.getElementById("data_assessment");
  data_assessment.classList.add("close-element");
  let data_websolution = document.getElementById("data_websolution");
  data_websolution.classList.remove("close-element");
  let data_cloudsolution = document.getElementById("data_cloudsolution");
  data_cloudsolution.classList.add("close-element");
  let data_reporting = document.getElementById("data_reporting");
  data_reporting.classList.add("close-element");
}
function data_cloudsolution() {
  let data_assessment = document.getElementById("data_assessment");
  data_assessment.classList.add("close-element");
  let data_websolution = document.getElementById("data_websolution");
  data_websolution.classList.add("close-element");
  let data_cloudsolution = document.getElementById("data_cloudsolution");
  data_cloudsolution.classList.remove("close-element");
  let data_reporting = document.getElementById("data_reporting");
  data_reporting.classList.add("close-element");
}
function data_reporting() {
  let data_assessment = document.getElementById("data_assessment");
  data_assessment.classList.add("close-element");
  let data_websolution = document.getElementById("data_websolution");
  data_websolution.classList.add("close-element");
  let data_cloudsolution = document.getElementById("data_cloudsolution");
  data_cloudsolution.classList.add("close-element");
  let data_reporting = document.getElementById("data_reporting");
  data_reporting.classList.remove("close-element");
}

// services-settings__advertising
function advertising_block() {
  var audience_block = document.getElementById("analytic_analytic_block");
  audience_block.classList.add("close-element");
  var data_block = document.getElementById("analytic_data_block");
  data_block.classList.add("close-element");
  var advertising_block = document.getElementById("analytic_advertising_block");
  advertising_block.classList.remove("close-element");
}

var swiper = new Swiper(".clientsswiperphone", {
  slidesPerView: 1.5,
  spaceBetween: 45,
  breakpoints: {
    744: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".technologiesswiper", {
  slidesPerView: 1.75,
  spaceBetween: 20,
  breakpoints: {
    744: {
      slidesPerView: 2.3,
      spaceBetween: 0,
    },
  },
});
var swiper = new Swiper(".servicetypemainslider", {
  slidesPerView: 2,
  spaceBetween: 0,
});

var swiper = new Swiper(".servicetypeslider", {
  slidesPerView: 1.5,
  spaceBetween: 0,
});

var swiper = new Swiper(".mainslider", {
  slidesPerView: 2,
  initialSlide: 1,
  spaceBetween: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});

function initMap() {
  // The location of Uluru
  const uluru = { lat: 52.2641492, lng: 21.1687992 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
const selectBtn = document.querySelector(".select-btn");
items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Select Language";
    }
  });
});

var dt = new DataTransfer();

$(".input-file input[type=file]").on("change", function () {
  let $files_list = $(this).closest(".input-file").next();
  $files_list.empty();

  for (var i = 0; i < this.files.length; i++) {
    let new_file_input =
      '<div class="input-file-list-item">' +
      '<span class="input-file-list-name bottmotype">' +
      this.files.item(i).name +
      "</span>" +
      '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove"><img src="img/Vector.svg"></a>' +
      "</div>";
    $files_list.append(new_file_input);
    dt.items.add(this.files.item(i));
    var fileTextView = document.getElementById("fileText");
    fileTextView.classList.add("fileNonView");
  }
  this.files = dt.files;
});

function removeFilesItem(target) {
  let name = $(target).prev().text();
  let input = $(target).closest(".input-file-row").find("input[type=file]");
  $(target).closest(".input-file-list-item").remove();
  for (let i = 0; i < dt.items.length; i++) {
    if (name === dt.items[i].getAsFile().name) {
      dt.items.remove(i);
      var fileTextView = document.getElementById("fileText");
      fileTextView.classList.remove("fileNonView");
    }
  }
  input[0].files = dt.files;
}
jQuery(($) => {
  $(".select").on("click", ".select__head", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).next().fadeOut();
    } else {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
      $(this).addClass("open");
      $(this).next().fadeIn();
    }
  });

  $(".select").on("click", ".select__item", function () {
    $(".select__head").removeClass("open");
    $(this).parent().fadeOut();  
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".select").length) {
      $(".select__head").removeClass("open");
      $(".select__list").fadeOut();
    }
  });
});
$(document).ready(function () {
  $(".start-btn").click(function () {
    $(".modal-box").toggleClass("show-modal");
    $(".start-btn").toggleClass("show-modal");
  });
  $(".fa-times").click(function () {
    $(".modal-box").toggleClass("show-modal");
    $(".start-btn").toggleClass("show-modal");
  });
});