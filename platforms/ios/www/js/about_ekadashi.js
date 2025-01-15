"use strict"

import { 
    show_body,
    height_footer_func,
    resume_event,
    header_top
} from "./general.js";

let about_ekadashi = document.getElementById( 'about_ekadashi' ),
    height_header = header_top.clientHeight;

about_ekadashi.style.marginTop = height_header + 'px';

show_body();
height_footer_func();
resume_event();
