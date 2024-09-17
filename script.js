/*funcion en el evento click*/
document.getElementById("btn_open").addEventListener("click", open_close_menu);
/*variable*/
var side_menu = document.getElementById("menu_side");
var btn_opne = document.getElementById("btn_open");
var body = document.getElementById("body");

//eventos

function open_close_menu() {
    body.classList.toggle("body_move")
    side_menu.classList.toggle("menu__side_move");
}

