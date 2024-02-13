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
         reading_locale_storage
} from "./general.js";

let main_notifications = document.getElementById( 'main_notifications' );

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
        status_notifications_let; 

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
            let error_update = document.getElementById( 'error_update' );
    
            if ( error_update ) error_update.remove();
            
            event.preventDefault();
            button_update_notif.setAttribute( 'disabled', 'true' );
            button_update_notif.after( min_preloader );
            min_preloader.children[0].style = 'width: 25px; height: 25px;';
    
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
    
        nav.onclick = function() {
    
            if ( info_notifications.status === form.status_notifications.dataset.status &&
                info_notifications.day === Number( form.get_notifications.value ) &&
                info_notifications.time === form.time.value ) {
                ul_nav.style.cssText = 'opacity: 1; z-index: 7';
            } else {
                check_exit_page.style.cssText = 'opacity: 1; z-index: 7';
    
                ok_transition.onclick = function() {
                    check_exit_page.style.cssText = '';
                    ul_nav.style.cssText = 'opacity: 1; z-index: 7';
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
                check_exit_page.style.cssText = 'opacity: 1; z-index: 7';
    
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
            }
    
        }

        update_storage.onclick = function() {
            clear();
            reading_locale_storage();
            //hide_body();
            //localStorage.setItem( 'status_background', 'yes' );
            //window.location.href = 'index.html';
        }

    } else {
        main_notifications.innerHTML = '<div class="text-center">' +
                                            '<h3 class="l-height-1-25 m-b-30">Ваше местоположение не определено</h3>' +  
                                            '<button id="select_city_notif" class="bold">' +
                                                'Выбор города'+
                                            '</button>' +  
                                       '</div>'

        let select_city_notif = document.getElementById( 'select_city_notif' );

        select_city_notif.onclick = function() {
            location.href = 'index.html'
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

