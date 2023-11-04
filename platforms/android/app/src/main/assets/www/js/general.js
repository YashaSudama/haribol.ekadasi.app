"use strict";

import { content_description } from "./content_description.js";

let background = document.getElementById( 'background' );

if ( localStorage.getItem( 'status_background' ) === 'yes' ) {
    show_background();
    setTimeout( show_body, 1000 );
}

let content_preloader = '<div class="sk-fading-circle">' +
                          '<div class="sk-circle sk-circle-1"></div>' +
                          '<div class="sk-circle sk-circle-2"></div>' +
                          '<div class="sk-circle sk-circle-3"></div>' +
                          '<div class="sk-circle sk-circle-4"></div>' +
                          '<div class="sk-circle sk-circle-5"></div>' +
                          '<div class="sk-circle sk-circle-6"></div>' +
                          '<div class="sk-circle sk-circle-7"></div>' +
                          '<div class="sk-circle sk-circle-8"></div>' +
                          '<div class="sk-circle sk-circle-9"></div>' +
                          '<div class="sk-circle sk-circle-10"></div>' +
                          '<div class="sk-circle sk-circle-11"></div>' +
                          '<div class="sk-circle sk-circle-12"></div>' +
                        '</div>',
    block_nav = document.querySelector( 'nav' ),
    div_ul_nav = document.createElement( 'div' ),
    div_description = document.createElement( 'section' ),
    header_top = document.getElementById( 'header' );
    div_description.innerHTML = content_description;
    div_description.id = 'section_description';
    div_description.className = 'pos-fixed';
    div_ul_nav.id = 'ul_nav';
    div_ul_nav.className = 'pos-fixed';
    div_ul_nav.innerHTML ='<i id="close_nav" class="pos-abs fas fa-angle-left"></i>' +
                        '<ul class="width-fit pos-rel">' +
                            '<li><a href="about_ekadashi.html">Об Экадаши</a></li>' + 
                            '<li id="city_selection">Выбрать город</li>' + 
                            '<li id="choice_date"><a href="select_date.html">Календарь событий</a></li>' +
                            '<li><a href="notifications.html">Уведомления</a></li>' + 
                            '<li><a href="contacts.html">Связаться с нами</a></li>' + 
                            '<li class="width-min l-height-1-25 p-b-5"><a href="privacy_policy.html">Политика конфиденциальности</a></li>'
                        '</ul>';

if ( ( window.location.pathname === '/' ) || 
        ( window.location.pathname === '/index.html' ) || 
        ( window.location.pathname === '/select_date.html' ) ) { 
    document.body.prepend( div_description );
}

block_nav.append( div_ul_nav );

if ( !localStorage.getItem( 'setting_notifications' ) ) { 

    let setting_notifications_let = JSON.stringify( { day: 1, time: '09:00' } );
    localStorage.setItem( 'setting_notifications', setting_notifications_let );
}

let key = '7dc98540afbc4208863cb94ea2932ef0',
    url = 'https://ekadasi.info/',
    now_date = new Date(), // создаем экземпляр объекта с текущей датой
    now_year = now_date.getFullYear(), // возвращает текущий год в четырехзначном формате
    now_month = now_date.getMonth(), // возвращает текущий номер месяца (значение от 0 до 11. Январь равен 0)
    month_days,  
    now_date_number = now_date.getDate(), // возвращает текущую дату
    month_name = ['Январь', 
                  'Февраль',
                  'Март',
                  'Апрель',
                  'Май',
                  'Июнь',
                  'Июль',
                  'Август',
                  'Сентябрь',
                  'Октябрь',
                  'Ноябрь',
                  'Декабрь'],
    month_name_header = ['января', 
                         'февраля',
                         'марта',
                         'апреля',
                         'мая',
                         'июня',
                         'июля',
                         'августа',
                         'сентября',
                         'октября',
                         'ноября',
                         'декабря'],
    day_week,
    day_name_short = ['Вс',
                      'Пн',
                      'Вт',
                      'Ср',
                      'Чт',
                      'Пт',
                      'Сб'],
    day_name_full = ['Воскресенье',
                     'Понедельник',
                     'Вторник',
                     'Среда',
                     'Четверг',
                     'Пятница',
                     'Суббота'],
    height_header,
    current_date_span = document.getElementById( 'current_date' ),
    location_span = document.getElementById( 'location' ),
    nav = document.getElementById( 'nav' ),
    ul_nav = document.getElementById( 'ul_nav' ),
    close_nav = document.getElementById( 'close_nav' ),
    footer_id = document.getElementById( 'footer' ),
    city_selection = document.getElementById( 'city_selection' ),
    window_width = window.innerWidth,
    window_height = window.innerHeight,
    height_footer = document.getElementById( 'height_footer' ),
    message_notifications = document.getElementById('message_notifications'),
    slug,
    city,
    scroll_window_height = window_height,
    div_zoom_calendar = document.querySelector( '.div_zoom_calendar' ),
    section_description = document.getElementById( 'section_description' ),
    close_description = document.getElementById( 'close_description' ),
    button_update_notif = document.getElementById( 'update_notif' ),
    description = document.getElementsByClassName( 'description' ), 
    events, 
    plus = document.getElementById( 'plus' ),
    minus = document.getElementById( 'minus' ),
    coords_let, 
    coords_left, 
    event_year,
    delete_div, 
    index_get_info,
	min_preloader = document.createElement( 'section' ),
    info_notifications = {
        status: localStorage.getItem( 'status_notifications' ),
        day: Number( JSON.parse( localStorage.getItem( 'setting_notifications' ) ).day ),
        time: JSON.parse( localStorage.getItem( 'setting_notifications' ) ).time,
    },
    form = document.forms.settings_notifications,
    home = document.getElementById( 'home' ),
    choice_date = document.getElementById( 'choice_date' ),
    text_not_connection_timeout = '<h3 class="m-b-0 text-uppercase">Не удалось получить<br>данные с сервера</h3>' +
                                  '<h4 class="m-t-15">Возможные причины:</h4>' +
                                  '<ul class="reason_server l-height-1-1 text-left m-auto" style="max-width: 65%">' +
                                    '<li class="m-b-10 m-l-15 pos-rel">' +
                                        '<span class="pos-abs"></span>' +
                                            'слабый интернет или нет подключения к интернету' +
                                    '</li>' +
                                    '<li class="pos-rel m-l-15">' +
                                        '<span class="pos-abs"></span>' +
                                            'не подключена служба VPN' +
                                    '</li>' +
                                  '</ul>',
    text_not_internet = '<h3>Нет подключения к интернету!</h3>';
	
min_preloader.id = 'min_preloader';
min_preloader.innerHTML = content_preloader;

if ( month_name[ now_month ] === 'Январь'  || 
     month_name[ now_month ] === 'Март'    || 
     month_name[ now_month ] === 'Май'     ||
     month_name[ now_month ] === 'Июль'    || 
     month_name[ now_month ] === 'Август'  || 
     month_name[ now_month ] === 'Октябрь' || 
     month_name[ now_month ] === 'Декабрь' ) {

        month_days = 31;

} else if ( month_name[ now_month ] === 'Апрель'   || 
            month_name[ now_month ] === 'Июнь'     || 
            month_name[ now_month ] === 'Сентябрь' || 
            month_name[ now_month ] === 'Ноябрь' ) {

        month_days = 30;

} else if ( month_name[ now_month ] === 'Февраль' ) {
    
    if ( ( now_year % 4 ) === 0 ) {
        month_days = 29;
    } else {
        month_days = 28;
    }

} 

if ( home ) {

    home.onclick = function() {
        hide_body();
        localStorage.setItem( 'status_background', 'yes' );
    }

}

choice_date.onclick = function( event ) {
    hide_body();
    localStorage.setItem( 'status_background', 'yes' );
}

function show_body() {
    document.body.style.cssText = 'opacity: 1';
}

function hide_body() {
    document.body.style.cssText = '';
}

function show_background() {
    background.style.cssText = 'opacity: 1; z-index: 5';
}

function hide_background() {
    background.style.cssText = '';
}

for ( let div of description ) {
  div.style.left = window_width + 'px';
}

window.addEventListener( 'resize', function() {
    scroll_window_height = window.innerHeight;

    for ( let div of description ) {

        if ( div.style.left !== '0px' ) div.style.left = window.innerWidth + 'px';

    }

    let too_events = document.querySelector( '#too_events' );

    if ( too_events ) {
        let li_too_id = calendar.querySelectorAll( '.too_id' ),
            name_class,
            margin_close_too_events,
            event_year_2,
            class_too_events;

            if ( plus.classList.contains( 'zoom_hide' ) ) {
                margin_close_too_events = -15;
            } else if ( plus.classList.contains( 'zoom_show' ) ) {
                margin_close_too_events = -10;
            }

            if ( li_too_id.length > 0 ) {

                for ( let li_id of li_too_id ) {

                    event_year = li_id.closest( '.calendar_year' ).previousElementSibling.textContent;
                    event_year_2 = 'year_' + event_year;

                    if ( too_events.classList.contains( li_id.id ) ) {

                        for ( let name of too_events.classList ) {

                            if ( name.includes( 'year' ) ) {
                                name_class = name;
                            }

                        }

                        if ( event_year_2 !== name_class ) {
                            continue;
                        }

                        coords_let = li_id.getBoundingClientRect();

                        if ( plus.classList.contains( 'zoom_hide' ) ) {
                            class_too_events = '.' + li_id.id + '.year_' + event_year + '.zoom_events';
                        } else if ( plus.classList.contains( 'zoom_show' ) ) {
                            class_too_events = '.' + li_id.id + '.year_' + event_year;
                        }

                        get_coords_left( too_events, 
                                        coords_let,
                                        class_too_events, 
                                        '.' + li_id.id + '_' + event_year, 
                                        margin_close_too_events );
                    
                    }

                }
			
		} 

    }

} );

nav.onclick = function() {
    ul_nav.style.cssText = 'opacity: 1; z-index: 7';
}

close_nav.onclick = function() {
    ul_nav.style.cssText = '';
}

city_selection.onclick = function() {
    
    if ( !localStorage.getItem( 'city_selection' ) ) {
        localStorage.setItem( 'city_selection', 'yes' );
    }

    if ( localStorage.getItem( 'click_choice_city' ) === '0' ) localStorage.setItem( 'click_choice_city', '1' );

    window.location.href = 'index.html';
}

function reading_locale_storage() {
    
    for ( let key in localStorage ) {
        
        if ( !localStorage.hasOwnProperty( key ) || ( key === 'index_get_info' ) 
            || ( key === 'calendar' ) || ( key === 'main' ) ) {
            continue;
        }
        
        console.log( key + ' : ' + localStorage[ key ] );

    }
    
} // reading_locale_storage - end

function clear() {
  localStorage.clear();
}

function content_not_data( main, 
                           text, 
                           local_object, 
                           local_html, 
                           name_func, 
                           param ) {

    
    
    if ( localStorage.getItem( 'status_background' ) === 'yes' ) {
        hide_background();
        localStorage.removeItem( 'status_background' );
    } else {
        navigator.splashscreen.hide();
        show_body();
    }

    if ( ( window.location.pathname === '/' ) || 
         ( window.location.pathname === '/index.html' )  ) {
        window_select_city.style.cssText = '';
    }

    if ( !height_header ) {
        height_header = header_top.clientHeight;
    }

    if ( div_zoom_calendar ) {
        div_zoom_calendar.style.cssText = 'opacity: 0; z-index: -1';
    }

    main.style.height = ( scroll_window_height - height_header - footer_id.clientHeight ) + 'px';
    main.innerHTML = '<div id="not_connection" class="pos-rel">' +
                        '<div class="text-center">' + text + '</div>' +
                        '<button id="reload" class="d-block m-auto m-t-30">Перезагрузить страницу</button>' +
                        '<button id="last_version" class="d-block m-t-30 m-auto">Отобразить последнюю<br>сохранённую версию</button>' +
                        '<h4 class="text-center m-auto m-t-30" style="max-width: 80%">Проверьте подключение к интернету и попробуйте еще раз</h4>' +
                     '</div>';

    let reload = document.getElementById( 'reload' ),
        last_version = document.getElementById( 'last_version' );

    if ( !localStorage.getItem( local_object ) ) {

        if ( !last_version.classList.contains( 'd-none' ) ) {
            last_version.classList.add( 'd-none' );
        }

    } else {

        if ( last_version.classList.contains( 'd-none' ) ) {
            last_version.classList.remove( 'd-none' );
        }

        param = JSON.parse( localStorage.getItem( local_object ) );
    }

    reload.onclick = function() {
        window.location.reload();
        hide_body();
        localStorage.setItem( 'status_background', 'yes' );
    }

    last_version.onclick = function() {
        city = localStorage.getItem( 'city_name' ) || localStorage.getItem( 'cesh_city' );
        location_span.innerHTML = city;

        if ( div_zoom_calendar ) {
            div_zoom_calendar.style.cssText = '';
        }

        main.style.cssText = '';
        main.innerHTML = localStorage.getItem( local_html );
        name_func( param );
        
        if ( document.body.style.overflow === 'hidden' ) document.body.style.overflow = 'auto';

    }

}

function not_connection( xml_name, 
                         main, 
                         text, 
                         local_object, 
                         local_html, 
                         name_func, 
                         param ) {

    xml_name.onerror = function() {
        
       content_not_data( main, 
                         text, 
                         local_object, 
                         local_html, 
                         name_func, 
                         param );

    }

}

function timeout( xml_name, 
                  main, 
                  text, 
                  local_object, 
                  local_html, 
                  name_func, 
                  param ) {

    xml_name.timeout = 5000;

    xml_name.ontimeout = function() {
        
        content_not_data( main, 
                          text, 
                          local_object, 
                          local_html, 
                          name_func, 
                          param );

    }

}

function content_not_connection( main, 
                                 text, 
                                 local_object, 
                                 local_html, 
                                 name_func, 
                                 param ) {

    content_not_data( main, 
                      text, 
                      local_object, 
                      local_html, 
                      name_func, 
                      param );
    
}

function height_footer_func() {
    height_footer.style.height = footer_id.clientHeight + 30 + 'px';
}

function get_coords_left( block, 
                          coords,
                          class_after, 
                          class_close, 
                          left_right,
                        ) {

    let style_too_events = document.getElementById( 'style_too_events' ),
        style_tag,
        block_height = block.offsetHeight,
        block_top = false; 

    delete_div = block.querySelector( 'i' );

    if ( ( coords.bottom + block_height + 40 ) < ( window.innerHeight - footer_id.offsetHeight ) ) {
        block.style.top = ( coords.bottom + window.pageYOffset ) + 10 + 'px';
    } else {
        block.style.top = ( coords.top + window.pageYOffset ) - ( block_height + 10 ) + 'px';
        block_top = true;
    }

    style_tag = document.createElement( 'style' );
    style_tag.id = 'style_too_events';

    if ( ( ( coords.left + ( coords.width / 2 ) ) + ( block.clientWidth / 2 ) ) > window.innerWidth ) {

        coords_left = window_width - block.clientWidth - 1;
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'right: ' + ( window.innerWidth - ( coords.left + coords.width ) ) + 'px; } ' +
                                class_close + '{ left: ' + left_right + 'px; } '; 
            

    } else if ( ( ( coords.left + ( coords.width / 2 ) ) - ( block.clientWidth / 2 ) ) < 20 ) {

        coords_left = 0; 
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'left: ' + ( coords.left + ( coords.width / 2 ) ) + 'px; } '+    
                                class_close + ' { left: ' + ( block.clientWidth - 
                                ( delete_div.clientWidth / 3 ) ) + 'px; }'; 

    } else {

        coords_left = ( coords.left + ( coords.width / 2 ) ) - ( block.clientWidth / 2 );
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'left: ' + ( ( block.clientWidth / 2 ) ) + 'px; } '+
                                class_close + ' { right: ' + left_right + 'px; }';
    }

    if ( block_top ) {

    if ( class_after.includes( 'zoom_events' ) ) {
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'bottom: -20px !important;' +
                                'border-top: 13px solid #d6e6ff !important; }';
    } else {
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'bottom: -14px;' +
                                'border-top: 9px solid #d6e6ff !important; }';
    }

    } else {

    if ( class_after.includes( 'zoom_events' ) ) {
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'bottom: ' + block.offsetHeight +  'px !important;' +
                                'border-bottom: 13px solid #d6e6ff !important; }';
    } else {
        style_tag.innerHTML +=  class_after + '::after { ' +
                                'bottom: ' + ( block.offsetHeight - 1 ) + 'px;' +
                                'border-bottom: 9px solid #d6e6ff !important; }';
    }

}

    setTimeout( () => {

        if ( style_too_events ) style_too_events.remove();

        block.append( style_tag );
    }, 0 );

    block.style.left = coords_left + 'px';
    block.style.opacity = '1';

}

function get_description( main, tag ) {
    let variable = main.querySelectorAll( tag ),
        div_visible;
 
    variable.forEach( function( item ) {
        item.addEventListener( 'click', function() {

            if ( item.hasAttribute( 'id' ) ) {
                let id = item.id;

                if ( id.includes( '_' ) ) {
                    let too_events = document.getElementById( 'too_events' ),
                        new_id = id.replace( '_', ', ' ),
                        arr_event = [];
                    
                    if ( too_events ) too_events.remove();

                    new_id = new_id.split( ', ' );
                    event_year = item.closest( '.calendar_year' ).previousElementSibling.textContent;
                    arr_event[ 0 ] = id;
                    arr_event[ 1 ] = event_year;
                    
                    events = document.createElement( 'div' );
                    events.id = 'too_events';
                    events.className = 'too_events pos-abs ' + id + ' year_' + event_year;
                    events.style.cssText = 'padding: 5px 10px;' +
                                           'box-shadow: 0 5px 10px -5px #000; z-index: 0' + 
                                           'opacity: 0;' +
                                           'border-radius: 10px;' +
                                           'transition: opacity .6s linear';

                    coords_let = item.getBoundingClientRect();

                    for ( let elem_id of new_id ) {

                        let elem_id_orig = elem_id;

                        if (elem_id === 'putrada') {
                            elem_id = 'Путрада';
                        } else if (elem_id === 'sat-tila') {
                            elem_id = 'Шат-тила Экадаши';
                        } else if (elem_id === 'bhaimi') {
                            elem_id = 'Джая (Бхаими) Экадаши';
                        } else if (elem_id === 'vijaya') {
                            elem_id = 'Виджая Экадаши';
                        } else if (elem_id === 'amalaki') {
                            elem_id = 'Амалаки Экадаши';
                        } else if (elem_id === 'papamocani') {
                            elem_id = 'Папа-мочани Экадаши';
                        } else if (elem_id === 'kamada') {
                            elem_id = 'Камада Экадаши';
                        } else if (elem_id === 'varuthini') {
                            elem_id = 'Варутхини Экадаши';
                        } else if (elem_id === 'mohini') {
                            elem_id = 'Мохини Экадаши';
                        } else if (elem_id === 'apara') {
                            elem_id = 'Апара Экадаши';
                        } else if (elem_id === 'pandava') {
                            elem_id = 'Нирджала (Пандава, Бхима) Экадаши';
                        } else if (elem_id === 'yogini') {
                            elem_id = 'Йогини Экадаши';
                        } else if (elem_id === 'sayana') {
                            elem_id = 'Дева-шаяни (Падма) Экадаши';
                        } else if (elem_id === 'kamika') {
                            elem_id = 'Камика Экадаши';
                        } else if (elem_id === 'pavitra') {
                            elem_id = 'Павитра Экадаши';
                        } else if (elem_id === 'annada') {
                            elem_id = 'Аннада (Аджа) Экадаши';
                        } else if (elem_id === 'parsva') {
                            elem_id = 'Паршва Экадаши';
                        } else if (elem_id === 'indira') {
                            elem_id = 'Индира Экадаши';
                        } else if (elem_id === 'padmini') {
                            elem_id = 'Падмини Экадаши';
                        } else if (elem_id === 'parama') {
                            elem_id = 'Парама Экадаши';
                        } else if (elem_id === 'pasankusa') {
                            elem_id = 'Пашанкуша Экадаши';
                        } else if (elem_id === 'rama-ekadashi') {
                            elem_id = 'Рама Экадаши'; 
                        } else if (elem_id === 'utthana') {
                            elem_id = 'Уттхана Экадаши';
                        } else if (elem_id === 'moksada') {
                            elem_id = 'Мокшада Экадаши';
                        } else if (elem_id === 'saphala') {
                            elem_id = 'Са-пхала Экадаши';
                        } else if (elem_id === 'utpanna') {
                            elem_id = 'Утпанна Экадаши';
                        } else if (elem_id === 'nityananda') {
                            elem_id = 'Нитьянанда';
                        } else if (elem_id === 'chaytanya') {
                            elem_id = 'Чайтанья';
                        } else if (elem_id === 'sita') {
                            elem_id = 'Рамачандра';
                        } else if (elem_id === 'nrisimha') {
                            elem_id = 'Наришимха';
                        } else if (elem_id === 'balarama') {
                            elem_id = 'Баларама';
                        } else if (elem_id === 'krishna') {
                            elem_id = 'Кришна';
                        } else if (elem_id === 'bhaktivedanta') {
                            elem_id = 'Бхактиведанта';
                        } else if (elem_id === 'radharany') {
                            elem_id = 'Радхарани';
                        } else if (elem_id === 'govardhana') {
                            elem_id = 'Говардхана-пуджа';
                        } else if (elem_id === 'radha-yatra') {
                            elem_id = 'Ратха-ятра';
                        } else if (elem_id === 'rozhdestvo') {
                            elem_id = 'Иисус Христос';
                        } else if (elem_id === 'vyasapudja') {
                            elem_id = 'Сиддхасварупананда';
                        } 

                        events.innerHTML += '<span id="' + elem_id_orig + '" class="d-block">' + 
                                             elem_id + '</span>';
                    }

                    let class_close = arr_event[ 0 ] + '_' + arr_event[ 1 ];

                    events.innerHTML += '<i class="' + class_close + ' close_events pos-abs far ' +
                                         'fa-times-circle" data-id="' + arr_event[ 0 ] +
                                         '" data-year="' + arr_event[ 1 ] + '"></i>'
                    
                    document.body.append( events );

                    if ( plus.classList.contains( 'zoom_hide' ) ) {
                        delete_div = events.querySelector( 'i' );
                        delete_div.style.fontSize = '26px';
                        delete_div.classList.add( 'zoom_delete' );
                        events.style.fontSize = '22px';
                        events.classList.add( 'zoom_events' );
                        events.style.left = '0';
                        
                        get_coords_left( events,
                                         coords_let, 
                                         '.' + id + '.year_' + event_year + '.zoom_events',
                                         '.' + class_close + '.zoom_delete', 
                                         -15 );

                    } else if ( plus.classList.contains( 'zoom_show' ) ) {

                        get_coords_left( events,
                                         coords_let, 
                                         '.' + id + '.year_' + event_year, 
                                         '.' + class_close, 
                                         -10 );

                    }

                    let elem_events = events.querySelectorAll( 'span' );

                    elem_events.forEach( function( item ) {
                        item.addEventListener( 'click', function() {
                            let id = item.id;
                            
                            for ( let div of description ) {

                                if ( ( div.getAttribute( 'id' ) ).includes( id ) ) {
                                    div_visible = div;
                                    div.style.cssText = 'opacity: 1; left: 0';
                                    section_description.style.zIndex = '4';
                                    close_description.style.cssText = 'opacity: 1; z-index: 1;';
                                } 

                            }

                        } );

                    } );

                    let close_events = document.querySelectorAll('.close_events');

                    close_events.forEach( function( item, index ) {
                        item.addEventListener( 'click', function( event ) {
                            let delete_div = item.closest( '.too_events' );
                            delete_div.remove();
                        } );
                    } );

                } else {

                    for ( let div of description ) {

                        console.log( id );

                        if ( ( div.getAttribute( 'id' )).includes( id ) ) {
                            div_visible = div;
                            div.style.cssText = 'opacity: 1; left: 0';
                            section_description.style.zIndex = '4';
                            close_description.style.cssText = 'opacity: 1; z-index: 1;';
                        } 

                    }

                }

            } else {
                return false;
            }

            close_description.onclick = function() {
                div_visible.style.cssText = 'opacity: 0; left: ' + window.innerWidth + 'px';
                close_description.style.cssText = 'opacity: 0; z-index: 1';

                setTimeout( function() {
                    section_description.style.cssText = '';
                    close_description.style.cssText = '';
                }, 1000 );
            }

        });
    })

}

function get_token() {

    let now_date = new Date(),
        now_year = now_date.getUTCFullYear(),
        now_date_local = now_date.getUTCDate(),
        month = now_date.getUTCMonth() + 1,
        min = String( now_date.getUTCMinutes() ),
        hours = now_date.getUTCHours(),
        date,
        token,
        md5;

    if ( month < 10 ) {
        month = '0' + month;
    }

    if ( now_date_local < 10 ) {
        now_date_local = '0' + now_date_local;
    } 

    if ( min.length === 1 ) {

        if ( min === '9' ) {
            min = '10';
        } else if ( min < 9 ) {
            min = '00';
        } 

    } else if ( min.length === 2 ) {

        if ( min === '59' ) {
            min = '00';
            hours = +hours + 1;
        }

        let last_min = min.slice( 1 );

        if ( last_min < 9 ) {
            min = min.slice( 0, 1 ) + '0';
        } else if ( last_min === '9' ) {
            min = +min + 1;
        }
    } 

    if ( hours < 10 ) {
        hours = '0' + hours;
    }

    date = now_year + '' + month + '' + now_date_local + '' + 
           hours + '' + min;
    token = 'Radharani_Shyamasundara' + date;
    md5 = function(d){let result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};
    
    token = md5( token );

    return token;

}

function update_notifications( slug ) {

    let xml_update = new XMLHttpRequest(),
        value_token = get_token(),
        city_id = slug.id || Number( slug ),
        data_send,
        status_notifications;

    if ( location.pathname.includes( 'notifications' ) ) {
        status_notifications = form.status_notifications.dataset.status;

        if ( status_notifications === 'false' ) {
            status_notifications = false;
        } else {
            status_notifications = true;
        }

        data_send = JSON.stringify( { 'firebaseToken': localStorage.getItem( 'firebase_token' ),
                                      'city': city_id,
                                      'notification': status_notifications,
                                      'notifyDay': Number( form.get_notifications.value ),
                                      'notifyTime': form.time.value,
                                      'uuid': device.uuid,
                                      'token': value_token } );

        button_update_notif.setAttribute( 'disabled', 'true' );

    } else {

        info_notifications = {
            status: localStorage.getItem( 'status_notifications' ),
            day: Number( JSON.parse( localStorage.getItem( 'setting_notifications' ) ).day ),
            time: JSON.parse( localStorage.getItem( 'setting_notifications' ) ).time,
        }

        let status_notifications = info_notifications.status;

        if ( status_notifications === 'false' ) {
            status_notifications = false;
        } else {
            status_notifications = true;
        }

        data_send = JSON.stringify( { 'firebaseToken': localStorage.getItem( 'firebase_token' ),
                                      'city': city_id,
                                      'notification': status_notifications,
                                      'notifyDay': info_notifications.day,
                                      'notifyTime': info_notifications.time,
                                      'uuid': device.uuid,
                                      'token': value_token } );
    }    

    xml_update.open( 'PATCH', url + 'api/devices/update/' + localStorage.getItem( 'id_notifications') );
    xml_update.responseType = 'json';
    xml_update.setRequestHeader( 'Content-Type', 'application/json' );

    xml_update.onerror = function() {

        if ( location.pathname.includes( 'notifications' ) ) {
            min_preloader.remove();
            button_update_notif.removeAttribute( 'disabled' );
            button_update_notif.insertAdjacentHTML( 'afterend', '<span id="error_update" class="d-block l-height-1-2 text-center" style="margin-top: 20px">' +
                                                                    'Нет соединения с сервером<br><br>' +
                                                                    '<i style="font-size: 14px">Возможные причины:</i><br><br>' +
                                                                    '<div class="width-fit m-auto text-left">' +
                                                                        '<small>' +
                                                                            '- слабый интернет<br>' +
                                                                            '- не подключена служба VPN' +
                                                                        '</small>' +
                                                                    '</div>' +
                                                                '</span>' );
                                                                
        } else {
            message_notifications.innerHTML =  '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Произошла ошибка! Не удалось обновить настройки уведомлений! Попробуйте позже или еще раз.' +
                                                    '</span>' +
                                                '</div>';

            message_notifications.style.bottom = '0';

            setTimeout( () => {
                message_notifications.style.cssText = '';
            }, 3000 );

        }

    }

    xml_update.timeout = 5000;

    xml_update.ontimeout = function() {

        if ( location.pathname.includes( 'notifications' ) ) {
            min_preloader.remove();
            button_update_notif.removeAttribute( 'disabled' );
            button_update_notif.insertAdjacentHTML( 'afterend', '<span id="error_update" class="d-block l-height-1-2 text-center" style="margin-top: 20px">' +
                                                                    'Нет соединения с сервером<br><br>' +
                                                                    '<i style="font-size: 14px">Возможные причины:</i><br><br>' +
                                                                    '<div class="width-fit m-auto text-left">' +
                                                                        '<small>' +
                                                                            '- слабый интернет<br>' +
                                                                            '- не подключена служба VPN' +
                                                                        '</small>' +
                                                                    '</div>' +
                                                                '</span>' );
        } else {
            message_notifications.innerHTML =  '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Произошла ошибка! Не удалось обновить настройки уведомлений! Попробуйте позже или еще раз.' +
                                                    '</span>' +
                                                '</div>';

            message_notifications.style.bottom = '0';

            setTimeout( () => {
                message_notifications.style.cssText = '';
            }, 3000 );

        }

        message_notifications.style.bottom = '0';

        setTimeout( () => {
            message_notifications.style.cssText = '';
        }, 3000 );

    }
        
    xml_update.onload = function() {
        
        let response_update = xml_update.response;

        if ( response_update ) {

            if ( response_update.message ) {

                if ( response_update.message === 'updated' ) {
                    
                    if ( location.pathname.includes( 'notifications') ) {

                        if ( status_notifications ) {
                            localStorage.setItem( 'status_notifications', 'true' );
                        } else {
                            localStorage.setItem( 'status_notifications', 'false' );
                        }
                        
                        localStorage.setItem( 'setting_notifications', JSON.stringify( { day: Number( form.get_notifications.value ),
                                                                                        time: form.time.value } ) );
            
                        info_notifications = {
                            status: localStorage.getItem( 'status_notifications' ),
                            day: Number( JSON.parse( localStorage.getItem( 'setting_notifications' ) ).day ),
                            time: JSON.parse( localStorage.getItem( 'setting_notifications' ) ).time,
                        };
                    
                        message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                            '<span class="d-block text-center">' +
                                                                'Ваши настройки уведомлений обновлены!' +
                                                            '</span>' +
                                                        '</div>';

                        message_notifications.style.bottom = '0';

                        setTimeout( () => {
                            message_notifications.style.cssText = '';
                        }, 5000 );
        
                        setTimeout( () => {
                            button_update_notif.removeAttribute( 'disabled' );
                            min_preloader.remove();
                        }, 3500 );

                    } else {

                        message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                            '<span class="d-block text-center m-b-10">' +
                                                                'Ваши настройки уведомлений обновлены!' +
                                                            '</span>' +
                                                            '<a class="link_policy d-block width-fit m-auto" href="notifications.html">Настройка уведомлений</a>' +
                                                          '</div>';

                        message_notifications.style.bottom = '0';

                        setTimeout( () => {
                            message_notifications.style.cssText = '';
                        }, 5000 );

                    }

                }

            } else if ( response_update.errors ) {

                message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                    '<span class="d-block text-center">' +
                                                        'Произошла ошибка! Попробуйте еще раз или позже!' +
                                                    '</span>' +
                                                  '</div>';

                message_notifications.style.bottom = '0';

                setTimeout( () => {
                    message_notifications.style.cssText = '';
                }, 3000 );

                if ( location.pathname.includes( 'notifications') ) {

                    setTimeout( () => {
                        button_update_notif.removeAttribute( 'disabled' );
                        min_preloader.remove();
                    }, 4500 );

                }
            }

        } else {

            message_notifications.innerHTML = '<div class="width-fit m-auto">' +
                                                '<span class="d-block text-center">' +
                                                    'Произошла ошибка! Попробуйте еще раз или позже!' +
                                                '</span>' +
                                              '</div>';

            message_notifications.style.bottom = '0';

            setTimeout( () => {
                message_notifications.style.cssText = '';
            }, 3000 );

            if ( location.pathname.includes( 'notifications') ) {

                setTimeout( () => {
                    button_update_notif.removeAttribute( 'disabled' );
                    min_preloader.remove();
                }, 4500 );

            }
            
        }
    
    };
    
    xml_update.send( data_send );

}

document.addEventListener( "deviceready", () => {

    cordova.plugins.firebase.messaging.onMessage( ( payload ) => {
        alert( payload.gcm.body + '\n' + payload.gcm.title );
    } );

} );

export { window_width, 
         window_height,
         month_days,
         day_name_full,
         day_week, 
         day_name_short,
         month_name_header,
         now_date_number,
         month_name,
         now_month,
         height_footer_func,
         now_year,
         city,
         reading_locale_storage,
         clear,
         slug,
         get_token,
         url,
         not_connection,
         timeout,
         content_not_connection,
         index_get_info,
         footer_id,
         location_span,
         height_header,
         header_top,
         get_description,
         show_body,
         hide_body,
         show_background,
         hide_background,
         key,
         scroll_window_height,
         min_preloader,
         height_footer,
         form,
         info_notifications,
         update_notifications,
         button_update_notif,
         home,
         get_coords_left,
         plus,
         minus,
         coords_let,
         text_not_connection_timeout,
         text_not_internet,
         div_zoom_calendar };

// По луне
// -------
// 1 - Нитьянанда
// 2 - Чайтанья  
// 3 - Рамачандра
// 4 - Нрисимха 
// 6 - Баларама 
// 7 - Кришна 
// 8 - Бхактиведанта 
// 9 - Радхарани 
// А - Говардхана-пуджа  
// В - Ратха-ятра 

// Не по луне
// ----------
// 14 июня ШП
// 25 декабря Иисус Христос


current_date_span.innerHTML = now_date_number + ' ' +  month_name_header[ now_month ] + ' ' + now_year;













