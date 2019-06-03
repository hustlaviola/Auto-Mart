const viewBtns = document.querySelectorAll(".view-btn");
const topModal = document.getElementById("top-modal");
const modal = document.getElementById("modal");
const modImage = document.getElementById("mod-image");
const make = document.getElementById("make");
const state = document.getElementById("state");
const status = document.getElementById("status");
const model = document.getElementById("model");
const bodyType = document.getElementById("body-type");
const price = document.getElementById("price");
const description = document.getElementById("description");
const topImgs = document.querySelectorAll(".top-img");
const modFlag = document.getElementById("mod-flag");
const modEdit = document.getElementById("mod-edit");
const flagBtn = document.querySelector(".flag-btn");
const delBtn = document.querySelector(".del-btn");
const modalForm = document.querySelector(".modal-form");

const reset = () => {
  if (modFlag) {
    if (!modFlag.classList.contains("hidden")) {
      modFlag.classList.add("hidden");
    }
  }
  if (!topModal.classList.contains("hidden")) {
    topModal.classList.add("hidden");
  }
  if (!flagBtn.classList.contains("hidden")) {
    flagBtn.classList.add("hidden");
  }
  if (delBtn) {
    if (!delBtn.classList.contains("hidden")) {
      delBtn.classList.add("hidden");
    }
  }
  if (!modalForm.classList.contains("hidden")) {
    modalForm.classList.add("hidden");
  }
  if (modEdit) {
    if (!modEdit.classList.contains("hidden")) {
      modEdit.classList.add("hidden");
    }
  }
  modImage.src = "";
  make.innerHTML = "";
  state.innerHTML = "";
  status.innerHTML = "";
  model.innerHTML = "";
  bodyType.innerHTML = "";
  price.innerHTML = "";
  description.innerHTML = "";
};

const view = event => {
  reset();
  modal.style.display = "flex";
  const target = event.target;
  topModal.classList.remove("hidden");
  const parentCont = target.parentNode.parentNode.id;
  modImage.src = document.querySelector("#" + parentCont + " " + "img").src;
  make.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".make"
  ).innerHTML;
  state.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".state"
  ).innerHTML;
  model.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".model"
  ).innerHTML;
  bodyType.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".body-type"
  ).innerHTML;
  price.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".price"
  ).innerHTML;
  description.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".describe"
  ).innerHTML;
  flagBtn.classList.remove("hidden");
};

const review = event => {
  reset();
  modal.style.display = "flex";
  const target = event.target;
  topModal.classList.remove("hidden");
  const parentCont = target.parentNode.parentNode.id;
  modImage.src = document.querySelector("#" + parentCont + " " + "img").src;
  make.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".make"
  ).innerHTML;
  state.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".state"
  ).innerHTML;
  model.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".model"
  ).innerHTML;
  bodyType.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".body-type"
  ).innerHTML;
  price.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".price"
  ).innerHTML;
  description.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".describe"
  ).innerHTML;
  delBtn.classList.remove("hidden");
};

const order = event => {
  reset();
  modal.style.display = "flex";
  const target = event.target;
  topModal.classList.remove("hidden");

  const parentCont = target.parentNode.parentNode.id;
  modImage.src = document.querySelector("#" + parentCont + " " + "img").src;
  make.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".make"
  ).innerHTML;
  state.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".state"
  ).innerHTML;
  model.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".model"
  ).innerHTML;
  bodyType.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".body-type"
  ).innerHTML;
  price.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".price"
  ).innerHTML;
  modalForm.classList.remove("hidden");
};

const review2 = event => {
  reset();
  modal.style.display = "flex";
  const target = event.target;
  topModal.classList.remove("hidden");
  const parentCont = target.parentNode.parentNode.id;
  modImage.src = document.querySelector("#" + parentCont + " " + "img").src;
  make.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".make"
  ).innerHTML;
  state.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".state"
  ).innerHTML;
  model.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".model"
  ).innerHTML;
  status.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".status"
  ).innerHTML;
  bodyType.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".body-type"
  ).innerHTML;
  price.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".price"
  ).innerHTML;
  description.innerHTML = document.querySelector(
    "#" + parentCont + " " + ".describe"
  ).innerHTML;
  delBtn.classList.remove("hidden");
};

const closeModal = document.getElementById("close-modal");

closeModal.onclick = () => {
  modal.style.display = "none";
};

const flag = () => {
  topModal.classList.add("hidden");
  modFlag.classList.remove("hidden");
};

const edit = () => {
  reset();
  modal.style.display = "flex";
  modEdit.classList.remove("hidden");
};

const openMyAds = () => {
  location.href = "myAds.html";
};

const openOrders = () => {
  location.href = "orders.html";
};

const adBtns = document.querySelectorAll(".ad-btn");
const modal2 = document.getElementById("modal2");

adBtns.forEach(adBtn => {
  adBtn.addEventListener("click", () => {
    modal2.style.display = "block";
  });
});
const imgs = document.querySelectorAll(".ad-img");
const modalImg = document.getElementById("mod-img");
const caption = document.getElementById("caption");

imgs.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  });
});