"use strict";

import { window_height,
         day_week,
         day_name_short,
         now_date_number,
         now_month, 
         month_name, 
         height_footer_func,
         now_year,
         city,
         slug,
         get_token,
         url,
         not_connection,
         timeout,
         content_not_connection,
         text_not_connection_timeout,
         text_not_internet,
         footer_id,
         location_span,
         height_header,
         header_top,
         get_description,
         key,
         update_notifications,
         min_preloader,
         show_body,
         hide_body,
         apparition_ekadasi_days,
         add_event_array,
         set_local_storage,
         set_update_local_storage,
         remove_local_storage,
         today,
         text_not_data_server,
         hide_background,
         get_month_days,
         reading_locale_storage
} from "./general.js";

document.addEventListener( "deviceready", () => {

    on_device_ready();

    if ( !localStorage.getItem( 'status_firebase_token' ) ||
            localStorage.getItem( 'status_firebase_token' ) === 'false' ) { 
        get_firebase_token_func();
    }

}, false );

let window_select_city = document.getElementById( 'window_select_city' ),
    window_change_city = document.getElementById( 'window_change_city' ),
    local_city = document.getElementById( 'local_city' ),
    yes_change_city = document.getElementById( 'yes_change_city' ),
    no_change_city = document.getElementById( 'no_change_city' ),
    div_main = document.querySelector( '#window_select_city .main' ),
    list_cityes = document.getElementById( 'list_cityes' ),
    form_search = document.getElementById( 'form_search' ),
    div_search_city = document.getElementById( 'div_search_city' ),
    main = document.getElementById( 'main' ),
    message_not_city = document.getElementById( 'message_not_city' ), 
    message_location_error = document.getElementById( 'message_location_error' ),
    current_location = document.getElementById( 'current_location' ),
    state,
    lat,
    lon,
    city_slug,
    city_name,
    city_name_id,
    token_notif,
    device_found = false,
    index_get_info_new,
    close_list;

function get_firebase_token_func() {

    if ( !localStorage.getItem( 'status_firebase_token' ) ) { 
        localStorage.setItem( 'status_firebase_token', 'false' ); 

        cordova.plugins.firebase.messaging.getToken().then( 
            ( token ) => {
                token_notif = token;
            },
            ( error ) => {
                token_notif = false;
            }   
        );

    } else {

        if ( localStorage.getItem( 'status_firebase_token' ) === 'false' ) { 
    
            cordova.plugins.firebase.messaging.getToken().then( 
                ( token ) => {
                    token_notif = token;
                },
                ( error ) => {
                    token_notif = false;
                }   
            );

        } else {
            return;
        }

    }

}

set_local_storage( 'click_choice_city', '0' );
set_local_storage( 'now_year', now_year );
set_local_storage( 'status_notifications', 'false' );
set_local_storage( 'user_register_notifications', 'false' );
set_local_storage( 'main_index', main.innerHTML );

current_location.onclick = function() {
    remove_local_storage( 'city_select' );
    remove_local_storage( 'lat' );
    remove_local_storage( 'lon' );
    remove_local_storage( 'city_name' );
    remove_local_storage( 'city_slug' );
    remove_local_storage( 'select_get_info' );
    hide_body();
    localStorage.setItem( 'status_background', 'yes' );

    setTimeout( () => {
        window.location.href = 'index.html';
    }, 500 );

}

function window_city_func( elem ) {
    elem.style.cssText = 'opacity: 1; z-index: 5';
    today.innerHTML = '<a href="index.html" class="text-white">' +
                          '<i class="fas fa-home fa-lg"></i>' +
                      '</a>';
    today.removeAttribute( 'id' );
    today.addEventListener( 'click', hide_body );
}

function inner_get_info_func( index_get_info_new, slug, height_header, day_week ) {
    let class_li,
        id_li,
        value_key,
        value,
        array_latin_month = [ 'jan',
                              'feb',
                              'mar',
                              'apr',
                              'may',
                              'jun',
                              'jul',
                              'aug',
                              'sem',
                              'oct',
                              'nov',
                              'dem' ],
        now_date_local,
        date_event,
        height_year,
        year = document.getElementsByClassName( 'year' ),
        current_year = document.getElementById( 'current_year' ),
        plus_year = document.getElementById( 'plus_year' ),
        today_str = 'Сегодня',
        tomorrow = 'Завтра',
        day_after_tomorrow = 'Скоро';

    height_header = header_top.clientHeight;
    main.style.marginTop = height_header + 'px';
    
    for ( let i = 0; i < index_get_info_new.length; i++ ) { 
      
        let get_year = index_get_info_new[ i ].value,
            array_obj = [ index_get_info_new[ i ].jan,
                          index_get_info_new[ i ].feb,
                          index_get_info_new[ i ].mar,
                          index_get_info_new[ i ].apr,
                          index_get_info_new[ i ].may,
                          index_get_info_new[ i ].jun,
                          index_get_info_new[ i ].jul,
                          index_get_info_new[ i ].aug,
                          index_get_info_new[ i ].sem,
                          index_get_info_new[ i ].oct,
                          index_get_info_new[ i ].nov,
                          index_get_info_new[ i ].dem ],
            sp_array = Object.entries( array_obj[ 5 ] ),
            isus_array = Object.entries( array_obj[ 11 ] );

        array_obj[ 5 ] = Object.fromEntries( add_event_array( sp_array, '14', 'S', '15', 0 ) );
        array_obj[ 11 ] = Object.fromEntries( add_event_array( isus_array, '25', 'R', '26', 1 ) );
        year[ i ].innerHTML = '<span>' + get_year + '</span>';
        year[ i ].style.top = ( height_header - 1 ) + 'px';
        height_year = year[ i ].clientHeight;

        function display_data( obj_month, item, month, get_year, numb_month ) { // item - свойство ( ключ ) объекта, дата события
            let event_coming_class = '',
                event_coming_elem = '',
                event_coming_class_status = false,
                month_days = get_month_days( now_month, now_year );

            if ( +get_year === now_year ) {

                if ( numb_month === now_month ) {
                    
                    if ( +item === now_date_number ) {
                        event_coming_elem = '<span>' + today_str + '</span>';
                        event_coming_class_status = true;
                    } else if ( +item === ( now_date_number + 1 ) ) {
                        event_coming_elem = '<span>' + tomorrow + '</span>';
                        event_coming_class_status = true;
                    } else if ( +item === ( now_date_number + 2 ) ) {
                        event_coming_elem = '<span>' + day_after_tomorrow + '</span>';
                        event_coming_class_status = true;
                    }

                } else if ( numb_month === ( now_month + 1 ) ) {

                    if ( +item === 1 ) {

                        if ( now_date_number === month_days ) {
                            event_coming_elem = '<span>' + tomorrow + '</span>';
                            event_coming_class_status = true;
                        } else if ( ( now_date_number + 1 ) === month_days ) {
                            event_coming_elem = '<span>' + day_after_tomorrow + '</span>';
                            event_coming_class_status = true;
                        }

                    } else if ( +item === 2 ) {

                        if ( now_date_number === month_days ) {
                            event_coming_elem = '<span>' + day_after_tomorrow + '</span>';
                            event_coming_class_status = true;
                        }

                    }

                }

            } else if ( +get_year === ( now_year + 1 ) ) {

                if ( ( numb_month === 0 ) && ( now_month === 11 ) ) {

                    if ( +item === 1 ) {

                        if ( now_date_number === month_days ) {
                            event_coming_elem = '<span>' + tomorrow + '</span>';
                            event_coming_class_status = true;
                        } else if ( ( now_date_number + 1 ) === month_days ) {
                            event_coming_elem = '<span>' + day_after_tomorrow + '</span>';
                            event_coming_class_status = true;
                        }

                    } else if ( +item === 2 ) {

                        if ( now_date_number === month_days ) {
                            event_coming_elem = '<span>' + day_after_tomorrow + '</span>';
                            event_coming_class_status = true;
                        }

                    }

                }
                    
            }
            
            if ( event_coming_class_status ) event_coming_class = 'event_coming ';

            now_date_local = new Date( now_year, now_month, now_date_number );
            date_event = new Date( get_year, numb_month, item );
            day_week = new Date( get_year, numb_month, item ).getDay();
            value_key = obj_month[ item ]; // value_key - значение свойства ( ключа ), тип события

            if ( typeof( value_key ) === 'object' ) now_date_local = +now_date_local - 90000000;

            if ( +now_date_local <= +date_event ) {

                if ( typeof( value_key ) === 'object' ) {

                    let exit_date,                      
                        numb_month_local = numb_month + 1,
                        item_local = +item + 1,
                        exit_next_year = false,
                        month_days_local = get_month_days( numb_month, now_year );

                    if ( item_local > month_days_local ) {
                        item_local = 1;
                        numb_month_local = numb_month_local + 1;

                        if ( numb_month_local > 12 ) {
                            numb_month_local = 1;
                            exit_next_year = true;
                        }

                    }
                    
                    if ( numb_month_local < 10 ) {
                        numb_month_local = '0' + numb_month_local;
                    }
                    
                    if ( item_local < 10 ) {
                        item_local = '0' + item_local;
                    }
                    
                    if ( exit_next_year ) {
                        exit_date = '<span>' + item_local + '</span>.' + numb_month_local + '.' + ( now_year + 1 );
                    } else {
                        exit_date = '<span>' + item_local + '</span>.' + numb_month_local;
                    }

                    if ( ( value_key.exit_time ).includes( 'after' ) ) {
                        value_key.exit_time = ( value_key.exit_time ).replace( 'after', 'после' );
                    }

                    class_li = 'value-0';
                    id_li = apparition_ekadasi_days[ value_key.ekadasi_name ].id;
                    value =  '<span class="name_event bold l-height-1-1">' + 
                                apparition_ekadasi_days[ value_key.ekadasi_name ].name + ' Экадаши' +
                            '</span>' +
                            '<hr class="ekadashi_hr">' + 
                            '<span class="exit bold l-height-1-1">Выход из поста<br>' +
                                '<span class="exit_date">' + exit_date + '</span>' + ' ' +
                                '<span class="exit_time">' + value_key.exit_time + '</span>' +
                            '</span>';

                } else if ( typeof( value_key ) === 'string' ) {
                    value = '<span class="name_event d-block bold">' + apparition_ekadasi_days[ value_key ].name + '</span>';
                    class_li = 'value-' + value_key;
                    id_li = apparition_ekadasi_days[ value_key ].id;

                    if ( value_key === 'S' && item !== '14' ) {
                        item = '14'; 
                        day_week = new Date( get_year, numb_month, item ).getDay();
                    } else if ( value_key === 'R' && item !== '25' ) {
                        item = '25';
                        day_week = new Date( get_year, numb_month, item ).getDay();
                    }

                }
                    
                month.innerHTML += '<li id="' + id_li + '" class="click ' + event_coming_class + class_li + '">' + 
                                        '<div class="day_info d-flex text-center l-height-1-25">' + 
                                            '<span>' + day_name_short[ day_week ] + '</span>' + 
                                            '<span class="bold">' +  item + '</span>' + 
                                        '</div>' + 
                                        '<div class="event_info l-height-1-2">' + value + '</div>' + 
                                        '<div class="day_full">' + event_coming_elem +
                                            '<i class="fas fa-angle-right"></i>' + 
                                        '</div>' + 
                                    '</li>';

            }

        } // end display_data

        if ( now_year === +get_year ) {

            for ( let i = now_month; i < array_obj.length; i++ ) {
                current_year.innerHTML += '<ul id=' + array_latin_month[ i ] + '-' + get_year + ' class="pos-rel" style="bottom: ' + height_year + 'px">' +
                                            '<li class="month">' +
                                                '<h4 class="m-t-0 m-b-0">' + month_name[ i ] + '</h4>' +
                                            '</li>' +
                                          '</ul>';
                let elem_month = document.getElementById( array_latin_month[ i ] + '-' + get_year );

                for ( let item in array_obj[ i ] ) {
                    display_data( array_obj[ i ], item, elem_month, get_year, i );
                }
                
                if ( elem_month.children.length === 1 ) elem_month.remove();
                
            }

            window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } );

            if ( localStorage.getItem( 'status_background' ) === 'yes' ) {
                hide_background();
                show_body();
                remove_local_storage( 'status_background' );
            } else {
                navigator.splashscreen.hide();
                show_body();
            }

        } else if ( ( now_year + 1 ) === +get_year ) {

            for ( let i = 0; i < array_obj.length; i++ ) {
                plus_year.innerHTML += '<ul id=' + array_latin_month[ i ] + '-' + get_year + ' class="pos-rel" style="bottom: ' + height_year + 'px">' +
                                            '<li class="month">' +
                                                '<h4 class="m-t-0 m-b-0">' + month_name[ i ] + '</h4>' +
                                            '</li>' +
                                          '</ul>';
                let elem_month = document.getElementById( array_latin_month[ i ] + '-' + get_year );

                for ( let item in array_obj[ i ] ) {
                    display_data( array_obj[ i ], item, elem_month, get_year, i );
                }
                
            }

        }
        
        let month = document.getElementsByClassName( 'month' );

        for ( let li of month ) {
            li.style.top = ( height_header - 1 ) + 'px';
        }

    }
    
    today.removeEventListener( 'click', hide_body );
    today.addEventListener( 'click', function() {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } );
    } );

    main.style.opacity = '1';
    header_top.style.opacity = '1';

    if ( today && today.hasAttribute( 'id' ) ) today.style.cssText = '';

    get_description( main, '.click' );
    height_footer_func();

}

function get_info_func( slug, index_get_info_new ) {

    if ( ( localStorage.getItem( 'user_register_notifications' ) === 'false' ) ) {
        check_notifications( slug );
    }

    let xml_info = new XMLHttpRequest();
            
    xml_info.open( 'GET', url + 'api/years.json?city=' + slug.id +'&value[]=' + now_year + '&value[]=' + ( now_year + 1 ) );
    xml_info.responseType = 'json';
    xml_info.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_info, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info_new', 
                    'main_index', 
                    inner_get_info_func, 
                    index_get_info_new );

    timeout( xml_info, 
             main, 
             text_not_connection_timeout, 
             'index_get_info_new', 
             'main_index', 
             inner_get_info_func, 
             index_get_info_new );
    
    xml_info.onload = function() {
        index_get_info_new = xml_info.response;
        localStorage.setItem( 'index_get_info_new', JSON.stringify( index_get_info_new ) );

        inner_get_info_func( index_get_info_new, slug, height_header, day_week );

    };

    xml_info.send();
    
} // get_info - end

function local_storage( lat, lon, city_slug, city_name, city_name_id ) {

    if ( !localStorage.getItem( 'city_select' ) ) {

        if ( lat ) {
            lat = lat.toFixed( 1 );
        }
        
        if ( lon ) {
            lon = lon.toFixed( 1 );
        }

        set_update_local_storage( 'lat', lat );
        set_update_local_storage( 'lon', lon );
    }
    
    set_update_local_storage( 'city_slug', city_slug );
    set_update_local_storage( 'city_name', city_name );
    set_update_local_storage( 'city_name_id', city_name_id );

} // local_storage - end

function add_city_undefined_database( city, state ) {

    let value_token = get_token();

    if ( state ) {
        city = city + ', ' + state; 
    } else {
        city = city;
    }  

    let xml_city_database = new XMLHttpRequest(),
        data_send = JSON.stringify( { name: city,
                                      lat: String( lat ),
                                      lon: String( lon ),
                                      token: value_token } );

    xml_city_database.open( 'POST', url + 'api/cities/new' );
    xml_city_database.setRequestHeader( 'Content-Type', 'application/json' );
    xml_city_database.responseType = 'json';

    not_connection( xml_city_database, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info_new', 
                    'main_index', 
                    inner_get_info_func, 
                    index_get_info_new );

    timeout( xml_city_database, 
             main, 
             text_not_connection_timeout, 
             'index_get_info_new', 
             'main_index', 
             inner_get_info_func, 
             index_get_info_new );

    xml_city_database.onload = function() {

    	let response_database = xml_city_database.response;

        if ( response_database ) {

            if ( response_database.name ) {
                message_not_city.innerHTML = '<div class="width-fit m-auto">' +
                                                '<span>Ваше местоположение:</span>' +
                                                '<h4 class="m-b-5 m-t-5 width-fit">' + response_database.name + '</h4>' +
                                                '<span style="font-size: 14px">Этого населённого пункта нет в нашей базе. Мы добавим его в ближайшее время</span>' +
                                             '</div>';

                message_not_city.style.top = '0';

                setTimeout( () => message_not_city.style.cssText = '', 5000 );
                
            }

        }

    }

    xml_city_database.send( data_send );
} // add_city_undefined_database - end

function part_not_city( slug ) {
    
    let list_timeout,
        sub_list_timeout,
        touch_start,
        div_main_coords;
    min_preloader.classList.add( 'search_preloader' );

    window.addEventListener( 'keyboardDidShow', ( event ) => {

        let keyboard_height = event.keyboardHeight,
            div_main_height = div_main.offsetHeight,
            div_main_top = ( window_height - keyboard_height );

        div_main.style.top = ( ( div_main_top - div_main_height) / 2 ) + 'px';

        if ( div_main.style.transform === '' ) {
            div_main.style.transform = 'translateX(-50%)';
        }

    } );

    window.addEventListener( 'keyboardDidHide', () => {
        div_main.style.cssText = '';
    } );

    div_main.addEventListener( 'touchstart', ( event ) => {

        if ( ( event.target ).classList.contains( 'full_city' ) || 
             ( ( event.target ).closest( '#div_search_city' ) ) ) {
            return;
        }

        touch_start = event.touches[ 0 ].clientY;
        div_main_coords = div_main.getBoundingClientRect().top;

    } );

    div_main.addEventListener( 'touchmove', ( event ) => {
        
        if ( ( event.target ).classList.contains( 'full_city' ) || 
        ( ( event.target ).closest( '#div_search_city' ) ) ) {
            return;
        }
        
        let touch_move = event.touches[ 0 ].clientY;
        div_main.style.transform = 'translateX(-50%)';
        div_main.style.top = div_main_coords - ( touch_start - touch_move ) + 'px';

    } );

    function not_data_server() {
        div_search_city.innerHTML = text_not_data_server;

        setTimeout(() => {
            let not_data_server = document.getElementById( 'not_data_server' );
            not_data_server.style.opacity = '1';
        }, 500 );

    }

    function list_all_cities( city, slug ) { // получает и публикует список всех городов

        let xml_all_cityes = new XMLHttpRequest(),
            get_all_cities;
    
        xml_all_cityes.open( 'GET', url + 'api/cities.json' );
        xml_all_cityes.responseType = 'json';
        xml_all_cityes.setRequestHeader( 'Content-Type', 'application/json' );
    
        xml_all_cityes.onerror = function() {
            not_data_server();
        }

        xml_all_cityes.timeout = 5000;

        xml_all_cityes.ontimeout = function() {
            not_data_server();
        }
    
        xml_all_cityes.onload = function() {
            get_all_cities = xml_all_cityes.response;
            list_cityes.innerHTML = '';
            list_cityes.innerHTML = '<i id="close_list" class="pos-fixed fas fa-angle-right fa-lg"></i>';
     
            for ( let city of get_all_cities ) {
                list_cityes.insertAdjacentHTML( 'beforeEnd', '<span class="d-block">' + city.name + '</span>' );
            }

            list_cityes.style.cssText = 'opacity: 1;' +
                                        'z-index: 5';
                                        
            close_list = document.getElementById( 'close_list' );

            close_list.onclick = function( event ) {
                event.stopPropagation();
                list_cityes.style.cssText = 'opacity: 0;' +
                                            'z-index: -1';
                div_search_city.classList.add( 'p-all-0' );
                div_search_city.innerHTML = '<button id="choice_full_list" class="l-height-1-2">' +
                                                'Выберите из полного<br>списка городов!' +
                                            '</button>';

                let choice_full_list = document.getElementById( 'choice_full_list' );

                choice_full_list.addEventListener( 'click', function( event ) {
                    div_search_city.innerHTML = '<span></span>';
                    div_search_city.prepend( min_preloader );
                    div_search_city.classList.remove( 'p-all-0' );
                    list_all_cities( city, slug );
                } );
            }

            list_cityes.onclick = function( event ) {
                localStorage.setItem( 'status_background', 'yes' );
                hide_body();

                setTimeout( () => {
                    window_select_city.style.cssText = '';
                }, 500 );

                city = ( event.target ).textContent;
                slug = get_all_cities.find( item => item.name === city );
                list_cityes.style.cssText = '';
                city_slug = slug.slug;
                city_name = slug.name;
                city_name_id = slug.id;
                location_span.innerHTML = city_name.trim();

                footer_id.style.cssText = '';

                if ( ( localStorage.getItem( 'status_notifications' ) === 'true' ) &&
                     ( localStorage.getItem( 'user_register_notifications' ) === 'true' ) &&
                     ( localStorage.getItem( 'status_firebase_token' ) === 'true' ) &&
                     ( city_name_id !== ( +localStorage.getItem( 'city_name_id' ) ) ) ) {
                    update_notifications( slug );
                }
                
                remove_local_storage( 'lat' );
                remove_local_storage( 'lon' );
                remove_local_storage( 'select_get_info' );
                set_local_storage( 'city_select', 'yes' );
                local_storage( lat, lon, city_slug, city_name, city_name_id );
                get_info_func( slug, index_get_info_new );
                today.id = 'today';
                today.innerHTML = 'Сегодня';

            }
    
        }
    
        xml_all_cityes.send();
    
    }

    function search_null() {

        if ( list_timeout ) clearTimeout( list_timeout );
        if ( sub_list_timeout ) clearTimeout( sub_list_timeout );
        if ( div_search_city.classList.contains( 'p-all-0' ) ) div_search_city.classList.remove( 'p-all-0' );

        div_search_city.style.cssText = 'opacity: 1; margin-bottom: 15px !important;';
            div_search_city.innerHTML = '<span class="d-block l-height-1-1"' + 
                                              'style="font-size: 20px; padding: 3px 3px;">' +
                                            'Ничего не найдено!' +
                                         '</span>';
            
            list_timeout = setTimeout( () => {
                div_search_city.innerHTML = '<span></span>';
                div_search_city.prepend( min_preloader );

                sub_list_timeout = setTimeout( () => {
                    div_search_city.classList.add( 'p-all-0' );
                    div_search_city.innerHTML = '<button id="choice_full_list">' +
                                                    'Выберите из полного<br>списка городов!' +
                                                '</button>';

                    let choice_full_list = document.getElementById( 'choice_full_list' );

                    choice_full_list.addEventListener( 'click', function() {
                        div_search_city.innerHTML = '<span></span>';
                        div_search_city.prepend( min_preloader );
                        div_search_city.classList.remove( 'p-all-0' );
                        list_all_cities( city, slug );
                    } );

                }, 1500 );

            }, 2000 );

    }

    function change_letters( elem ) {
        let change_elem = '';

        if ( elem.includes( 'ё' ) || elem.includes( 'Ё' ) ) {
                
            for ( let letter of elem ) {

                if ( letter === 'Ё' ) letter = 'Е';
                if ( letter === 'ё' ) letter = 'е';

                change_elem += letter;
            }

        } else {
            change_elem = elem;
        }

        return change_elem; 

    }

    function output_cities( search_cities, str ) {

        let search_city,
            search_index,
            before_str;
                            
        if ( search_cities.length > 0 ) {

            if ( div_search_city.classList.contains( 'p-all-0' ) ) div_search_city.classList.remove( 'p-all-0' );

            for ( let city of search_cities ) {
                let local_str = change_letters( str ),
                    local_city_name = change_letters( city.name );
                
                div_search_city.style.cssText = 'opacity: 1; margin-bottom: 15px !important;';
                search_index = ( local_city_name.toLowerCase() ).indexOf( local_str.toLowerCase() );
                
                if ( search_index !== -1 ) {
                    
                    if ( search_index === 0 ) {
                    
                        search_city = '<span class="search_string search_string_wrap pos-rel d-inline-block">' + 
                                            local_str[ 0 ].toUpperCase() + local_str.slice( 1 ) +
                                        '<span class="search_string search_string_span pos-abs"></span>' +
                                      '</span>' + 
                                        ( city.name ).slice( local_str.length );
                        
                    } else if ( search_index > 0 ) {

                        before_str = ( city.name ).slice( 0, search_index );
                    
                        if ( ( before_str[ before_str.length - 1 ] ) === ' ' || before_str[ before_str.length - 1 ] === '-' ) { 
                            local_str = local_str[ 0 ].toUpperCase() + local_str.slice( 1 );
                            
                            if ( ( local_str.toLowerCase() === 'сш' ) || ( local_str.toLowerCase() === 'сша' ) ) {
                                local_str = 'США';
                            }

                        } else {
                            local_str = local_str.toLowerCase();
                        }

                        search_city = ( city.name ).slice( 0, search_index ) + '<span class="search_string search_string_wrap pos-rel d-inline-block">' + 
                                                                                        local_str + 
                                                                                    '<span class="search_string search_string_span pos-abs"></span>' +
                                                                                '</span>' + 
                                                                                    ( city.name ).slice( search_index + local_str.length );
                    }
                    
                } else {
                    search_null();
                    return;
                }
                
                div_search_city.innerHTML += '<span class="full_city d-block text-left l-height-1-25">' + search_city + '</span>';
                
                let search_string_wrap = document.getElementsByClassName( 'search_string_wrap' ),
                    search_string_span = document.getElementsByClassName( 'search_string_span' );
                
                for ( let i = 0; i < search_string_wrap.length; i++ ) {
                    search_string_span[ i ].style.width = search_string_wrap[ i ].clientWidth + 'px';
                }
                
                div_search_city.onclick = function( event ) {

                    if ( ( event.target ).classList.contains( 'full_city' ) ) {
                        city = ( event.target ).textContent;
                    } else {
                        
                        if ( ( event.target ).tagName === 'SPAN' ) {

                            if ( ( event.target ).id === 'found_cities' ) {
                                city = ( event.target ).previousElementSibling.textContent;
                            } else {
                                city = ( event.target ).closest( '.full_city' ).textContent;
                            }

                        } else {
                            return;
                        }
                        
                    }

                    localStorage.setItem( 'status_background', 'yes' );
                    hide_body();
                    
                    setTimeout( () => {
                        window_select_city.style.cssText = '';
                    }, 500 );

                    form_search.value = city;
                    slug = search_cities.find( item => item.name.toLowerCase() == city.toLowerCase() ) || 
                           search_cities.find( item => item.slug.toLowerCase() == city.toLowerCase() );
                    city_slug = slug.slug;
                    city_name = slug.name;
                    city_name_id = slug.id;
                    location_span.innerHTML = city_name.trim();
                    footer_id.style.cssText = '';

                    if ( ( localStorage.getItem( 'status_notifications' ) === 'true' ) &&
                        ( localStorage.getItem( 'user_register_notifications' ) === 'true' ) &&
                        ( localStorage.getItem( 'status_firebase_token' ) === 'true' ) &&
                        ( city_name_id !== ( +localStorage.getItem( 'city_name_id' ) ) ) ) {
                        update_notifications( slug );
                    }
                    
                    set_local_storage( 'city_select', 'yes' );
                    remove_local_storage( 'lat' );
                    remove_local_storage( 'lon' );
                    remove_local_storage( 'select_get_info' );
                    local_storage( lat, lon, city_slug, city_name, city_name_id );
                    get_info_func( slug, index_get_info_new );
                    today.id = 'today';
                    today.innerHTML = 'Сегодня';

                };

            }

            let full_city = div_search_city.querySelectorAll( '.full_city' );
            
            if ( full_city.length > 0 ) {
                div_search_city.innerHTML += '<span id="found_cities" class="pos-abs">' + full_city.length + '</span>';
            }
                
        } else {
            search_null();
        }

    }

    function enter_more() {

        if ( list_timeout ) clearTimeout( list_timeout );
        if ( sub_list_timeout ) clearTimeout( sub_list_timeout );
        if ( div_search_city.classList.contains( 'p-all-0' ) ) div_search_city.classList.remove( 'p-all-0' );

        div_search_city.style.cssText = 'opacity: 1; margin-bottom: 15px !important;';
        div_search_city.innerHTML = '<span class="d-block" style="font-size: 20px; padding: 3px 3px;">Вводитe ещё</span>';
        list_cityes.style.cssText = '';

    }

    form_search.addEventListener( 'input', function() {

        if ( form_search.value.length > 2 ) { 
            
            let str = ( form_search.value ).trim(),
                search_cities;
            
            div_search_city.innerHTML = '<span></span>';
            div_search_city.prepend( min_preloader );
                
            let xml_search_name = new XMLHttpRequest();
            
            xml_search_name.open( 'GET', url + 'api/cities.json?name=' + str );
            xml_search_name.responseType = 'json';
            xml_search_name.setRequestHeader( 'Content-Type', 'application/json' );

            xml_search_name.onerror = function() {
                not_data_server();
            }
    
            xml_search_name.timeout = 5000;
    
            xml_search_name.ontimeout = function() {
                not_data_server();
            }

            xml_search_name.onload = function() {
                search_cities = xml_search_name.response;

                if ( form_search.value.length > 2 ) {
                    div_search_city.innerHTML = '<span></span>';
                    output_cities( search_cities, str );
                } else {
                    enter_more();
                }

            }

            xml_search_name.send();
            
        } else {
            enter_more();
        }

    } );

} // part_not_city - end
    
function not_city( lat, lon, city, slug, index_get_info_new ) {
    let xml_not_city = new XMLHttpRequest(),
        value_token = get_token(),
        data_send = JSON.stringify( { 'uuid': device.uuid,
                                      'token': value_token } );

    xml_not_city.open( 'POST', url + 'api/devices/check' );
    xml_not_city.setRequestHeader( 'Content-Type', 'application/json' );
    xml_not_city.responseType = 'json';

    not_connection( xml_not_city, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info_new', 
                    'main_index', 
                    inner_get_info_func, 
                    index_get_info_new );

    timeout( xml_not_city, 
             main, 
             text_not_connection_timeout, 
             'index_get_info_new', 
             'main_index', 
             inner_get_info_func, 
             index_get_info_new );

    xml_not_city.onload = function() {

    	let response_not_city = xml_not_city.response;

        if ( response_not_city.message ) {

            if ( ( localStorage.getItem( 'status_location' ) === '0' ) || 
                ( localStorage.getItem( 'status_location_accuracy' ) === '0' ) ) {
                current_location.classList.add( 'd-none' );
            }

            if ( localStorage.getItem( 'status_background' ) === 'yes' ) {
                hide_background();
                remove_local_storage( 'status_background' );
            } else {
                navigator.splashscreen.hide();
                show_body();
            }
    
            if ( localStorage.getItem( 'lat' ) && 
                localStorage.getItem( 'lon' ) &&
                localStorage.getItem( 'city_name' ) &&
                localStorage.getItem( 'city_slug' ) ) {
                city_slug = localStorage.getItem( 'city_slug' );
                city_name = localStorage.getItem( 'city_name' );
        
                if ( localStorage.getItem( 'click_choice_city' ) === '0' )  {   
                    
                    if ( city && lat && lon ) add_city_undefined_database( city, state );

                    window_city_func( window_change_city );
                    local_city.innerHTML = city_name;
                    
                    yes_change_city.onclick = function() {

                        setTimeout( () => {
                            window_change_city.style.cssText = '';
                        }, 500 );

                        window_city_func( window_select_city );
                        part_not_city( slug );
                    }
                    
                    no_change_city.onclick = function() {
                        
                        setTimeout( () => {
                            window_change_city.style.cssText = '';
                        }, 500 );
                        
                        if ( localStorage.getItem( 'index_get_info_new' ) && 
                             ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
                            index_get_info_new = JSON.parse( localStorage.getItem( 'index_get_info_new' ) );
                            location_span.innerHTML = city_name;
                            
                            inner_get_info_func( index_get_info_new, slug, height_header, day_week );
                            
                        } else {
                            localStorage.setItem( 'now_year', now_year );
                            get_city_and_info( lat, lon, city_slug, slug );
                        }

                        today.id = 'today';
                        today.innerHTML = 'Сегодня';
                        
                    }
                    
                } else {
                    window_city_func( window_select_city );
                    part_not_city( slug );
                }
        
            } else {
            
                if ( city && lat && lon ) add_city_undefined_database( city, state );

                window_city_func( window_select_city );
                part_not_city( slug );
            }

        } else {
            return;
        }

    }

    xml_not_city.send( data_send );

} // not_city - endend

function get_city( lat, lon ) {
    let xml_location = new XMLHttpRequest(),
        url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + ',' + lon + 
              '&no_annotations=1&language=en&limit=1&key=' + key,
        redefinition_city = { // переопределение города

            'Abkhazia': [
                {
                    city: [ 
                            'Pitsunda', 
                            'Ldzaa',
                            ],
                    state: [ 
                            'Autonomous Republic of Abkhazia',
                            ],
                    result: 'Gagra',
                },
                {
                    city: [ 
                            'Tkhubun', 
                            ],
                    state: [ 
                            'Autonomous Republic of Abkhazia',
                            ],
                    result: 'Gulripsh',
                },
                {
                    city: [ 
                            'New Athos', 
                            ],
                    state: [ 
                            'Autonomous Republic of Abkhazia',
                            ],
                    result: 'Gudauta',
                },
                {
                    city: [ 
                            'Sokhumi', 
                            'Alekseevka', 
                            ],
                    state: [ 
                            'Autonomous Republic of Abkhazia',
                            ],
                    result: 'Sukhum',
                },
            ],
            'Armenia': [
                {
                    city: [ 
                            'Tsamakaberd', 
                            ],
                    state: [ 
                            'Gegharkunik Province',
                            ],
                    result: 'Gavar',
                },
            ],
            'Australia': [
                {
                    city: [ 
                            'Gregory Hills', 
                            ],
                    state: [ 
                            'New South Wales',
                            ],
                    result: 'Sydney',
                },
            ],
            'Austria': [
                {
                    city: [ 
                            'Reindlmühl', 
                            ],
                    state: [ 
                            'Upper Austria',
                            ],
                    result: 'Gmunden',
                },
            ],
            'Azerbaijan': [
                {
                    city: [ 
                            'Nizami Raion',
                            ],
                    state: [ 
                            'Baku Ekonomic Zone',
                            ],
                    result: 'Baku City',
                },
            ],
            'Belarus': [
                {   
                    city: [ 
                            'Бараўлянскі сельскі Савет',
                            'Лугаваслабадскі сельскі Савет',
                            'Фаніпальскі сельскі Савет',
                            ],
                    state: [ 
                            'Minsk Region',
                            ],
                    result: 'Minsk',
                },
                {
                    city: [ 
                            'Ozyaritska-Slabadski rural council',
                            'Жодзінскі сельскі Савет',
                            'Zhodzina', 
                            ],
                    state: [
                            'Minsk Region',
                            ],
                    result: 'Smalyavichy',
                },
                {   
                    city: [ 
                            'Яромінскі сельскі Савет', 
                            ],
                    state: [ 
                            'Homyel Region',
                            ],
                    result: 'Homyel',
                },
                {   
                    city: [ 
                            'Чыркавіцкі сельскі Савет', 
                            ],
                    state: [ 
                            'Homyel Region',
                            ],
                    result: 'Svietlahorsk',
                },
                {   
                    city: [ 
                            'Янкавіцкі сельскі Савет', 
                            ],
                    state: [ 
                            'Vitsebsk Region',
                            ],
                    result: 'Rasony',
                },
                {   
                    city: [ 
                            'Бердаўскі сельскі Савет', 
                            ],
                    state: [ 
                            'Hrodna Region',
                            ],
                    result: 'Lida',
                },
                {   
                    city: [ 
                            'Любашаўскі сельскі Савет', 
                            ],
                    state: [ 
                            'Brest Region',
                            ],
                    result: 'Hantsavichy',
                },
            ],
            'Belgium': [
                {
                    city: [ 
                            'Tervuren', 
                            'Zaventem', 
                            ],
                    state: [
                            'Flemish Brabant',
                            ],
                    result: 'Brussels',
                },  
                {
                    city: [ 
                            'Veltem',
                            ],
                    state: [
                            'Flemish Brabant',
                            ],
                    result: 'Leuven',
                },  
                {
                    city: [ 
                            'Durbuy',
                            ],
                    state: [
                            'Luxembourg',
                            ],
                    result: 'Marche-en-Famenne',
                },  
                {
                    city: [ 
                            'Braine-le-Comte',
                            ],
                    state: [
                            'Hainaut',
                            ],
                    result: 'Soignies',
                },  
                {
                    city: [ 
                            'Roeselare',
                            ],
                    state: [
                            'West Flanders',
                            ],
                    result: 'Bruges',
                },                 
            ],
            'Bulgaria': [
    
            ],
            'Canada': [
                {
                    city: [ 
                            'Pointe-Claire', 
                            ],
                    state: [
                            'Quebec',
                            ],
                    result: 'Montreal',
                },  
                {
                    city: [ 
                            'Ottawa', 
                            ],
                    state: [
                            'Ontario',
                            ],
                    result: '(Old) Ottawa',
                }, 
            ],
            'China': [
                {
                    city: [ 
                            'Yinzhou District',
                            'Haishu District',
                            ],
                    state: [ 
                            'Zhejiang',
                            ],
                    result: 'Ningbo',
                },
            ],
            'Czechia': [
                { 
                    city: [ 
                            'Chýně', 
                            'Capital City of Prague', 
                            ],
                    state: [ 
                            'Central Bohemia',
                            'Prague',
                            ],
                    result: 'Prague',
                },
                { 
                    city: [ 
                            'Vlašim',
                            ],
                    state: [ 
                            'Central Bohemia',
                            ],
                    result: 'Benešov',
                }, 
            ],
            'Cyprus': [
                { 
                    city: [ 
                            'Germasogeia', 
                            ],
                    state: [ 
                            'Cyprus',
                            ],
                    result: 'Limassol',
                },
            ],
            'Denmark': [
                { 
                    city: [ 
                            'Klampenborg', 
                            ],
                    state: [ 
                            'Denmark',
                            ],
                    result: 'Copenhagen',
                },
                { 
                    city: [ 
                            'Vestervig', 
                            ],
                    state: [ 
                            'North Denmark Region',
                            ],
                    result: 'Thisted',
                }, 
            ],
            'Dominican Republic': [
                { 
                    city: [ 
                            'Dominicus', 
                            ],
                    state: [ 
                            'La Altagracia',
                            ],
                    result: 'Higüey',
                }, 
            ],
            'Estonia': [
                {
                    city: [ 
                            'Kohtla-Järve linn',
                            ],
                    state: [ 
                            'Järve linnaosa',
                            'Ahtme',
                            ],
                    result: 'Jõhvi',
                },
            ],
            'Finland': [
                {
                    city: [ 
                            'Orimattila', 
                            ],
                    state: [ 
                            'Mainland Finland',
                            ],
                    result: 'Lahti',
                },
                {
                    city: [ 
                            'Rautjärvi', 
                            ],
                    state: [ 
                            'Mainland Finland',
                            ],
                    result: 'Parikkala',
                },
            ],
            'France': [
                {
                    city: [ 
                            'Èze', 
                            'Villefranche-sur-Mer',
                            'Cannes',
                            'Antibes',
                            ],
                    state: [ 
                            "Provence-Alpes-Côte d'Azur",
                            ],
                    result: 'Nice',
                },
                {
                    city: [ 
                            'Villennes-sur-Seine', 
                            'Aubervilliers',
                            'Magny-les-Hameaux',
                            ],
                    state: [ 
                            "Île-de-France",
                            ],
                    result: 'Paris',
                },
                {
                    city: [ 
                            'Veigy-Foncenex', 
                            ],
                    state: [ 
                            'Auvergne-Rhône-Alpes',
                            ],
                    result: 'Thonon-les-Bains',
                },
                {
                    city: [ 
                            'Saint-Nizier-du-Moucherotte', 
                            ],
                    state: [ 
                            'Auvergne-Rhône-Alpes',
                            ],
                    result: 'Grenoble',
                },
                {
                    city: [ 
                            'Terres-de-Caux', 
                            ],
                    state: [ 
                            'Normandie',
                            ],
                    result: 'Rouen',
                },
            ],
            'Greece': [
                {
                    city: [ 
                            'Municipality of Palaio Faliro', 
                            ],
                    state: [ 
                            'Attica',
                            ],
                    result: 'Athens',
                },
                {
                    city: [ 
                            'Municipal Unit of Lefktro', 
                            'Municipal Unit of Avia', 
                            'Ditiki-Mani', 
                            'Municipality of Kalamata', 
                            ],
                    state: [ 
                            'Peloponnese, Western Greece and the Ionian',
                            ],
                    result: 'Municipal Unit of Tripoli',
                },
                {
                    city: [ 
                            'Dramia', 
                            ],
                    state: [ 
                            'Region of Crete',
                            ],
                    result: 'Chania',
                },
                {
                    city: [ 
                            'Nea Moudania', 
                            ],
                    state: [ 
                            'Macedonia and Thrace',
                            ],
                    result: 'Thessaloniki',
                },
            ],
            'Germany': [
                {
                    city: [ 
                            'Öhringen', 
                            ],
                    state: [ 
                            'Baden-Württemberg',
                            ],
                    result: 'Künzelsau',
                },
                {
                    city: [ 
                            'Ehningen', 
                            ],
                    state: [ 
                            'Baden-Württemberg',
                            ],
                    result: 'Böblingen',
                },
                {
                    city: [ 
                            'Könnern', 
                            ],
                    state: [ 
                            'Saxony-Anhalt',
                            ],
                    result: 'Bernburg',
                },
                {
                    city: [ 
                            'Bad Nauheim', 
                            ],
                    state: [ 
                            'Hesse',
                            ],
                    result: 'Friedberg (Hesse)',
                },
                {
                    city: [ 
                            'Darmstadt-Nord', 
                            'Darmstadt-Mitte',
                            'Bickenbach',
                            ],
                    state: [ 
                            'Hesse',
                            ],
                    result: 'Darmstadt',
                },
                {
                    city: [ 
                            'Offenbach am Main', 
                            'Großen-Buseck', 
                            ],
                    state: [ 
                            'Hesse',
                            ],
                    result: 'Frankfurt',
                },
                {
                    city: [ 
                            'Neuruppin', 
                            ],
                    state: [ 
                            'Brandenburg',
                            ],
                    result: 'Berlin',
                },
                {
                    city: [ 
                            'Halbe', 
                            ],
                    state: [ 
                            'Brandenburg',
                            ],
                    result: 'Lübben (Spreewald)',
                },
                {
                    city: [ 
                            'Bad Oeynhausen', 
                            ],
                    state: [ 
                            'North Rhine – Westphalia',
                            ],
                    result: 'Bielefeld',
                },
                {
                    city: [ 
                            'Nieheim', 
                            ],
                    state: [ 
                            'North Rhine-Westphalia',
                            ],
                    result: 'Höxter',
                },
                {
                    city: [ 
                            'Rheda-Wiedenbrück', 
                            ],
                    state: [ 
                            'North Rhine-Westphalia',
                            ],
                    result: 'Gütersloh',
                },
                {
                    city: [ 
                            'Norderstedt', 
                            ],
                    state: [ 
                            'Schleswig-Holstein',
                            ],
                    result: 'Bad Segeberg',
                },
                {
                    city: [ 
                            'Tangstedt', 
                            ],
                    state: [ 
                            'Schleswig-Holstein',
                            ],
                    result: 'Bad Oldesloe',
                },
                {
                    city: [ 
                            'Abentheuer', 
                            ],
                    state: [ 
                            'Rhineland-Palatinate',
                            ],
                    result: 'Birkenfeld',
                },
                {
                    city: [ 
                            'Bad Bergzabern', 
                            ],
                    state: [ 
                            'Rhineland-Palatinate',
                            ],
                    result: 'Landau in der Pfalz',
                },
                {
                    city: [ 
                            'Plate', 
                            ],
                    state: [ 
                            'Mecklenburg-Vorpommern',
                            ],
                    result: 'Parchim',
                },
                {
                    city: [ 
                            'Meitingen', 
                            ],
                    state: [ 
                            'Bavaria',
                            ],
                    result: 'Augsburg',
                },
                {
                    city: [ 
                            'Zell', 
                            ],
                    state: [ 
                            'Bavaria',
                            ],
                    result: 'Hof',
                },
                {
                    city: [ 
                            'Drochtersen', 
                            ],
                    state: [ 
                            'Lower Saxony',
                            ],
                    result: 'Stade',
                },
                {
                    city: [ 
                            'Sassenburg', 
                            ],
                    state: [ 
                            'Lower Saxony',
                            ],
                    result: 'Gifhorn',
                },
                {
                    city: [ 
                            'Seevetal', 
                            ],
                    state: [ 
                            'Lower Saxony',
                            ],
                    result: 'Winsen (Luhe)',
                },
                {
                    city: [ 
                            'Ispringen', 
                            ],
                    state: [ 
                            'Baden-Württemberg',
                            ],
                    result: 'Pforzheim',
                },
                {
                    city: [ 
                            'Ellwangen', 
                            ],
                    state: [ 
                            'Baden-Württemberg',
                            ],
                    result: 'Stuttgart',
                },
            ],
            'Georgia': [
                {
                    city: [ 
                            'Akhalubani', 
                            'Tsilkani', 
                            ],
                    state: [ 
                            'Mtskheta-Mtianeti',
                            ],
                    result: 'Mtskheta',
                },{
                    city: [ 
                            'Dapnari', 
                            ],
                    state: [ 
                            'Imereti',
                            ],
                    result: 'Kutaisi',
                },
            ],
            'India': [
                {
                    city: [ 
                            'Arambol', 
                            'Pernem',
                            'Querim',
                            'Margao',
                            'Morjim',
                            ],
                    state: [ 
                            'Goa',
                            ],
                    result: 'Goa',
                },
                {
                    city: [ 
                            'Thachanatukkara', 
                            ],
                    state: [ 
                            'Kerala',
                            ],
                    result: 'Palakkad',
                },
                {
                    city: [ 
                            'Chemmalamattom', 
                            ],
                    state: [ 
                            'Kerala',
                            ],
                    result: 'Kottayam',
                },
                {
                    city: [ 
                            'Adimalathura', 
                            ],
                    state: [ 
                            'Kerala',
                            ],
                    result: 'Thiruvananthapuram',
                },
                {
                    city: [ 
                            'Devanahalli taluku', 
                            ],
                    state: [ 
                            'Karnataka',
                            ],
                    result: 'Devanahalli',
                },
                {
                    city: [ 
                            'Mahadevapura', 
                            ],
                    state: [ 
                            'Karnataka',
                            ],
                    result: 'Bengaluru',
                },
                {
                    city: [ 
                            'Kaup', 
                            ],
                    state: [ 
                            'Karnataka',
                            ],
                    result: 'Udupi',
                },
                {
                    city: [ 
                            'Kalkaji Tehsil', 
                            'New Delhi', 
                            ],
                    state: [ 
                            'Delhi',
                            ],
                    result: 'Delhi',
                },
                {
                    city: [ 
                            'Bhodwal Majri',
                            ],
                    state: [ 
                            'Haryana',
                            ],
                    result: 'Panipat',
                },
                {
                    city: [ 
                            'Swargashram', 
                            ],
                    state: [ 
                            'Uttarakhand',
                            ],
                    result: 'Rishikesh',
                },
                {
                    city: [ 
                            'Govardhan', 
                            'Jatipura', 
                            ],
                    state: [ 
                            'Uttar Pradesh',
                            ],
                    result: 'Mathura',
                },
                {
                    city: [ 
                            'Sunrakh', 
                            ],
                    state: [ 
                            'Uttar Pradesh',
                            ],
                    result: 'Vrindavan',
                },
                {
                    city: [ 
                            'Bhubaneswar Municipal Corporation', 
                            ],
                    state: [ 
                            'Odisha',
                            ],
                    result: 'Khurdha Municipality Boundary',
                },
                {
                    city: [ 
                            'Awalsiddhi', 
                            ],
                    state: [ 
                            'West Bengal',
                            ],
                    result: 'Kolkata',
                },
                {
                    city: [ 
                            'Durgauti', 
                            ],
                    state: [ 
                            'Bihar',
                            ],
                    result: 'Varanasi',
                },
                {
                    city: [ 
                            'Semmedu', 
                            ],
                    state: [ 
                            'Tamil Nadu',
                            ],
                    result: 'Coimbatore',
                },
                {
                    city: [ 
                            'Daurala', 
                            ],
                    state: [ 
                            'Uttar Pradesh',
                            ],
                    result: 'Meerut',
                },
            ],
            'Indonesia': [
                { 
                    city: [ 
                            'Dusun Mangsit', 
                            'Aik Berik',
                            'Lombok Tengah', 
                            ],
                    state: [
                            'West Nusa Tenggara',
                            ],
                    result: 'Lombok',
                }, 
                {
                    city: [ 
                            'Special Capital Region of Jakarta', 
                            'Special Region of Jakarta', 
                            ],
                    state: [
                            'Java',
                            ],
                    result: 'Jakarta',
                },
                {
                    city: [ 
                            'Sanur', 
                            'Cemagi', 
                            'Dauh Puri Kauh', 
                            'Renon',
                            'Cepaka',
                            'Ubud',
                            'Petulu',
                            'Penestanan',
                            'Mas',
                            'Lodtunduh',
                            'Jimbaran',
                            'Ungasan',
                            'Abang',
                            'Pecatu',
                            ],
                    state: [
                            'Bali',
                            ],
                    result: 'Denpasar',
                },
                {
                    city: [ 
                            'Amed', 
                            ],
                    state: [
                            'Bali',
                            ],
                    result: 'Amlapura',
                },
            ],
            'Ireland': [
                {
                    city: [ 
                            'Ongar', 
                            ],
                    state: [
                            'Leinster',
                            ],
                    result: 'Dublin',
                },
                {
                    city: [ 
                            'Clifden', 
                            'County Galway', 
                            ],
                    state: [
                            'Connacht',
                            'Conamara Municipal District',
                            ],
                    result: 'Galway',
                },
            ],
            'Italy': [
                { 
                    city: [ 
                            'Austis', 
                            'Crabonaxa/Villasimius', 
                            ],
                    state: [ 
                            'Sardinia',
                            ],
                    result: 'Island Sardinia',
                },
                { 
                    city: [ 
                            'Castiglione in Teverina', 
                            ],
                    state: [ 
                            'Lazio',
                            ],
                    result: 'Viterbo',
                },
                { 
                    city: [ 
                            'Uboldo', 
                            ],
                    state: [ 
                            'Lombardy',
                            ],
                    result: 'Varese',
                }, 
                {
                    city: [ 
                            'Spotorno', 
                            ],
                    state: [ 
                            'Liguria',
                            ],
                    result: 'Savona',
                },
                {
                    city: [ 
                            'San Casciano in Val di Pesa', 
                            ],
                    state: [ 
                            'Tuscany',
                            ],
                    result: 'Florence',
                },
                {
                    city: [ 
                            'Roseto degli Abruzzi', 
                            ],
                    state: [ 
                            'Abruzzo',
                            ],
                    result: 'Teramo',
                },
                {
                    city: [ 
                            'Colleverde',
                            ],
                    state: [ 
                            'Lazio',
                            ],
                    result: 'Rome',
                },
                {
                    city: [ 
                            'Berceto', 
                            ],
                    state: [ 
                            'Emilia-Romagna',
                            ],
                    result: 'Parma',
                },
                {
                    city: [ 
                            'Chiugiana', 
                            ],
                    state: [ 
                            'Umbria',
                            ],
                    result: 'Perugia',
                },
            ],
            'Israel': [
                {
                    city: [ 
                            'South Givatayim',  
                            'Bat Yam', 
                            'Rishon LeZion',
                            'Ramat Gan',
                            ],
                    state: [ 
                            'Tel-Aviv District',
                            'Center District',
                            ],
                    result: 'Tel-Aviv',
                },
                {
                    city: [ 
                            'Harish',
                            'Hadera',
                            ],
                    state: [ 
                            'Haifa District',
                            ],
                    result: 'Haifa',
                },
                {
                    city: [ 
                            'Sderot',
                            "Be'er Sheva",
                            ],
                    state: [ 
                            'South District',
                            ],
                    result: "Be’er-Sheva",
                },
                {
                    city: [ 
                            'Maalot Tarshiha',
                            ],
                    state: [ 
                            'North District',
                            ],
                    result: 'Nof HaGalil',
                },
            ],
            'Japan': [
                {
                    city: [ 
                            'Tsubata',
                            ],
                    state: [ 
                            'Ishikawa Prefecture',
                            ],
                    result: 'Kahoku',
                },
                {
                    city: [ 
                            'Tokorozawa',
                            ],
                    state: [ 
                            'Saitama Prefecture',
                            ],
                    result: 'Saitama',
                },
                { 
                    city: [ 
                            'Chiyoda', 
                            'Koto', 
                            ],
                    state: [
                            'Nishi-Kanda 3-chome',
                            'Ogibashi 3',
                            ],
                    result: 'Tokio',
                },
            ],
            'Jordan': [ // Иордания
            {
                city: [  
                        'Al Jizah', 
                        'Muaqqar Sub-District', 
                        'Quaismeh Sub-District', 
                        ],
                state: [ 
                        'Amman',
                        ],
                result: 'Amman',
            },
            ],
            'Kazakhstan': [
                {
                    city: [  
                            'Boralday', 
                            'Байсерке', 
                            'Гүлдала', 
                            ],
                    state: [ 
                            'Almaty Region',
                            ],
                    result: 'Almaty',
                },
                {
                    city: [  
                            'Saran, Kazakhstan', 
                            ],
                    state: [ 
                            'Karaganda Region',
                            ],
                    result: 'Karaganda',
                },
                {
                    city: [  
                            'Мичурин ауылдық округі', 
                            'Зачаганск', 
                            ],
                    state: [ 
                            'West Kazakhstan Region',
                            ],
                    result: 'Oral',
                },
                {
                    city: [  
                            'Карасу', 
                            'Челгаши', 
                            ],
                    state: [ 
                            'Kostanay Region',
                            ],
                    result: 'Karasu',
                },
                {
                    city: [  
                            'Айет', 
                            'Beimbet Mailin District', 
                            ],
                    state: [ 
                            'Kostanay Region',
                            ],
                    result: 'Ayet',
                },
                {
                    city: [  
                            'Косшы', 
                            ],
                    state: [ 
                            'Akmola Region',
                            ],
                    result: 'Astana',
                },
            ],
            'Latvia': [
                { 
                    city: [ 
                            'Mārupes pagasts',
                            'Babītes pagasts',
                            ],
                    state: [
                            'Mārupes novads',
                            'Beberi',
                            ],
                    result: 'Mārupe',
                },
                { 
                    city: [ 
                            'Grobiņas pagasts', 
                            ],
                    state: [
                            'Dienvidkurzemes novads',
                            ],
                    result: 'Grobiņa',
                },
                { 
                    city: [ 
                            'Slutišķi', 
                            ],
                    state: [
                            'Augšdaugavas novads',
                            ],
                    result: 'Daugavpils',
                },
                { 
                    city: [ 
                            'Carnikavas pagasts', 
                            ],
                    state: [
                            'Mežciems',
                            ],
                    result: 'Ādaži',
                },
            ],
            'Lithuania': [
                { 
                    city: [ 
                            'Paltininkai', 
                            'Kaišiadorys', 
                            ],
                    state: [
                            'Kaunas County',
                            ],
                    result: 'Kaunas',
                },
                { 
                    city: [ 
                            'Visaginas', 
                            ],
                    state: [
                            'Utena County',
                            ],
                    result: 'Utena',
                },
                { 
                    city: [ 
                            'Druskininkai', 
                            ],
                    state: [
                            'Alytus County',
                            ],
                    result: 'Alytus',
                },
            ],
            'Lebanon': [
                {
                    city: [ 
                            'Yanar',
                            'Burj El Brajneh',
                            ],
                    state: [ 
                            'Mount Lebanon Governorate',
                            ],
                    result: 'Baabda',
                },
            ],
            'Moldova': [
                {
                    city: [ 
                            'Ialoveni', 
                            'Slobozia', 
                            ],
                    state: [ 
                            'Ialoveni District',
                            ],
                    result: 'Chișinău',
                },
                {
                    city: [ 
                            'Peresecina', 
                            ],
                    state: [ 
                            'Orhei District',
                            ],
                    result: 'Orhei',
                },
                {
                    city: [ 
                            'Cruglic', 
                            ],
                    state: [ 
                            'Criuleni District',
                            ],
                    result: 'Criuleni',
                },
                {
                    city: [ 
                            'Bender City Council', 
                            ],
                    state: [ 
                            'Pridnestrovie',
                            ],
                    result: 'Bender',
                },
            ],
            'Montenegro': [
                {
                    city: [ 
                            'Seoca', 
                            ],
                    state: [ 
                            'Budva Municipality',
                            ],
                    result: 'Budva',
                },
                {
                    city: [ 
                            'Bigova', 
                            ],
                    state: [ 
                            'Kotor Municipality',
                            ],
                    result: 'Kotor',
                },
            ],
            'New Zealand': [
                { 
                    city: [
                            'Maungakiekie-Tāmaki',
                            ],
                    state: [
                            'Auckland',
                            ],
                    result: 'Auckland',
                },
            ],
            'Netherlands': [
                { 
                    city: [
                            'Rutten',
                            ],
                    state: [
                            'Flevoland',
                            ],
                    result: 'Emmeloord',
                },
                { 
                    city: [
                            'Deventer',
                            ],
                    state: [
                            'Overijssel',
                            ],
                    result: 'Zwolle',
                },
                { 
                    city: [
                            'Hulst',
                            ],
                    state: [
                            'Zeeland',
                            ],
                    result: 'Middelburg',
                },
                { 
                    city: [
                            'Barendrecht',
                            ],
                    state: [
                            'South Holland',
                            ],
                    result: 'Rotterdam',
                },
                { 
                    city: [
                            'Amstelveen',
                            ],
                    state: [
                            'North Holland',
                            ],
                    result: 'Amsterdam',
                },
                { 
                    city: [
                            'Tiel',
                            ],
                    state: [
                            'Gelderland',
                            ],
                    result: 'Arnhem',
                },
            ],
            'Norway': [
                { 
                    city: [
                            'Rælingen',
                            'Nesoddtangen',
                            ],
                    state: [
                            'Øgardshøgda',
                            'Akershus',
                            ],
                    result: 'Oslo',
                },
                { 
                    city: [
                            'Stokke',
                            ],
                    state: [
                            'Vestfold',
                            ],
                    result: 'Tønsberg',
                },
            ],
            'Philippines': [
                {
                    city: [ 
                            'Quezon City',
                            'Makati',
                            'Pasay',
                            ],
                    state: [
                            'Metro Manila',
                            ],
                    result: 'Manila',
                },
                {
                    city: [ 
                            'Silang',
                            ],
                    state: [
                            'Cavite',
                            ],
                    result: 'Imus',
                },
                {
                    city: [ 
                            'Puerto Galera',
                            ],
                    state: [
                            'Oriental Mindoro',
                            ],
                    result: 'Calapan',
                },
            ],
            'Poland': [
                {
                    city: [ 
                            'Klecza Górna',
                            'Klecza Dolna',
                            ],
                    state: [
                            'Lesser Poland Voivodeship',
                            ],
                    result: 'Wadowice',
                },
                {
                    city: [ 
                            'Krynice',
                            'Hrebenne',
                            ],
                    state: [
                            'Lublin Voivodeship',
                            ],
                    result: 'Tomaszów Lubelski',
                },
                {
                    city: [ 
                            'Długie',
                            ],
                    state: [
                            'Lublin Voivodeship',
                            ],
                    result: 'Lublin',
                },
                {
                    city: [ 
                            'Ząbki',
                            'Kotowice',
                            ],
                    state: [
                            'Masovian Voivodeship',
                            ],
                    result: 'Warsaw',
                },
                {
                    city: [ 
                            'Stanisławów Pierwszy',
                            ],
                    state: [
                            'Masovian Voivodeship',
                            ],
                    result: 'Legionowo',
                },
                {
                    city: [ 
                            'Szczęsna', 
                            'Wola Worowska', 
                            ],
                    state: [
                            'Masovian Voivodeship',
                            ],
                    result: 'Gróejc',
                },
                {
                    city: [ 
                            'Milanówek', 
                            ],
                    state: [
                            'Masovian Voivodeship',
                            ],
                    result: 'Grodzisk Mazowiecki',
                },
                {
                    city: [ 
                            'Latchorzew', 
                            ],
                    state: [
                            'Masovian Voivodeship',
                            ],
                    result: 'Ożarów Mazowiecki',
                },
                {
                    city: [ 
                            'Skarżysko-Kamienna',
                            'Sielpia Wielka',
                            ],
                    state: [
                            'Holy Cross Voivodeship',
                            ],
                    result: 'Kielce',
                },
                {
                    city: [ 
                            'Zwardoń',
                            ],
                    state: [
                            'Silesian Voivodeship',
                            ],
                    result: 'Żywiec',
                },
                {
                    city: [ 
                            'Jastarnia',
                            ],
                    state: [
                            'Pomeranian Voivodeship',
                            ],
                    result: 'Puck',
                },
                {
                    city: [ 
                            'Smolec',
                            ],
                    state: [
                            'Lower Silesian Voivodeship',
                            ],
                    result: 'Wroclaw',
                },
                {
                    city: [ 
                            'Rewal',
                            'Dygowo',
                            ],
                    state: [
                            'West Pomeranian Voivodeship',
                            ],
                    result: 'Gryfice',
                },
                {
                    city: [ 
                            'Piecnik',
                            ],
                    state: [
                            'West Pomeranian Voivodeship',
                            ],
                    result: 'Wałcz',
                },
            ],
            'Portugal': [
                {
                    city: [ 
                            'Seixal', 
                            'Cascais', 
                            'Torres Vedras', 
                            ],
                    state: [
                            'Álamo',
                            'Cova da Raposa',
                            'Santo António do Estoril',
                            'A dos Cunhados e Maceira',
                            ],
                    result: 'Lisbon',
                },
                {
                    city: [ 
                            'Ponta Delgada',
                            'Ribeira Grande',
                            ],
                    state: [
                            'Azores',
                            'Vila Franca do Campo (São Miguel)',
                            ],
                    result: 'Island São Miguel',
                },
                {
                    city: [ 
                            'Amarante',
                            ],
                    state: [
                            'Macieiras',
                            'Agramonte',
                            ],
                    result: 'Porto',
                },
            ],
            'Russia': [
                {
                    city: [
                            'Moskovsky Settlement',
                            'Solnechnogorsky District',
                            'Беседы', 
                            'Balashikhinsky District',
                            'Razvilka',
                            'Konstantinovo',
                            'Reutov',
                            'Lopatino',
                            'Dzerzhinsky',
                            'Лужки',
                            'Malakhovka',
                            'Oktyabrskiy',
                            'поселение Внуковское',
                            ], 
                    state: [
                            'Moscow',
                            'Moscow Oblast',
                            ],
                    result: 'Moscow',
                },
                {
                    city: [ 
                            'Vniissok', 
                            'Борки',
                            "Zarech'e",
                            'Romashkovo',
                            'Сосны',
                            'Лапино',
                            'Nemchinovka',
                            'Novoivanovskoe',
                            'Одинцовский городской округ',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Odintsovo',
                },
                {
                    city: [ 
                            'Клоково', 
                            ],
                    state: [
                            'Moscow',
                            ],
                    result: 'Troitsk',
                },
                {
                    city: [ 
                            'Ivanteyevka',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Pushkino',
                },
                {
                    city: [ 
                            'Детково', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Chekhov',
                },
                {
                    city: [ 
                            'Ramensky District',
                            'Dergayevo',
                            "Il’inskiy",
                            'Вишняково',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Ramenskoye',
                },
                {
                    city: [ 
                            'Mozhaysky District',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Mozhaisk',
                },
                {
                    city: [ 
                            'Тараканово',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Solnechnogorsk',
                },
                {
                    city: [ 
                            'Афанасово',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Klin',
                },
                {
                    city: [ 
                            'Бурцево',
                            'Shakhovskaya Urban Okrug',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Shakhovskaya',
                },
                {
                    city: [ 
                            'Likino-Dulyovo',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Orekhovo-Zuyevo',
                },
                {
                    city: [ 
                            'Dmitrovsky District',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Dmitrov',
                },
                {
                    city: [ 
                            'Pokrovskoe',
                            'Дачный КГБ',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Zvenigorod',
                },
                {
                    city: [ 
                            'Novovolkovo',
                            'Городище',
                            'Dorokhovo',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Ruza',
                },
                {
                    city: [ 
                            'Yurlovo',
                            'Мышецкое',
                            'Khimki Urban Okrug',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Khimki',
                },
                {
                    city: [ 
                            'Мещерино', 
                            'Bulatnikovo', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Vidnoye',
                },
                {
                    city: [ 
                            'Еремеево',
                            'Троица',
                            'Агрогородок',
                            'Агрогородок',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Istra',
                },
                {
                    city: [ 
                            'Nagornoye', 
                            'Mytishchi Urban Okrug', 
                            'Никульское', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Mytishchi',
                },
                {
                    city: [ 
                            'Наро-Фоминский городской округ', 
                            'Aprelevka', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Naro-Fominsk',
                },
                {
                    city: [ 
                            'Козино', 
                            'Красный Посёлок', 
                            'Buzlanovo',
                            'Михалково',
                            'Krasnogorsky District',
                            'Putilkovo',
                            'Тимошкино',
                            'Отрадное',
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Krasnogorsk',
                },
                {
                    city: [ 
                            'Барканово', 
                            'Peresvet', 
                            'Sergiyevo-Posadsky District', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Sergiyev Posad',
                },
                {
                    city: [ 
                            'Bobrovo', 
                            'Александровка', 
                            'Novodrozhzhino', 
                            'Dubrovitsy', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Podolsk',
                },
                {
                    city: [ 
                            'Voskresensky District', 
                            'Yurasovo', 
                            'Большое Колычево', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Voskresensk',
                },
                {
                    city: [ 
                            'Подлипки', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Lukhovitsy',
                },
                {
                    city: [ 
                            'Банино', 
                            'Protvino', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Serpukhov',
                },
                {
                    city: [ 
                            'Medvezhyi Ozyora', 
                            'Zagoryanskiy', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Shchyolkovo',
                },
                {
                    city: [ 
                            'Domodedovsky District', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Domodedovo',
                },
                {
                    city: [ 
                            'Lytkarino', 
                            'Kraskovo', 
                            ],
                    state: [
                            'Moscow Oblast',
                            ],
                    result: 'Lyubertsy',
                },
                {
                    city: [ 
                            'Andreyevka', 
                            ],
                    state: [
                            'Moscow Oblast',
                            'Moscow',
                            ],
                    result: 'Zelenograd',
                },
                {
                    city: [ 
                            'Троицкое', 
                            ],
                    state: [
                            'Kursk Oblast',
                            ],
                    result: 'Zheleznogorsk',
                },
                {
                    city: [ 
                            'Burachki', 
                            ],
                    state: [
                            'Pskov Oblast',
                            ],
                    result: 'Sebezh',
                },
                {
                    city: [ 
                            'Беляницкое сельское поселение', 
                            ],
                    state: [
                            'Ivanovo Oblast',
                            ],
                    result: 'Ivanovo',
                },
                {
                    city: [ 
                            'Таврово', 
                            ],
                    state: [
                            'Belgorod Oblast',
                            ],
                    result: 'Belgorod',
                },
                {
                    city: [ 
                            'Толмачево', 
                            ],
                    state: [
                            'Bryansk Oblast',
                            ],
                    result: 'Bryansk',
                },
                {
                    city: [ 
                            'Октябрьское сельское поселение', 
                            ],
                    state: [
                            'Ulyanovsk Oblast',
                            ],
                    result: 'Radishchevo',
                },
                {
                    city: [ 
                            'сельское поселение Эльбрус', 
                            'Terskol', 
                            ],
                    state: [
                            'Kabardino-Balkaria',
                            ],
                    result: 'Tyrnyauz',
                },
                {
                    city: [ 
                            'Мурзино', 
                            'сельское поселение Деревня Ерденево', 
                            ],
                    state: [
                            'Kaluga Oblast',
                            ],
                    result: 'Maloyaroslavets',
                },
                {
                    city: [ 
                            'городское поселение Белоусово', 
                            ],
                    state: [
                            'Kaluga Oblast',
                            ],
                    result: 'Zhukov',
                },
                {
                    city: [ 
                            'Волковское', 
                            ],
                    state: [
                            'Kaluga Oblast',
                            ],
                    result: 'Tarusa',
                },
                {
                    city: [ 
                            'Новомихайловское', 
                            'Совхоз "Боровский"', 
                            ],
                    state: [
                            'Kaluga Oblast',
                            ],
                    result: 'Borovsk',
                },
                {
                    city: [
                            'Pavlovsk',
                            'Yanino-1',  
                            'Telmana',
                            'Peterhof',
                            'Sestroretsk',
                            'Ladoga',
                            'Sertolovo',
                            'Мистолово',
                            'Romanovka',
                            'Pargolovo',
                            'Kudrovo',
                            'Таицкое городское поселение',
                            ],
                    state: [
                            'Saint Petersburg',
                            'Leningrad Oblast',
                            'Leningrad oblast',
                            ],
                    result: 'Saint Petersburg',
                },
                {
                    city: [ 
                            'Toksovo', 
                            'Агалатовское сельское поселение', 
                            'Новосергиевка', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Vsevolozhsk',
                },
                {
                    city: [ 
                            'Koporye', 
                            'Низинское сельское поселение', 
                            ],
                    state: [
                            'Leningrad oblast',
                            'Leningrad Oblast',
                            ],
                    result: 'Lomonosov',
                },
                {
                    city: [ 
                            'Царицыно Озеро', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Tikhvin',
                },
                {
                    city: [ 
                            'Otradnoye', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Kirovsk',
                },
                {
                    city: [ 
                            'Ivangorod', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Kingisepp',
                },
                {
                    city: [ 
                            'Старая Серёдка', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Luga',
                },
                {
                    city: [ 
                            'Nikolskoye', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Tosno',
                },
                {
                    city: [ 
                            'Лидь', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Lid',
                },
                {
                    city: [ 
                            'Подпорожское городское поселение', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Podporozhye',
                },
                {
                    city: [ 
                            'Дружногорское городское поселение', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Gatchina',
                },
                {
                    city: [ 
                            'Петровское сельское поселение', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Priozersk',
                },
                {
                    city: [ 
                            'Глажевское сельское поселение', 
                            ],
                    state: [
                            'Leningrad Oblast',
                            ],
                    result: 'Kirishi',
                },
                {
                    city: [ 
                            'Деревянское сельское поселение', 
                            ],
                    state: [
                            'Republic of Karelia',
                            ],
                    result: 'Petrozavodsk',
                },
                {
                    city: [ 
                            'Поляны', 
                            ],
                    state: [
                            'Ryazan Oblast',
                            ],
                    result: 'Ryazan',
                },
                {
                    city: [ 
                            'Syntul', 
                            ],
                    state: [
                            'Ryazan Oblast',
                            ],
                    result: 'Kasimov',
                },
                {
                    city: [ 
                            'Novomichurinsk', 
                            ],
                    state: [
                            'Ryazan Oblast',
                            ],
                    result: 'Pronsk',
                },
                {
                    city: [ 
                            'Курджиново', 
                            'Ершов', 
                            ],
                    state: [
                            'Karachay-Cherkessia',
                            ],
                    result: 'Pregradnaya',
                },
                {
                    city: [ 
                            'Семеновское', 
                            ],
                    state: [
                            'Tver Oblast',
                            ],
                    result: 'Tver',
                },
                {
                    city: [ 
                            'Щеколдино', 
                            ],
                    state: [
                            'Tver Oblast',
                            ],
                    result: 'Zubtsov',
                },
                {
                    city: [ 
                            'Berezayka', 
                            ],
                    state: [
                            'Tver Oblast',
                            ],
                    result: 'Bologoe',
                },
                {
                    city: [ 
                            'Varaksino', 
                            ],
                    state: [
                            'Tver Oblast',
                            ],
                    result: 'Konakovo',
                },
                {
                    city: [ 
                            'Shakin',
                            ],
                    state: [
                            'Volgograd Oblast',
                            ],
                    result: 'Kumylzhenskaya',
                },
                {
                    city: [ 
                            'Dubovka',
                            ],
                    state: [
                            'Volgograd Oblast',
                            ],
                    result: 'Volgograd',
                },
                {
                    city: [ 
                            'Виновка',
                            ],
                    state: [
                            'Volgograd Oblast',
                            ],
                    result: 'Gorodische',
                },
                {
                    city: [ 
                            "Velikiy Oktyabr'",
                            ],
                    state: [
                            'Volgograd Oblast',
                            ],
                    result: 'Srednyaya Akhtuba',
                },
                {
                    city: [ 
                            'Гизельское сельское поселение',
                            ],
                    state: [
                            'Republic of North Ossetia – Alania',
                            ],
                    result: 'Vladikavkaz',
                },
                {
                    city: [ 
                            'Вухтым',
                            ],
                    state: [
                            'Komi Republic',
                            ],
                    result: 'Objachevo',
                },
                {
                    city: [ 
                            'Engels',
                            ],
                    state: [
                            'Saratov Oblast',
                            ],
                    result: 'Saratov',
                },
                {
                    city: [ 
                            'Bagrationovsky District', 
                            'Переславское',
                            'Krasnopolye',
                            'Черёмхово',
                            'Медведевка',
                            'Bolshoye Isakovo',
                            'Холмогоровка',
                            ],
                    state: [
                            'Kaliningrad',
                            ],
                    result: 'Kaliningrad',
                },
                {
                    city: [ 
                            'Бор', 
                            'Заволжское сельское поселение',
                            'Григорьевское',
                            'Кузнечихинское сельское поселение',
                            'Лютово',
                            ],
                    state: [
                            'Yaroslavl Oblast',
                            ],
                    result: 'Yaroslavl',
                },
                {
                    city: [ 
                            'Фоминское', 
                            ],
                    state: [
                            'Yaroslavl Oblast',
                            ],
                    result: 'Tutaev',
                },
                {
                    city: [ 
                            'Троицкая Слобода', 
                            ],
                    state: [
                            'Yaroslavl Oblast',
                            ],
                    result: 'Pereslavl-Zalessky',
                },
                {
                    city: [ 
                            'Назарово', 
                            'Назаровское сельское поселение', 
                            ],
                    state: [
                            'Yaroslavl Oblast',
                            ],
                    result: 'Rybinsk',
                },
                {
                    city: [ 
                            'Апраксинское сельское поселение',
                            ],
                    state: [
                            'Kostroma Oblast',
                            ],
                    result: 'Kostroma',
                },
                {
                    city: [ 
                            'Анкудиновка', 
                            'Подновье', 
                            'Bor', 
                            ],
                    state: [
                            'Nizhny Novgorod Oblast',
                            ],
                    result: 'Nizhny Novgorod',
                },
                {
                    city: [ 
                            'Зубово', 
                            ],
                    state: [
                            'Nizhny Novgorod Oblast',
                            ],
                    result: 'Gorodets',
                },
                {
                    city: [ 
                            'Хабарское', 
                            ],
                    state: [
                            'Nizhny Novgorod Oblast',
                            ],
                    result: 'Dzerzhinsk',
                },
                {
                    city: [ 
                            'Дьяково', 
                            ],
                    state: [
                            'Nizhny Novgorod Oblast',
                            ],
                    result: 'Semyonov',
                },
                {
                    city: [ 
                            'Афонино', 
                            'Черемисское', 
                            ],
                    state: [
                            'Nizhny Novgorod Oblast',
                            ],
                    result: 'Kstovo',
                },
                {
                    city: [ 
                            'Kuyuki',
                            'Сокуры',
                            'Набережно-Морквашское сельское поселение',
                            'Семиозерское сельское поселение',
                            ],
                    state: [
                            'Tatarstan',
                            ],
                    result: 'Kazan',
                },
                {
                    city: [ 
                            'Биклянское сельское поселение',
                            ],
                    state: [
                            'Tatarstan',
                            ],
                    result: 'Naberezhnye Chelny',
                },
                {
                    city: [ 
                            'Верхнеуслонское сельское поселение',
                            ],
                    state: [
                            'Tatarstan',
                            ],
                    result: 'Verhnij Uslon',
                },
                {
                    city: [ 
                            'Лекаревское сельское поселение',
                            ],
                    state: [
                            'Tatarstan',
                            ],
                    result: 'Yelabuga',
                },
                {
                    city: [ 
                            'Балгазын', 
                            ],
                    state: [
                            'Tuva Republic',
                            ],
                    result: 'Balgazyn',
                },
                {
                    city: [ 
                            'Khvoyninsky District', 
                            ],
                    state: [
                            'Novgorod Oblast',
                            ],
                    result: 'Khvoynaya',
                },
                {
                    city: [ 
                            'Bessonovka', 
                            ],
                    state: [
                            'Penza Oblast',
                            ],
                    result: 'Penza',
                },
                {
                    city: [ 
                            'Июс', 
                            ],
                    state: [
                            'Republic of Khakassia',
                            ],
                    result: 'Kopyovo',
                },
                {
                    city: [ 
                            'Калинино', 
                            'Калининский сельсовет', 
                            'Московский сельсовет', 
                            'Чапаево', 
                            ],
                    state: [
                            'Republic of Khakassia',
                            ],
                    result: 'Ust-Abakan',
                },
                {
                    city: [ 
                            'сельское поселение Александровка', 
                            'сельское поселение Подстёпки', 
                            'сельское поселение Приморский', 
                            'сельское поселение Васильевка', 
                            'Tolyatti',
                            'Zolnoe',
                            'Bakhilova Polyana', 
                            ],
                    state: [
                            'Samara Oblast',
                            ],
                    result: 'Togliatti',
                },
                {
                    city: [ 
                            'Stroykeramika',
                            'Novokuybyshevsk',
                            'Smyshlyayevka',
                            'Berezovyy Gay',
                            'городское поселение Новосемейкино', 
                            ],
                    state: [
                            'Samara Oblast',
                            ],
                    result: 'Samara',
                },
                {
                    city: [  
                            'Starosemeykino', 
                            ],
                    state: [
                            'Samara Oblast',
                            ],
                    result: 'Krasnyy Yar',
                },
                {
                    city: [ 
                            'Bely Yar', 
                            'сельское поселение Солнечный', 
                            ],
                    state: [
                            'Khanty-Mansiysk Autonomous Okrug – Ugra',
                            ],
                    result: 'Surgut',
                },
                {
                    city: [ 
                            'Nyagan', 
                            ],
                    state: [
                            'Khanty-Mansiysk Autonomous Okrug – Ugra',
                            ],
                    result: "Oktyabr'skoe",
                },
                {
                    city: [ 
                            'Isluchinsk', 
                            'Megion', 
                            ],
                    state: [
                            'Khanty-Mansiysk Autonomous Okrug – Ugra',
                            ],
                    result: 'Nizhnevartovsk',
                },
                {
                    city: [ 
                            'Taydakovo', 
                            ],
                    state: [
                            'Tula Oblast',
                            ],
                    result: 'Yasnogorsk',
                },
                {
                    city: [ 
                            'Schokino', 
                            ],
                    state: [
                            'Tula Oblast',
                            ],
                    result: 'Tula',
                },
                {
                    city: [ 
                            'Урусово', 
                            ],
                    state: [
                            'Tula Oblast',
                            ],
                    result: 'Venyov',
                },
                {
                    city: [ 
                            'Селецкое сельское поселение', 
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Vladimir',
                },
                {
                    city: [ 
                            'Радужный', 
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Raduzhny',
                },
                {
                    city: [ 
                            'Струнино', 
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Alexandrov',
                },
                {
                    city: [ 
                            'Pokrov',
                            'Болдино',
                            'Петушинское сельское поселение',
                            'Нагорный',
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Petushki',
                },
                {
                    city: [ 
                            'Кипревское сельское поселение', 
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Kirzhach',
                },
                {
                    city: [ 
                            'Вишняково', 
                            ],
                    state: [
                            'Vladimir Oblast',
                            ],
                    result: 'Sobinka',
                },
                {
                    city: [ 
                            'Усть-Утяк', 
                            ],
                    state: [
                            'Kurgan Oblast',
                            ],
                    result: 'Kurgan',
                },
                {
                    city: [ 
                            'Русско-Лашминское сельское поселение', 
                            ],
                    state: [
                            'Republic of Mordovia',
                            ],
                    result: 'Kovylkino',
                },
                {
                    city: [ 
                            'Акшенас', 
                            ],
                    state: [
                            'Republic of Mordovia',
                            ],
                    result: 'Ruzaevka',
                },
                {
                    city: [ 
                            'Анна', 
                            ],
                    state: [
                            'Voronezh Oblast',
                            ],
                    result: 'Anna',
                },
                {
                    city: [ 
                            'Петропавловское сельское поселение', 
                            ],
                    state: [
                            'Voronezh Oblast',
                            ],
                    result: 'Liski',
                },
                {
                    city: [ 
                            'Горки', 
                            ],
                    state: [
                            'Voronezh Oblast',
                            ],
                    result: 'Novaya Usman',
                },
                {
                    city: [ 
                            'Подгоренское сельское поселение', 
                            ],
                    state: [
                            'Voronezh Oblast',
                            ],
                    result: 'Rossosh',
                },
                {
                    city: [ 
                            'Baranovka',
                            'Sirius',
                            'Estosadok',
                            'Krasnaya Polyana',
                            'Dagomys',
                            'Razdolnoye',
                            'Vysokoye',
                            'Nizhnyaya Shilovka',
                            'Nizhneye Uch-Dere',
                            'Ordynka',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Sochi',
                },
                {
                    city: [ 
                            'Джубгское городское поселение',
                            'Dzhubga',
                            'посёлок турбазы "Приморская"',
                            'Lermontovo',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Tuapse',
                },
                {
                    city: [ 
                            'Shirvanskaya',
                            'Khadyzhensk',
                            'Mezmay',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Apsheronsk',
                },
                {
                    city: [ 
                            'Sukko',
                            'городской округ Новороссийск',
                            'Abrau-Dyurso',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Novorossiysk',
                },
                {
                    city: [ 
                            'Rassvet',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Anapa',
                },
                {
                    city: [ 
                            'Газырское сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Vyselki',
                },
                {
                    city: [ 
                            'Кущёвское сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Kushchovskaya',
                },
                {
                    city: [ 
                            'Nizhnebakanskaya',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Krymsk',
                },
                {
                    city: [ 
                            'Прикубанский округ',
                            'Yelizavetinskaya',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Krasnodar',
                },
                {
                    city: [ 
                            'Novopetrovskaya',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Pavlovskaya',
                },
                {
                    city: [ 
                            'Saratovskaya',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Goryachiy Klyuch',
                },
                {
                    city: [ 
                            'Afipskiy',
                            'Ilskiy',
                            'Ubinskaya',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Severskaya',
                },
                {
                    city: [ 
                            'Новоукраинское сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Gulkevichi',
                },
                {
                    city: [ 
                            'Прикубанское сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Slavyansk-na-Kubani',
                },
                {
                    city: [ 
                            'Arkhipo-Osipovka',
                            'Krinitsa',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Gelendzhik',
                },
                {
                    city: [ 
                            'Veselovka',
                            'Голубицкое сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Temryuk',
                },
                {
                    city: [ 
                            'Платнировское сельское поселение',
                            ],
                    state: [
                            'Krasnodar Krai',
                            ],
                    result: 'Korenovsk',
                },
                {
                    city: [ 
                            'Novaya Adygeya',
                            'Yablonovskiy',
                            'Старобжегокайское сельское поселение',
                            ],
                    state: [
                            'Republic of Adygea',
                            ],
                    result: 'Takhtamukai',
                },
                {
                    city: [ 
                            'Kamennomostskiy',
                            ],
                    state: [
                            'Republic of Adygea',
                            ],
                    result: 'Maykop',
                },
                {
                    city: [ 
                            'Михновское сельское поселение', 
                            'Хохловское сельское поселение', 
                            'Koryuzino', 
                            ],
                    state: [
                            'Smolensk Oblast',
                            ],
                    result: 'Smolensk',
                },
                {
                    city: [ 
                            'Krasniy Yar', 
                            ],
                    state: [
                            'Altai Krai',
                            ],
                    result: 'Biysk',
                },
                {
                    city: [ 
                            'Айский сельсовет', 
                            ],
                    state: [
                            'Altai Krai',
                            ],
                    result: 'Altayskoye',
                },
                {
                    city: [ 
                            'Новая Чемровка', 
                            'Зональное', 
                            ],
                    state: [
                            'Altai Krai',
                            ],
                    result: 'Zonalnoe',
                },
                {
                    city: [ 
                            'Айский сельсовет', 
                            ],
                    state: [
                            'Altai Krai',
                            ],
                    result: 'Altayskoye',
                },
                {
                    city: [ 
                            'Firsovo', 
                            ],
                    state: [
                            'Altai Krai',
                            ],
                    result: 'Novoaltaysk',
                },
                {
                    city: [ 
                            'Артыбашское сельское поселение', 
                            ],
                    state: [
                            'Altai Republic',
                            ],
                    result: 'Turochak',
                },
                {
                    city: [ 
                            'Turbaza Katun', 
                            'Elekmonar', 
                            ],
                    state: [
                            'Altai Republic',
                            ],
                    result: 'Chemal',
                },
                {
                    city: [ 
                            'Terekta',
                            ],
                    state: [
                            'Altai Republic',
                            ],
                    result: 'Ust-Koksa',
                },
                {
                    city: [ 
                            'Mayma', 
                            ],
                    state: [
                            'Altai Republic',
                            ],
                    result: 'Gorno-Altaysk',
                },
                {
                    city: [ 
                            'Khmeli', 
                            'Объект КРП', 
                            'Ясыри', 
                            'Krasnokamsk', 
                            ],
                    state: [
                            'Perm Krai',
                            ],
                    result: 'Perm',
                },
                {
                    city: [ 
                            'Krasnoyarsk Urban Okrug', 
                            'Еловое', 
                            ],
                    state: [
                            'Krasnoyarsk Krai',
                            ],
                    result: 'Krasnoyarsk',
                },
                {
                    city: [ 
                            'городской округ Норильск', 
                            ],
                    state: [
                            'Krasnoyarsk Krai',
                            ],
                    result: 'Norilsk',
                },
                {
                    city: [ 
                            'Есаульский сельсовет', 
                            ],
                    state: [
                            'Krasnoyarsk Krai',
                            ],
                    result: 'Beryozovka',
                },
                {
                    city: [ 
                            'городское поселение Емельяново', 
                            ],
                    state: [
                            'Krasnoyarsk Krai',
                            ],
                    result: 'Yemelyanovo',
                },
                {
                    city: [ 
                            'Араданский сельсовет', 
                            ],
                    state: [
                            'Krasnoyarsk Krai',
                            ],
                    result: 'Aradan',
                },
                {
                    city: [ 
                            'Verkhnyaya Pyshma', 
                            'Beryozovsky',
                            'Прохладный',
                            'Сагра',
                            'Патруши',
                            'Исток',
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Yekaterinburg',
                },
                {
                    city: [ 
                            'городской округ Сухой Лог', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Sukhoy Log',
                },
                {
                    city: [ 
                            'Черноисточинск', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Nizhny Tagil',
                },
                {
                    city: [ 
                            'Курганово', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Polevskoy',
                },
                {
                    city: [ 
                            'Аятское', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Nevyansk',
                },
                {
                    city: [ 
                            'Кисловское', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Kamensk-Uralsky',
                },
                {
                    city: [ 
                            'городской округ Первоуральск', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Pervouralsk',
                },
                {
                    city: [ 
                            'Малое Седельниково', 
                            'Бобровский', 
                            'Aramil', 
                            ],
                    state: [
                            'Sverdlovsk Oblast',
                            ],
                    result: 'Sysert',
                },
                {
                    city: [ 
                            'Князе-Волконское', 
                            ],
                    state: [
                            'Khabarovsk Krai',
                            ],
                    result: 'Knyaze-Volkonskoe',
                },
                {
                    city: [ 
                            'Приамурский', 
                            ],
                    state: [
                            'Jewish Autonomous Oblast',
                            ],
                    result: 'Khabarovsk',
                },
                {
                    city: [ 
                            'Большеустьикинское', 
                            'Ишалино', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Bolsheustyikinskoye',
                },
                {
                    city: [ 
                            'Salavat', 
                            'Наумовка', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Sterlitamak',
                },
                {
                    city: [ 
                            'Чулпан', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Maloyaz',
                },
                {
                    city: [ 
                            'Зелёная Поляна', 
                            'Аскарово', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Askarovo',
                },
                {
                    city: [ 
                            'Mikhailovka', 
                            'Булгаковский сельсовет', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Ufa',
                },
                {
                    city: [ 
                            'Старокурмашево', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Kushnarenkovo',
                },
                {
                    city: [ 
                            'Sibay', 
                            ],
                    state: [
                            'Bashkortostan',
                            ],
                    result: 'Baymak',
                },
                {
                    city: [ 
                            'Вербилово', 
                            ],
                    state: [
                            'Lipetsk Oblast',
                            ],
                    result: 'Lipetsk',
                },
                {
                    city: [ 
                            'Stanovlyansky District', 
                            ],
                    state: [
                            'Lipetsk Oblast',
                            ],
                    result: 'Stanovoye',
                },
                {
                    city: [ 
                            'Dvurechki', 
                            'Kamennoe', 
                            ],
                    state: [
                            'Lipetsk Oblast',
                            ],
                    result: 'Gryazi',
                },
                {
                    city: [ 
                            'Ленина', 
                            'Подгородне-Покровский сельсовет', 
                            'Подгородняя Покровка', 
                            ],
                    state: [
                            'Orenburg Oblast',
                            ],
                    result: 'Orenburg',
                },
                {
                    city: [ 
                            'Сакмарский сельсовет', 
                            'Татаро-Каргалинский сельсовет', 
                            ],
                    state: [
                            'Orenburg Oblast',
                            ],
                    result: 'Sakmara',
                },
                {
                    city: [ 
                            'Бугуруслан', 
                            ],
                    state: [
                            'Orenburg Oblast',
                            ],
                    result: 'Buguruslan',
                },
                {
                    city: [ 
                            'Rastopulovka', 
                            ],
                    state: [
                            'Astrakhan Oblast',
                            ],
                    result: 'Astrakhan',
                },
                {
                    city: [ 
                            'Mikhaylovsk', 
                            'Ленинский район',
                            'Подлужное',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Stavropol',
                },
                {
                    city: [ 
                            'Goryachevodsky', 
                            'Novaya Proletarka',
                            'Подгорная',
                            'Inozemtsevo',
                            'Zheleznovodsk',
                            'Lermontov',
                            'Верблюдогорка',
                            'Kislovodsk',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Pyatigorsk',
                },
                {
                    city: [ 
                            'Каясула',
                            'Abdul-Gazy',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Neftekumsk',
                },
                {
                    city: [ 
                            'Budyonnovsky District',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Budyonnovsk',
                },
                {
                    city: [ 
                            'Levokumsky District',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Levokumskoye',
                },
                {
                    city: [ 
                            'Bezopasnoye',
                            ],
                    state: [
                            'Stavropol Krai',
                            ],
                    result: 'Donskoye',
                },
                {
                    city: [ 
                            'Грушевское сельское поселение', 
                            'Большелогское сельское поселение', 
                            'Большой Лог',
                            'Olginskaya',
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Rostov-on-Don',
                },
                {
                    city: [ 
                            'Ленина', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Aksay',
                },
                {
                    city: [ 
                            'Пролетарское сельское поселение', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Shakhty',
                },
                {
                    city: [ 
                            'Anikin', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Kamensk-Shakhtinsky',
                },
                {
                    city: [ 
                            'Zhukovskoye', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Peschanokopskoye',
                },
                {
                    city: [ 
                            'Пиховкинское сельское поселение', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Glubokiy',
                },
                {
                    city: [ 
                            'Komarovka',
                            'Taganrog City District', 
                            ],
                    state: [
                            'Rostov Oblast',
                            ],
                    result: 'Taganrog',
                },
                {
                    city: [ 
                            'Паренкина', 
                            ],
                    state: [
                            'Tyumen Oblast',
                            ],
                    result: 'Tyumen',
                },
                {
                    city: [ 
                            'Малая Куйсарина',
                            'Kusa',
                            ],
                    state: [
                            'Chelyabinsk Oblast',
                            ],
                    result: 'Miass',
                },
                {
                    city: [ 
                            'Oshurga', 
                            ],
                    state: [
                            'Mari El Republic',
                            ],
                    result: 'Yoshkar-Ola',
                },
                {
                    city: [ 
                            'Изи Кугунур', 
                            ],
                    state: [
                            'Mari El Republic',
                            ],
                    result: 'Sovetskiy',
                },
                {
                    city: [ 
                            'Aeroport', 
                            'Zonalnaya Stantsiya', 
                            'Naumovka', 
                            ],
                    state: [
                            'Tomsk Oblast',
                            ],
                    result: 'Tomsk',
                },
                {
                    city: [ 
                            'Богословское сельское поселение',
                            'Андреевское сельское поселение',
                            'Troitskoye', 
                            ],
                    state: [
                            'Omsk Oblast',
                            ],
                    result: 'Omsk',
                },
                {
                    city: [ 
                            'Бергамакское сельское поселение',
                            ],
                    state: [
                            'Omsk Oblast',
                            ],
                    result: 'Muromtsevo',
                },
                {
                    city: [ 
                            'Смычка', 
                            ],
                    state: [
                            'Tambov Oblast',
                            ],
                    result: 'Tambov',
                },
                {
                    city: [ 
                            'Michurinsky District', 
                            ],
                    state: [
                            'Tambov Oblast',
                            ],
                    result: 'Michurinsk',
                },
                {
                    city: [ 
                            'Забайкальский',
                            ],
                    state: [
                            'Zabaykalsky Krai',
                            ],
                    result: 'Chita',
                },
                {
                    city: [ 
                            'Катайск',
                            ],
                    state: [
                            'Kurgan Oblast',
                            ],
                    result: 'Katajsk',
                },
                {
                    city: [ 
                            'Октябрьский район',
                            'Kostino',
                            'Подберёзы',
                            'Pasegovo',
                            ],
                    state: [
                            'Kirov Oblast',
                            ],
                    result: 'Kirov',
                },
                {
                    city: [ 
                            'Шиховское сельское поселение',
                            ],
                    state: [
                            'Kirov Oblast',
                            ],
                    result: 'Slobodskoy',
                },
                {
                    city: [ 
                            'Ангарский городской округ',
                            'Новая Разводная',
                            'Хомутовское сельское поселение',
                            'Markova',
                            ],
                    state: [
                            'Irkutsk Oblast',
                            ],
                    result: 'Irkutsk',
                },
                {
                    city: [ 
                            'Байкальское городское поселение',
                            ],
                    state: [
                            'Irkutsk Oblast',
                            ],
                    result: 'Slyudyanka',
                },
                {
                    city: [ 
                            'Хазанское сельское поселение',
                            ],
                    state: [
                            'Irkutsk Oblast',
                            ],
                    result: 'Zima',
                },
                {
                    city: [ 
                            'Kozlovka', 
                            ],
                    state: [
                            'Chuvashia',
                            ],
                    result: 'Volzhsk',
                },
                {
                    city: [ 
                            'Tsivilsky District', 
                            'Хыркасы', 
                            ],
                    state: [
                            'Chuvashia',
                            ],
                    result: 'Cheboksary',
                },
                {
                    city: [ 
                            'Leninskoye', 
                            'Berdsk municipality',
                            'Koltsovo',
                            ],
                    state: [
                            'Novosibirsk Oblast',
                            ],
                    result: 'Novosibirsk',
                },
                {
                    city: [ 
                            'Металлплощадка', 
                            ],
                    state: [
                            'Kemerovo Oblast–Kuzbass',
                            ],
                    result: 'Kemerovo',
                },
                {
                    city: [ 
                            'Sheregesh', 
                            ],
                    state: [
                            'Kemerovo Oblast–Kuzbass',
                            ],
                    result: 'Tashtagol',
                },
                {
                    city: [ 
                            'Костенково', 
                            ],
                    state: [
                            'Kemerovo Oblast–Kuzbass',
                            ],
                    result: 'Novokuznetsk',
                },
                {
                    city: [ 
                            'Vokhtoga', 
                            ],
                    state: [
                            'Vologda Oblast',
                            ],
                    result: 'Gryazovets',
                },
                {
                    city: [ 
                            'Хламово', 
                            ],
                    state: [
                            'Vologda Oblast',
                            ],
                    result: 'Cherepovets',
                },
                {
                    city: [ 
                            'Бережное', 
                            ],
                    state: [
                            'Vologda Oblast',
                            ],
                    result: 'Berezhnoe',
                },
                {
                    city: [ 
                            'Steklyanuha', 
                            'Volno-Nadejdinskoe', 
                            'Russky', 
                            ],
                    state: [
                            'Primorsky Krai',
                            ],
                    result: 'Vladivostok',
                },
                {
                    city: [ 
                            'Shkotovsky District',
                            ],
                    state: [
                            'Primorsky Krai',
                            ],
                    result: 'Shkotovo',
                },
                {
                    city: [ 
                            'Bolon', 
                            ],
                    state: [
                            'Khabarovsk Krai',
                            ],
                    result: 'Amursk',
                },
                {
                    city: [ 
                            'Alnashsky District', 
                            ],
                    state: [
                            'Udmurtia',
                            ],
                    result: 'Alnashi',
                },
            ],
            'Thailand': [
                {
                    city: [ 
                            'Tong Yang', 
                            'Ko Samui', 
                            'Baan Tai', 
                            'Baan Bo Phut',
                            'Baan Plai Laem',
                            'Baan Lamai',
                            'Baan Taling Ngam',
                            'Baan Wang Ta Kien',
                            ],
                    state: [
                            'Surat Thani Province',
                            ],
                    result: 'Island Samui',
                },
                {
                    city: [ 
                            'Si Sunthon',
                            'Talat Nuea',
                            'Ko Kaeo',
                            ],
                    state: [
                            'Phuket Province',
                            ],
                    result: 'Island Phuket',
                },
                {
                    city: [ 
                            'Nong Prue Subdistrict',
                            'Bang Pu Subdistrict Municipality',
                            ],
                    state: [
                            'Samut Prakan Province',
                            ],
                    result: 'Samut Prakan',
                },
                {
                    city: [ 
                            'Bang Nai Si',
                            ],
                    state: [
                            'Phang-nga Province',
                            ],
                    result: 'Takua Pa',
                },
                {
                    city: [ 
                            'Baan Sri Thanu',
                            'Baan Chaloklum',
                            ],
                    state: [
                            'Surat Thani Province',
                            ],
                    result: 'Island Phangan',
                },
                {
                    city: [ 
                            'Don Sak',
                            ],
                    state: [
                            'Surat Thani Province',
                            ],
                    result: 'Surat Thani',
                },
            ],
            'Turkey': [
                { 
                    city: [
                            'Bornova',
                            'Çeşme',
                            ],
                    state: [
                            'Izmir',
                            ],
                    result: 'Izmir',
                }, 
                {
                    city: [
                            'Maltepe',
                            ],
                    state: [
                            'Istanbul',
                            ],
                    result: 'Istanbul',
                },
                {
                    city: [ 
                            'Aksu',
                            'Konyaaltı',
                            'Serik',
                            'Muratpaşa',
                            ],
                    state: [
                            'Antalya',
                            ],
                    result: 'Antalya',
                },
                {
                    city: [ 
                            'Keçiören', 
                            ],
                    state: [
                            'Ankara',
                            ],
                    result: 'Ankara',
                },
                {
                    city: [ 
                            'Bodrum',
                            'Marmaris',
                            ],
                    state: [
                            'Muğla',
                            ],
                    result: 'Muğla',
                },
                {
                    city: [ 
                            'Meram',
                            ],
                    state: [
                            'Konya',
                            ],
                    result: 'Konya',
                },
                {
                    city: [ 
                            'Çınarcık',
                            ],
                    state: [
                            'Yalova',
                            ],
                    result: 'Yalova Merkez',
                },
            ],
            'Slovakia': [
                {
                    city: [ 
                            'Beňadiková', 
                            ],
                    state: [
                            'Žilina',
                            ],
                    result: 'Žilina',
                },
                {
                    city: [ 
                            'Bernolákovo', 
                            ],
                    state: [
                            'Bratislava',
                            ],
                    result: 'Bratislava',
                },
            ],
            'Spain': [
                {
                    city: [ 
                            'Lena', 
                            ],
                    state: [
                            'Asturias',
                            ],
                    result: 'Oviedo',
                },
                {
                    city: [ 
                            'Torrelavega', 
                            ],
                    state: [
                            'Cantabria',
                            ],
                    result: 'Santander',
                },
                {
                    city: [ 
                            'Pilar de la Horadada', 
                            'Torrevieja', 
                            ],
                    state: [
                            'Valencian Community',
                            ],
                    result: 'Orihuela',
                },
                {
                    city: [ 
                            'Arroyo de la Miel-Benalmádena Costa', 
                            'Benahavís', 
                            ],
                    state: [
                            'Andalusia',
                            ],
                    result: 'Málaga',
                },
                {
                    city: [ 
                            'Tejeda', 
                            ],
                    state: [
                            'Las Palmas',
                            ],
                    result: 'Las Palmas de Gran Canaria',
                },
                {
                    city: [ 
                            'Lloret de Mar', 
                            'Vilanova i la Geltrú',
                            'Cubelles',  
                            ],
                    state: [
                            'Catalonia',
                            ],
                    result: 'Barcelona',
                },
            ],
            'Sri Lanka': [
                {
                    city: [ 
                            'Goviyapana', 
                            'Bentota', 
                            ],
                    state: [
                            'Southern Province',
                            ],
                    result: 'Galle',
                },
                {
                    city: [ 
                            'Pasikudah', 
                            ],
                    state: [
                            'Eastern Province',
                            ],
                    result: 'Batticaloa',
                },
                {
                    city: [ 
                            'Ettukala', 
                            ],
                    state: [
                            'Western Province',
                            ],
                    result: 'Gampaha',
                },
            ],
            'Sweden': [
                {
                    city: [ 
                            'Vega', 
                            ],
                    state: [
                            'Hermanstorp',
                            ],
                    result: 'Stockholm',
                },
                {
                    city: [ 
                            'Mölndals kommun', 
                            'Öckerö', 
                            ],
                    state: [
                            'Kärrahöjd',
                            'Heden',
                            ],
                    result: 'Gothenburg',
                },
            ],
            'Switzerland': [
                {
                    city: [ 
                            'Crans (VD)', 
                            ],
                    state: [
                            'Vaud',
                            ],
                    result: 'Geneva',
                },
                {
                    city: [ 
                            'Echallens', 
                            ],
                    state: [
                            'Vaud',
                            ],
                    result: 'Lausanne',
                },
                {
                    city: [ 
                            'Wetzikon (ZH)', 
                            ],
                    state: [
                            'Zurich',
                            ],
                    result: 'Zurich',
                },
                {
                    city: [ 
                            'Büchel', 
                            'Kaltbrunn', 
                            'Bad Ragaz', 
                            ],
                    state: [
                            'St. Gallen',
                            ],
                    result: 'St. Gallen',
                },
                {
                    city: [ 
                            'Udligenswil', 
                            ],
                    state: [
                            'Lucerne',
                            ],
                    result: 'Lucerne',
                },
                {
                    city: [ 
                            'Grenchen', 
                            ],
                    state: [
                            'Solothurn',
                            ],
                    result: 'Solothurn',
                },
                {
                    city: [ 
                            'Vorderthal', 
                            ],
                    state: [
                            'Schwyz',
                            ],
                    result: 'Schwyz',
                },
                {
                    city: [ 
                            'Morcote',
                            'Muzzano',
                            ],
                    state: [
                            'Ticino',
                            ],
                    result: 'Bellinzona',
                },
            ],
            'Ukraine': [
                {
                    city: [ 
                            'Tarasivka',
                            'Kotsiubynske',
                            'Kvitneve',
                            'Liutizh',
                            'Petropavlivska Borshchahivka',
                            'Sofiivska Borshchahivka',
                            'Hnidyn',
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Kyiv',
                },
                {
                    city: [ 
                            'Shchaslyve', 
                            'Hora', 
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Boryspil',
                },
                {
                    city: [ 
                            'Zazymia', 
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Brovary',
                },
                {
                    city: [ 
                            'Leonivka',
                            'Kozyn',  
                            'Krushynka',  
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Obukhiv',
                },
                {
                    city: [ 
                            'Kolonshchyna', 
                            'Pirnove Rural Hromada', 
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Irpin',
                },
                {
                    city: [ 
                            'Henzerivka', 
                            ],
                    state: [
                            'Kyiv Oblast',
                            ],
                    result: 'Yahotyn',
                },
                {
                    city: [ 
                            'Rymachi',
                            ],
                    state: [
                            'Volyn Oblast',
                            ],
                    result: 'Liuboml',
                },
                {
                    city: [ 
                            'Стеблівська селищна громада',
                            ],
                    state: [
                            'Cherkasy Oblast',
                            ],
                    result: 'Korsun-Shevchenkivskyi',
                },
                { 
                    city: [ 
                            'Marianivka', 
                            ],
                    state: [
                            'Zhytomyr Oblast',
                            ],
                    result: 'Zviahel',
                }, 
                { 
                    city: [ 
                            'Chornomorsk', 
                            'Авангардівська селищна громада', 
                            ],
                    state: [
                            'Odesa Oblast',
                            ],
                    result: 'Odesa',
                }, 
                { 
                    city: [ 
                            'Plotsk', 
                            ],
                    state: [
                            'Odesa Oblast',
                            ],
                    result: 'Artsyz',
                }, 
                {
                    city: [ 
                            'Obukhivka',
                            'Mykolaivka',
                            'Samar',
                            'Novomoskovsk',
                            'Обухівська селищна громада',
                            'Слобожанська селищна громада',
                            ],
                    state: [
                            'Dnipropetrovsk Oblast',
                            ],
                    result: 'Dnipro',
                },
                {
                    city: [ 
                            'Чернеччинська сільська громада', ],
                    state: [
                            'Dnipropetrovsk Oblast',
                            ],
                    result: 'Chernechchyna',
                },
                {
                    city: [ 
                            'Лозуватська сільська громада', 
                            ],
                    state: [
                            'Dnipropetrovsk Oblast',
                            ],
                    result: 'Kryvyi Rih',
                },
                {
                    city: [ 
                            'Baburka', 
                            ],
                    state: [
                            'Zaporizhia Oblast',
                            'Zaporizhzhia Oblast',
                            ],
                    result: 'Zaporizhzhia',
                },
                {
                    city: [ 
                            'Klymashivka', 
                            ],
                    state: [
                            'Khmelnytskyi Oblast',
                            ],
                    result: 'Khmelnytskyi',
                },
                {
                    city: [ 
                            'Solomiivka', 
                            ],
                    state: [
                            'Rivne Oblast',
                            ],
                    result: 'Dubrovytsia',
                },
                {
                    city: [ 
                            'Mala Liubasha Rural Hromada', 
                            ],
                    state: [
                            'Rivne Oblast',
                            ],
                    result: 'Kostopil',
                },
                {
                    city: [ 
                            'Petrykiv', 
                            ],
                    state: [
                            'Ternopil Oblast',
                            ],
                    result: 'Ternopil',
                },
                {
                    city: [ 
                            'Укромновское сельское поселение', 
                            'Перовское сельское поселение', 
                            'Мирновское сельское поселение',
                            'Молодёжненское сельское поселение',
                            'Родниковское сельское поселение',
                            'Гвардейское сельское поселение',
                            'Добровское сельское поселение',
                            'Simferopol (urban okrug)',
                            'Aeroflotsky',
                            'Gresovsky',
                            ],
                    state: [
                            'Republic of Crimea',
                            'Autonomous Republic of Crimea',
                            ],
                    result: 'Simferopol',
                },
                {
                    city: [ 
                            'Керченский городской совет', 
                            'городской округ Керчь', 
                            ],
                    state: [
                            'Autonomous Republic of Crimea',
                            'Republic of Crimea',
                            ],
                    result: 'Kerch',
                },
                {
                    city: [ 
                            'Koreiz', 
                            ],
                    state: [
                            'Autonomous Republic of Crimea',
                            ],
                    result: 'Alupka',
                },
                {
                    city: [ 
                            'Novyi Svet', 
                            ],
                    state: [
                            'Autonomous Republic of Crimea',
                            ],
                    result: 'Sudak',
                },
                {
                    city: [ 
                            'Voskhod',
                            'Massandra',
                            'Oliva',
                            ],
                    state: [
                            'Autonomous Republic of Crimea',
                            ],
                    result: 'Yalta',
                },
                {
                    city: [ 
                            'городское поселение Щелкино', 
                            'Лениново сельское поселение', 
                            'Мысовское сельское поселение', 
                            ],
                    state: [
                            'Autonomous Republic of Crimea',
                            ],
                    result: 'Lenino',
                },
                {
                    city: [ 
                            'Оленевское сельское поселение', 
                            ],
                    state: [
                            'Republic of Crimea',
                            ],
                    result: 'Chornomorskoe',
                },
                {
                    city: [ 
                            'Zaozernoe',
                            'Окунёвское сельское поселение',
                            ],
                    state: [
                            'Republic of Crimea',
                            ],
                    result: 'Yevpatoriya',
                },
                {
                    city: [ 
                            'Inkerman', 
                            'Сахарная Головка', 
                            'Балаклавский округ',
                            'Орлиновский округ',
                            ],
                    state: [
                            'Sevastopol',
                            ],
                    result: 'Sevastopol',
                },
                {
                    city: [ 
                            'Velyke Kolodno', 
                            'Vynnyky', 
                            'Zhovkva', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Lviv',
                },
                {
                    city: [ 
                            'Sokolivka', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Busk',
                },
                {
                    city: [ 
                            'Silets', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Chervonohrad',
                },
                {
                    city: [ 
                            'Starychi', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Yavoriv',
                },
                {
                    city: [ 
                            'Solonka Rural Hromada', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Pustomyty',
                },
                {
                    city: [ 
                            'Hranky-Kuty', 
                            'Slavsko', 
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Stryi',
                },
                {
                    city: [ 
                            'Skole Urban Hromada',
                            ],
                    state: [
                            'Lviv Oblast',
                            ],
                    result: 'Skole',
                },
                {
                    city: [ 
                            'Uhryniv', 
                            ],
                    state: [
                            'Ivano-Frankivsk Oblast',
                            ],
                    result: 'Ivano-Frankivsk',
                },
                {
                    city: [ 
                            'Kryvopillia', 
                            'Iltsi', 
                            ],
                    state: [
                            'Ivano-Frankivsk Oblast',
                            ],
                    result: 'Verkhovyna',
                },
                {
                    city: [ 
                            'Vorokhta', 
                            ],
                    state: [
                            'Ivano-Frankivsk Oblast',
                            ],
                    result: 'Nadvirna',
                },
                {
                    city: [ 
                            'Poliana Rural Hromada', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Mukachevo',
                },
                {
                    city: [ 
                            'Poliana', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Svaliava',
                },
                {
                    city: [ 
                            'Huklyvyi', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Volovets',
                },
                {
                    city: [ 
                            'Poliana', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Svaliava',
                },
                {
                    city: [ 
                            'Huklyvyi', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Volovets',
                },
                {
                    city: [ 
                            'Solotvyno', 
                            ],
                    state: [
                            'Zakarpattia Oblast',
                            ],
                    result: 'Tiachiv',
                },
                {
                    city: [ 
                            'Shestovytsia',
                            'Staryi Bilous',
                            ],
                    state: [
                            'Chernihiv Oblast',
                            ],
                    result: 'Chernihiv',
                },
                {
                    city: [ 
                            'Вертіївська сільська громада', 
                            ],
                    state: [
                            'Chernihiv Oblast',
                            ],
                    result: 'Nizhyn',
                },
                {
                    city: [ 
                            'Vasylivka', 
                            ],
                    state: [
                            'Poltava Oblast',
                            ],
                    result: 'Poltava',
                },
                {
                    city: [ 
                            'Лубенська міська громада', 
                            ],
                    state: [
                            'Poltava Oblast',
                            ],
                    result: 'Lubny',
                },
                {
                    city: [ 
                            'Bakhmutivka', 
                            ],
                    state: [
                            'Luhansk Oblast',
                            ],
                    result: 'Novoaidar',
                },
                {
                    city: [ 
                            'Sorokyne', 
                            ],
                    state: [
                            'Luhansk Oblast',
                            ],
                    result: 'Krasnodon',
                },
                {
                    city: [ 
                            'Dzerzhynskyi', 
                            ],
                    state: [
                            'Luhansk Oblast',
                            ],
                    result: 'Rovenky',
                },
                {
                    city: [ 
                            'Korotych', 
                            'Pisochyn',
                            'Liubotyn',
                            ],
                    state: [
                            'Kharkiv Oblast',
                            ],
                    result: 'Kharkiv',
                },
                {
                    city: [ 
                            'Kolisnykivka',
                            ],
                    state: [
                            'Kharkiv Oblast',
                            ],
                    result: 'Kupiansk',
                },
                {
                    city: [ 
                            'Коблівська сільська громада', 
                            ],
                    state: [
                            'Mykolaiv Oblast',
                            ],
                    result: 'Yuzhne',
                },
                {
                    city: [ 
                            'Kostiantynivka', 
                            ],
                    state: [
                            'Donetsk Oblast',
                            ],
                    result: 'Kramatorsk',
                },
                {
                    city: [ 
                            'Manhush Settlement Hromada', 
                            ],
                    state: [
                            'Donetsk Oblast',
                            ],
                    result: 'Mariupol',
                },
                {
                    city: [ 
                            'Niu-York', 
                            ],
                    state: [
                            'Donetsk Oblast',
                            ],
                    result: 'Horlivka',
                },
                {
                    city: [ 
                            'Luzhany', 
                            ],
                    state: [
                            'Chernivtsi Oblast',
                            ],
                    result: 'Chernivtsi',
                },
                {
                    city: [ 
                            'Strointsi', 
                            ],
                    state: [
                            'Chernivtsi Oblast',
                            ],
                    result: 'Novoselytsia',
                },
                {
                    city: [ 
                            'Revne', 
                            ],
                    state: [
                            'Chernivtsi Oblast',
                            ],
                    result: 'Kitsman',
                },
            ],
            'United Arab Emirates': [
                {
                    city: [ 
                            'Al Saadiyat Island', 
                            'Al Matar', 
                            ],
                    state: [
                            'Abu Dhabi Emirate',
                            ],
                    result: 'Abu Dhabi',
                },
                {
                    city: [ 
                            'Dubai International Airport', 
                            'Business Bay', 
                            ],
                    state: [
                            'Dubai',
                            ],
                    result: 'Dubai',
                },
            ],
            'United Kingdom': [
                {
                    city: [ 
                            'Gateshead', 
                            'Ryton', 
                            'Sunderland',
                            'Whickham',
                            'North Tyneside', 
                            'South Tyneside', 
                            ],
                    state: [
                            'England',
                            ],
                    result: 'Newcastle upon Tyne',
                },
                {
                    city: [ 
                            'Woking', 
                            ],
                    state: [
                            'England',
                            ],
                    result: 'Guildford',
                },
                {
                    city: [ 
                            'Larbert', 
                            ],
                    state: [
                            'Scotland',
                            ],
                    result: 'Glasgow',
                },
            ],
            'United States': [
                {
                    city: [ 
                            'Madison County', 
                            'Anderson', 
                            ],
                    state: [
                            'Indiana',
                            ],
                    result: 'Indianapolis',
                },
                {
                    city: [ 
                            'Abington Township', 
                            'Upper Moreland Township', 
                            ],
                    state: [
                            'Pennsylvania',
                            ],
                    result: 'Philadelphia',
                },
                {
                    city: [ 
                            'Merrifield', 
                            ],
                    state: [
                            'Virginia',
                            ],
                    result: 'Fairfax',
                },
                {
                    city: [ 
                            'Oxford', 
                            ],
                    state: [
                            'Massachusetts',
                            ],
                    result: 'Worcester',
                },
                {
                    city: [ 
                            'Bella Vista', 
                            ],
                    state: [
                            'Arkansas',
                            ],
                    result: 'Bentonville',
                },
                {
                    city: [ 
                            'Costa Mesa', 
                            'Irvine', 
                            ],
                    state: [
                            'California',
                            ],
                    result: 'Santa Ana',
                },
                {
                    city: [ 
                            'Gwinnett County', 
                            ],
                    state: [
                            'Georgia',
                            ],
                    result: 'Lawrenceville',
                },
                {
                    city: [ 
                            'Miami Beach', 
                            ],
                    state: [
                            'Florida',
                            ],
                    result: 'Miami',
                },
                {
                    city: [ 
                            'Maud', 
                            ],
                    state: [
                            'Mississippi',
                            ],
                    result: 'Memphis',
                },
                {
                    city: [ 
                            'Irving', 
                            ],
                    state: [
                            'Texas',
                            ],
                    result: 'Dallas',
                },
                {
                    city: [ 
                            'Montgomery County', 
                            ],
                    state: [
                            'Texas',
                            ],
                    result: 'Conroe',
                },
                {
                    city: [ 
                            'Dania Beach', 
                            ],
                    state: [
                            'Florida',
                            ],
                    result: 'Fort Lauderdale',
                },
            ],
            'Uzbekistan': [
                {
                    city: [ 
                            'Salar', 
                            'Kyzyltog', 
                            ],
                    state: [
                            'Tashkent Region',
                            ],
                    result: 'Tashkent',
                },
                {
                    city: [ 
                            'Samarkand City', 
                            ],
                    state: [
                            'Samarqand Region',
                            ],
                    result: 'Samarqand City',
                },
            ]
            
        }

    xml_location.open( 'GET', url );
    xml_location.responseType = 'json';

    not_connection( xml_location, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info_new', 
                    'main_index', 
                    inner_get_info_func, 
                    index_get_info_new );

    timeout( xml_location, 
             main, 
             text_not_connection_timeout, 
             'index_get_info_new', 
             'main_index', 
             inner_get_info_func, 
             index_get_info_new );

    xml_location.onload = function() {

        let city = xml_location.response.results[ 0 ].components.city          ||
                   xml_location.response.results[ 0 ].components.town          ||
                   xml_location.response.results[ 0 ].components.village       || 
                   xml_location.response.results[ 0 ].components.hamlet        ||
                   xml_location.response.results[ 0 ].components.borough       ||
                   xml_location.response.results[ 0 ].components.municipality  ||
                   xml_location.response.results[ 0 ].components.city_district ||
                   xml_location.response.results[ 0 ].components.suburb        ||
                   xml_location.response.results[ 0 ].components.county, 
            state = xml_location.response.results[ 0 ].components.state        ||
                    xml_location.response.results[ 0 ].components.province     ||
                    xml_location.response.results[ 0 ].components.region       ||
                    xml_location.response.results[ 0 ].components.district     ||
                    xml_location.response.results[ 0 ].components.territory    ||
                    xml_location.response.results[ 0 ].components.neighbourhood,
            country = xml_location.response.results[ 0 ].components.country;
            
        if ( !city && !state ) {
            not_city( lat, lon, city, slug, index_get_info_new );
            return;
        }

        if ( country in redefinition_city ) {

            let array_country = redefinition_city[ country ];
    
            for ( let object of array_country ) {
    
                if ( object.city.includes( city ) && object.state.includes( state ) ) {
                   city = object.result;
                }
    
            }
    
        }

        get_city_and_info( lat, lon, city, slug );
        
    }

    xml_location.send();

}

function get_city_and_info( lat, lon, city, slug ) { 
    let xml_city = new XMLHttpRequest(),
        slug_array;

    xml_city.open( 'GET', url + 'api/cities.json?slug=' + city );
    xml_city.responseType = 'json';
    xml_city.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_city, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info_new', 
                    'main_index', 
                    inner_get_info_func, 
                    index_get_info_new );

    timeout( xml_city, 
             main,
             text_not_connection_timeout, 
             'index_get_info_new', 
             'main_index', 
             inner_get_info_func, 
             index_get_info_new );

    xml_city.onload = function() {
        slug_array = xml_city.response;
        slug = slug_array.find( item => item.slug === city ) || 
               slug_array.find( item => item.name === city );
        
        if ( slug ) {
            city_slug = slug.slug;
            city_name = slug.name;
        	city_name_id = slug.id;
            location_span.innerHTML = city_name.trim();

            if ( ( localStorage.getItem( 'status_notifications' ) === 'true' ) &&
                 ( localStorage.getItem( 'user_register_notifications' ) === 'true' ) &&
                 ( localStorage.getItem( 'status_firebase_token' ) === 'true' ) &&
                 ( city_name_id !== ( +localStorage.getItem( 'city_name_id' ) ) ) ) {
                update_notifications( slug );
            }
            
            // Запись (первая) данных в localStorage или перезапись
            local_storage( lat, lon, city_slug, city_name, city_name_id );
            get_info_func( slug, index_get_info_new );
            
        } else {
            not_city( lat, lon, city, slug, index_get_info_new );
        }

    };

    xml_city.send();

} // get_cityes_and_info - end 

function on_success( position, city_name, index_get_info_new ) {

    // если город и страна выбраны с "Выбор города" и есть запись в LocalStorage страны и города, то обращаемся к коду ниже
    if ( localStorage.getItem( 'city_select' ) ) {
        city_name = localStorage.getItem( 'city_name' );
        city_slug = localStorage.getItem( 'city_slug' );

        if ( localStorage.getItem( 'index_get_info_new' ) && 
             ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
            index_get_info_new = JSON.parse( localStorage.getItem( 'index_get_info_new' ) );
            location_span.innerHTML = city_name;
            inner_get_info_func( index_get_info_new, slug, height_header, day_week );
        } else {
            localStorage.setItem( 'now_year', now_year );
            lat = position.coords.latitude; 
            lon = position.coords.longitude;
            get_city_and_info( lat, lon, city_slug, slug );
        }

    } else {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        if ( localStorage.getItem( 'lat' ) && 
             localStorage.getItem( 'lon' ) &&
             localStorage.getItem( 'city_name' ) &&
             localStorage.getItem( 'city_slug' ) ) {
                
            city_name = localStorage.getItem( 'city_name' );
            city_slug = localStorage.getItem( 'city_slug' );
                    
            if ( Math.abs( +localStorage.getItem( 'lat' ) - +lat ).toFixed( 1 ) <= 0.1 &&
                 Math.abs( +localStorage.getItem( 'lon' ) - +lon ).toFixed( 1 ) <= 0.1 ) {

                if ( localStorage.getItem( 'index_get_info_new' ) && 
                    ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
                    index_get_info_new = JSON.parse( localStorage.getItem( 'index_get_info_new' ) );
                    location_span.innerHTML = city_name;
                    inner_get_info_func( index_get_info_new, slug, height_header, day_week );
                } else {
                    localStorage.setItem( 'now_year', now_year );
                    get_city_and_info( lat, lon, city_slug, slug );
                }

            } else {
                get_city( lat, lon );
            }
            
        } else {
            get_city( lat, lon );
        }

    }

}

function on_error( error ) {
    location_error( slug );
}

function location_error( slug ) {

    if ( localStorage.getItem( 'city_name' ) && 
         localStorage.getItem( 'city_slug' ) ) {
        city_slug = localStorage.getItem( 'city_slug' ); 
        city_name = localStorage.getItem( 'city_name' ); 
        
        if ( localStorage.getItem( 'click_choice_city' ) === '0' ) {

            if ( localStorage.getItem( 'index_get_info_new' ) && 
               ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
                index_get_info_new = JSON.parse( localStorage.getItem( 'index_get_info_new' ) );
                location_span.innerHTML = city_name;
                inner_get_info_func( index_get_info_new, slug, height_header, day_week );
            } else {
                localStorage.setItem( 'now_year', now_year );
                get_city_and_info( lat, lon, city_slug, slug );
            }

        } else if ( localStorage.getItem( 'click_choice_city' ) === '1' ) {
            not_city( lat, lon, city_name, slug, index_get_info_new );

            setTimeout( () => {
                localStorage.setItem( 'click_choice_city', '0' );
            }, 1000 );

        }

    } else {

        if ( localStorage.getItem( 'status_location' ) === '1' ) {

            message_location_error.innerHTML =  '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Не удалось автоматически определить Ваше местоположение!' +
                                                    '</span>'
                                                '</div>';
            message_location_error.style.bottom = '0';

            setTimeout( () => message_location_error.style.cssText = '', 5000 );
        }

        not_city( lat, lon, city_name, slug, index_get_info_new );

    }

} // location_error - 

function on_device_ready() {

    let permissions = cordova.plugins.permissions,
        status_location_accuracy,
        device_version = device.version;

    cordova.plugins.diagnostic.isLocationEnabled( function( enabled ) { // получение состояния определения точности местоположения
        status_location_accuracy = enabled;

        if ( enabled ) {
            localStorage.setItem( 'status_location_accuracy', '1' );
        } else {
            localStorage.setItem( 'status_location_accuracy', '0' );
        }
        
    }, function( error ) {
        status_location_accuracy = false;
    } );

    function launch_calendar() {

        if ( localStorage.getItem( 'click_choice_city' ) === '1' ) {
            main.style.opacity = '0';
            header.style.opacity = '0';

            not_city( lat, lon, city, slug, index_get_info_new );

            setTimeout( () => {
                localStorage.setItem( 'click_choice_city', '0' );
            }, 1000 );

        } else {
            navigator.geolocation.getCurrentPosition( on_success, on_error, { timeout: 5000 } );
        }

    }    

    setTimeout( () => {

        if ( navigator.connection.type !== 'none' ) {

            if ( device_version >= 10 ) {
                device_version = Array.from( device_version )[ 0 ] + Array.from( device_version )[ 1 ];
            } else {
                device_version = Array.from( device_version )[ 0 ];
            }
    
            cordova.plugins.locationAccuracy.canRequest( function( canRequest ) {
    
                if ( canRequest ) {
                    localStorage.setItem( 'status_location', '1' );
                } else {
                    localStorage.setItem( 'status_location', '0' );
                }
    
            } );

            set_local_storage( 'user_location_accuracy', '0' );

            permissions.requestPermission( permissions.ACCESS_COARSE_LOCATION, success, error );

            function error() {
                location_error( slug );
            }

            function success( status ) {

                cordova.plugins.locationAccuracy.canRequest( function( canRequest ) {

                    if ( canRequest ) {
                        localStorage.setItem( 'status_location', '1' );

                        if ( localStorage.getItem( 'user_location_accuracy' ) === '0' ) {

                            cordova.plugins.locationAccuracy.request( 
                                
                                function( success ) {
                                    localStorage.setItem( 'user_location_accuracy', '1' );
                                    localStorage.setItem( 'status_location_accuracy', '1' );
                                    launch_calendar();
                                }, function ( error ) {
                                    localStorage.setItem( 'user_location_accuracy', '1' );
                                    localStorage.setItem( 'status_location_accuracy', '0' );
                                    location_error( slug );
                                }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY );

                        } else if ( localStorage.getItem( 'user_location_accuracy' ) === '1' ) {

                            if ( status_location_accuracy ) {
                                launch_calendar();
                            } else {
                                location_error( slug );
                            }

                        }

                    } else {
                        localStorage.setItem( 'status_location', '0' );
                        location_error( slug );
                    }

                } );

            }

        } else {

            content_not_connection( main, 
                                    text_not_internet, 
                                    'index_get_info_new', 
                                    'main_index', 
                                    inner_get_info_func, 
                                    index_get_info_new );

        }

    }, 0 );
    
}

function check_notifications( slug ) {

    let xml_check = new XMLHttpRequest(),
        value_token = get_token(),
        data_send = JSON.stringify( { 'uuid': device.uuid,
                                      'token': value_token } ),
        city_id = slug.id;
                                      
    xml_check.open( 'POST', url + 'api/devices/check' );
    xml_check.responseType = 'json';
    xml_check.setRequestHeader( 'Content-Type', 'application/json' );
        
    xml_check.onload = function() {
        
        let response_check = xml_check.response;
        
        if ( response_check.message ) {

            if ( response_check.message === 'Device not found' ) {
                register_notifications( city_id );
            } else if ( response_check.message === 'Device found' ) {
                device_found = true; 
                localStorage.setItem( 'id_notifications', response_check.id );
                localStorage.setItem( 'status_notifications', 'true' );
                localStorage.setItem( 'user_register_notifications', 'true' );
                register_notifications( city_id );
            } else {
                return;
            }

        } else {
            return;
        }
        
    };
    
    xml_check.send( data_send );
}

function register_notifications_content( slug ) {

    let xml_register = new XMLHttpRequest(),
        value_token = get_token(),
        data_send = JSON.stringify( { "model": device.model,
                                      "platform": device.platform,
                                      "uuid": device.uuid,
                                      "version": device.version,
                                      "manufacturer": device.manufacturer,
                                      "serial": device.serial,
                                      "firebaseToken": token_notif,
                                      "city": slug,
                                      "token": value_token } );
                                      
    xml_register.open( 'POST', url + 'api/devices/register' );
    xml_register.responseType = 'json';
    xml_register.setRequestHeader( 'Content-Type', 'application/json' );
        
    xml_register.onload = function() {
        
        let response_register = xml_register.response;

        if ( response_register.message ) {

            if ( response_register.message === 'accepted' ) {

                localStorage.setItem( 'status_notifications', 'true' );
                localStorage.setItem( 'user_register_notifications', 'true' );

                message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center m-b-10">' +
                                                        'Вы успешно подписались на получение уведомлений!' +
                                                    '</span>' +
                                                    '<a class="link_policy d-block width-fit m-auto" href="notifications.html">Настройка уведомлений</a>' +
                                                  '</div>';

                message_notifications.style.bottom = '0';

                setTimeout( () => message_notifications.style.cssText = '', 5000 );

            }

        }

        if ( response_register.id ) {
            localStorage.setItem( 'id_notifications', response_register.id );
        }
        
    };
    
    xml_register.send( data_send );

}

function register_notifications( slug ) {

    if ( token_notif || localStorage.getItem( 'status_firebase_token' ) === 'true' ) {
        
        if ( localStorage.getItem( 'status_firebase_token' ) === 'false' ) {
            localStorage.setItem( 'status_firebase_token', 'true' );
            localStorage.setItem( 'firebase_token', token_notif );
        } else {
            token_notif = localStorage.getItem( 'firebase_token' );
        } 

        if ( device_found ) {
            update_notifications( slug );
        } else {
            register_notifications_content( slug );
        }

    } else {
        let get_token = setInterval( function() { 

            if ( token_notif ) {
                localStorage.setItem( 'status_firebase_token', 'true' );
                localStorage.setItem( 'firebase_token', token_notif );

                if ( device_found ) {
                    update_notifications( slug );
                } else {
                    register_notifications_content( slug );
                }

                clearInterval( get_token );
            }

        }, 1000 );

    }

}






