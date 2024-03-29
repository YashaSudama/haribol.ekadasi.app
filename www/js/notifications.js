"use strict"

import { height_footer_func,
         min_preloader,
         form,
         info_notifications,
         update_notifications,
         button_update_notif,
         show_body,
         hide_body,
         home,
         clear,
         content_not_connection,
         text_not_internet,
         header_top,
         footer_id
} from "./general.js";

let main_notifications = document.getElementById( 'main_notifications' ),
    height_header = header_top.clientHeight;

main_notifications.style.marginTop = height_header + 'px';

function work_settings_notifications() {
    
    show_body();
    height_footer_func();
    
    let day_notifications = document.getElementById( 'day_notifications' ),
        time_notifications = document.getElementById( 'time_notifications' ),
        status_notifications_div = document.getElementById( 'status_notifications' ),
        check_exit_page = document.getElementById( 'check_exit_page' ),
        ok_transition = document.getElementById( 'ok_transition' ),
        remain = document.getElementById( 'remain' ),
        update_storage = document.getElementById( 'update_storage' ),
        hr_hide = main_notifications.getElementsByClassName( 'hr-hide' ),
        status_notifications_let,
        nav_ok_transition = false,
        document_height = Math.max(
            document.body.scrollHeight, 
            document.documentElement.scrollHeight,
            document.body.offsetHeight, 
            document.documentElement.offsetHeight,
            document.body.clientHeight, 
            document.documentElement.clientHeight
        ),
        height_main = document_height - height_header - footer_id.clientHeight; 

	min_preloader.style = 'margin: 20px 0 0';
    form.time.value = info_notifications.time;

    if ( info_notifications.day === 0 ) {
        form.get_notifications[ 2 ].checked = true;
    } else if ( info_notifications.day === 1 ) {
        form.get_notifications[ 1 ].checked = true;
    } else {
        form.get_notifications[ 0 ].checked = true;
    }

    if ( localStorage.getItem( 'status_notifications' ) === 'false' ) { 
        day_notifications.style.cssText = 'opacity: 0; display: none';
        time_notifications.style.cssText = 'opacity: 0; display: none';
        hr_hide[ 0 ].style.cssText = 'opacity: 0; display: none';
        hr_hide[ 1 ].style.cssText = 'opacity: 0; display: none';    
        hr_hide[ 2 ].style.cssText = 'opacity: 0; display: none';
        status_notifications_div.children[ 0 ].innerHTML = 'Включить уведомления';
        form.status_notifications.dataset.status = false;
        status_notifications_let = false;
    } else {
        status_notifications_let = true;
    }

    if ( localStorage.getItem( 'city_name' ) ) {

        form.onsubmit = function( event ) {
            let not_data_server = document.getElementById( 'not_data_server' );
            
            event.preventDefault();
            button_update_notif.setAttribute( 'disabled', 'true' );
            
            if ( !not_data_server ) {
                button_update_notif.after( min_preloader );
                min_preloader.children[ 0 ].style = 'width: 25px; height: 25px;';
            }
    
            if ( info_notifications.status === form.status_notifications.dataset.status &&
                info_notifications.day === Number( form.get_notifications.value ) &&
                info_notifications.time === form.time.value ) {
    
                    message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                        '<span class="d-block text-center">' +
                                                            'Настройки уведомлений остались без изменений!' +
                                                        '</span>' +
                                                    '</div>';
    
                    message_notifications.style.bottom = '0';
    
                    setTimeout( () => {
                        message_notifications.style.cssText = '';
                    }, 2000 );
    
                    setTimeout( () => {
                        button_update_notif.removeAttribute( 'disabled' );
                        min_preloader.remove();
                    }, 3500 );
    
                    return;
                    
            } else {
                update_notifications( localStorage.getItem( 'city_name_id' ) );
            }
    
        }
    
        form.status_notifications.onclick = function() {  
    
            if ( form.status_notifications.checked ) {
    
                if ( form.status_notifications.dataset.status === 'true' ) {
                    day_notifications.style.opacity = '0';
                    time_notifications.style.opacity = '0';
                    hr_hide[ 0 ].style.opacity = '0';
                    hr_hide[ 1 ].style.opacity = '0'; 
                    hr_hide[ 2 ].style.opacity = '0';
                    status_notifications_div.children[ 0 ].innerHTML = 'Включить уведомления';
                    form.status_notifications.dataset.status = false;
                    status_notifications_let = false;
    
                    setTimeout( () => {
                        day_notifications.style.display = 'none';
                        time_notifications.style.display = 'none';
                        hr_hide[ 0 ].style.display = 'none';
                        hr_hide[ 1 ].style.display = 'none'; 
                        hr_hide[ 2 ].style.display = 'none';
                        form.status_notifications.checked = false;
                    }, 600 );
    
                } else if ( form.status_notifications.dataset.status === 'false') {
    
                    day_notifications.style.removeProperty( 'display' );
                    time_notifications.style.removeProperty( 'display' );
                    hr_hide[ 0 ].style.removeProperty( 'display' );
                    hr_hide[ 1 ].style.removeProperty( 'display' );    
                    hr_hide[ 2 ].style.removeProperty( 'display' );
                    status_notifications_div.children[ 0 ].innerHTML = 'Отключить уведомления';
                    form.status_notifications.dataset.status = true;
                    status_notifications_let = true;
    
                    setTimeout( () => {
                        day_notifications.style.removeProperty( 'opacity' );
                        time_notifications.style.removeProperty( 'opacity' );
                        hr_hide[ 0 ].style.removeProperty( 'opacity' );
                        hr_hide[ 1 ].style.removeProperty( 'opacity' );
                        hr_hide[ 2 ].style.removeProperty( 'opacity' );
                        form.status_notifications.checked = false;
                    }, 600 );
    
                }
    
            }
    
        }

        function open_close_nav( elem ) {

            if ( elem.style.cssText === '' ) {
                elem.style.cssText = 'opacity: 1; z-index: 7';
            } else {
                elem.style.cssText = '';
            }

        } 
    
        nav.onclick = function() {
    
            if ( info_notifications.status === form.status_notifications.dataset.status &&
                info_notifications.day === Number( form.get_notifications.value ) &&
                info_notifications.time === form.time.value ) {
                open_close_nav( ul_nav );
            } else {

                if ( nav_ok_transition ) {
                    open_close_nav( ul_nav );
                } else {
                    open_close_nav( check_exit_page );
                }
    
                ok_transition.onclick = function() {
                    check_exit_page.style.cssText = '';
                    ul_nav.style.cssText = 'opacity: 1; z-index: 7';
                    nav_ok_transition = true;
                }
    
                remain.onclick = function() {
                    check_exit_page.style.cssText = '';
                }
    
            }
    
        }
    
        home.onclick = function( event ) {
    
            if ( info_notifications.status !== form.status_notifications.dataset.status ||
                info_notifications.day !== Number( form.get_notifications.value ) ||
                info_notifications.time !== form.time.value ) {
                event.preventDefault();

                if ( nav_ok_transition ) {
                    hide_body();
                    localStorage.setItem( 'status_background', 'yes' );
                    window.location.href = 'index.html';
                } else {
                    open_close_nav( check_exit_page );
                }
    
                ok_transition.onclick = function() {
                    hide_body();
                    localStorage.setItem( 'status_background', 'yes' );
                    check_exit_page.style.cssText = '';
                    window.location.href = 'index.html';
                }
    
                remain.onclick = function() {
                    check_exit_page.style.cssText = '';
                }
    
            } else {
                hide_body();
                localStorage.setItem( 'status_background', 'yes' );
            }
    
        }

        update_storage.onclick = function() {
            clear();
            hide_body();
            localStorage.setItem( 'status_background', 'yes' );
            window.location.href = 'index.html';
        }

    } else {
        main_notifications.style.height = height_main + 'px';
        main_notifications.innerHTML = '<div class="not_location text-center pos-rel">' +
                                            '<h3 class="l-height-1-25 m-b-30 m-t-0">Ваше местоположение не определено</h3>' +  
                                            '<button id="select_city_notif">' +
                                                'Выбор города'+
                                            '</button>' +  
                                       '</div>'

        let select_city_notif = document.getElementById( 'select_city_notif' );

        select_city_notif.onclick = function() {

            if ( localStorage.getItem( 'click_choice_city' ) === '0' ) localStorage.setItem( 'click_choice_city', '1' );

            localStorage.setItem( 'status_background', 'yes' );
            hide_body();
            window.location.href = 'index.html';
        }

    }

}

document.addEventListener( "deviceready", () => {
    
    if ( navigator.connection.type !== 'none' ) {
        work_settings_notifications();
    } else {
        content_not_connection( main_notifications, 
                                text_not_internet, 
                                null, 
                                null, 
                                null, 
                                null );
    }

}, false );

