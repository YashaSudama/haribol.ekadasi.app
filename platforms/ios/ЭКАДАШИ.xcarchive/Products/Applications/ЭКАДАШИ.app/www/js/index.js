"use strict";

import { window_width,
         window_height,
         month_days, 
         day_name_full,
         day_week,
         day_name_short,
         month_name_header,
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
         index_get_info,
         footer_id,
         location_span,
         height_header,
         header_top,
         get_description,
         key,
         update_notifications,
         min_preloader,
         show_body,
         hide_body
} from "./general.js";

document.addEventListener( "deviceready", () => {

    on_device_ready();

    if ( !localStorage.getItem( 'status_firebase_token' ) ||
            localStorage.getItem( 'status_firebase_token' ) === 'false' ) { 
        get_firebase_token_func();
    }

}, false );

let year = document.getElementsByClassName( 'year' ),
    month = document.getElementsByClassName( 'month' ),
    jan = document.getElementsByClassName( 'jan' ),
    feb = document.getElementsByClassName( 'feb' ),
    mar = document.getElementsByClassName( 'mar' ),
    apr = document.getElementsByClassName( 'apr' ),
    may = document.getElementsByClassName( 'may' ),
    jun = document.getElementsByClassName( 'jun' ),
    jul = document.getElementsByClassName( 'jul' ),
    aug = document.getElementsByClassName( 'aug' ),
    sem = document.getElementsByClassName( 'sem' ),
    oct = document.getElementsByClassName( 'oct' ),
    nov = document.getElementsByClassName( 'nov' ),
    dem = document.getElementsByClassName( 'dem' ),
    window_select_city = document.getElementById( 'window_select_city' ),
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
    not,
    lat,
    lon,
    today = document.getElementById( 'today' ),
    scroll_today,
    city_selection_let,
    city_name,
    city_name_id,
    ul,
    token_notif,
    device_found = false,
    color = '#fea00a30';

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

if ( !localStorage.getItem( 'click_choice_city' ) ) {
    localStorage.setItem( 'click_choice_city', '0' );
}

if ( !localStorage.getItem( 'main' ) ) { 
    localStorage.setItem( 'main', main.innerHTML );
}

if ( !localStorage.getItem( 'now_year' ) ) { 
    localStorage.setItem( 'now_year', now_year );
}

if ( !localStorage.getItem( 'status_notifications' ) ) { 
    localStorage.setItem( 'status_notifications', 'false' );
}

if ( !localStorage.getItem( 'user_register_notifications' ) ) {
    localStorage.setItem( 'user_register_notifications', 'false' );
}

current_location.onclick = function() {

    if ( localStorage.getItem( 'city_select' ) ) {
        localStorage.removeItem( 'city_select' );
    }

    if ( localStorage.getItem( 'lat') ) {
        localStorage.removeItem( 'lat' );
    }

    if ( localStorage.getItem( 'lon' ) ) {
        localStorage.removeItem( 'lon' );
    }

    if ( localStorage.getItem( 'city' ) ) {
        localStorage.removeItem( 'city' );
    }
    
    if ( localStorage.getItem(' city_name' ) ) {
        localStorage.removeItem( 'city_name' );
    }

    window.location.href = 'index.html';
    navigator.splashscreen.show();
    hide_body();

}

function window_select_city_func() {
    window_select_city.style.cssText = 'opacity: 1; z-index: 5';
    footer_id.style.zIndex = '5';
    today.innerHTML = '<a href="index.html" class="text-white">' +
                          '<i class="fas fa-home fa-lg"></i>' +
                      '</a>';

    today.addEventListener( 'click', hide_body );

}

function window_change_city_func() {
    window_change_city.style.cssText = 'opacity: 1; z-index: 5';
    footer_id.style.zIndex = '5';
    today.innerHTML = '<a href="index.html" class="text-white">' +
                          '<i class="fas fa-home fa-lg"></i>' +
                      '</a>';

    today.addEventListener( 'click', hide_body );

}

function inner_get_info_func( index_get_info, slug, height_header, day_week ) {

    let class_li,
        id_li,
        value,
        country_dst;

    height_header = header_top.clientHeight;
            
    for ( let li of month ) {
        li.style.top = ( height_header - 1 ) + 'px';
    }
    
    for ( let i = 0; i < index_get_info.length; i++ ) { 
      
        let get_year = index_get_info[ i ].value,
            get_jan = index_get_info[ i ].jan,
            get_feb = index_get_info[ i ].feb,
            get_mar = index_get_info[ i ].mar,
            get_apr = index_get_info[ i ].apr,
            get_may = index_get_info[ i ].may,
            get_jun = index_get_info[ i ].jun,
            get_jul = index_get_info[ i ].jul,
            get_aug = index_get_info[ i ].aug,
            get_sem = index_get_info[ i ].sem,
            get_oct = index_get_info[ i ].oct,
            get_nov = index_get_info[ i ].nov,
            get_dem = index_get_info[ i ].dem;
         
        year[i].innerHTML = '<span>' + get_year + '</span>';
        year[i].style.top = ( height_header - 1 ) + 'px';

        function display_data( obj_month, month, item, get_year, numb_month ) {
            
            day_week = new Date( get_year, numb_month, item ).getDay();
            value = obj_month[ item ];

            if ( typeof( value ) === 'object' ) {

                value = Object.values( value );
                class_li = 'value-0';

            } else if ( typeof( value ) === 'string' ) { 

                if ( value === '1' ) {

                    value = '<span class="name_event d-block bold">Нитьянандa Прабху</span>' +
                            '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                    class_li = 'value-1';
                    id_li = 'nityananda';

                }  else if (value === '2') {

                   value = '<span class="name_event d-block bold">Гаура-Пурнима, Шри Чайтанья Махапрабху</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-2';
                   id_li = 'chaytanya';

                } else if ( value === '3' ) {

                   value = '<span class="name_event d-block bold">Рама Навами, Рамачандра</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-3';
                   id_li = 'sita';

                } else if ( value === '4' ) {

                   value = '<span class="name_event d-block bold">Наришимха</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-4';
                   id_li = 'nrisimha';

                } else if ( value === '6' ) {

                    value = '<span class="name_event d-block bold">Баларама</span>' +
                            '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                    class_li = 'value-6';
                    id_li = 'baladeva';

                } else if ( value === '7' ) {

                   value = '<span class="name_event d-block bold">Джанмастами, Кришна</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-7';
                   id_li = 'krishna';

                } else if ( value === '8' ) {

                   value = '<span class="name_event d-block bold">Бхактиведанта Свами Прабхупада</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-8';
                   id_li = 'bhaktivedanta';

                } else if ( value === '9' ) {

                   value = '<span class="name_event d-block bold">Радхастами, Шримати Радхарани</span>' +
                           '<span class="d-block bold type_event m-t-5">' + 
                                'Явление' +
                            '</span>';
                   class_li = 'value-9';
                   id_li = 'radharany';

                } else if ( value === 'A' ) {

                    value = '<span class="name_event d-block bold">Говардхан-пуджа</span>';
                    class_li = 'value-A';
                    id_li = 'govardhana';

                }  else if ( value === 'B' ) {

                   value = '<span class="name_event d-block bold">Ратха-ятра</span>';
                   class_li = 'value-B';
                   id_li = 'radha-yatra';

                } 

            }

            if ( Array.isArray( value ) ) {

                let exit_date,                      
                    numb_month_2 = numb_month + 1,
                    item_2 = +item + 1, 
                    month_days_2;
                    
                if ( month_name[ numb_month ] === 'Январь'  || 
                     month_name[ numb_month ] === 'Март'    || 
                     month_name[ numb_month ] === 'Май'     ||
                     month_name[ numb_month ] === 'Июль'    || 
                     month_name[ numb_month ] === 'Август'  || 
                     month_name[ numb_month ] === 'Октябрь' || 
                     month_name[ numb_month ] === 'Декабрь' ) {

                        month_days_2 = 31;

                } else if ( month_name[ numb_month ] === 'Апрель'   || 
                            month_name[ numb_month ] === 'Июнь'     || 
                            month_name[ numb_month ] === 'Сентябрь' || 
                            month_name[ numb_month ] === 'Ноябрь' ) {

                        month_days_2 = 30;

                } else if ( month_name[ numb_month ] === 'Февраль' ) {
                    
                    if ( ( get_year % 4 ) === 0 ) {
                        month_days_2 = 29;
                    } else {
                        month_days_2 = 28;
                    }

                } 

                if ( numb_month_2 < 10 ) {
                    numb_month_2 = '0' + numb_month_2;
                }

                if ( item_2 < 10 ) {
                    item_2 = '0' + item_2;
                }

                if ( numb_month === 1 ) {

                     if ( ( item === '28' ) || ( item === '29' ) ) {
                        item_2 = '01';
                        numb_month_2 = '03';
                     }

                } else if ( numb_month === 11 ) {

                    if ( item === '31' ) {
                        item_2 = '01';
                        numb_month_2 = '01.' + ( + get_year + 1 );
                    }

                } else {
                  
                    if ( month_days_2 === 30 ) {
                  
                       if ( item === '30' ) {
                          
                          if ( typeof( numb_month_2 ) === 'string' ) {
                            numb_month_2 = '0' + ( +numb_month_2 + 1 );
                          } else {
                             numb_month_2 = numb_month_2 + 1;
                          } 
                       
                          item_2 = '01';
                          
                       }
                    
                    } else if ( month_days_2 === 31 ) { 
                        
                       if ( item === '31' ) {
                          
                          if ( typeof( numb_month_2 ) === 'string' ) {
                            numb_month_2 = '0' + ( +numb_month_2 + 1 );
                          } else {
                             numb_month_2 = numb_month_2 + 1;
                          } 
                       
                          item_2 = '01'; 
                          
                       } 
                  
                    } 
                    
                }
                
                exit_date = '<span>' + item_2 + '</span>.' + numb_month_2;
                
                if (value[1] === 'Putrada') {
                    value[1] = 'Путрада';
                    id_li = 'putrada'; 
                } else if (value[1] === 'Sat-tila') {
                    value[1] = 'Шат-тила';
                    id_li = 'sat-tila'; 
                } else if (value[1] === 'Bhaimi') {
                    value[1] = 'Джая (Бхаими)';
                    id_li = 'bhaimi'; 
                } else if (value[1] === 'Vijaya') {
                    value[1] = 'Виджая';
                    id_li = 'vijaya'; 
                } else if (value[1] === 'Amalaki vrata') {
                    value[1] = 'Амалаки';
                    id_li = 'amalaki'; 
                } else if (value[1] === 'Papamocani') {
                    value[1] = 'Папа-мочани';
                    id_li = 'papamocani'; 
                } else if (value[1] === 'Kamada') {
                    value[1] = 'Камада';
                    id_li = 'kamada'; 
                } else if (value[1] === 'Varuthini') {
                    value[1] = 'Варутхини';
                    id_li = 'varuthini'; 
                } else if (value[1] === 'Mohini') {
                    value[1] = 'Мохини';
                    id_li = 'mohini'; 
                } else if (value[1] === 'Apara') {
                    value[1] = 'Апара';
                    id_li = 'apara'; 
                } else if (value[1] === 'Pandava Nirjala') {
                    value[1] = 'Нирджала (Пандава, Бхима)';
                    id_li = 'pandava'; 
                } else if (value[1] === 'Yogini') {
                    value[1] = 'Йогини';
                    id_li = 'yogini'; 
                } else if (value[1] === 'Sayana') {
                    value[1] = 'Дева-шаяни (Падма)';
                    id_li = 'sayana'; 
                } else if (value[1] === 'Kamika') {
                    value[1] = 'Камика';
                    id_li = 'kamika'; 
                } else if (value[1] === 'Pavitropana') {
                    value[1] = 'Павитра';
                    id_li = 'pavitra'; 
                } else if (value[1] === 'Annada') {
                    value[1] = 'Аннада (Аджа)';
                    id_li = 'annada'; 
                } else if (value[1] === 'Parsva') {
                    value[1] = 'Паршва';
                    id_li = 'parsva'; 
                } else if (value[1] === 'Indira') {
                    value[1] = 'Индира';
                    id_li = 'indira'; 
                } else if (value[1] === 'Padmini') {
                    value[1] = 'Падмини';
                    id_li = 'padmini'; 
                } else if (value[1] === 'Parama') {
                    value[1] = 'Парама';
                    id_li = 'parama'; 
                } else if (value[1] === 'Pasankusa') {
                    value[1] = 'Пашанкуша';
                    id_li = 'pasankusa'; 
                } else if (value[1] === 'Rama') {
                    value[1] = 'Рама';
                    id_li = 'rama-ekadashi'; 
                } else if (value[1] === 'Utthana') {
                    value[1] = 'Уттхана';
                    id_li = 'utthana'; 
                } else if (value[1] === 'Moksada') {
                    value[1] = 'Мокшада';
                    id_li = 'moksada'; 
                } else if (value[1] === 'Saphala') {
                    value[1] = 'Са-пхала';
                    id_li = 'saphala'; 
                } else if (value[1] === 'Utpanna') {
                    value[1] = 'Утпанна';
                    id_li = 'utpanna'; 
                } 

                if (value[2].includes('after')) {
                    value[2] = value[2].replace('after', 'после');
                }
                
                let city_name_dst,
                    city_dst;
                
                if ( localStorage.getItem( 'city_name' ) !== null ) {
                    city_name_dst = localStorage.getItem( 'city_name' );
                } else if ( localStorage.getItem( 'city' ) !== null ) {
                    city_dst = localStorage.getItem( 'city' );
                }
                
                if  ( city_dst !== undefined ) {
                    country_dst = city_dst.split( ', ' );
                } else if ( city_name_dst !== undefined ) {
                    country_dst = city_name_dst.split(', ');
                }  else if (slug !== undefined) {
                    country_dst = ( slug.name ).split(', ');
                }
                
                if ( country_dst !== undefined ) {
                    
                    if (country_dst.length === 1) {
                        country_dst = undefined;
                    } else if (country_dst.length === 2) {
                        country_dst = country_dst[1];
                    } else if (country_dst.length === 3) {
                        country_dst = country_dst[2];
                    }
                    
                }
                
                if ( ( country_dst === 'Россия' ) || 
                     ( country_dst === 'Белоруссия' ) || 
                     ( country_dst === 'Казахстан' ) ) {
                    
                    if (value[3] === 'DST') {
                        let value_1 = value[2].slice(2, 8),
                            value_2 = value[2].slice(10),
                            start_time = value[2].slice(0, 2),
                            end_time = value[2].slice(8, 10);
                            
                        start_time = +start_time - 1;
                        end_time = +end_time - 1;
                        
                        if (start_time < 10) {
                            start_time = '0' + start_time;
                        }
                        
                        if (end_time < 10) {
                            end_time = '0' + end_time;
                        }
                            
                        value[2] = start_time + value_1 + end_time + value_2;
                    }
                    
                }

                value = '<span class="name_event bold l-height-1-1">' + 
                            value[1] + ' Экадаши' +
                        '</span><hr class="ekadashi_hr">' + 
                        '<span class="exit bold l-height-1-1">Выход из поста<br><span class="exit_date">' + 
                        exit_date + '</span>' + ' ' +'<span class="exit_time">' + value[2] + '</span></small></span>';
            }
                
            month[ i ].innerHTML += '<li id="' + id_li + '" class="id ' + class_li + '">' + 
                                        '<div class="day_info d-flex text-center l-height-1-25">' + 
                                            '<span>' + day_name_short[day_week] + '</span>' + 
                                            '<span class="bold">' +  item + '</span>' + 
                                        '</div>' + 
                                        '<div class="event_info l-height-1-2">' + value + '</div>' + 
                                        '<div class="day_full">' + 
                                            '<span class="bold l-height-1-2 text-center">' +
                                                //item + ' ' + month_name_header[numb_month] + 
                                            '</span>' + 
                                            '<i class="fas fa-angle-right">' +
                                            '</i>' + 
                                        '</div>' + 
                                    '</li>';
        } // end display_data
        
        // jan
        for ( let item in get_jan ) {
            display_data( get_jan, jan, item, get_year, 0 );
        }
       
        // feb
        for ( let item in get_feb ) {
            display_data( get_feb, feb, item, get_year, 1 );
        }
       
        // mar
        for ( let item in get_mar ) {
            display_data( get_mar, mar, item, get_year, 2 );
        }
           
        // apr
        for ( let item in get_apr ) {
            display_data( get_apr, apr, item, get_year, 3 );
        }
       
        // may
        for ( let item in get_may ) {
            display_data( get_may, may, item, get_year, 4 );
        }
           
        // jun
        for ( let item in get_jun ) { 
            display_data( get_jun, jun, item, get_year, 5 );
        }
       
        // jul
        for ( let item in get_jul ) {
            display_data( get_jul, jul, item, get_year, 6 );
        }
       
        // aug
        for ( let item in get_aug ) {
            display_data( get_aug, aug, item, get_year, 7 );
        }
       
        // sem
        for ( let item in get_sem ) {
            display_data( get_sem, sem, item, get_year, 8 );
        }
       
        // oct
        for ( let item in get_oct) {
            display_data( get_oct, oct, item, get_year, 9 );
        }
       
        // nov
        for ( let item in get_nov ) {
            display_data( get_nov, nov, item, get_year, 10 );
        }
       
        // dem
        for ( let item in get_dem ) {
            display_data( get_dem, dem, item, get_year, 11 );
        }
        
        // Добавление дня явления ШП и Рождество Иисуса
        let jun_ul = document.getElementsByClassName( 'jun' )[ i ],
            dem_ul = document.getElementsByClassName( 'dem' )[ i ],
            jun_span = document.getElementsByClassName( 'jun' )[ i ].querySelectorAll( 'li .day_info .bold' ),
            dem_span = document.getElementsByClassName( 'dem' )[ i ].querySelectorAll( 'li .day_info .bold' ),
            arr_content_jun = [],
            arr_content_dem = [],
            content,
            day_week_sp = new Date( get_year, 5, 14 ).getDay(),
            day_week_iisus = new Date( get_year, 11, 25 ).getDay(),
            appear_sp_content = '<li id="vyasapudja" class="id value-5">' + 
                                    '<div class="day_info d-flex text-center l-height-1-25">' + 
                                        '<span>' + day_name_short[ day_week_sp ] + '</span>' + 
                                        '<span class="bold">14</span>' + 
                                    '</div>' + 
                                    '<div class="event_info l-height-1-2">' + 
                                        '<span class="name_event d-block bold">Сиддхасварупананда Парамахамса Прабхупада</span>' + 
                                        '<span class="d-block bold type_event m-t-5">' + 
                                            'Явление' +
                                        '</span>' +
                                    '</div>' + 
                                    '<div class="day_full">' + 
                                        // '<span class="bold l-height-1-2 text-center">14 июня<br>' + 
                                        '</span>' + 
                                        '<i class="fas fa-angle-right">' +
                                        '</i>' + 
                                    '</div>' + 
                                 '</li>', 
            appear_iisus_content = '<li id="rozhdestvo" class="id value-D">' + 
                                    '<div class="day_info d-flex text-center l-height-1-25">' +    
                                        '<span>' + day_name_short[ day_week_iisus ] + '</span>' + 
                                        '<span class="bold">25</span>' + 
                                    '</div>' + 
                                    '<div class="event_info l-height-1-2">' + 
                                        '<span class="name_event d-block bold">Рождество, Иисус Христос</span>' +
                                        '<span class="d-block bold type_event m-t-5">' + 
                                            'Явление' +
                                        '</span>' +  
                                    '</div>' + 
                                    '<div class="day_full">' + 
                                        // '<span class="bold l-height-1-2 text-center">25 декабря<br>' +   
                                        '</span>' + 
                                        '<i class="fas fa-angle-right">' +
                                        '</i>' +  
                                    '</div>' + 
                                 '</li>';
    
        for ( let li of jun_span ) {
            
            content = parseInt(li.textContent);
            day_week = new Date( get_year, 5, 14 ).getDay();
                
            arr_content_jun.push( content );
            
            if ( content >= 14 ) {

                while ( li = li.parentElement ) {

                    if ( ( li.classList.contains( 'value-0' ) ) || 
                         ( li.classList.contains( 'value-4' ) ) || 
                         ( li.classList.contains( 'value-B' ) ) ) {
                        li.insertAdjacentHTML( 'beforeBegin', appear_sp_content );
                    }
                }
                break;
            }
        }
        
        let max_number_jun = Math.max.apply( Math, arr_content_jun );
    
        if ( max_number_jun < 14 ) {
            jun_ul.insertAdjacentHTML( 'beforeEnd', appear_sp_content );
        }
        
        for ( let li of dem_span ) {
            
            content = parseInt( li.textContent );
            day_week = new Date( get_year, 11, 25 ).getDay();
                
            arr_content_dem.push( content );
            
            if ( content >= 25 ) {

                while ( li = li.parentElement ) {

                    if ( ( li.classList.contains( 'value-0' ) ) || 
                         ( li.classList.contains( 'value-A' ) ) || ( li.classList.contains( 'value-C' ) ) ) {
                        li.insertAdjacentHTML( 'beforeBegin', appear_iisus_content );
                    }
                }
                break;
            }
        }
        
        let max_number_dem = Math.max.apply( Math, arr_content_dem );

        if ( max_number_dem < 25 ) {
            dem_ul.insertAdjacentHTML( 'beforeEnd', appear_iisus_content );
        }
         
        // Код для прокрутки контента на текущее событие       
        let all_curr_month = document.querySelectorAll( '#current_year h4' ),
            span_date,
            sum_li_height = 0,
            count = 0,
            difference_date = month_days - now_date_number;
            
        if ( i === 1 ) {
            window.scrollTo( 0, 0 );  

            for ( let curr_month of all_curr_month ) { 
                
                if ( curr_month.textContent === month_name[ now_month ] ) {
                    
                    ul = curr_month.parentElement.parentElement;
                    span_date = ul.querySelectorAll( '.day_info span.bold' );

                    for ( let span of span_date ) {
                        let day = span.parentElement.nextElementSibling.nextElementSibling.children[ 0 ],
                            li = span.parentElement.parentElement,
                            date = +span.textContent;
                        
                        if ( ( date - now_date_number ) === 2 ) {
                            li.style.backgroundColor = color;
                            day.innerHTML = 'Послезавтра';
                        } else if ( ( date - now_date_number ) === 1 ) {
                            li.style.backgroundColor = color;
                            day.innerHTML = 'Завтра';
                        } else if ( date === now_date_number ) {
                            li.style.backgroundColor = color;
                            day.innerHTML = 'Сегодня';
                        }
                        
                        if ( date < now_date_number ) {
                            count++;
                            let li_height = li.clientHeight;
                            sum_li_height += li_height;
                        }
                        
                    }
                    break;
                }
            }
            
            if ( count === 0 ) {
                window.scrollTo( 0, ( ul.getBoundingClientRect().y - height_header ) );
            } else if ( ( count > 0 ) && ( count !== span_date.length ) ) {
                window.scrollTo( 0, (ul.getBoundingClientRect().y - height_header + sum_li_height ) );
            } else if ( count === span_date.length ) {
                
                if ( month_name[ now_month ] === 'Декабрь' ) {
                    window.scrollTo( 0, ( ( ul.parentElement.nextElementSibling.children[ 1 ] ).getBoundingClientRect().y - height_header ) );
                } else {
                    window.scrollTo( 0, ( ( ul.nextElementSibling ).getBoundingClientRect().y - height_header ) );
                }
                
            }
            
        }

        if ( i === 2 ) {

            if ( ul ) {
            
                let next_year_month = ul.parentElement.nextElementSibling.children[ 1 ];
                
                if ( difference_date === 1 ) {
                    
                    if ( ul.nextElementSibling ) {
                    
                        for ( let i = 0; i < ( ul.nextElementSibling.children ).length; i++ ) {
                            
                            if ( ul.nextElementSibling.children[ i ].className === 'month' ) {
                                continue;
                            } else {
                                
                                if ( +( ul.nextElementSibling.children[ i ].children[ 0 ].children[ 1 ].textContent ) === 1 ) {
                                    ul.nextElementSibling.children[ i ].children[ 2 ].children[ 0 ].innerHTML = 'Послезавтра';
                                    ( ( ul.nextElementSibling.children[ i ].children[ 2 ].children[ 0 ] ).parentElement.parentElement ).style.backgroundColor = color;
                                }
                                
                            }
                            
                        }
                        
                    } else {
                        
                        for ( let i = 0; i < ( next_year_month.children ).length; i++ ) {
                            
                            if ( next_year_month.children[ i ].className === 'month' ) {
                                continue;
                                
                            } else {
                                
                                if ( +( next_year_month.children[ i ].children[ 0 ].children[ 1 ].textContent ) === 1 ) {
                                    next_year_month.children[ i ].children[ 2 ].children[ 0 ].innerHTML = 'Послезавтра';
                                    ( ( next_year_month.children[ i ].children[ 2 ].children[ 0 ] ).parentElement.parentElement ).style.backgroundColor = color;
                                }
                                
                            }
                            
                        }
                        
                    }

                } else if ( difference_date === 0 ) {

                    if ( ul ) {
                    
                        if ( ul.nextElementSibling ) {
                        
                            for ( let i = 0; i < ( ul.nextElementSibling.children ).length; i++ ) {
                                
                                if ( ul.nextElementSibling.children[i].className === 'month' ) {
                                    continue;
                                } else {
                                    
                                    if ( +( ul.nextElementSibling.children[i].children[0].children[1].textContent ) === 1 ) {
                                        ul.nextElementSibling.children[i].children[2].children[0].innerHTML = 'Завтра';
                                        ( ( ul.nextElementSibling.children[i].children[2].children[0]).parentElement.parentElement ).style.backgroundColor = color;
                                    } else if ( +( ul.nextElementSibling.children[i].children[0].children[1].textContent ) === 2) {
                                        ul.nextElementSibling.children[i].children[2].children[0].innerHTML = 'Послезавтра';
                                        ( ( ul.nextElementSibling.children[i].children[2].children[0]).parentElement.parentElement ).style.backgroundColor = color;
                                    }
                                    
                                }
                            }
                            
                        } else {
                            
                            for ( let i = 0; i < ( next_year_month.children ).length; i++ ) {
                                
                                if ( next_year_month.children[i].className === 'month' ) {
                                    continue;
                                } else {
                                    
                                    if ( +( next_year_month.children[i].children[0].children[1].textContent ) === 1 ) {
                                        next_year_month.children[i].children[2].children[0].innerHTML = 'Завтра';
                                        ( ( next_year_month.children[i].children[2].children[0]).parentElement.parentElement ).style.backgroundColor = color;
                                    } else if ( +( next_year_month.children[i].children[0].children[1].textContent ) === 2) {
                                        next_year_month.children[i].children[2].children[0].innerHTML = 'Послезавтра';
                                        ( ( next_year_month.children[i].children[2].children[0]).parentElement.parentElement ).style.backgroundColor = color;
                                    }
                                    
                                }
                            }
                            
                        }

                    }
                
                }

            }

            scroll_today = window.pageYOffset;
            
            today.removeEventListener( 'click', hide_body );
            today.addEventListener( 'click', function() {
                window.scrollTo( { left: 0, top: scroll_today, behavior: 'smooth' } );
            } );
            
            main.style.opacity = '1';
            header_top.style.opacity = '1';
            navigator.splashscreen.hide();
            show_body();
            get_description( main, '.id' );
        
        }
        
    } // for - end
}

function get_info_func( slug, index_get_info ) {

    if ( localStorage.getItem( 'user_register_notifications' ) === 'false' ) {
        check_notifications( slug );
    }

    let xml_info = new XMLHttpRequest();
            
    xml_info.open( 'GET', url + 'api/years.json?city=' + slug.id +'&value[]=' + ( now_year - 1) + '&value[]=' + now_year + '&value[]=' + ( now_year + 1 ) );
    xml_info.responseType = 'json';
    xml_info.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_info, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info', 
                    'main', 
                    inner_get_info_func, 
                    index_get_info );

    timeout( xml_info, 
             main, 
             text_not_connection_timeout, 
             'index_get_info', 
             'main', 
             inner_get_info_func, 
             index_get_info );
    
    xml_info.onload = function() {
        index_get_info = xml_info.response;
        localStorage.setItem( 'index_get_info', JSON.stringify( index_get_info ) );
        localStorage.setItem( 'cesh_city', slug.name );

        inner_get_info_func( index_get_info, slug, height_header, day_week );

    };

    xml_info.send();
    
} // get_info - end
    
function local_storage( lat, lon, city, city_name, city_name_id ) {

    if ( lat !== undefined ) {
        lat = lat.toFixed( 1 );
    }
    
    if ( lon !== undefined ) {
        lon = lon.toFixed( 1 );
    }

    if ( localStorage.getItem( 'lat' ) === null ) {
        localStorage.setItem( 'lat', lat );
    } else {

        if ( +localStorage.getItem( 'lat' ) !== ( +lat ) ) {
            localStorage.setItem( 'lat', lat );
        }

    }
    
    if ( localStorage.getItem( 'lon' ) === null ) {
        localStorage.setItem( 'lon', lon );
    } else {

        if ( +localStorage.getItem( 'lon' ) !== ( +lon ) ) {
            localStorage.setItem( 'lon' , lon );
        }

    } 
    
    if ( localStorage.getItem( 'city' ) === null ) {
        localStorage.setItem( 'city', city );
    } else {

        if ( localStorage.getItem( 'city' ) !== city ) {
            localStorage.setItem( 'city', city );
        }

    }

    if ( localStorage.getItem( 'city_name' ) === null ) {
        localStorage.setItem( 'city_name', city_name );
    } else {

        if ( localStorage.getItem( 'city_name' ) !== city_name ) {
            localStorage.setItem( 'city_name', city_name );
        }

    }

    if ( localStorage.getItem( 'city_name_id' ) === null ) {
        localStorage.setItem( 'city_name_id', city_name_id );
    } else {

        if ( localStorage.getItem( 'city_name_id' ) !== city_name_id ) {
            localStorage.setItem( 'city_name_id', city_name_id );
        }

    }

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
                    'index_get_info', 
                    'main', 
                    inner_get_info_func, 
                    index_get_info );

    timeout( xml_city_database, 
             main, 
             text_not_connection_timeout, 
             'index_get_info', 
             'main', 
             inner_get_info_func, 
             index_get_info );

    xml_city_database.onload = function() {

    	let response_database = xml_city_database.response;

        if ( response_database ) {

            if ( response_database.name ) {
                message_not_city.innerHTML = '<div class="width-fit m-auto">' +
                                                '<span>Ваше местоположение определено как -</span>' +
                                                '<h4 class="m-b-5 m-t-5 width-fit">' + response_database.name + '</h4>' +
                                                '<small>Этого населённого пункта нет в нашей базе.<br>Мы добавим его в ближайшее время' +
                                            '</div>';

                message_not_city.style.top = '0';

                setTimeout( () => message_not_city.style.cssText = '', 5000 );
                
            }

        }

    }

    xml_city_database.send( data_send );
} // add_city_undefined_database - end

function city_selection_func( city, city_name, city_name_id ) {

    if ( !localStorage.getItem( 'city_select') ) {
        localStorage.setItem( 'city_select', city );
    } else {
        if ( localStorage.getItem( 'city_select' ) !== city ) {
            localStorage.setItem( 'city_select', city );
        }
    }

    if ( !localStorage.getItem( 'city_name' ) ) {
            localStorage.setItem( 'city_name', city_name );
    } else {
        if ( localStorage.getItem( 'city_name' ) !== city_name ) {
            localStorage.setItem( 'city_name', city_name );
        }
    }

    if ( !localStorage.getItem( 'city_name_id' ) ) {
            localStorage.setItem( 'city_name_id', city_name_id );
    } else {
        if ( localStorage.getItem( 'city_name_id' ) !== city_name_id ) {
            localStorage.setItem( 'city_name_id', city_name_id );
        }
    }

} // city_selection_func - end

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
        div_search_city.innerHTML = '<div class="width-fit m-auto">' +
                                        '<span class="d-block text-center search_string l-height-1-2">' +
                                            'Не удалось получить данные с сервера! Попробуйте позже<br>или еще раз.' +
                                        '</span>' +
                                    '</div>';
    }

    function list_all_cities( city, slug ) { 

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
                div_search_city.innerHTML = '<button id="choice_full_list">' +
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
                city = slug.slug;
                list_cityes.style.cssText = '';
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
                
                if ( !not ) {

                    if ( city_selection_let ) {
                        city_selection_func( city, city_name, city_name_id );
                    } else {  
                        local_storage(lat, lon, city, city_name, city_name_id);
                    }
                
                }
                
                get_info_func( slug, index_get_info );
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
                        
                        if ( ( event.target ).tagName !== 'DIV' ) {
                            city = ( event.target ).closest( '.full_city' ).textContent;
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
                    city = slug.slug;
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
                    
                    if ( !not ) {

                        if ( city_selection_let ) {
                            city_selection_func( city, city_name, city_name_id );
                        } else { 
                            local_storage( lat, lon, city, city_name, city_name_id );
                        }
                        
                    }

                    get_info_func( slug, index_get_info );
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
    
function not_city( lat, lon, city, slug, index_get_info ) {

    if ( ( localStorage.getItem( 'status_location' ) === '0' ) || 
         ( localStorage.getItem( 'status_location_accuracy' ) === '0' ) ) {
        current_location.classList.add( 'd-none' );
    }
    
    if ( localStorage.getItem( 'lat' ) && 
         localStorage.getItem( 'lon' ) &&
       ( localStorage.getItem( 'lat' ) !== 'undefined' ) &&
       ( localStorage.getItem( 'lon' ) !== 'undefined' ) &&
         localStorage.getItem( 'city' ) ) {

        navigator.splashscreen.hide();
        show_body();
        
        if ( !city_selection_let )  {   
           
            add_city_undefined_database( city, state );
            window_change_city_func();
            local_city.innerHTML = localStorage.getItem( 'city_name' );
            
            yes_change_city.onclick = function() {

                setTimeout( () => {
                    window_change_city.style.cssText = '';
                }, 500 );

                window_select_city_func();
                part_not_city( slug );
            }
            
            no_change_city.onclick = function() {
                
                setTimeout( () => {
                    window_change_city.style.cssText = '';
                }, 500 );

                city_name = localStorage.getItem( 'city_name' );
                city = localStorage.getItem( 'city' );
                
                if ( localStorage.getItem( 'index_get_info' ) && 
                     ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
                    index_get_info = JSON.parse( localStorage.getItem( 'index_get_info' ) );
                    location_span.innerHTML = city_name;
                    
                    inner_get_info_func( index_get_info, slug, height_header, day_week );
                    city_selection_func( city, city_name, city_name_id );
                    
                } else {
                    get_city_and_info( lat, lon, city, state, slug );
                }
                
            }
            
        } else {
            window_select_city_func();
            part_not_city( slug );
        }
        
    } else {

        if ( city ) add_city_undefined_database( city, state );

        window_select_city_func();
        part_not_city( slug );
    }

} // not_city - end
    
function get_city_and_info( lat, lon, city, slug ) { 

    let xml_city = new XMLHttpRequest(),
        get_city_array;

        xml_city.open( 'GET', url + 'api/cities.json?slug=' + city );
        xml_city.responseType = 'json';
        xml_city.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_city, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info', 
                    'main', 
                    inner_get_info_func, 
                    index_get_info );

    timeout( xml_city, 
             main,
             text_not_connection_timeout, 
             'index_get_info', 
             'main', 
             inner_get_info_func, 
             index_get_info );

    xml_city.onload = function() {
        get_city_array = xml_city.response;

        slug = get_city_array.find( item => item.slug === city ) || 
               get_city_array.find( item => item.name === city );
        
        if ( slug ) {
            
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
            if ( !localStorage.getItem( 'city_select' ) ) {
                
                if ( !not ) {
                    local_storage( lat, lon, city, city_name, city_name_id );
                }

            }
            
            get_info_func( slug, index_get_info );
            
        } else {
            not_city( lat, lon, city, slug, index_get_info );
        }

    };

    xml_city.send();

} // get_cityes_and_info - end

function location_error( slug ) {

    main.style.opacity = '0';
    header_top.style.opacity = '0';

    if ( localStorage.getItem( 'city' ) ) { 
        
        if ( localStorage.getItem( 'click_choice_city' ) === '0' ) {

            let xml_city = new XMLHttpRequest(),
                get_city_array,
                city = localStorage.getItem( 'city' );

            xml_city.open( 'GET', url + 'api/cities.json?slug=' + city );
            xml_city.responseType = 'json';
            xml_city.setRequestHeader( 'Content-Type', 'application/json' );

            not_connection( xml_city, 
                            main, 
                            text_not_connection_timeout, 
                            'index_get_info', 
                            'main', 
                            inner_get_info_func, 
                            index_get_info );

            timeout( xml_city, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info', 
                    'main', 
                    inner_get_info_func, 
                    index_get_info );

            xml_city.onload = function() {
                get_city_array = xml_city.response;
                slug = get_city_array.find( item => item.slug == city );
                location_span.innerHTML = slug.name;

                get_info_func( slug, index_get_info );

            }
            xml_city.send();

        } else if ( localStorage.getItem( 'click_choice_city' ) === '1' ) {

            city_selection_let = 1;
            not_city( lat, lon, city, slug, index_get_info );

        }

    } else if ( !localStorage.getItem( 'city' ) ) {

        if ( localStorage.getItem( 'status_location_accuracy' ) === '1' ) {

            message_location_error.innerHTML =  '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Не удалось автоматически определить Ваше местоположение!' +
                                                    '</span>'
                                                '</div>';
            message_location_error.style.bottom = '0';

            setTimeout( () => message_location_error.style.cssText = '', 5000 );
        }

        not_city( lat, lon, city, slug, index_get_info );
    }

    if ( localStorage.getItem( 'click_choice_city' ) === '1' ) localStorage.setItem( 'click_choice_city', '0' );

} // location_error - end

function get_city() {

    let xml_location = new XMLHttpRequest(),
        url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + ',' + lon + 
              '&no_annotations=1&language=en&limit=1&key=' + key;
        xml_location.open( 'GET', url );
        xml_location.responseType = 'json';

    not_connection( xml_location, 
                    main, 
                    text_not_connection_timeout, 
                    'index_get_info', 
                    'main', 
                    inner_get_info_func, 
                    index_get_info );

    timeout( xml_location, 
             main, 
             text_not_connection_timeout, 
             'index_get_info', 
             'main', 
             inner_get_info_func, 
             index_get_info );

    xml_location.onload = function() {

        let city = xml_location.response.results[ 0 ].components.city ||
                   xml_location.response.results[ 0 ].components.county ||
                   xml_location.response.results[ 0 ].components.village || 
                   xml_location.response.results[ 0 ].components.hamlet ||
                   xml_location.response.results[ 0 ].components.borough ||
                   xml_location.response.results[ 0 ].components.town ||
                   xml_location.response.results[ 0 ].components.municipality ||
                   xml_location.response.results[ 0 ].components.city_district,
            state = xml_location.response.results[ 0 ].components.state ||
                    xml_location.response.results[ 0 ].components.province ||
                    xml_location.response.results[ 0 ].components.region ||
                    xml_location.response.results[ 0 ].components.district ||
                    xml_location.response.results[ 0 ].components.territory,
            country = xml_location.response.results[ 0 ].components.country;

        if ( ( city === 'Baranovka' ) && ( state === 'Krasnodar Krai' ) ) {
            city = 'Sochi';
        } else if ( city === 'City of Brussels' ) {
            city = 'Brussels';
        } else if ( city === 'Tirana Municipally' ) {
            city = 'Tirana';
        } else if ( city === 'Jakarta Special Capital Region' ) {
            city = 'Jakarta';
        } else if ( !city && ( state === 'Bangkok' ) ) {
            city = 'Bangkok';
        } else if ( city === 'Łódź' ) {
            city = 'Lodz';
        } else if ( city === 'Macapá' ) {
            city = 'Macapa';
        } else if ( ( city === 'County Dublin' ) || ( city === 'South Dublin' ) ) {
            city = 'Dublin';
        }

        if ( country ) {

            if ( country === 'China' ) {

                if ( state === 'Shanghai' ) city = 'Shanghai';
                if ( state === 'Beijing' ) city = 'Beijing';
                if ( state === 'Tianjin' ) city = 'Tianjin';
                if ( state === 'Guangdong Province' ) city = 'Guangdong';

            } else if ( country === 'New Zealand' ) {

                if ( state === 'Auckland' ) city = 'Auckland';

            }

        }

        if ( !city && !state ) {
            not_city(  lat, lon, city, slug, index_get_info );
            return;
        }
        
        get_city_and_info( lat, lon, city, slug );
        
    };

    xml_location.send();

}
    
function on_success( position, city, index_get_info ) {
    
    // если город и страна выбраны с "Выбор города" и есть запись в LocalStorage страны и города, то обращаемся к коду ниже
    if ( localStorage.getItem( 'city_select' ) ) {
        city = localStorage.getItem( 'city_name' );

        if ( localStorage.getItem( 'index_get_info' ) && 
             ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
            index_get_info = JSON.parse( localStorage.getItem( 'index_get_info' ) );
            location_span.innerHTML = city;
                
            inner_get_info_func( index_get_info, slug, height_header, day_week );
        } else {
            localStorage.setItem( 'now_year', now_year );
            
            get_city();
        }

    } else {
        
        lat = position.coords.latitude; 
        lon = position.coords.longitude;

        // lat = 49.59002081089676; // Полтава
        // lon = 34.55092795899492;
        
        if ( localStorage.getItem( 'lat' ) && 
             localStorage.getItem( 'lon' ) &&
             localStorage.getItem( 'city' ) ) {
                    
            if ( ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) || 
                 ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) ||
                 ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) ) === ( +lon.toFixed( 1 ) ) ) ) ||
                 ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) || 
                 ( ( ( +localStorage.getItem( 'lat' ) ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) || 
                 ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                 ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                 ( ( ( +localStorage.getItem( 'lat' ) - 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) - 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ||
                 ( ( ( +localStorage.getItem( 'lat' ) + 0.1 ) === ( +lat.toFixed( 1 ) ) ) && ( ( +localStorage.getItem( 'lon' ) + 0.1 ) === ( +lon.toFixed( 1 ) ) ) ) ) {
    
                city = localStorage.getItem( 'city_name' );
                not = 1;
    
                if ( localStorage.getItem( 'index_get_info' ) && 
                     ( +localStorage.getItem( 'now_year' ) === now_year ) ) {
                    index_get_info = JSON.parse( localStorage.getItem( 'index_get_info' ) );
                    location_span.innerHTML = city;
                    inner_get_info_func( index_get_info, slug, height_header, day_week );
                } else {
                    localStorage.setItem( 'now_year', now_year );
                    get_city();
                }

            } else {
                get_city();
            }
            
        } else {
            get_city();
        }
            
    }

}

function check_notifications( slug ) {

    let xml_check = new XMLHttpRequest(),
        value_token = get_token(),
        data_send = JSON.stringify( { 'uuid': device.uuid,
                                      'token': value_token } ),
        city_id =  slug.id || slug;
                                      
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

function on_error( error ) {
    location_error( slug );
}

function on_device_ready() {

    cordova.plugins.diagnostic.enableDebug();

    let permissions = cordova.plugins.permissions,
        status_location_accuracy,
        device_platform = device.platform,
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

        if ( localStorage.getItem( 'city_selection' ) === 'yes' ) {
            city_selection_let = 1;
            main.style.opacity = '0';
            header.style.opacity = '0';

            not_city( lat, lon, city, slug, index_get_info );

            localStorage.removeItem( 'city_selection' );
        } else {
            navigator.geolocation.getCurrentPosition( on_success, on_error, { timeout: 5000 } );
        }

    }    

    setTimeout( () => {

        if ( navigator.connection.type !== 'none' ) {

            if ( device_platform === 'Android' ) {

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
        
                if ( !localStorage.getItem( 'user_location_accuracy' ) ) {
                    localStorage.setItem( 'user_location_accuracy', '0' );
                }

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

            } else if ( device_platform === 'iOS' ) { 
                document.body.classList.add( 'ios' );

                cordova.plugins.diagnostic.getLocationAuthorizationStatus( function( status ) { // получение статуса авторизации разрешения на определение местоположения

                    StatusBar.show();
                    StatusBar.backgroundColorByHexString( '#000000' );

                    switch( status ) {

                        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                            
                            document.addEventListener( "resume", () => { 
                                
                                setTimeout( () => {
                                    window.location.reload();
                                }, 0 );

                            } );

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

                                        document.addEventListener( "resume", () => { 
                                            
                                            setTimeout( () => {
                                                window.location.reload();
                                            }, 0 );

                                        } );

                                    }, function() {
                                        localStorage.setItem( 'status_location', '0' );
                                        location_error( slug );
                                    });
            
                                } else {
                                    localStorage.setItem( 'status_location', '0' );
                                    location_error( slug );
                                }
            
                            } );

                            break;

                        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                            
                            localStorage.setItem( 'status_location', '1' );
                            launch_calendar();

                            document.addEventListener( "resume", () => { 
                                
                                setTimeout( () => {
                                    window.location.reload();
                                }, 0 );

                            } );

                            break;

                    }
                 }, function( error ) {
                    
                     localStorage.setItem( 'status_location', '0' );
                     location_error( slug );

                 } );
                 
            }

        } else {

            content_not_connection( main, 
                                    text_not_internet, 
                                    'index_get_info', 
                                    'main', 
                                    inner_get_info_func, 
                                    index_get_info );

        }

    }, 0 );
    
}




