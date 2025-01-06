"use strict"

import { 
    show_body,
    height_footer_func,
    header_top,
    hide_background
} from "./general.js";

let contact = document.getElementById( 'contact' ),
    height_header = header_top.clientHeight;

contact.style.marginTop = height_header + 'px';

show_body();
hide_background();
height_footer_func();