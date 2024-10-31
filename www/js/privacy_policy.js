"use strict"

import { 
    show_body,
    height_footer_func,
    header_top,
    hide_background
} from "./general.js";

let privacy_policy = document.getElementById( 'privacy_policy' ),
    height_header = header_top.clientHeight;

privacy_policy.style.marginTop = height_header + 'px';

show_body();
hide_background();
height_footer_func();