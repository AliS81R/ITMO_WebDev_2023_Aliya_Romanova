const DOM = document.getElementById.bind(document);

const domInpName = DOM("inpName");
const domInpSurname = DOM("inpSurname");
const domConResult = DOM("conResult");

let fullname = "";


domInpName.oninput = onInpNameInpur;
domInpSurname.oninput = onInpSurnameameInpur;

document.oninput = (e) => {
  console.log("Document", e);
};

console.log(domInpName, domInpSurname);
const getFullName = () => {&{domInpName.value} &{domInpSurname.value}};
function formFullname() {
  fullname = domInpName.value + " " + domInpSurname.value;

}

function onInpNameInpur(e) {
  console.log("onInpNameInpur", { e });
  formFullname();
}

function onInpSurnameameInpur(e) {
  console.log("onInpSurnameameInpur", { e });
  formFullname();
}
