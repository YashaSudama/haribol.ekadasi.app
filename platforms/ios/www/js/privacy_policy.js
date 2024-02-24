"use strict"

import { 
    show_body,
    height_footer_func,
    resume_event,
    header_top
} from "./general.js";

let privacy_policy = document.getElementById( 'privacy_policy' ),
    height_header = header_top.clientHeight;

privacy_policy.style.marginTop = height_header + 'px';

show_body();
height_footer_func();
resume_event();