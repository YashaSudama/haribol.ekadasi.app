"use strict"

import { 
    show_body,
    height_footer_func,
    resume_event,
    header_top
} from "./general.js";

let contact = document.getElementById( 'contact' ),
    height_header = header_top.clientHeight;

contact.style.marginTop = height_header + 'px';

show_body();
height_footer_func();
resume_event();