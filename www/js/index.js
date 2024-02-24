"use strict";

import { window_width,
         window_height,
         day_name_full,
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
         month_days,
         apparition_ekadasi_days,
         add_sp_array,
         add_isus_array,
         set_local_storage,
         set_update_local_storage,
         remove_local_storage,
         resume_event,
         today,
         text_not_data_server
} from "./general.js";

document.addEventListener( "deviceready", () => {

    on_device_ready();
    resume_event();

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
    close_list = document.getElementById( 'close_list' ),
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
    index_get_info_new;

function get_firebase_token_func() {

    if ( !localStorage.getItem( 'status_firebase_token' ) ) { 
        localStorage.setItem( 'status_firebase_token', 'false' ); 

        FCMPlugin.getToken( function( token ) {
            
            if ( !token_notif ) {

                let get_firebase_token_interval = setInterval( () => {

                    if ( token_notif ) clearInterval( get_firebase_token_interval );

                    FCMPlugin.getToken( function( token ) {
                        token_notif = token;
                    }, function( error ) {
                        token_notif = false;
                    } ); 

                }, 1000 );

            } else {
                token_notif = token;
            }

        }, function( error ) {
            token_notif = false;
        } ); 

    } else {

        FCMPlugin.getToken( function( token ) {
            
            if ( !token_notif ) {

                let get_firebase_token_interval = setInterval( () => {

                    if ( token_notif ) clearInterval( get_firebase_token_interval );

                    FCMPlugin.getToken( function( token ) {
                        token_notif = token;
                    }, function( error ) {
                        token_notif = false;
                    } ); 

                }, 1000 );

            } else {
                token_notif = token;
            }

        }, function( error ) {
            token_notif = false;
        } ); 

    }

}

if ( window_width < 480 ) {
    day_name_full[ 0 ] = 'Вос-нье';
    day_name_full[ 1 ] = 'Пон-ник';
}

height_footer_func();
set_local_storage( 'click_choice_city', '0' );
set_local_storage( 'now_year', now_year );
set_local_storage( 'status_notifications', 'false' );
set_local_storage( 'user_register_notifications', 'false' );
set_local_storage( 'main_index', main.innerHTML );

current_location.onclick = function() {
    remove_local_storage( 'city_select' );
    window.location.href = 'index.html';
    navigator.splashscreen.show();
    hide_body();

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
        country_dst,
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
        day_after_tomorrow = 'Послезавтра';

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

        array_obj[ 5 ] = Object.fromEntries( add_sp_array( sp_array ) );
        array_obj[ 11 ] = Object.fromEntries( add_isus_array( isus_array ) );
        year[ i ].innerHTML = '<span>' + get_year + '</span>';
        year[ i ].style.top = ( height_header - 1 ) + 'px';
        height_year = year[ i ].clientHeight;

        function display_data( obj_month, item, month, get_year, numb_month ) { // item - свойство ( ключ ) объекта, дата события
            let event_coming_class = '',
                event_coming_elem = '',
                event_coming_class_status = false;

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

            if ( +now_date_local <= +date_event ) {

                if ( typeof( value_key ) === 'object' ) {

                    let exit_date,                      
                        numb_month_local = numb_month + 1,
                        item_local = +item + 1,
                        exit_next_year = false,
                        city_name_dst,
                        month_days_local;

                    if ( numb_month === 0 || 
                        numb_month === 2 || 
                        numb_month === 4 ||
                        numb_month === 6 || 
                        numb_month === 7 || 
                        numb_month === 9 || 
                        numb_month === 11 ) {
                
                        month_days_local = 31;
                
                    } else if ( numb_month === 3 || 
                            numb_month === 5 || 
                            numb_month === 8 || 
                            numb_month === 10 ) {
                
                        month_days_local = 30;
                
                    } else if ( numb_month === 1 ) {
                    
                        if ( ( now_year % 4 ) === 0 ) {
                            month_days_local = 29;
                        } else {
                            month_days_local = 28;
                        }
                
                    } 

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
                    
                    if ( localStorage.getItem( 'city_name' ) ) {
                        city_name_dst = localStorage.getItem( 'city_name' ).split( ', ');
                    } else if ( slug ) {
                        city_name_dst = ( slug.name ).split( ', ' );
                    }
                    
                    if ( city_name_dst ) {
                        
                        if ( city_name_dst.length === 1 ) {
                            country_dst = undefined;
                        } else if ( city_name_dst.length === 2 ) {
                            country_dst = city_name_dst[ 1 ];
                        } else if ( city_name_dst.length === 3 ) {
                            country_dst = city_name_dst[ 2 ];
                        }
                        
                    }

                    if ( country_dst ) {
                    
                        if ( country_dst !== 'Россия'         || // Перевод выхода из поста на летнее время
                            country_dst !== 'Белоруссия'     || 
                            country_dst !== 'Казахстан'      || 
                            country_dst !== 'Исландия'       || 
                            country_dst !== 'Турция'         || 
                            country_dst !== 'Северная Корея' || 
                            country_dst !== 'Южная Корея'    || 
                            country_dst !== 'Филиппины'      || 
                            country_dst !== 'Колумбия'       || 
                            country_dst !== 'Венесуэла'      || 
                            country_dst !== 'Вьетнам'        || 
                            country_dst !== 'Афганистан'     || 
                            country_dst !== 'Индия'          || 
                            country_dst !== 'Япония'         || 
                            country_dst !== 'Китай'          || 
                            country_dst !== 'Киргизия' ) {
                            
                            if ( value_key.light_time === 'DST' ) {
                                let value_1 = ( value_key.exit_time ).slice( 2, 8 ),
                                    value_2 = ( value_key.exit_time ).slice( 10 ),
                                    start_time = ( value_key.exit_time ).slice( 0, 2 ),
                                    end_time = ( value_key.exit_time ).slice( 8, 10 );
                                    
                                start_time = +start_time + 1;
                                end_time = +end_time + 1;
                                
                                if ( start_time < 10 ) {
                                    start_time = '0' + start_time;
                                }
                                
                                if ( end_time < 10 ) {
                                    end_time = '0' + end_time;
                                }
                                    
                                value_key.exit_time = start_time + value_1 + end_time + value_2;

                            }
                            
                        }

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
            navigator.splashscreen.hide();
            show_body();

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
    
    const russian_alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ, ';
    let list_timeout,
        sub_list_timeout,
        touch_start,
        div_main_coords;
    min_preloader.classList.add( 'search_preloader' );

    navigator.splashscreen.hide();
    show_body();

    window.addEventListener( 'keyboardDidShow', ( event ) => {

        let keyboard_height = event.keyboardHeight,
            div_main_height = div_main.offsetHeight,
            div_main_top = ( window_height - keyboard_height );


        footer_id.style.bottom = keyboard_height + 'px';
        div_main.style.top = ( ( div_main_top - div_main_height) / 2 ) + 'px';

        if ( div_main.style.transform === '' ) {
            div_main.style.transform = 'translateX(-50%)';
        }

    } );

    window.addEventListener( 'keyboardDidHide', () => {
        div_main.style.cssText = '';
        footer_id.style.bottom = '0';
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
     
            for ( let city of get_all_cities ) {
                list_cityes.insertAdjacentHTML( 'beforeEnd', '<span class="d-block">' + city.name + '</span>' );
            }

            list_cityes.style.cssText = 'opacity: 1;' +
                                        'z-index: 5';

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
                navigator.splashscreen.show();
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
                localStorage.setItem( 'city_select', 'yes' );
                local_storage( lat, lon, city_slug, city_name, city_name_id );
                get_info_func( slug, index_get_info_new );
                today.innerHTML = '<li id="today">Сегодня</li>';

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

    function output_cities( search_cities, str ) {

        let search_city,
            search_index,
            before_str;
                            
        if ( search_cities.length > 0 ) {

            if ( div_search_city.classList.contains( 'p-all-0' ) ) div_search_city.classList.remove( 'p-all-0' );

            for ( let city of search_cities ) {

                let local_str = str;
                div_search_city.style.cssText = 'opacity: 1; margin-bottom: 15px !important;';
                search_index = ( city.name.toLowerCase() ).indexOf( local_str.toLowerCase() );
                
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
                            local_str = str[ 0 ].toUpperCase() + str.slice( 1 );
                            
                            if ( ( local_str.toLowerCase() === 'сш' ) || ( local_str.toLowerCase() === 'сша' ) ) {
                                local_str = 'США';
                            }

                        } else {
                            local_str = str.toLowerCase();
                        }

                        search_city = ( city.name ).slice( 0, search_index ) + '<span class="search_string search_string_wrap pos-rel d-inline-block">' + 
                                                                                        local_str + 
                                                                                    '<span class="search_string search_string_span pos-abs"></span>' +
                                                                                '</span>' + 
                                                                                    ( city.name ).slice( search_index + local_str.length );
                    }
                    
                } else {

                    for ( let item_slug of city.slug ) {

                        if ( ( item_slug === 'š' ) || ( item_slug === 'ș' ) ) {
                            local_str = '';

                            for ( let item_str of str ) {

                                if ( item_str.toLowerCase() === 's' ) {

                                    if ( item_slug === 'š' ) {
                                        item_str = 'š';
                                    } else if ( item_slug === 'ș' ) {
                                        item_str = 'ș';
                                    }

                                } 

                                local_str += item_str;

                            }

                        } else if ( ( item_slug === 'ã' ) || ( item_slug === 'á' ) ) {
                            local_str = '';

                            for ( let item_str of str ) {

                                if ( item_str.toLowerCase() === 'a' ) {

                                    if ( item_slug === 'ã' ) {
                                        item_str = 'ã';
                                    } else if ( item_slug === 'á' ) {
                                        item_str = 'á';
                                    } 

                                }

                                local_str += item_str;

                            }

                        }
                        
                    }

                    search_index = ( city.slug.toLowerCase() ).indexOf( local_str.toLowerCase() );
                    
                    if ( search_index === 0 ) {
                    
                        search_city = '<span class="search_string search_string_wrap pos-rel d-inline-block">' + 
                                            local_str[ 0 ].toUpperCase() + local_str.slice( 1 ) + 
                                        '<span class="search_string search_string_span pos-abs"></span>' +
                                      '</span>' + 
                                        ( city.slug ).slice( local_str.length );
                        
                    } else if ( search_index > 0 ) {

                        before_str = ( city.slug ).slice( 0, search_index );
                        
                        if ( ( before_str[ before_str.length - 1 ] ) === ' ' || before_str[ before_str.length - 1 ] === '-' ) { 
                            local_str = str[ 0 ].toUpperCase() + str.slice( 1 );
                        } else {
                            local_str = str.toLowerCase();
                        }

                        search_city = ( city.slug ).slice( 0, search_index ) + '<span class="search_string search_string_wrap pos-rel d-inline-block">' + 
                                                                                        local_str + 
                                                                                    '<span class="search_string search_string_span pos-abs"></span>' +
                                                                               '</span>' + 
                                                                                    ( city.slug ).slice( search_index + local_str.length );
                    } else {
                        search_null();
                    }

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

                    navigator.splashscreen.show();
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

                    localStorage.setItem( 'city_select', 'yes' );
                    remove_local_storage( 'lat' );
                    remove_local_storage( 'lon' );
                    local_storage( lat, lon, city_slug, city_name, city_name_id );
                    get_info_func( slug, index_get_info_new );
                    today.innerHTML = '<li id="today">Сегодня</li>';

                };

            }

            let full_city = div_search_city.querySelectorAll( '.full_city' ),
                coords_div_search_city = div_search_city.getBoundingClientRect(),
                coords_div_main = div_main.getBoundingClientRect();
            
            if ( full_city.length > 0 ) {
                div_search_city.innerHTML += '<span id="found_cities"' + 
                                                'class="pos-fixed"' +
                                                'style="top:' + ( coords_div_search_city.top - coords_div_main.top ) + 'px;' + 
                                                        'right: ' + ( coords_div_main.right - coords_div_search_city.right ) + 'px">' + 
                                                        full_city.length + 
                                             '</span>';
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

            if ( russian_alphabet.includes( str[ str.length - 1 ] ) ) {
                
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

                let xml_search_slug = new XMLHttpRequest();

                xml_search_slug.open( 'GET', url + 'api/cities.json?slug=' + str );
                xml_search_slug.responseType = 'json';
                xml_search_slug.setRequestHeader( 'Content-Type', 'application/json' );

                xml_search_slug.onerror = function() {
                    not_data_server();
                }
                
                xml_search_slug.timeout = 5000;
        
                xml_search_slug.ontimeout = function() {
                    not_data_server();
                }

                xml_search_slug.onload = function() {
                    search_cities = xml_search_slug.response;

                    if ( form_search.value.length > 2 ) {
                        div_search_city.innerHTML = '<span></span>';
                        output_cities( search_cities, str );
                    } else {
                        enter_more();
                    }

                }

                xml_search_slug.send();

            }
            
        } else {
            enter_more();
        }

    } );

} // part_not_city - end
    
function not_city( lat, lon, city, slug, index_get_info_new ) {

    if ( ( localStorage.getItem( 'status_location' ) === '0' ) || 
         ( localStorage.getItem( 'status_location_accuracy' ) === '0' ) ) {
        current_location.classList.add( 'd-none' );
    }

    navigator.splashscreen.hide();
    show_body();
    
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

} // not_city - end

function location_error( slug ) {

    if ( localStorage.getItem( 'city_name' ) && 
         localStorage.getItem( 'city_slug' ) ) {
        city_slug = localStorage.getItem( 'city_slug' ); 
        city_name = localStorage.getItem( 'city_name' ); 
        
        if ( localStorage.getItem( 'click_choice_city' ) === '0' ) {

            let xml_city = new XMLHttpRequest(),
                get_city_array;

            xml_city.open( 'GET', url + 'api/cities.json?slug=' + city_slug );
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
                get_city_array = xml_city.response;
                slug = get_city_array.find( item => item.slug == city_slug );
                location_span.innerHTML = slug.name;

                get_info_func( slug, index_get_info_new );

            }

            xml_city.send();

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

} // location_error - end

function get_city( lat, lon ) {

    let xml_location = new XMLHttpRequest(),
        url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + ',' + lon + 
              '&no_annotations=1&language=en&limit=1&key=' + key;

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

        let city = xml_location.response.results[ 0 ].components.city ||
                   xml_location.response.results[ 0 ].components.town ||
                   xml_location.response.results[ 0 ].components.village || 
                   xml_location.response.results[ 0 ].components.hamlet ||
                   xml_location.response.results[ 0 ].components.borough ||
                   xml_location.response.results[ 0 ].components.municipality ||
                   xml_location.response.results[ 0 ].components.city_district ||
                   xml_location.response.results[ 0 ].components.county, 
            state = xml_location.response.results[ 0 ].components.state ||
                    xml_location.response.results[ 0 ].components.province ||
                    xml_location.response.results[ 0 ].components.region ||
                    xml_location.response.results[ 0 ].components.district ||
                    xml_location.response.results[ 0 ].components.territory,
            country = xml_location.response.results[ 0 ].components.country;

        if ( country ) {

            if ( country === 'China' ) {

                if ( state === 'Shanghai' ) {
                    city = 'Shanghai';
                } else if ( state === 'Beijing' ) {
                    city = 'Beijing';
                } else if ( state === 'Tianjin' ) {
                    city = 'Tianjin';
                } else if ( state === 'Guangdong Province' ) {
                    city = 'Guangdong';
                } else if ( state === 'Hubei' ) {
                    city = 'Hubei';
                }

            } else if ( country === 'New Zealand' ) {

                if ( state === 'Auckland' ) city = 'Auckland';

            } else if ( country === 'Russia' ) {

                if ( state === 'Moscow' ) {
                    city = 'Moscow';
                } if ( state === 'Saint Petersburg' ) {
                    city = 'Saint Petersburg';
                } else if ( ( city === 'Baranovka' ) && ( state === 'Krasnodar Krai' ) ) {
                    city = 'Sochi';
                } else if ( city === 'Лиски' ) {
                    city = 'Liski';
                }

            } else if ( country === 'Thailand' ) {

                if ( ( сity === 'Dauh Puri Kauh' ) || 
                     ( сity === 'Renon' ) ) {
                    city = 'Denpasar';
                } else if ( state === 'Phuket Province' ) {
                    city = 'Phuket'; 
                } else if ( !city && ( state === 'Bangkok' ) ) {
                    city = 'Bangkok';
                } else if ( city === 'Tong Yang' ) {
                    city = 'Island Samui';
                }

            } else if ( country === 'Indonesia' ) {

                if ( ( city === 'Dusun Mangsit' ) ||
                     ( city === 'Aik Berik' ) ) {
                    city = 'Lombok';
                } else if ( city === 'Special Capital Region of Jakarta' ) {
                    city = 'Jakarta';
                }

            } else if ( country === 'Turkey' ) {

                if ( state === 'Izmir' ) {
                    city = 'Izmir';
                } else if ( state === 'Istanbul' ) {
                    city = 'Istanbul';
                }

            } else if ( country === 'Belgium' ) {

                if ( state === 'Brussels-Capital' ) {
                    city = 'Brussels';
                }

            }

        }

        if ( !city && !state ) {
            not_city( lat, lon, city, slug, index_get_info_new );
            return;
        }

        get_city_and_info( lat, lon, city, slug );
        
    }

    xml_location.send();

}

function get_city_and_info( lat, lon, city, slug ) { 
    let xml_city = new XMLHttpRequest(),
        get_city_array;

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
        get_city_array = xml_city.response;
        slug = get_city_array.find( item => item.slug === city ) || 
               get_city_array.find( item => item.name === city );
        
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
            
            // Запись (первая) данных в localStorage и перезапись
            local_storage( lat, lon, city_slug, city_name, city_name_id );
            get_info_func( slug, index_get_info_new );
            
        } else {
            not_city( lat, lon, city, slug, index_get_info_new );
        }

    };

    xml_city.send();

} // get_cityes_and_info - end 

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

    xml_location.send();

}

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
                    
            if ( ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) || 
                ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) ||
                ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) ||
                ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) || 
                ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) || 
                ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ) {

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

function on_device_ready() {

    cordova.plugins.diagnostic.enableDebug();

    let status_location_accuracy;

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

            cordova.plugins.diagnostic.getLocationAuthorizationStatus( function( status ) { // получение статуса авторизации разрешения на определение местоположения
                StatusBar.show();
                StatusBar.backgroundColorByHexString( '#000000' );

                switch( status ) {

                    case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                        cordova.plugins.diagnostic.requestLocationAuthorization( function( status ) {

                            switch( status ) {
                                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                                    localStorage.setItem( 'status_location', '0' );
                                    location_error( slug );
                                    break;
                                case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                                    localStorage.setItem( 'status_location', '1' );
                                    launch_calendar();
                                    break;
                            }

                        }, function( error ) {
                            localStorage.setItem( 'status_location', '0' );
                            location_error( slug );
                        } );
                        break;

                    case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                        cordova.plugins.locationAccuracy.canRequest( function( canRequest ) {

                            if ( canRequest ) {
                                cordova.plugins.locationAccuracy.request( function() {

                                    if ( !localStorage.getItem( 'user_location_accuracy' ) ) {
                                        localStorage.setItem( 'user_location_accuracy', '0' );
                                    } else {
                                        localStorage.setItem( 'user_location_accuracy', '1' );
                                    }

                                    if ( localStorage.getItem( 'user_location_accuracy' ) === '0' ) {

                                        setTimeout( () => {
                                            localStorage.setItem( 'status_location', '0' );
                                            location_error( slug );
                                        }, 7000 );

                                    } else if ( localStorage.getItem( 'user_location_accuracy' ) === '1' ) {
                                        localStorage.setItem( 'status_location', '0' );
                                        location_error( slug );
                                    }

                                }, function() {
                                    localStorage.setItem( 'status_location', '0' );
                                    location_error( slug );
                                } );
        
                            } else {
                                localStorage.setItem( 'status_location', '0' );
                                location_error( slug );
                            }
        
                        } );

                        break;

                    case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                        localStorage.setItem( 'status_location', '1' );
                        launch_calendar();
                        break;
                    }

                }, function( error ) {
                    localStorage.setItem( 'status_location', '0' );
                    location_error( slug );
            } );

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






