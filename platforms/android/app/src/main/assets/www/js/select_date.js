"use strict";

import { now_date_number,
		 now_month,
		 month_name, 
		 height_footer_func,
		 height_footer,
		 now_year,
		 slug,
		 url,
		 not_connection,
		 timeout,
		 content_not_connection,
		 text_not_connection_timeout,
		 text_not_internet,
		 footer_id,
		 location_span,
		 header_top,
		 get_description,
		 scroll_window_height,
		 min_preloader,
		 get_coords_left,
		 plus,
		 minus,
		 div_zoom_calendar,
		 hide_background,
		 show_body,
		 window_height,
		 apparition_ekadasi_days,
		 add_sp_array,
		 add_isus_array,
         set_local_storage,
         remove_too_events,
		 show_select_date,
		 year_screen,
		 year_screen_span
} from "./general.js";

let calendar = document.getElementById( 'calendar' ),
	select_date = document.getElementById( 'select_date' ),
	input_select_date = document.getElementById( 'input_select_date' ),
	list_all_years = document.getElementById( 'list_all_years' ),
	div_list_all_years = document.getElementById( 'div_list_all_years' ),
	open_list_years = document.getElementById( 'open_list_years' ),
	close_list_years = document.getElementById( 'close_list_years' ),
	year = calendar.getElementsByTagName( 'h1'),
	div_calendar = calendar.querySelectorAll( '.calendar_year' ),
	first_day_month,
	min_year = 1980,
	max_year = 2069,
	year_input,
	top_scroll = false,
	bottom_scroll = false,
	select_year = false,
	not_scroll = true,
	name_class, 
	select_get_info,
	span_year_input,
	city,
	height_header,
    document_height,
	height_hint_description,
	hint_description_top,
	hint_description = document.getElementById( 'hint_description' ),
	close_forever = document.getElementById( 'close_forever' ),
	close_hint_description = document.getElementById( 'close_hint_description' ), 
	wrapper_hint_description = document.getElementById( 'wrapper_hint_description' ),
	top_elem,
	count_year = -1; 

if ( localStorage.getItem( 'city_name' ) ) {
	city = localStorage.getItem( 'city_name' );
	location_span.innerHTML = city;
} else {
	window.location.href = 'index.html';
}

set_local_storage( 'calendar', calendar.innerHTML );
set_local_storage( 'not_scroll', 'false' );
set_local_storage( 'now_year_select_date', now_year );

document.addEventListener( 'deviceready', () => { 

	if ( navigator.connection.type !== 'none' ) {

		if ( localStorage.getItem( 'select_get_info' ) && +localStorage.getItem( 'now_year_select_date' ) === now_year ) {
			select_get_info = JSON.parse( localStorage.getItem( 'select_get_info' ) );
				
			inner_get_info( select_get_info );

		} else {
			localStorage.setItem( 'now_year_select_date', now_year );
			
			get_city( get_info, slug );

		}

	} else {
 
		content_not_connection( calendar, 
								text_not_internet, 
								'select_get_info', 
								'calendar', 
								inner_get_info, 
								select_get_info );

	}
	
}, false );

for ( let i = min_year; i < ( max_year + 1 ); i++ ) {
	let year = '<span class="d-block m-b-20">' + i + '</span>';

	div_list_all_years.insertAdjacentHTML( 'beforeend', year );
}

function add_elem_div_list_all_years( where_element, height ) {
	let content = '<div style="height: ' + height + 'px; width: 100%;"></div>'
	div_list_all_years.insertAdjacentHTML( where_element, content );
}

add_elem_div_list_all_years( 'afterbegin', 30 );
add_elem_div_list_all_years( 'beforeend', 60 );

function show_zoom_callendar() {									   
	div_zoom_calendar.style.cssText = 'bottom: ' + ( footer_id.offsetHeight + plus.offsetHeight + 7 ) + 'px;' +
									  'right: ' + ( plus.offsetWidth + 10 ) + 'px;' +
									  'opacity: 1;';
}

function print_year( div_year, year ) {
	let count_month = 0,
		month_days_local,
		local_year = year;

	for ( let ul of div_year ) {
		first_day_month = new Date( local_year, count_month, 1 ).getDay();

		if ( local_year === now_year && count_month === now_month ) {
			ul.innerHTML = '<h3 class="m-b-10 m-t-30 now_month">' + month_name[ count_month ] + '</h3>';
		} else {
			ul.innerHTML = '<h3 class="m-b-10 m-t-30">' + month_name[ count_month ] + '</h3>';
		}

		if ( first_day_month === 0 ) {
			first_day_month = 7;
		}

		for ( let i = 1; i < first_day_month; i++ ) {
			ul.innerHTML += '<li></li>';
		}

		if ( count_month === 0  || 
			count_month === 2  || 
			count_month === 4  ||
			count_month === 6  || 
			count_month === 7  || 
			count_month === 9  || 
			count_month === 11 ) {

			   month_days_local = 31;

	   } else if ( count_month === 3 || 
				   count_month === 5 || 
				   count_month === 8 || 
				   count_month === 10 ) {

			   month_days_local = 30;

	   } else if ( count_month === 1 ) {
		   
		   if ( ( local_year % 4 ) === 0 ) {
			   month_days_local = 29;
		   } else {
			   month_days_local = 28;
		   }

	   } 

		for ( let i = 1; i < ( month_days_local + 1 ); i++ ) {

			if ( local_year === now_year && 
				 count_month === now_month && 
				 i === now_date_number ) {
				ul.innerHTML += '<li class="text-center pos-rel now_date">' + i + '</li>';
			} else {
				ul.innerHTML += '<li class="text-center pos-rel">' + i + '</li>';
			}

		}

		count_month++;

	}

}

for ( let item of div_calendar ) {
	print_year( item.children, ( now_year + count_year ) );
	count_year++;
}

function display_data( get_month, numb_ul, value, calendar, year ) { // value - свойство ( ключ ) объекта, дата события

	let calendar_ul_li = calendar[ numb_ul ].getElementsByTagName( 'li' ),
		class_li,
		id_li,
		value_key = get_month[ value ]; // value_key - значение свойства ( ключа ), тип события

	if ( calendar_ul_li.length === 0 ) {
		print_year( calendar, year );
	}

	if ( typeof ( value_key ) === 'object' ) {
		class_li = 'ekadashi';
		id_li = apparition_ekadasi_days[ value_key.ekadasi_name ].id; 
	} else if ( typeof( value_key ) === 'string' ) {
		class_li = apparition_ekadasi_days[ value_key ].id;
		id_li = apparition_ekadasi_days[ value_key ].id;

		if ( value_key === 'S' && value !== '14' ) {
			value = '14';
		} else if ( value_key === 'R' && value !== '25' ) {
			value = '25';
		}
	}

	for ( let li of calendar_ul_li ) {

		if ( ( li.textContent ) === value ) {
			li.classList.add( class_li );

			if ( !li.classList.contains( 'click' ) ) li.classList.add( 'click' );

			if ( li.hasAttribute( 'id' ) ) {
				let value_id = li.getAttribute( 'id' );
				li.removeAttribute( 'id' );
				li.setAttribute( 'id', value_id + '_' + id_li );
				li.classList.add( 'too_id' );
			} else {
				li.id = id_li;
			}

		}

	}

}

function inner_get_info( select_get_info ) {

	setTimeout( () => {
		height_header = header_top.offsetHeight;
		height_hint_description = hint_description.offsetHeight;
		year_screen.style.top = height_header + 'px';
	
		function init_elem( height ) {
	
			if ( ( ( height - height_header - footer_id.offsetHeight ) + 20 ) > height_hint_description ) {
				hint_description_top = height_header + ( ( ( height - height_header - footer_id.offsetHeight ) / 2 ) - ( height_hint_description / 2  ) );
			} else {
				hint_description_top = height_header + 20;
			}
			
			show_zoom_callendar();

		}
		
		init_elem( window_height );
		
		if ( navigator.connection.type !== 'none' ) {
	
			if ( !localStorage.getItem( 'status_hint_description' ) ) {
				localStorage.setItem( 'status_hint_description', 'show' );
				wrapper_hint_description.style.cssText = 'opacity: 1; z-index: 0';
				hint_description.style.top = hint_description_top + 'px';
			} else {
			
			if ( localStorage.getItem( 'status_hint_description' ) === 'show' ) {
				wrapper_hint_description.style.cssText = 'opacity: 1; z-index: 0';
				hint_description.style.top = hint_description_top + 'px';
			} 
			
			}
	
		}
	
		window.addEventListener( 'resize', () => {
			let resize_window_height = window.innerHeight;
			
			height_hint_description = hint_description.offsetHeight;
	
			init_elem( resize_window_height );
	
			hint_description.style.top = hint_description_top + 'px';
	
			if ( top_elem ) {
				let offset;
	
				if ( top_elem.tagName === 'UL' ) {
					offset = 15;
				} else {
					offset = -10;
				}
	
				window.scrollTo( 0, ( window.pageYOffset + 
									  top_elem.getBoundingClientRect().y ) -
									  height_header + offset );
			}
	
		} );
	  
	}, 0 );
    
    for ( let i = 0; i < select_get_info.length; i++ ) {

    	let array_obj = [ select_get_info[ i ].jan,
                          select_get_info[ i ].feb,
                          select_get_info[ i ].mar,
                          select_get_info[ i ].apr,
                          select_get_info[ i ].may,
                          select_get_info[ i ].jun,
                          select_get_info[ i ].jul,
                          select_get_info[ i ].aug,
                          select_get_info[ i ].sem,
                          select_get_info[ i ].oct,
                          select_get_info[ i ].nov,
                          select_get_info[ i ].dem ],
			get_year = select_get_info[ i ].value,
			calendar_ul = calendar.querySelectorAll( '.calendar_year')[ i ].getElementsByTagName( 'ul' ),
			sp_array = Object.entries( array_obj[ 5 ] ),
			isus_array = Object.entries( array_obj[ 11 ] );
	
		array_obj[ 5 ] = Object.fromEntries( add_sp_array( sp_array ) );
		array_obj[ 11 ] = Object.fromEntries( add_isus_array( isus_array ) );	
		year[ i ].innerHTML = get_year;
		year[ i ].classList.add( 'year_h_1' );

        if ( +get_year === now_year ) {
        	year[ i ].classList.add( 'now_year' );
        }

		for ( let i = 0; i < array_obj.length; i++ ) {

			for ( let value in array_obj[ i ] ) {
				display_data( array_obj[ i ], i, value, calendar_ul, +get_year );
			}

		}

    	if ( i === 1 ) {
			let coord_scroll;

			if ( now_month === 0 || now_month === 1 ) {
				coord_scroll = calendar_ul[ now_month ].parentElement.previousElementSibling.getBoundingClientRect().y - 20;
			} else {
				coord_scroll = calendar_ul[ now_month ].getBoundingClientRect().y;
			}

    		window.scrollTo( { left: 0, 
							   top: coord_scroll,
							   behavior: 'smooth' } );
							 
			setTimeout( () => {
				hide_background();
				show_body();
				localStorage.removeItem( 'status_background' );
			}, 500 );

    	}

    }

	if ( show_select_date.classList.contains( 'd-none' ) ) show_select_date.classList.remove( 'd-none' );
	if ( year_screen.style.opacity === '0' ) year_screen.style.opacity = '1';
	
	get_description( calendar, '.click' );
	height_footer_func();

}

function get_info( slug ) {
    let xml_info = new XMLHttpRequest();
            
    xml_info.open( 'GET', url + 'api/years.json?city=' + slug.id + '&value[]=' + 
    	                  ( now_year - 1 ) + '&value[]=' + now_year + '&value[]=' + ( now_year + 1 ) );
    xml_info.responseType = 'json';
    xml_info.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_info, 
					calendar, 
					text_not_connection_timeout, 
					'select_get_info', 
					'calendar', 
					inner_get_info, 
					select_get_info );

    timeout( xml_info, 
			 calendar, 
			 text_not_connection_timeout, 
			 'select_get_info', 
			 'calendar', 
			 inner_get_info, 
			 select_get_info );
    
    xml_info.onload = function() {
        select_get_info = xml_info.response;
		localStorage.setItem( 'select_get_info', JSON.stringify( select_get_info ) );

        inner_get_info( select_get_info );
        
    }

    xml_info.send();

}

function get_van_year_info( slug, 
							year_input, 
							event_year, 
							coords_let ) {
	let xml_van_year = new XMLHttpRequest();
            
    xml_van_year.open( 'GET', url + 'api/years.json?city=' + slug.id + '&value=' + year_input );
    xml_van_year.responseType = 'json';
    xml_van_year.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_van_year, 
					calendar, 
					text_not_connection_timeout, 
					'select_get_info', 
					'calendar', 
					inner_get_info, 
					select_get_info );

    timeout( xml_van_year, 
			 calendar, 
			 text_not_connection_timeout, 
			 'select_get_info', 
			 'calendar', 
			 inner_get_info, 
			 select_get_info );
    
    xml_van_year.onload = function() {

    	let van_year_response = xml_van_year.response,
    		get_year = van_year_response[ 0 ].value,
			array_obj = [ van_year_response[ 0 ].jan,
                          van_year_response[ 0 ].feb,
                          van_year_response[ 0 ].mar,
                          van_year_response[ 0 ].apr,
                          van_year_response[ 0 ].may,
                          van_year_response[ 0 ].jun,
                          van_year_response[ 0 ].jul,
                          van_year_response[ 0 ].aug,
                          van_year_response[ 0 ].sem,
                          van_year_response[ 0 ].oct,
                          van_year_response[ 0 ].nov,
                          van_year_response[ 0 ].dem ],
            calendar_van_year,
			all_years_screen,
			calendar_van_year_ul,
			year_content = document.createElement( 'div' ),
			sp_array = Object.entries( array_obj[ 5 ] ),
			isus_array = Object.entries( array_obj[ 11 ] );
	
		array_obj[ 5 ] = Object.fromEntries( add_sp_array( sp_array ) );
		array_obj[ 11 ] = Object.fromEntries( add_isus_array( isus_array ) );
		
		if ( +get_year === now_year ) {
			year_content.innerHTML += '<h1 class="year_select_date now_year year_h_1 m-b-0">' + get_year + '</h1>';
		} else {
			year_content.innerHTML = '<h1 class="year_select_date year_h_1 m-b-0">' + get_year + '</h1>';
		}

		year_content.className = 'new-calendar';
		year_content.style.opacity = '0';
		year_content.innerHTML += '<div class="calendar_year d-flex">' +
							'<ul class="jan"></ul>' +
							'<ul class="feb"></ul>' +
							'<ul class="mar"></ul>' +
							'<ul class="apr"></ul>' +
							'<ul class="may"></ul>' +
							'<ul class="jun"></ul>' +
							'<ul class="jul"></ul>' +
							'<ul class="aug"></ul>' +
							'<ul class="sem"></ul>' +
							'<ul class="oct"></ul>' +
							'<ul class="nov"></ul>' +
							'<ul class="dem"></ul>' +
						'</div>';

        if ( select_year || top_scroll ) {
			calendar.prepend( year_content );

			if ( select_year ) {
				calendar.append( height_footer );
			}

			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = document.querySelector( '.calendar_year' );
			all_years_screen = calendar.querySelectorAll( 'h1' );

			if ( div_calendar.length > 5 ) {
				div_calendar[ div_calendar.length - 1 ].remove();
				all_years_screen[ all_years_screen.length - 1 ].remove();
			}

		} else if ( bottom_scroll ) {

			if ( !height_footer.closest( '#calendar' ) ) {
				let calendar_local = document.getElementById( 'calendar' ),
					height_footer_local = calendar_local.querySelector( '#height_footer' );

				height_footer_local.before( year_content );
			} else {
				height_footer.before( year_content );
			}
			
			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = div_calendar[ div_calendar.length - 1 ];
			all_years_screen = calendar.querySelectorAll( 'h1' );

			setTimeout( () => document.body.style.overflow = 'auto', 1000 );

			if ( div_calendar.length > 5 ) {
				div_calendar[ 0 ].remove();
				all_years_screen[ 0 ].remove();
			}

		}

		if ( calendar_van_year ) {
			calendar_van_year_ul = calendar_van_year.getElementsByTagName( 'ul' );
			print_year( calendar_van_year_ul, get_year );
		}

		for ( let i = 0; i < array_obj.length; i++ ) {

			for ( let value in array_obj[ i ] ) {
				display_data( array_obj[ i ], i, value, calendar_van_year_ul, get_year );
			}

		}

		setTimeout( () => {
			calendar.style.height = 'auto';
			min_preloader.style.cssText = '';
			min_preloader.remove();
			year_content.style.opacity = '1';
		}, 500 );

		if ( select_year || top_scroll ) {

			if ( select_year ) {
				select_year = false;
				not_scroll = true;
			} else if ( top_scroll ) {
				top_scroll = false;
			}
			
		} else if ( bottom_scroll ) {
			bottom_scroll = false;
			not_scroll = true;

			setTimeout( () => {
				let coord = year[ year.length - 1 ].getBoundingClientRect().y - height_header - 5;
				window.scrollBy( { left: 0, top: coord, behavior: 'smooth' } );
			}, 500 );
			
		}

		setTimeout( () => document.body.style.overflow = 'auto', 1000 );
		remove_too_events();
		get_description( calendar, '.click' );
		inner_select_date( false );
		show_zoom_callendar();
		localStorage.setItem( 'not_scroll', 'false' );

    }

	xml_van_year.send();

}

function get_city( func, slug ) { 

	let xml_cities = new XMLHttpRequest(),
		get_city_array;
	    xml_cities.open( 'GET', url + 'api/cities.json?name=' + city );
	    xml_cities.responseType = 'json';
	    xml_cities.setRequestHeader( 'Content-Type', 'application/json' );

	not_connection( xml_cities, 
					calendar, 
					text_not_connection_timeout, 
					'select_get_info', 
					'calendar', 
					inner_get_info, 
					select_get_info ); 

    timeout( xml_cities, 
			 calendar, 
			 text_not_connection_timeout, 
		 	 'select_get_info', 
		 	 'calendar', 
		 	 inner_get_info, 
		 	 select_get_info );

	xml_cities.onload = function() {
	    get_city_array = xml_cities.response;
	    slug = get_city_array.find( item => item.name === city );

		func( slug, year_input );
		
	}

	xml_cities.send();
}

function get_info_scroll() { 
	
	if ( not_scroll || ( localStorage.getItem( 'not_scroll' ) === 'true' ) ) {
		document_height = Math.max(
						document.body.scrollHeight, 
						document.documentElement.scrollHeight,
						document.body.offsetHeight, 
						document.documentElement.offsetHeight,
						document.body.clientHeight, 
						document.documentElement.clientHeight
					);

		if ( ( ( window.pageYOffset + scroll_window_height ) === document_height ) || 
			 ( ( Math.ceil( window.pageYOffset + scroll_window_height ) ) === document_height ) ||
			 ( ( Math.floor( window.pageYOffset + scroll_window_height ) ) === document_height ) ) {

			if ( year.length !== 0 ) {

				year_input = +( year[ year.length - 1 ].textContent ) + 1;

				if ( year_input > max_year ) {
					
					( year[ year.length - 1 ].nextElementSibling ).insertAdjacentHTML( 'afterend',  
																	'<div class="not_data text-center' +
																	' bold m-b-20 m-t-20">' +
																	'<span>За ' + year_input + 
																	' год, нет данных</span>' +
																	'</div>' );
					let div_not_data = document.getElementsByClassName( 'not_data' );

					window.scrollBy( 0, div_not_data[ 0 ].clientHeight );

					if ( div_not_data.length > 1 ) {
						div_not_data[ div_not_data.length - 1 ].remove();
					}

					return false;
				}

			}

			document.body.style.overflow = 'hidden';
			bottom_scroll = true;
			not_scroll = false;

			setTimeout( () => {

				if ( year.length !== 0 ) ( year[ year.length - 1 ].nextElementSibling ).after( min_preloader );

				span_year_input = document.getElementById( 'year_input' );
		
				if ( span_year_input ) span_year_input.remove();

				min_preloader.style.padding = '40px 0 20px';
				min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																'</small>' +
																'</span>' );
				document_height = Math.max( document.body.scrollHeight, 
											document.documentElement.scrollHeight, 
											document.body.offsetHeight, 
											document.documentElement.offsetHeight,
											document.body.clientHeight, 
											document.documentElement.clientHeight
											);
				document.body.style.overflow = 'auto';
				window.scrollTo( { left: 0, top: document_height, behavior: 'smooth' } );
				document.body.style.overflow = 'hidden';
				
				 get_city( get_van_year_info, slug );

			}, 500 );

		} else if ( window.pageYOffset === 0 ) {
			year_input = year[ 0 ].textContent - 1;

			if ( year_input < min_year ) {
				year[ 0 ].insertAdjacentHTML( 'beforebegin', '<div class="not_data text-center' +
																' bold m-b-20 m-t-20">' +
																'<span>За ' + year_input + 
																' год, нет данных</span>' +
																'</div>' );
				let div_not_data = document.getElementsByClassName( 'not_data' );

				if ( div_not_data.length > 1 ) {
					div_not_data[ div_not_data.length - 1 ].remove();
				}

				return false;
			}

			top_scroll = true;
			document.body.style.overflow = 'hidden';
			min_preloader.style.paddingTop = '20px';
			year[ 0 ].before( min_preloader );
			span_year_input = document.getElementById( 'year_input' );

			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																'</small>' +
																'</span>' );

			get_city( get_van_year_info, slug );

		}

	}

}

function get_top_elem() {
	let all_lists_months = calendar.getElementsByTagName( 'ul' );

	for ( let month of all_lists_months ) {

		if ( ( month.getBoundingClientRect().top + 35 ) > height_header ) {

			if ( month.classList.contains( 'jan' ) ) {
				top_elem = month.parentElement.previousElementSibling;
				break;
			} else {
				top_elem = month; 
				break;
			}

		}

	}

}

function get_info_scroll_event() {
	window.addEventListener( 'scroll', get_info_scroll );
	window.addEventListener( 'scroll', get_top_elem );
}

input_select_date.oninput = function() {
	let input_value = input_select_date.value,
		hint_1 = document.getElementById( 'hint_1' ),
		hint_2 = document.getElementById( 'hint_2' );

	if ( input_value.length === 2 ) {

		if ( ( input_value < 19 ) || ( input_value > 20 ) ) {

			if ( hint_2.classList.contains( 'visible_hint' ) ) {
				hint_2.classList.remove( 'visible_hint' );
			}

			hint_1.classList.add( 'visible_hint');
			setTimeout( () => hint_1.classList.remove( 'visible_hint' ), 6000 );
		}

		if ( input_value < 19 ) {
			input_select_date.value = '19';
		} else if ( input_value > 20 ) {
			input_select_date.value = '20';
		}

	} else if ( input_value.length === 4 ) {

		if ( ( input_value >= min_year ) && ( input_value <= max_year ) ) {
			div_zoom_calendar.style.cssText = '';
			year_screen_span.innerHTML = '';
			year_input = input_value;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.height = ( scroll_window_height - 
									  height_header -
									  footer_id.clientHeight ) + 'px';
			min_preloader.style.cssText = 'position: absolute;' +
										  'top: 50%;' + 
										  'left: 50%;' + 
										  'transform: translate(-50%, -50%);' +
										  'margin: 0';
			calendar.append( min_preloader );
			span_year_input = document.getElementById( 'year_input' );
		
			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input" class="text-center d-block' +  ' m-t-10">' +
																'<small>Загружаем - ' + year_input + ' год</small>' +
															'</span>' );
			
			get_city( get_van_year_info, slug );
			inner_select_date( false );
			input_select_date.value = '';
			input_select_date.blur();

		} else {

			if ( hint_1.classList.contains( 'visible_hint' ) ) {
				hint_1.classList.remove( 'visible_hint' );
			}

			hint_2.classList.add( 'visible_hint' );
			setTimeout( () => hint_2.classList.remove( 'visible_hint' ), 6000 );
			input_select_date.value = input_value.slice( 0, 2 );

		}

	} else if ( input_value.length > 4 ) {
		input_select_date.value = input_value.slice( 0, 4 );
	}
}

open_list_years.onclick = function() {
	document.body.style.overflow = 'hidden';

	if ( input_select_date.value !== '' ) {
		input_select_date.value = '';
	}

	list_all_years.style.cssText = 'opacity: 1; z-index: 5;';

	list_all_years.onclick = function( event ) {
		remove_too_events();

		if ( event.target.tagName === 'DIV' ) {
			return false;
		} else if ( event.target.tagName === 'SPAN' ) {
			div_zoom_calendar.style.cssText = '';
			year_screen_span.innerHTML = '';
			year_input = ( event.target ).textContent;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.cssText = 'height: ' + ( scroll_window_height - 
									  height_header -
									  footer_id.clientHeight ) + 'px;';
			min_preloader.style.cssText = 'position: absolute;' +
										  'top: 50%;' + 
										  'left: 50%;' + 
										  'transform: translate(-50%, -50%);' +
										  'margin: 0';
			calendar.append( min_preloader );
			span_year_input = document.getElementById( 'year_input' );
		
			if ( span_year_input ) span_year_input.remove();

			min_preloader.insertAdjacentHTML( 'beforeend', '<span id="year_input"'  +
																	 'class="text-center d-block' +  ' m-t-10">' +
																  '<small>' +
																	'Загружаем - ' + year_input + 
																	' год' +
																  '</small>' +
																'</span>' );

			get_city( get_van_year_info, slug );
			inner_select_date( false );

			list_all_years.style.cssText = '';
		}

	}

}

close_list_years.onclick = function(event) {
	event.stopPropagation();
	list_all_years.style.cssText = '';
	document.body.style.overflow = 'auto';
}

window.addEventListener( 'scroll', function() {

	let year_select_date = document.getElementsByClassName( 'year_select_date' ),
		height_calendar_year,
		year;

	if ( calendar ) {
	
		if ( calendar.querySelector( '.calendar_year' ) ) {
			height_calendar_year = calendar.querySelector( '.calendar_year' ).offsetHeight + 70;
		}
	
	}
	
	for ( let year_elem of year_select_date ) {
		let coords_year_bottom = year_elem.getBoundingClientRect().bottom;

		if ( ( coords_year_bottom < height_header ) && 
			 ( coords_year_bottom > ( - ( height_calendar_year - scroll_window_height ) ) ) ) {
			year = year_elem.textContent;
		}

		if ( year ) {
			year_screen_span.innerHTML = year;
		} else {
			year_screen_span.innerHTML = '';
		}

	}

});

function plus_minus_show_hide( plus, minus ) {

	if ( plus.classList.contains( 'zoom_show' ) ) {
		plus.classList.remove( 'zoom_show' );
		plus.classList.add( 'zoom_hide' );
    }

    if ( minus.classList.contains( 'zoom_hide' ) ) {
		minus.classList.remove( 'zoom_hide' );
		minus.classList.add( 'zoom_show' );
    }
}

function inner_plus_minus( lists_months, too, zoom_elem = '' ) {

	for ( let month of lists_months ) {

		if ( ( month.getBoundingClientRect().top + 35 ) > height_header ) {

			if ( month.classList.contains( 'jan' ) ) {
				zoom_elem = month.parentElement.previousElementSibling;
				break;
			} else {
				zoom_elem = month; 
				break;
			}

		}

	}
	
	if ( too ) too.style.opacity = '0';
	calendar.style.opacity = '0';
	return zoom_elem;
}

plus.onclick = function( event_year, 
						 delete_div, 
						 coords_let ) {
	
	inner_select_date( false );
	plus_minus_show_hide( this, minus );

	let too_events = document.querySelector( '#too_events' ),
		li_too_id = calendar.querySelectorAll( '.too_id' ),
		all_lists_months = calendar.getElementsByTagName( 'ul' ),
		zoom_plus_elem = inner_plus_minus( all_lists_months, too_events );

	setTimeout( () => { 
		calendar.classList.add( 'zoom_calendar' );
		window.removeEventListener( 'scroll', get_info_scroll );
	}, 400 );

	setTimeout( function() { 
		let offset;

		if ( zoom_plus_elem.tagName === 'UL' ) {
			offset = 15;
		} else {
			offset = -10;
		}

		window.scrollTo( 0, ( window.pageYOffset + 
							  zoom_plus_elem.getBoundingClientRect().y ) -
							  height_header + offset );
		calendar.style.opacity = '1';

		if ( li_too_id.length > 0 ) {

			for ( let li_id of li_too_id ) {

				event_year = li_id.closest( '.calendar_year' ).
							 previousElementSibling.textContent;
				let event_year_2 = 'year_' + event_year;

				if ( too_events ) {
					too_events.style.opacity = '1';
					delete_div = too_events.querySelector( 'i' );

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
						too_events.classList.add( 'zoom_events' );
						too_events.style.fontSize = '22px';
						too_events.style.left = '0';
						delete_div.classList.add( 'zoom_delete' );
						delete_div.style.fontSize = '26px';

						setTimeout( () => {

							get_coords_left( too_events,
											 coords_let, 
											 '.' + li_id.id + '.' + name_class + '.zoom_events', 
											 '.' + li_id.id + '_' + event_year + '.zoom_delete', 
											 -15 );
								
						}, 0 );
						
					}

				}

			}
		} 

		setTimeout( () => {
			window.addEventListener( 'scroll', get_info_scroll );
		}, 500 );

	}, 1000 );

}

minus.onclick = function( event_year, 
						  delete_div, 
						  coords_let ) {

	inner_select_date( false );
	plus_minus_show_hide( this, plus );

	let too_events = document.querySelector( '#too_events' ),
		li_too_id = calendar.querySelectorAll( '.too_id' ),
		all_lists_months = calendar.getElementsByTagName( 'ul' ),
		zoom_minus_elem = inner_plus_minus( all_lists_months, too_events );

	setTimeout( () => { 
		calendar.classList.remove( 'zoom_calendar' );
		window.removeEventListener( 'scroll', get_info_scroll );
		window.scrollTo( 0, 0 );
	}, 400 );

	setTimeout( () => { 

		document_height = Math.max(
			document.body.scrollHeight, 
			document.documentElement.scrollHeight,
			document.body.offsetHeight, 
			document.documentElement.offsetHeight,
			document.body.clientHeight, 
			document.documentElement.clientHeight
		);

		let offset;

		if ( zoom_minus_elem.tagName === 'UL' ) {
			offset = -15;
		} else {
			offset = 5;
		}

		if ( ( document_height - scroll_window_height ) > 
			 ( ( window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y ) -
			   ( height_header ) ) ) {

			window.scrollTo( 0, ( window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y ) -
								( height_header + offset ) );
			calendar.style.opacity = '1';

		} else if ( ( document_height - scroll_window_height ) <= 
					( window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y -
					  height_header ) ) {

			window.scrollTo( 0, document_height - scroll_window_height - 60 );
			calendar.style.opacity = '1';

		}

		if ( li_too_id.length > 0 ) {

			for ( let li_id of li_too_id ) {

				event_year = li_id.closest( '.calendar_year' ).
							 previousElementSibling.textContent;

				if ( too_events ) {
					too_events.style.opacity = '1';

					if ( too_events.classList.contains( li_id.id ) ) {

						coords_let = li_id.getBoundingClientRect();
						too_events.classList.remove( 'zoom_events' );
						too_events.style.fontSize = 'inherit';
						delete_div = too_events.querySelector( 'i' );
						delete_div.classList.remove( 'zoom_delete' );
						delete_div.style.fontSize = '22px';

						get_coords_left( too_events, 
										 coords_let,
										 '.' + li_id.id, 
										 '.' + li_id.id + '_' +  event_year, 
										 -10 );
					
					}
				}

			}
		} 

		setTimeout( () => {
			window.addEventListener( 'scroll', get_info_scroll );
		}, 500 )

	}, 1000 );

}

close_hint_description.onclick = () => {

	if ( !localStorage.getItem( 'number_click_hint_description' ) ) {  
		localStorage.setItem( 'number_click_hint_description', '1' );
		wrapper_hint_description.style.cssText = '';
	} else {
		let number_click = +localStorage.getItem( 'number_click_hint_description' );

		if ( number_click === 3 ) {

			if ( close_forever.style.cssText === '' ) {
				close_forever.style.cssText = 'display: block !important; opacity: 1';
			} else {
				wrapper_hint_description.style.cssText = '';
			}

		} else {
			number_click++;
			localStorage.setItem( 'number_click_hint_description', number_click );
			wrapper_hint_description.style.cssText = '';
		}

	}

}

close_forever.onclick = () => {
	localStorage.setItem( 'status_hint_description', 'hide' );
	localStorage.removeItem( 'number_click_hint_description' );
	wrapper_hint_description.style.cssText = '';
}

function inner_select_date( click ) {

	if ( select_date.style.top === '' && click === true ) {
		select_date.style.top = height_header + 'px';
	} else {
		select_date.style.cssText = '';
	}

}

show_select_date.onclick = () => {
	inner_select_date( true );
}

setTimeout( get_info_scroll_event, 1000 );


