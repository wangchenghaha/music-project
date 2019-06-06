export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split("");
  newClass.push(className);
  el.className = newClass.join("");
}

function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}

// eslint-disable-next-line no-unused-vars
function hasClass1(el, className) {
  return el.classList.contain(className);
}
