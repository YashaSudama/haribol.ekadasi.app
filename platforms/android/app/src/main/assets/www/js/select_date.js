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
		 window_height
} from "./general.js";

let calendar = document.getElementById( 'calendar' ),
	select_date = document.getElementById( 'select_date' ),
	input_select_date = document.getElementById( 'input_select_date' ),
	list_all_years = document.getElementById( 'list_all_years' ),
	div_list_all_years = document.getElementById( 'div_list_all_years' ),
	open_list_years = document.getElementById( 'open_list_years' ),
	close_list_years = document.getElementById( 'close_list_years' ),
	year_screen = document.getElementById( 'year_screen' ),
	year_screen_span = document.getElementById( 'year_screen_span' ),
	year = calendar.getElementsByTagName( 'h1'),
	div_calendar = calendar.querySelectorAll( '.calendar_year' ),
	first_day_month,
	count_year = -1,
	count_h_1 = 0,
	height_select_date = select_date.clientHeight,
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
	sum_header,
	month_days,
	index_get_info,
    document_height,
	height_hint_description,
	hint_description_top,
	hint_description = document.getElementById( 'hint_description' ),
	close_forever = document.getElementById( 'close_forever' ),
	close_hint_description = document.getElementById( 'close_hint_description' ), 
	wrapper_hint_description = document.getElementById( 'wrapper_hint_description' ),
	top_elem; 

document.addEventListener( 'deviceready', () => { 

	if ( navigator.connection.type !== 'none' ) {

		if ( localStorage.getItem( 'index_get_info' ) && +localStorage.getItem( 'now_year' ) === now_year ) {
			index_get_info = JSON.parse( localStorage.getItem( 'index_get_info' ) );
				
			inner_get_info( index_get_info );

		} else {
			localStorage.setItem( 'now_year', now_year );
			
			get_city( get_info, slug );

		}

	} else {

		content_not_connection( calendar, 
								text_not_internet, 
								'index_get_info', 
								'calendar', 
								inner_get_info, 
								index_get_info );

	}
	
}, false );

if ( localStorage.getItem( 'city_name' ) ) {
	city = localStorage.getItem( 'city_name' );
	location_span.innerHTML = city;
} else {
    window.location.href = 'index.html';
}

setTimeout( () => {

	height_header = header_top.offsetHeight;
	height_select_date = select_date.offsetHeight;
	height_hint_description = hint_description.offsetHeight;
	select_date.style.top = ( height_header - 1 ) + 'px',
	sum_header = height_header + height_select_date;
	year_screen.style.top = sum_header + 'px';

	function init_elem( height ) {

		if ( ( ( height - sum_header - footer_id.offsetHeight ) + 20 ) > height_hint_description ) {
			hint_description_top = sum_header + ( ( ( height - sum_header - footer_id.offsetHeight ) / 2 ) - ( height_hint_description / 2  ) );
		} else {
			hint_description_top = sum_header + 20;
		}
		
		div_zoom_calendar.style.cssText = 'bottom: ' + ( footer_id.offsetHeight + plus.offsetHeight + 7 ) + 'px;' +
										  'right: ' + ( plus.offsetWidth + 10 ) + 'px';
	}
	
	init_elem( window_height );
  
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
				height_header - height_select_date + offset );
		}

	} );
  
}, 0 );

height_footer_func();

for ( let i = min_year; i < ( max_year + 1 ); i++ ) {
	let year = '<span class="d-block m-b-20">' + i + '</span>';

	div_list_all_years.insertAdjacentHTML( 'beforeend', year );
}

div_list_all_years.insertAdjacentHTML( 'afterbegin', 
									   '<div style="height: 30px; width: 100%;"></div>' );
div_list_all_years.insertAdjacentHTML( 'beforeend', 
									   '<div style="height: 30px; width: 100%;"></div>' );

for ( let item of div_calendar ) {

	let local_year = now_year + count_year; 
	year[ count_h_1 ].innerHTML = now_year + count_year;
	year[ count_h_1 ].classList.add( 'year_h_1' );

	let count_month = 0;

	for ( let ul of item.children ) {
		first_day_month = new Date( now_year + count_year, count_month, 1 ).getDay();

		ul.innerHTML = '<h3 class="m-b-10 m-t-30">' + month_name[ count_month ] + '</h3>';

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

                month_days = 31;

        } else if ( count_month === 3 || 
                    count_month === 5 || 
                    count_month === 8 || 
                    count_month === 10 ) {

                month_days = 30;

        } else if ( count_month === 1 ) {
            
            if ( ( local_year % 4 ) === 0 ) {
                month_days = 29;
            } else {
                month_days = 28;
            }

        }  

		for ( let i = 1; i < ( month_days + 1 ); i++ ) {
			ul.innerHTML += '<li class="text-center pos-rel">' + i + '</li>';
		}

		count_month++;
	}

	count_year++;
	count_h_1++;

}

if ( localStorage.getItem( 'calendar' ) === null ) { 
    localStorage.setItem( 'calendar', calendar.innerHTML );
}

function inner_get_info( select_get_info ) {
    let year_h_1 = calendar.getElementsByTagName( 'h1' ),
    	object_ekadashi,
    	id_li;
    
    for ( let i = 0; i < select_get_info.length; i++ ){

    	let get_year = select_get_info[i].value,
            get_jan = select_get_info[i].jan,
            get_feb = select_get_info[i].feb,
            get_mar = select_get_info[i].mar,
            get_apr = select_get_info[i].apr,
            get_may = select_get_info[i].may,
            get_jun = select_get_info[i].jun,
            get_jul = select_get_info[i].jul,
            get_aug = select_get_info[i].aug,
            get_sem = select_get_info[i].sem,
            get_oct = select_get_info[i].oct,
            get_nov = select_get_info[i].nov,
            get_dem = select_get_info[i].dem,
            calendar_ul = calendar.querySelectorAll( '.calendar_year')[ i ].getElementsByTagName( 'ul' );

        if ( year_h_1[ i ].textContent === String( now_year ) ) {
        	year_h_1[ i ].classList.add( 'now_year' );
        }

        function display_data( get_month, numb_ul, value ) {

        	let calendar_ul_li = calendar_ul[ numb_ul ].getElementsByTagName( 'li' ),
        		calendar_ul_h_3 = calendar_ul[ numb_ul ].getElementsByTagName( 'h3' ),
        		class_li;

        	if ( typeof ( get_month[ value ] ) === 'object' ) {
        		object_ekadashi = Object.values( get_month[ value ] );
        		class_li = 'ekadashi';

	        	if ( Array.isArray( object_ekadashi ) ) {

					if ( object_ekadashi[ 1 ] === 'Putrada' ) {
	                    id_li = 'putrada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sat-tila' ) {
	                    id_li = 'sat-tila'; 
	                } else if ( object_ekadashi[ 1 ] === 'Bhaimi' ) {
	                    id_li = 'bhaimi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Vijaya' ) {
	                    id_li = 'vijaya'; 
	                } else if ( object_ekadashi[ 1 ] === 'Amalaki vrata' ) {
	                    id_li = 'amalaki'; 
	                } else if ( object_ekadashi[ 1 ] === 'Papamocani' ) {
	                    id_li = 'papamocani'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamada' ) {
	                    id_li = 'kamada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Varuthini' ) {
	                    id_li = 'varuthini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Mohini' ) {
	                    id_li = 'mohini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Apara' ) {
	                    id_li = 'apara'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pandava Nirjala' ) {
	                    id_li = 'pandava'; 
	                } else if ( object_ekadashi[ 1 ] === 'Yogini' ) {
	                    id_li = 'yogini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sayana' ) {
	                    id_li = 'sayana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamika' ) {
	                    id_li = 'kamika'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pavitropana' ) {
	                    id_li = 'pavitra'; 
	                } else if ( object_ekadashi[ 1 ] === 'Annada' ) {
	                    id_li = 'annada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parsva' ) {
	                    id_li = 'parsva'; 
	                } else if ( object_ekadashi[ 1 ] === 'Indira' ) {
	                    id_li = 'indira'; 
	                } else if ( object_ekadashi[ 1 ] === 'Padmini' ) {
	                    id_li = 'padmini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parama' ) {
	                    id_li = 'parama'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pasankusa' ) {
	                    id_li = 'pasankusa'; 
	                } else if ( object_ekadashi[ 1 ] === 'Rama' ) {
	                    id_li = 'rama-ekadashi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utthana' ) {
	                    id_li = 'utthana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Moksada' ) {
	                    id_li = 'moksada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Saphala' ) {
	                    id_li = 'saphala'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utpanna' ) {
	                    id_li = 'utpanna'; 
	            	} 
	            }

        	} else if ( typeof( get_month[ value ] ) === 'string' ) {

        		if ( get_month[ value ] === '1' ) {
        			class_li = 'nityananda';
        			id_li = 'nityananda';
        		} else if ( get_month[ value ] === '2' ) {
        			class_li = 'chaytanya';
        			id_li = 'chaytanya';
        		} else if ( get_month[ value ] === '3' ) {
        			class_li = 'rama';
        			id_li = 'sita';
        		} else if ( get_month[ value ] === '4' ) {
        			class_li = 'nrisimha';
        			id_li = 'nrisimha';
        		} else if ( get_month[ value ] === '6' ) {
        			class_li = 'balarama';
        			id_li = 'baladeva';
        		} else if ( get_month[ value ] === '7' ) {
        			class_li = 'krishna';
        			id_li = 'krishna';
        		} else if ( get_month[ value ] === '8' ) {
        			class_li = 'bhaktivedanta';
        			id_li = 'bhaktivedanta';
        		} else if ( get_month[ value ] === '9' ) {
        			class_li = 'radharany';
        			id_li = 'radharany';
        		} else if ( get_month[ value ] === 'A' ) {
        			class_li = 'govardhana';
        			id_li = 'govardhana';
        		} else if ( get_month[ value ] === 'B' ) {
        			class_li = 'radha-yatra';
        			id_li = 'radha-yatra';
        		}

        	}

        	for ( let li of calendar_ul_li ) {

        		if ( ( li.textContent ) === value ) {
    				li.classList.toggle( class_li );
					li.classList.toggle( 'click' );
    				li.id = id_li;
    			}

        		if ( get_month === get_jun ) {

        			if ( ( li.textContent ) === '14' ) {
        				li.classList.add( 'vyasapudja' );
						li.classList.add( 'click' );

        				if ( li.hasAttribute( 'id' ) ) {
            				let attr = li.getAttribute( 'id' );

            				if ( ( attr !== 'vyasapudja' ) && ( !attr.includes( 'vyasapudja' ) ) ) {
            					li.setAttribute( 'id', attr + '_' + 'vyasapudja' );
            					li.classList.add( 'too_id' );
            				}
            				
            			} else {
            				li.id = 'vyasapudja';
            			}

            		}

        		}

        		if ( get_month === get_dem ) {

        			if ( ( li.textContent ) === '25' ) {
        				li.classList.add( 'rozhdestvo' );
						li.classList.add( 'click' );

            			if ( li.hasAttribute( 'id' ) ) {
            				let attr = li.getAttribute( 'id' );

            				if ( ( attr !== 'rozhdestvo' ) && ( !attr.includes( 'rozhdestvo' ) ) ) {
            					li.setAttribute( 'id', attr + '_' + 'rozhdestvo' );
            					li.classList.add( 'too_id' );
            				}

            			} else {
            				li.id = 'rozhdestvo';
            			}

            		}

        		}

            	if ( ( li.parentElement.parentElement.previousElementSibling ).textContent === 
        			   String( now_year ) ) {

            		if ( ( li.parentElement.children[ 0 ] ).textContent === month_name[ now_month ] ) { 

            			if ( li.textContent === String( now_date_number ) ) {
            				li.classList.add( 'now_date' );
            			}

            		}

            	}

        	}

        	for ( let h_3 of calendar_ul_h_3 ) {

        		if ( ( h_3.parentElement.parentElement.previousElementSibling ).textContent === 
        			   String( now_year ) ) {
        		
            		if ( ( h_3.textContent ) === month_name[ now_month ] ) {
            			h_3.classList.add( 'now_month' );
            		}

            	}
        	}

        }

    	for ( let value in get_jan ) {
    		display_data( get_jan, 0, value );
    	}

    	for ( let value in get_feb) {
    		display_data( get_feb, 1, value );
    	}

    	for ( let value in get_mar ) {
    		display_data( get_mar, 2, value );
    	}

    	for ( let value in get_apr ) {
    		display_data( get_apr, 3, value );
    	}

    	for ( let value in get_may ) {
    		display_data( get_may, 4, value );
    	}

    	for ( let value in get_jun ) {
    		display_data( get_jun, 5, value );
    	}

    	for ( let value in get_jul ) {
    		display_data( get_jul, 6, value );
    	}

    	for ( let value in get_aug ) {
    		display_data( get_aug, 7, value );
    	}

    	for ( let value in get_sem ) {
    		display_data( get_sem, 8, value );
    	}

    	for ( let value in get_oct ) {
    		display_data( get_oct, 9, value );
    	}

    	for ( let value in get_nov ) {
    		display_data( get_nov, 10, value );
    	}

    	for ( let value in get_dem ) {
    		display_data( get_dem, 11, value );
    	}

    	if ( i === 1 ) {
    		window.scrollTo( 0, 0 );
    		window.scrollTo( 0, calendar_ul[ now_month ].getBoundingClientRect().y 
    						 - height_header - height_select_date + 5 );
    	}

    	if ( i === 2 ) {

    		get_description( calendar, '.click' );

			setTimeout( () => {
                hide_background();
				localStorage.removeItem( 'status_background' );
            }, 1000 );

    	}

    }

}

function get_info( slug, year_input ) {
    let xml_info = new XMLHttpRequest();
            
    xml_info.open( 'GET', url + 'api/years.json?city=' + slug.id + '&value[]=' + 
    	                  ( now_year - 1 ) + '&value[]=' + now_year + '&value[]=' + ( now_year + 1 ) );
    xml_info.responseType = 'json';
    xml_info.setRequestHeader( 'Content-Type', 'application/json' );

    not_connection( xml_info, 
					calendar, 
					text_not_connection_timeout, 
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info );

    timeout( xml_info, 
			 calendar, 
			 text_not_connection_timeout, 
			 'index_get_info', 
			 'calendar', 
			 inner_get_info, 
			 index_get_info );
    
    xml_info.onload = function() {
        select_get_info = xml_info.response;

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
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info );

    timeout( xml_van_year, 
			 calendar, 
			 text_not_connection_timeout, 
			 'index_get_info', 
			 'calendar', 
			 inner_get_info, 
			 index_get_info );
    
    xml_van_year.onload = function() {

    	let van_year_response = xml_van_year.response,
    		get_year = van_year_response[ 0 ].value,
            get_jan = van_year_response[ 0 ].jan,
            get_feb = van_year_response[ 0 ].feb,
            get_mar = van_year_response[ 0 ].mar,
            get_apr = van_year_response[ 0 ].apr,
            get_may = van_year_response[ 0 ].may,
            get_jun = van_year_response[ 0 ].jun,
            get_jul = van_year_response[ 0 ].jul,
            get_aug = van_year_response[ 0 ].aug,
            get_sem = van_year_response[ 0 ].sem,
            get_oct = van_year_response[ 0 ].oct,
            get_nov = van_year_response[ 0 ].nov,
            get_dem = van_year_response[ 0 ].dem,
            calendar_van_year,
            object_ekadashi,
			calendar_ul_li,
            id_li,
			all_years_screen,
			year_content =  '<h1 class="year_select_date year_h_1 m-b-0">' + get_year + '</h1>' +
						    '<div class="calendar_year d-flex">' +
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

			if ( select_year ) {
				calendar.innerHTML = year_content;
				calendar.append( height_footer);
			} else if ( top_scroll ) {
				calendar.insertAdjacentHTML( 'afterbegin', year_content );
			}
			
			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = document.querySelector( '.calendar_year' );
			all_years_screen = calendar.querySelectorAll( 'h1' );

			if ( div_calendar.length > 5 ) {
				div_calendar[ div_calendar.length - 1 ].remove();
				all_years_screen[ all_years_screen.length - 1 ].remove();
			}

		} else if ( bottom_scroll ) {
			calendar.insertAdjacentHTML( 'beforeend', year_content );
			calendar.append( height_footer );
			div_calendar = calendar.querySelectorAll( '.calendar_year' );
			calendar_van_year = div_calendar[ div_calendar.length - 1 ];
			setTimeout( () => document.body.style.overflow = 'auto', 1000 );

			all_years_screen = calendar.querySelectorAll( 'h1' );

			if ( div_calendar.length > 5 ) {
				div_calendar[ 0 ].remove();
				all_years_screen[ 0 ].remove();
			}

		}

		let calendar_van_year_ul = calendar_van_year.getElementsByTagName( 'ul' ),
			count_month = 0;

		calendar.style.cssText = '';
		min_preloader.style.cssText = '';
		min_preloader.remove();

		if ( calendar_van_year_ul) {

			for ( let ul of calendar_van_year_ul ) {
				first_day_month = new Date( get_year, count_month, 1 ).getDay();
				month_days = new Date( get_year, count_month + 1, 0 ).getDate();
				ul.innerHTML = '<h3 class="m-b-10 m-t-30">' + month_name[ count_month ] + '</h3>';

				if ( first_day_month === 0 ) {
					first_day_month = 7;
				}

				for ( let i = 1; i < first_day_month; i++ ) {
					ul.innerHTML += '<li></li>';
				}

				for ( let i = 1; i < ( month_days + 1 ); i++) {
					ul.innerHTML += '<li class="text-center pos-rel">' + i + '</li>';
				}

				count_month++;

			}

		}

        function display_data( get_month, numb_ul, value ) {

			if ( calendar_van_year_ul) {
        		calendar_ul_li = calendar_van_year_ul[ numb_ul ].getElementsByTagName( 'li' );
			}
        	
			let class_li;

        	if ( typeof( get_month[ value ] ) === 'object' ) {

        		object_ekadashi = Object.values( get_month[ value ] );
        		class_li = 'ekadashi';

	        	if ( Array.isArray( object_ekadashi ) ) {

					if ( object_ekadashi[ 1 ] === 'Putrada' ) {
	                    id_li = 'putrada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sat-tila' ) {
	                    id_li = 'sat-tila'; 
	                } else if ( object_ekadashi[ 1 ] === 'Bhaimi' ) {
	                    id_li = 'bhaimi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Vijaya' ) {
	                    id_li = 'vijaya'; 
	                } else if ( object_ekadashi[ 1 ] === 'Amalaki vrata' ) {
	                    id_li = 'amalaki'; 
	                } else if ( object_ekadashi[ 1 ] === 'Papamocani' ) {
	                    id_li = 'papamocani'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamada' ) {
	                    id_li = 'kamada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Varuthini' ) {
	                    id_li = 'varuthini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Mohini' ) {
	                    id_li = 'mohini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Apara' ) {
	                    id_li = 'apara'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pandava Nirjala' ) {
	                    id_li = 'pandava'; 
	                } else if ( object_ekadashi[ 1 ] === 'Yogini' ) {
	                    id_li = 'yogini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Sayana' ) {
	                    id_li = 'sayana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Kamika' ) {
	                    id_li = 'kamika'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pavitropana' ) {
	                    id_li = 'pavitra'; 
	                } else if ( object_ekadashi[ 1 ] === 'Annada' ) {
	                    id_li = 'annada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parsva' ) {
	                    id_li = 'parsva'; 
	                } else if ( object_ekadashi[ 1 ] === 'Indira' ) {
	                    id_li = 'indira'; 
	                } else if ( object_ekadashi[ 1 ] === 'Padmini' ) {
	                    id_li = 'padmini'; 
	                } else if ( object_ekadashi[ 1 ] === 'Parama' ) {
	                    id_li = 'parama'; 
	                } else if ( object_ekadashi[ 1 ] === 'Pasankusa' ) {
	                    id_li = 'pasankusa'; 
	                } else if ( object_ekadashi[ 1 ] === 'Rama' ) {
	                    id_li = 'rama-ekadashi'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utthana' ) {
	                    id_li = 'utthana'; 
	                } else if ( object_ekadashi[ 1 ] === 'Moksada' ) {
	                    id_li = 'moksada'; 
	                } else if ( object_ekadashi[ 1 ] === 'Saphala' ) {
	                    id_li = 'saphala'; 
	                } else if ( object_ekadashi[ 1 ] === 'Utpanna' ) {
	                    id_li = 'utpanna'; 
	            	} 

	            }

        	} else if ( typeof( get_month[ value ] ) === 'string' ) {

        		if ( get_month[ value ] === '1' ) {
        			class_li = 'nityananda';
        			id_li = 'nityananda';
        		} else if ( get_month[ value ] === '2' ) {
        			class_li = 'chaytanya';
        			id_li = 'chaytanya';
        		} else if ( get_month[ value] === '3' ) {
        			class_li = 'rama';
        			id_li = 'sita';
        		} else if ( get_month[ value ] === '4' ) {
        			class_li = 'nrisimha';
        			id_li = 'nrisimha';
        		} else if ( get_month[ value ] === '6' ) {
        			class_li = 'balarama';
        			id_li = 'baladeva';
        		} else if ( get_month[ value ] === '7' ) {
        			class_li = 'krishna';
        			id_li = 'krishna';
        		} else if ( get_month[ value ] === '8' ) {
        			class_li = 'bhaktivedanta';
        			id_li = 'bhaktivedanta';
        		} else if ( get_month[ value ] === '9' ) {
        			class_li = 'radharany';
        			id_li = 'radharany';
        		} else if ( get_month[ value ] === 'A' ) {
        			class_li = 'govardhana';
        			id_li = 'govardhana';
        		} else if ( get_month[ value ] === 'B' ) {
        			class_li = 'radha-yatra';
        			id_li = 'radha-yatra';
        		}

        	}

			if ( calendar_ul_li ) {

				for ( let li of calendar_ul_li ) {

					if ( ( li.textContent) === value ) {
						li.classList.toggle( class_li );
						li.classList.toggle( 'click' );
						li.id = id_li;
					}

					if ( get_month === get_jun ) {

						if ( ( li.textContent) === '14' ) {
							li.classList.add( 'vyasapudja' );
							li.classList.add( 'click' );

							if ( li.hasAttribute( 'id' ) ) {
								let attr = li.getAttribute( 'id' );

								if ( ( attr !== 'vyasapudja' ) && ( !attr.includes( 'vyasapudja' ) ) ) {
									li.setAttribute( 'id', attr + '_' + 'vyasapudja' );
									li.classList.add( 'too_id' );
								}
								
							} else {
								li.id = 'vyasapudja';
							}

						}

					}

					if ( get_month === get_dem ) {

						if ( ( li.textContent ) === '25' ) {
							li.classList.add( 'rozhdestvo' );
							li.classList.add( 'click' );

							if ( li.hasAttribute( 'id' ) ) {
								let attr = li.getAttribute( 'id' );

								if ( ( attr !== 'rozhdestvo' ) && ( !attr.includes( 'rozhdestvo' ) ) ) {
									li.setAttribute( 'id', attr + '_' + 'rozhdestvo' );
									li.classList.add( 'too_id' );
								}

							} else {
								li.id = 'rozhdestvo';
							}

						}

					}
				}

			}

        }

    	for ( let value in get_jan ) {
    		display_data( get_jan, 0, value );
    	}

    	for ( let value in get_feb ) {
    		display_data( get_feb, 1, value );
    	}

    	for ( let value in get_mar ) {
    		display_data( get_mar, 2, value );
    	}

    	for ( let value in get_apr ) {
    		display_data( get_apr, 3, value );
    	}

    	for ( let value in get_may ) {
    		display_data( get_may, 4, value );
    	}

    	for ( let value in get_jun ) {
    		display_data( get_jun, 5, value );
    	}

    	for ( let value in get_jul ) {
    		display_data( get_jul, 6, value );
    	}

    	for ( let value in get_aug ) {
    		display_data( get_aug, 7, value );
    	}

    	for ( let value in get_sem ) {
    		display_data( get_sem, 8, value );
    	}

    	for ( let value in get_oct ) {
    		display_data( get_oct, 9, value );
    	}

    	for ( let value in get_nov ) {
    		display_data( get_nov, 10, value );
    	}

    	for ( let value in get_dem ) {
    		display_data( get_dem, 11, value );
    	}

		if ( select_year || top_scroll ) {

    		window.scrollTo( { left: 0, top: 15, behavior: 'smooth' } );

			if ( select_year ) {
				select_year = false;
				not_scroll = true;
			} else if ( top_scroll ) {
				top_scroll = false;
			}
			
		} else if ( bottom_scroll ) {

			let coord = year[ year.length - 1 ].getBoundingClientRect().y - height_header 
						- height_select_date - 5;
			window.scrollBy( { left: 0, top: coord, behavior: 'smooth' } );
			bottom_scroll = false;
			not_scroll = true;
		}

		setTimeout( () => document.body.style.overflow = 'auto', 1000 );

		let li_too_id = calendar.querySelectorAll( '.too_id' ),
			too_events = document.querySelector( '#too_events' ),
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

				if ( too_events ) {

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

		get_description( calendar, '.click' );

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
					'index_get_info', 
					'calendar', 
					inner_get_info, 
					index_get_info ); 

    timeout( xml_cities, 
			 calendar, 
			 text_not_connection_timeout, 
		 	 'index_get_info', 
		 	 'calendar', 
		 	 inner_get_info, 
		 	 index_get_info );

	xml_cities.onload = function() {
	    get_city_array = xml_cities.response;
	    slug = get_city_array.find( item => item.name === city );

		func( slug, year_input );
		
	}

	xml_cities.send();
}

function get_info_scroll() { 
	
	if ( not_scroll ) {
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

			document.body.style.overflow = 'hidden';
			bottom_scroll = true;
			not_scroll = false;

			setTimeout( () => {
				( year[ year.length - 1 ].nextElementSibling ).after( min_preloader );
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
				window.scrollTo( 0, document_height );
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

		if ( ( month.getBoundingClientRect().top + 35 ) > sum_header ) {

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
		hint_2 = document.getElementById( 'hint_2' ),
		too_events = document.querySelectorAll( '.too_events' );

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
			year_input = input_value;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.cssText = 'height: ' + ( scroll_window_height - 
				height_header -
				height_select_date -
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

		} else {

			if ( hint_1.classList.contains( 'visible_hint' ) ) {
				hint_1.classList.remove( 'visible_hint' );
			}

			hint_2.classList.add( 'visible_hint' );
			setTimeout( () => hint_2.classList.remove( 'visible_hint' ), 6000 );
			input_select_date.value = input_value.slice( 0, 2 );

		}

		if ( too_events.length > 0 ) {

			for ( let elem of too_events ) {
				elem.remove();
			}

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
		let too_events = document.querySelector( '.too_events' );
	
		if ( too_events ) too_events.remove();

		if ( event.target.tagName === 'DIV' ) {
			return false;
		} else if ( event.target.tagName === 'SPAN' ) {
			year_input = ( event.target ).textContent;
			not_scroll = false;
			select_year = true;
			calendar.innerHTML = '';
			calendar.style.cssText = 'height: ' + ( scroll_window_height - 
									  height_header -
									  height_select_date -
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

		if ( ( coords_year_bottom < sum_header ) && 
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

plus.onclick = function( event_year, 
						 delete_div, 
						 coords_let ) {

	if ( this.classList.contains( 'zoom_show' ) ) {
		 this.classList.remove( 'zoom_show' );
		 this.classList.add( 'zoom_hide' );
	}

	if ( minus.classList.contains( 'zoom_hide' ) ) {
		 minus.classList.remove( 'zoom_hide' );
		 minus.classList.add( 'zoom_show' );
	}

	let too_events = document.querySelector( '#too_events' ),
		li_too_id = calendar.querySelectorAll( '.too_id' ),
		all_lists_months = calendar.getElementsByTagName( 'ul' ),
		zoom_plus_elem;

	for ( let plus_month of all_lists_months ) {

		if ( ( plus_month.getBoundingClientRect().top + 35 ) > sum_header ) {

			if ( plus_month.classList.contains( 'jan' ) ) {
				zoom_plus_elem = plus_month.parentElement.previousElementSibling;
				break;
			} else {
				zoom_plus_elem = plus_month; 
				break;
			}

		}

	}
	
	if ( too_events ) too_events.style.opacity = '0';

	calendar.style.opacity = '0';

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
							  height_header - height_select_date + offset );
		calendar.style.cssText = '';

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

	if ( this.classList.contains( 'zoom_show' ) ) {
		 this.classList.remove( 'zoom_show' );
		 this.classList.add( 'zoom_hide' );
	}

	if ( plus.classList.contains( 'zoom_hide' ) ) {
		 plus.classList.remove( 'zoom_hide' );
		 plus.classList.add( 'zoom_show' );
	}

	let too_events = document.querySelector( '#too_events' ),
		li_too_id = calendar.querySelectorAll( '.too_id' ),
		all_lists_months = calendar.getElementsByTagName( 'ul' ),
		zoom_minus_elem;

	for ( let minus_month of all_lists_months ) {

		if ( ( minus_month.getBoundingClientRect().top + 35 ) > sum_header ) {

			if ( minus_month.classList.contains( 'jan' ) ) {
				zoom_minus_elem = minus_month.parentElement.previousElementSibling;
				break;
			} else {
				zoom_minus_elem = minus_month; 
				break;
			}

		}

	};
	
	if ( too_events ) too_events.style.opacity = '0';

	calendar.style.opacity = '0';

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
			   ( height_header - height_select_date ) ) ) {

			window.scrollTo( 0, ( window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y ) -
								( sum_header + offset ) );
			calendar.style.cssText = '';

		} else if ( ( document_height - scroll_window_height ) <= 
					( window.pageYOffset + zoom_minus_elem.getBoundingClientRect().y -
					  height_header - height_select_date ) ) {

			window.scrollTo( 0, document_height - scroll_window_height - 60 );
			calendar.style.cssText = '';

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

setTimeout( get_info_scroll_event, 1000 );


