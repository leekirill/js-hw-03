import tmp from "../templates/tmp";
import colors from "../menu";

const ul = document.querySelector(".menu.js-menu");
const markup = tmp(colors);

ul.insertAdjacentHTML("afterbegin", markup);
