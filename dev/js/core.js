(function($){

	var is_mobile = false;
	//initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
	/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) is_mobile = true;


	// ==================================
	// Starting the slider driver

	// ==================================
	var SliderDriver = function(){

		this.els = {

			slider_wrapper 			: $("#slider-wrapper"),
			slider_content_wrapper 	: $(".slide-content-wrapper"),
			slides 					: null,
			header_wrapper 			: $("#header-wrapper"),
			status_bar 				: $("<div id='status-bar'></div>"),
			nav_wrapper 			: $("<div id='slider-nav-wrapper'></div>"),
			nav_previous 			: $("<a class='nav-prev'><span class='fa fa-angle-left'></span></a>"),
			nav_next 				: $("<a class='nav-next'><span class='fa fa-angle-right'></span></a>"),

		};

		this.params = {
			speed 		: 700,
			delay 		: 8000,
			w_width 	: $(window).width(),
			w_height 	: $(window).height(),
			watcher 	: null,
			c_width 	: 0,
			c_height	: 0,
			current_index: 0
		};



		this.init = function(){


			var theMan = this;


			if(theMan.els.slider_wrapper.length === 0) return false;

			if(theMan.els.slider_content_wrapper.length === 0) return false;


			theMan.els.slides = $(theMan.els.slider_content_wrapper).find(".slides");
			if(theMan.els.slides.length === 0) return false;


			theMan.activate();

			//append status bar
				$(theMan.els.slider_wrapper)
					.after(theMan.els.status_bar);

				// append nav_wrapper
				theMan.add_nav();
				theMan.els.nav_wrapper.update_position();

			theMan.params.wather = setInterval(function(){theMan.watch_resize();}, 100);


		}; //



		this.add_nav = function(){

			var theMan 			= this,
				nav_next 		= theMan.els.nav_next,
				nav_previous 	= theMan.els.nav_previous,
				nav_wrapper 	= theMan.els.nav_wrapper;


				$(nav_next).on("click", function(e){

					e.preventDefault();
					clearTimeout(theMan.params.timeout);
					theMan.next_slide(theMan.params.current_index + 1);

				}); //

				$(nav_previous).on("click", function(e){

					e.preventDefault();
					clearTimeout(theMan.params.timeout);
					theMan.next_slide(theMan.params.current_index - 1);

				}); //

				$(nav_wrapper).append(nav_next).append(nav_previous);
				nav_wrapper.update_position = function(){

					var _pos = $(theMan.els.slider_wrapper).position();
					$(nav_wrapper).css({
						top: Math.floor($(window).height() / 2)
					});

				};//


				$(theMan.els.slider_wrapper).before(nav_wrapper);





		}; //

		this.watch_resize = function(){


			var theMan = this,
				w_width = $(window).width(),
				w_height = $(window).height();


				if(theMan.params.c_width  		!== w_width ||
						theMan.params.c_height 	!== w_height){

					theMan.params.c_width  	= w_width;
					theMan.params.c_height 	= w_height;

					theMan.resize();
					theMan.els.nav_wrapper.update_position();

				}





		}; //



		this.resize = function(){

			$(this.els.slider_wrapper).height(
										$(window).height() -
										$(this.els.header_wrapper).height()
									);
			for (var i = 0; i < this.els.slides.length; i++){
				this.els.slides[i].resize();
			}

		}; //



		// activating this funciton
		this.activate = function(){

			//loading these slides
			var theMan = this;
			$(theMan.els.slider_wrapper).height($(window).height());
			theMan.load_slides(0, theMan.prepare_slides);


		}; //


		this.load_slides = function(index, _callback){


			var theMan 		= this,
				the_slide 	= null,
				bg_img 		= null;

			if(typeof index === 'undefined') index = 0;

			the_slide = theMan.els.slides[index];
			if('undefined' === typeof the_slide){

				if(typeof _callback === 'function'){
					_callback.apply(theMan);
				}

				return true;
			}


			bg_img = $(the_slide).find(">img");

			if(bg_img.length === 0) return theMan.load_slides(index + 1, _callback);
			the_slide.index  		= index;
			the_slide.bg_img  		= bg_img;
			the_slide.is_loaded 	= false;
			the_slide.the_man   	= theMan;
			the_slide.status_btn 	= $("<a href='' class='status-buttons'></a>");

			$(theMan.els.status_bar).append(the_slide.status_btn);

			$(the_slide.status_btn).on("click",function(e){
				e.preventDefault();
				var self = this;
				clearTimeout(theMan.params.timeout);
				theMan.next_slide(index);

			}); //



			the_slide.resize 		= function(){

				var theMan 		= this.the_man,
					the_slide 	= this,
					the_img 	= this.bg_img,
					w_width 	= $(window).width(),
					w_height 	= $(window).height() - $(theMan.els.header_wrapper).height(),
					img_width 	= 0,
					img_height 	= 0,
					top 		= 0,
					left 		= 0;



					if(typeof the_img.img_width === 'undefined'){
						the_img.img_width 	= the_slide.img_width;
						the_img.img_height 	= the_slide.img_height;
						the_img.ratio 		= the_img.img_width / the_img.img_height; //w/h
					}

					img_width 	= w_width;
					img_height 	= Math.floor(img_width / the_img.ratio);

					if(img_height < w_height){
						img_height 	= w_height;
						img_width 	= Math.floor(img_height * the_img.ratio);
						top  		= 0;
						left  		= (-1) * Math.floor((img_width - w_width)/2);

					}else{
						left = 0;
						top  = (-1) * Math.floor( (img_height - w_height)/ 2);
					}

					$(the_img)	.width(img_width)
								.height(img_height)
								.css({
									top: top  	+ "px",
									left: left 	+ "px"
								});
					$(the_slide).css({
							left: (index) * w_width
						}).width(w_width).height(w_height);


			}; //


			//loading the slide
			var img = new Image();
			img.src = $(bg_img).attr("src");
			img.onload =  function(){

				the_slide.is_loaded = true;
				the_slide.img_width = img.width;
				the_slide.img_height = img.height;

				if(theMan.all_loaded()){
					theMan.prepare_slides(0, theMan.run_slides);
				}

			};//

			return theMan.load_slides(index+1, _callback);

		}; //



		this.all_loaded = function(){

			var theMan 	= this,
				slides 	= theMan.els.slides,
				is_done = true;

				$.each(slides, function(index, _el){
					if(typeof _el.is_loaded !== 'undefined' &&
							!_el.is_loaded){is_done = false; return false;}

				});

				return is_done;

		}; //




		this.prepare_slides = function(index, _callback){

			var theMan 		= this,
				the_slide 	= null;

				if(typeof index === 'undefined') return false;

				the_slide = theMan.els.slides[index];


				if('undefined' === typeof the_slide){

					if('function' === typeof _callback){
						_callback.apply(theMan);
					}
					// done prep
					return true;

				}


				the_slide.resize();


				$(theMan.els.slider_content_wrapper).width(index * $(window).width());
				return theMan.prepare_slides(index + 1, _callback);


		}; //



		this.run_slides = function(){

			var theMan = this;

			$(theMan.els.slider_wrapper).addClass("active");

			theMan.next_slide();


		}; //


		this.next_slide = function(index){

			var theMan  	= this,
				the_index	= index || 0,
				the_slide 	= theMan.els.slides[the_index],
				position 	= null;

				if(typeof the_slide === 'undefined'){
					the_slide = theMan.els.slides[0];
					the_index = 0;
				}

				position = $(the_slide).position();

				$(theMan.els.slider_wrapper).animate({
					scrollLeft: position.left + "px"
				}, theMan.params.speed, function(){
					$(theMan.els.slides[theMan.params.current_index].status_btn).removeClass("active");
					$(the_slide.status_btn).addClass("active");
					theMan.params.current_index = the_index;
				});


				theMan.params.timeout = setTimeout(function(){
					theMan.next_slide(the_index + 1);
				}, theMan.params.delay);


		}; //
	}; // end of slider driver
	//=======================================================================


	// ===================================
	// function to alter layout on scroll
	// ====================================
	var ScrollerDriver = function(){

		this.els = {
			header_wrapper: $("#header-wrapper")
		};

		this.params = {

			current_scroll: -1,
			header_timer:  null

		}; //

		this.init = function(){

			var theMan = this;
			if(theMan.els.header_wrapper.length > 0){
				theMan.els.header_wrapper.height = $(theMan.els.header_wrapper).height();
				setInterval(function(){
					theMan.check_header();
				}, 100);
			}

		}; //


		this.check_header = function(){

			var theMan  	= this,
				n_scroll  	= $(window).scrollTop();

			if(n_scroll !== theMan.params.current_scroll){
				theMan.params.current_scroll = n_scroll;
				if(n_scroll > theMan.els.header_wrapper.height){
					if(!$(theMan.els.header_wrapper).hasClass("scrolling")){
						$(theMan.els.header_wrapper).addClass("scrolling");
					}
				}else{

					if($(theMan.els.header_wrapper).hasClass("scrolling")){
						$(theMan.els.header_wrapper).removeClass("scrolling");
					}

				}
			}

		}; //
	}; // end of scroller driver




	// ====================================
	// Driver for store select
	// ====================================
	//
	var StoreSelect = function(){

		this.els = {

			store_container 	: null,
			btn_current_store 	: $("#current-store"),
			the_map 			: null,


		};


		this.params = {
			lat : 40.6247894,
			lng: -74.2809734,
			url: "/index.php?route=stores/stores/ajaxGetAllStoresInRadius",
			default_radius: 20,
			first_attempt: true
		};



		this.init  = function(){

			var theMan = this,
				btn_store = theMan.els.btn_current_store;

				if(btn_store.length > 0){
					theMan.prepare_store_select();

				}

		}; //



		this.prepare_store_select = function(){

			var theMan = this,
				store_container = $([
					"<div class='overlay-wrapper' id='store-select-overlay'>",
						"<div class='overlay-container'>",
							"<h1 class='overlay-title'>Select your store</h1>",
							"<a id='btn-close-overlay'><span class='fa fa-times'></span></a>",
							"<div id='store-select' class='overlay-content-wrapper'>",
								"<div class='form-container'>",
									"<div class='input-rows-wrapper'>",
										"<div class='input-rows width-70'>",
											"<input type='text' placeholder='Postal code (e.g. xxxxx)' value='' name='st-keyword'/>",
										"</div>",
										"<div class='input-rows width-20'>",
											"<div class='b-select'>",
												"<select name='radius' id='radius'>",
													"<option value=''>Radius (M)</option>",
													"<option value='5'>5</option>",
													"<option value='10'>10</option>",
													"<option value='20'>20</option>",
													"<option value='25'>25</option>",
												"</select>",
											"</div>",
										"</div>",
										"<div class='input-rows width-10'>",
											"<a href='#' id='btn-do-store-search'><span class='fa fa-search'></span></a>",
										"</div>",
									"</div>",
									"<div id='store-result'>",
										"<div class='loading'><p>Please wait ... <span class='fa fa-spin fa-circle-o-notch'></span></p></div>",
										"<div id='store-map'></div>",
									"</div>",
								"</div>",
							"</div>",
						"</div>",
					"</div>"
				].join(""));

				$("body").append(store_container);

				//
				store_container.p_data = theMan;


				store_container.show = function(){
					this.remove_warning();
					$("body").addClass("show-store-select");
					this.update_position();
					this.run_map();
					this.the_map.html5_search();

				}; //

				store_container.is_showing = function(){
					return $("body").hasClass("show-store-select");
				};


				store_container.hide = function(){
					this.remove_warning();
					$("body").removeClass("show-store-select");
					$(this.overlay_container).css("margin-top", 0);
				};


				store_container.wait = function(){

					this.remove_warning();
					$("body").addClass("waiting");

				}; //


				store_container.no_results = function(){

					this.remove_warning();
					$("body").addClass("no-results");

				}; //

				store_container.remove_warning = function(){

					$("body").removeClass("no-results waiting");

				}; //

				store_container.done = function(){

					this.remove_warning();

				}; //



				// update the position
				store_container.update_position = function(){

					var w_height 		= $(window).height(),
						_container	 	= this.overlay_container || null,
						_height 		= 0;

						if(null === _container){
							_container = $(this).find(".overlay-container");
							this.overlay_container = _container;
						}

						_height = $(_container).height();

						$(_container).css(
										"margin-top",
										Math.floor((w_height - _height) / 3) + "px"
									);
				}; // end of updating position


				// init map
				store_container.init_map = function(){

					var self  		= this,
						map_el  	= $(self).find("#store-map"),
						map_options = {};
						/*if(is_mobile){

							map_options = {
								scrollwheel 		: false,
							    navigationControl	: false,
							    mapTypeControl 		: false,
							    scaleControl 		: false,
							    draggable 			: false,
							};

						}*/

						map_options.center = {
								lat: self.p_data.params.lat,
								lng: self.p_data.params.lng
						};
						map_options.zoom = 15;

					self.the_map 				= new google.maps.Map($(map_el)[0], map_options);
					self.the_map.geocoder  		= new google.maps.Geocoder();
					self.the_map.geocoder.map 	= self.the_map;

				}; //


				store_container.update_selected_store = function(){

					var self = this,
						store_detail  		= this.store_detail || null,
						btn_change_store  	= $("<a href='/contact' id='btn-change-store'><i class='fa fa-chevron-right'></i> Change Store</a>"),
						btn_direction 		= null;


						if(null === store_detail){

							store_detail = $([
								"<div id='store-detail'>",
									"<div class='store-detail-content'>",
									"</div>",
									"<div class='store-detail-footer'>",
									"</div>",
								"</div>",

							].join(""));


							this.store_detail  = store_detail;

							$(this.store_detail).on("click", "#btn-change-store", function(e){
								/*
								// temporarily remove this feature
								e.preventDefault();
								self.show();
								$(self.p_data.els.btn_current_store).parent().removeClass("show-detail");
								*/

							});

							$(this.store_detail).on("click", "#btn-close-detail", function(e){
								e.preventDefault();
								$(self.p_data.els.btn_current_store).parent().removeClass("show-detail");

							});


							$(this.p_data.els.btn_current_store).after(this.store_detail);

						}


					if(typeof localStorage === 'undefined' ||
						null === localStorage.getItem("store_id")){

						$(store_container.p_data.els.btn_current_store)
							.removeClass("has-store")
								.find(".store-name")
									.html("Select a store");

					}else{

						$(store_container.p_data.els.btn_current_store)
								.addClass("has-store")
								.find(".store-name")
									.html([
										localStorage.getItem("store_address"), ", ",
										localStorage.getItem("store_city"),
									].join(""))
									.after(["<a id='header-phone' href='tel:", localStorage.getItem("store_phone") , "'>",
												localStorage.getItem("store_phone"),
											"</a>" ].join(""));

						$(store_detail).find(".store-detail-content").html([

								"<h1 id='sd-dba'>",
									localStorage.getItem("store_dba"),
								"</h1>",

								"<a id='btn-close-detail'><span class='fa fa-times'></span></a>",

								"<p id='sd-address'>",
									localStorage.getItem("store_address"),
									"<br>", localStorage.getItem("store_city"),
									", ", localStorage.getItem("store_state"),
									" ", localStorage.getItem("store_postal_code"),
								"</p>",
								"<p id='sd-phone'>",
									"<a href='tel:",localStorage.getItem("store_phone").replace(/[\s\-]/g, ''),"'>",
										localStorage.getItem("store_phone"),
									"</a>",
								"</p>",
								("" !== localStorage.getItem("store_store_hours") ?
									"<p id='sd-hours'><strong>Open Hours:</strong><br/>" +
										localStorage.getItem("store_store_hours")
																	.replace(/&lt;/g, "<")
																	.replace(/&gt;/g, ">")  +
									"</p>" : "")



							].join(""));


							btn_direction = $([
												"<a href='https://maps.google.com?saddr=Current+Location&daddr=",

												encodeURIComponent(localStorage.getItem("store_address") +
																		", " +
																		localStorage.getItem("store_city") + ", " +
																		localStorage.getItem("store_state") + " " +
																		localStorage.getItem("store_postal_code")),


												"' target='_blank'><span class='fa fa-location-arrow'></span> Directions</a>"].join(""));


							$(store_detail)
								.find(".store-detail-footer")
								.empty()
								.append(btn_direction)
								.append(btn_change_store);

					}
				}; //

				//init map
				store_container.run_map = function(){

					var self 	= this,
						the_map = self.the_map || null;

						if(null === the_map || typeof the_map === 'undefined'){
							self.init_map();
							the_map = self.the_map;
							the_map.p_data = self;
						}

						self.the_map.html5_search = function(){

							var _map  = this;



							if(geo_position_js.init()){

								// starting to find postion
								geo_position_js.getCurrentPosition(

									function(position){

										if(typeof position.coords.latitude !== 'undefined'){

											_map.posting_data = {
												distance: $(_map.p_data).find("select[name='radius']").val(),
												lat: position.coords.latitude,
												lng: position.coords.longitude
											}; //


											if("" === _map.posting_data.distance){
												_map.posting_data.distance = _map.p_data.p_data.params.default_radius;
											}

											_map.search();

										}else{

											//fallback to ajax again
											$.ajax({
												type: "GET",
												dataType: "json",
												url: "http://ip-api.com/json/" + window.client_ip,
												success: function(response){
													if(typeof response.status !== 'undefined' &&
														"success" === response.status){

														_map.posting_data = {
															distance: $(_map.p_data).find("select[name='radius']").val(),
															lat: response.lat,
															lng: response.lon
														}; //


														if("" === _map.posting_data.distance){
															_map.posting_data.distance = _map.p_data.p_data.params.default_radius;
														}

														_map.search();


													}

												}, error: function(){

													//p.coords.latitude,p.coords.longitude
													_map.posting_data = {
														distance: $(_map.p_data).find("select[name='radius']").val(),
														lat: _map.p_data.p_data.params.lat,
														lng: _map.p_data.p_data.params.lng
													}; //


													if("" === _map.posting_data.distance){
														_map.posting_data.distance = _map.p_data.params.default_radius;
													}


													_map.search();

												},
												complete: function(){}
											});

										}


									}, //

									// so no native html 5 then starting to do ajax
									function(err){



									} //

								);


							}else{

								alert('HTML5 geolocation is not available on this browser. Please use our search tool below.');
							}


						}; //

						self.the_map.collect_posting_data = function(_callback){

							var _map 			= this,
								postal_code_el 	= $(_map.p_data).find("input[name='st-keyword']"),
								distance_el 	= $(_map.p_data).find("select[name='radius']"),
								_val 			= "",
								posting_data 	= {
									postal_code : "",
									distance 	: "",
									lat 		: null,
									lng 		: null
								};

								_val = $(postal_code_el).val().replace(/\s*/, '');

								if(/^\d{5}(\-\d{4})*$/.test(_val)){
									posting_data.postal_code = _val;
								}

								_val = $(distance_el).val().replace(/\s*/, '');
								if(/^\d{1,}$/.test(_val)){
									posting_data.distance = _val;
								}else{
									posting_data.distance = 5;
								}


								//run a geocode if postal code is checked out
								if("" === posting_data.postal_code){
									posting_data.lat = _map.p_data.p_data.params.lat;
									posting_data.lng = _map.p_data.p_data.params.lng;
									_map.posting_data = posting_data;
									if("function" === typeof _callback){
										_callback.apply(_map);
									}
								}else{

									_map.geocoder.geocode(
										{'address': posting_data.postal_code},
										function(results, status){

											if (status === google.maps.GeocoderStatus.OK) {
										      	_map.setCenter(
										      		results[0].geometry.location
										      	);

										      	posting_data.lat = results[0].geometry.location.lat();
										      	posting_data.lng = results[0].geometry.location.lng();
										      	_map.posting_data = posting_data;

										      	if("function" === typeof _callback){
													_callback.apply(_map);
												}
										    } else {

										    	alert('Geocode was not successful for the following reason: ' + status);
										    }

										});

								}

						}; //

						self.the_map.fetch = function(){

							var _map = this;
							if(typeof _map.location_data === 'undefined' || null === _map.location_data ) return false;

								_map.bound = new google.maps.LatLngBounds();

							$(_map.location_data)
								.each(
									function(_ind, _el){

										//reference to the parent
										_el.p_data = _map;
										_el.lat = parseFloat(_el.lat);
										_el.long = parseFloat(_el.long);
										_el.remove_pin = function(){

											this.marker.setMap(null);

										}; //


										_el.drop_pin = function(){

											_el.marker = new google.maps.Marker({
												position: {lat: _el.lat, lng: _el.long},
												map: _map,
												title: _el.address_1
											});


											_el.marker.addListener("click", function(){
												_el.show_detail();
											}); //

										};

										_el.is_selected = function(){

											if(typeof localStorage !== 'undefined'){
												return localStorage.getItem("store_id") === this.store_id;
											}

											return false;

										}; //


										_el.show_detail = function(){

											var self = this,
												detail_container = self.p_data.detail_container || null,
												btn_select_store = $([ "<a href='#'>",
																			"<span id='not-selected'>Select</span>",
																			"<span id='checking'>wait...</span>",
																			"<span id='selected'>Selected</span>",
																		"</a>"].join("")),
												btn_close 		 = $("<a href='#'><span class='fa fa-times'></span></a>");


												if(null === detail_container){

													detail_container = $([
														"<div id='detail-container'>",
														"</div>"
													].join(""));

													self.p_data.detail_container = detail_container;

													$(self.p_data.p_data).find("#store-result").append(detail_container);


												}


												if(_el.is_selected()){
													$(btn_select_store).addClass("selected");
												}


												$(detail_container).html(
													[
														"<h1>",
															"<span class='city-state'>",
																self.city,
																", ", self.state,
															"</span>",
															"<span class='address-1'>",
																self.address_1,
																("" !== self.address_2 ? " " + self.address_2 : ""),
																"<br/>", self.city,
																" ", self.state, ", ",
																self.postcode,
															"</span>",

														"</h1>",
														"<div class='detail-content'>",
															"<p class='detail-p distance'><label>Distance</label>",
																parseFloat(self.distance).toFixed(2), " miles away",
															"</p>",

															"<p class='detail-p phone'><label>Phone</label>" , self.phone , "</p>",

															("" !== self.url ?
																"<p class='detail-p links'><a href='" + self.url + "'><span class='fa fa-link'></span> Store details</a></p>" : ""),

															("" !== self.store_hours ?
															"<p class='detail-p open-hours'><strong>Open Hours:<br/></strong>" +
																self
																	.store_hours
																	.replace(/&lt;/g, "<")
																	.replace(/&gt;/g, ">") +
															"</p>" : ""),

														"</div>",

														"<div class='ft-details'>",

														"</div>"

													].join("")
												);


												$(btn_select_store).on("click", function(e){

													var self = this;
													$(self).addClass("checking");
													e.preventDefault();
													_el.remember_me(
														function(){

															$(self)
																.removeClass("checking")
																.addClass("selected");

															_el.p_data.p_data.update_selected_store();
															setTimeout(function(){
																_el.p_data.p_data.hide();
															}, 800);


														},
														function(){

															$(self)
																.removeClass("checking");
																alert("System cannot select this store. Please try again.");
														}
													);


												});

												$(btn_close).on("click", function(e){
													e.preventDefault();
													_el.hide_detail();
												});

												$(detail_container).find(".ft-details")
													.append(btn_select_store)
													.append(btn_close);

												$("body").addClass("show-map-detail");



										}; //

										// hide this
										_el.hide_detail = function(){
											$("body").removeClass("show-map-detail");
										}; //

										_el.remember_me = function(_c_success, _c_fail){

											var self = this;
											//get on local storage
											if(typeof localStorage !== 'undefined'){

												localStorage.setItem("store_address",
																		self.address_1 +
																			("" !== self.address_2 ? " " + self.address_2 : ""));
												localStorage.setItem("store_city", self.city);
												localStorage.setItem("store_state", self.state);
												localStorage.setItem("store_postal_code", self.postcode);
												localStorage.setItem("store_dba", self.dba);
												localStorage.setItem("store_id", self.store_id);
												localStorage.setItem("store_phone", self.phone);
												localStorage.setItem("store_url", self.url || "");
												localStorage.setItem("store_store_hours", self.store_hours);
												localStorage.setItem("store_number", self.store_number);


												if("function" === typeof _c_success){
													_c_success.apply(self);
												}

											}else{

												if("function" === typeof _c_fail){
													_c_fail.apply(self);
												}
											}

										}; //







										_el.drop_pin();
										_map.bound.extend(new google.maps.LatLng(_el.lat, _el.long));

									} //end of each function


								); //

								//fit all bound
								_map.fitBounds(_map.bound);


						}; //


						self.the_map.do_resize = function(){

							if(typeof this.location_data !== 'undefined' &&
								this.location_data !== null ){
								this.fitBounds(this.bound);

							}

						}; //

						self.the_map.clear  = function(){

							var _map = this;

							if(typeof _map.location_data === 'undefined' || null === _map.location_data) return false;

							$.each(_map.location_data, function(_ind, _el){
								_el.remove_pin();
							});


						}; //


						self.the_map.search_default = function(){

							var _map  			= this;
							//p.coords.latitude,p.coords.longitude
							_map.posting_data = {
								distance: $(_map.p_data).find("select[name='radius']").val(),
								lat: _map.p_data.p_data.params.lat,
								lng: _map.p_data.p_data.params.lng
							}; //


							if("" === _map.posting_data.distance){
								_map.posting_data.distance = _map.p_data.params.default_radius;
							}


							_map.search();


						}; //

						self.the_map.search = function(){

							var _map  			= this;


							if(_map.p_data.is_waiting) return false;

							_map.p_data.wait();

							_map.p_data.remove_warning();
							_map.clear();



							if(typeof _map.posting_data === 'undefined' ||
								null === _map.posting_data){
								_map.collect_posting_data(_map.search);
								return false;
							}

							//fix data name
							_map.posting_data.rad = _map.posting_data.distance;


							//run ajax call here
							$.ajax({
								url 	: _map.p_data.p_data.params.url,
								type 	: "POST",
								dataType: "json",
								data 	: _map.posting_data,
								success: function(_response){
									if(_response.length > 0){
										_map.location_data = _response;
										_map.fetch();

									}else{

										if(_map.p_data.p_data.params.first_attempt){

											_map.search_default();
											_map.p_data.p_data.params.first_attempt = false;

										}else{
											_map.p_data.no_results();
										}


									}
								},
								complete: function(){

									_map.p_data.done();
									_map.posting_data = null;


								} //

							});





						}; //





				}; //



				theMan.els.store_container = store_container;

				theMan.add_events();

				theMan.els.store_container.update_selected_store();


		}; //




		// ==================================
		// add events to the container
		this.add_events = function(){

			var theMan = this,
				store_container = theMan.els.store_container;

				$(store_container).on(	"click",
										"#btn-close-overlay",
										{the_data: theMan},
										function(e){e.data.the_data.els.store_container.hide();});


				$(store_container).on( "click",
										"#btn-do-store-search",
										{the_data: theMan},
										function(e){
											e.preventDefault();
											e.data.the_data.els.store_container.the_map.search();
										});
				$(theMan.els.btn_current_store).on("click",
													{the_data: theMan},
													function(e){


														var target = e.target;

														if($(target).is("a") &&
															$(target).attr("id") === "header-phone") return true;


														e.preventDefault();
														var self 	= this,
															p 		= $(self).parent(),
															link 	= $(self).attr("href") ;

														if($(self).hasClass("has-store")){

															if($(p).hasClass("show-detail")){
																$(p).removeClass("show-detail");
															}else{
																$(p).addClass("show-detail");
															}

														}else{
															window.location = $(this).attr("href");
															//e.data.the_data.els.store_container.show();
														}

													});



		}; //




	}; //






	//===================================================
	// rewrite for store wrapper
	//===================================================

	var StoreLocator = function(){


		this.els = {

			loc_wrapper	: $("#stores-locator-wrapper"),
			header_wrapper: $("#header_wrapper"),
			the_map 	: null
		};

		this.params = {
			lat : 40.6247894,
			lng: -74.2809734,
			url: "/index.php?route=stores/stores/ajaxGetAllStoresInRadius",
			default_radius: 100,
			first_attempt: true
		};

		this.init = function(){


			var theMan = this;

			if(theMan.els.loc_wrapper.length > 0){

				theMan.prepare_map();

			}


		};


		this.prepare_map = function(){

			var theMan 	= this,
				the_map = $(theMan.els.loc_wrapper).find("#the-map");


				if(the_map.length > 0){



					the_map.p_data = theMan;

					the_map.init = function(){

						var self 		= this,
							map_options = {};

						/*if(is_mobile){

							map_options = {
								scrollwheel: false,
							    navigationControl: false,
							    mapTypeControl: false,
							    scaleControl: false,
							    draggable: false,
							};

						}*/

						map_options.center = {
								lat: self.p_data.params.lat,
								lng: self.p_data.params.lng
						};
						map_options.zoom = 15;

						self.map = new google.maps.Map(
											$(the_map)[0],
											map_options);

						self.map.geocoder = new google.maps.Geocoder();
						self.map.geocoder.map = self.map;


					}; //



					the_map.collect_posting_data = function(_callback){

						var _map 			= this,
							postal_code_el 	= $(_map.p_data.els.loc_wrapper).find("#search-key"),
							distance_el 	= $(_map.p_data.els.loc_wrapper).find("#distance"),
							_val 			= "",
							posting_data 	= {
								postal_code : "",
								distance 	: "",
								lat 		: null,
								lng 		: null
							};

							_val = $(postal_code_el).val().replace(/\s*/, '');

							if("" !== _val.replace(/^\s|\s$/, '')){
								posting_data.postal_code = _val;
							}

							_val = $(distance_el).val().replace(/\s*/, '');
							if(/^\d{1,}$/.test(_val)){
								posting_data.distance = _val;
							}else{
								posting_data.distance = 5;
							}


							//run a geocode if postal code is checked out
							if("" === posting_data.postal_code){
								posting_data.lat = _map.p_data.params.lat;
								posting_data.lng = _map.p_data.params.lng;
								_map.posting_data = posting_data;
								if("function" === typeof _callback){
									_callback.apply(_map);
								}
							}else{

								_map.map.geocoder.geocode(
									{'address': posting_data.postal_code},
									function(results, status){

										if (status === google.maps.GeocoderStatus.OK) {
									      	_map.map.setCenter(
									      		results[0].geometry.location
									      	);

									      	posting_data.lat = results[0].geometry.location.lat();
									      	posting_data.lng = results[0].geometry.location.lng();
									      	_map.posting_data = posting_data;

									      	if("function" === typeof _callback){
												_callback.apply(_map);
											}
									    } else {

									    	alert('Geocode was not successful for the following reason: ' + status);
									    }

									});

							}

					}; //




					the_map.html5_search = function(){

						var _map  = this;

						if(geo_position_js.init()){

							// starting to find postion
							geo_position_js.getCurrentPosition(

								function(position){

									if(typeof position.coords.latitude !== 'undefined'){

										_map.posting_data = {
											distance: $(_map.p_data.els.loc_wrapper).find("#distance").val(),
											lat: position.coords.latitude,
											lng: position.coords.longitude
										}; //


										if("" === _map.posting_data.distance){
											_map.posting_data.distance = _map.p_data.params.default_radius;
										}


										_map.search();

									}else{

										//fallback to ajax again
										$.ajax({
											type: "GET",
											dataType: "json",
											url: "http://ip-api.com/json/" + window.client_ip,
											success: function(response){
												if(typeof response.status !== 'undefined' &&
													"success" === response.status){

													_map.posting_data = {
														distance: $(_map.p_data.els.loc_wrapper).find("#distance").val(),
														lat: response.lat,
														lng: response.lon
													}; //


													if("" === _map.posting_data.distance){
														_map.posting_data.distance = _map.p_data.params.default_radius;
													}

													_map.search();

												}

											}, error: function(){

												//p.coords.latitude,p.coords.longitude
												_map.posting_data = {
													distance: $(_map.p_data.els.loc_wrapper).find("#distance").val(),
													lat: _map.p_data.params.lat,
													lng: _map.p_data.params.lng
												}; //


												if("" === _map.posting_data.distance){
													_map.posting_data.distance = _map.p_data.params.default_radius;
												}


												_map.search();

											},
											complete: function(){}
										});

									}


								}, //

								// so no native html 5 then starting to do ajax
								function(err){



								} //

							);


						}else{

							alert('HTML5 geolocation is not available on this browser. Please use our search tool below.');
						}


					}; //

					the_map.search_default = function(){
						var _map = this;
								//p.coords.latitude,p.coords.longitude
						_map.posting_data = {
							distance: 1000,
							lat: _map.p_data.params.lat,
							lng: _map.p_data.params.lng
						}; //


						if("" === _map.posting_data.distance){
							_map.posting_data.distance = _map.p_data.params.default_radius;
						}


						_map.search();


					}; //

					the_map.remove_focus = function(){

						$(this.location_data).each(function(_index, _el){

							_el.remove_selected();

						}); //

					}; //

					the_map.fetch = function(){

						var _map = this,
							is_vertical = ($(window).width() >= 920);
						if(typeof _map.location_data === 'undefined' ||
								null === _map.location_data ) return false;

							_map.bound = new google.maps.LatLngBounds();



							if(typeof _map.result_panel === 'undefined'){

								_map.result_panel = $([
										"<div id='result-panel'>",
										"</div>"
									].join(""));

								_map.btn_prev = $(["<a class='nav-btn' id='btn-prev'>",
												"<span class='fa fa-angle-left'></span>",
											"</a>",].join(""));

								_map.btn_next = $(["<a class='nav-btn' id='btn-next'>",
														"<span class='fa fa-angle-right'></span>",
											"</a>",].join(""));

								$(_map.btn_next).on("click", function(e){

									e.preventDefault();

									$(_map.result_panel).animate(
										{scrollLeft: ($(_map.result_panel).scrollLeft() + 320) + "px"},
										500
									);

								}); //

								$(_map.btn_prev).on("click", function(e){
									e.preventDefault();

									var self = this,
										position = $(self).position();

									$(_map.result_panel).animate(
										{scrollLeft: ($(_map.result_panel).scrollLeft() - 320) + "px"},
										500
									);
								}); //

								$(_map.result_panel)
												.append(_map.btn_prev)
												.append(_map.btn_next);


								$(_map).before(_map.result_panel);

								_panel_wrapper = $("<div id='result-wrapper'></div>");

								$(_map.result_panel).append(_panel_wrapper);
								_map.result_panel.panel_wrapper = _panel_wrapper;


							}

							$(_map.result_panel.panel_wrapper).empty();



						$(_map.location_data)
							.each(
								function(_ind, _el){

									//reference to the parent

									_el.p_data 	= _map;
									_el.lat 	= parseFloat(_el.lat);
									_el.long 	= parseFloat(_el.long);
									_el.gLatLng = new google.maps.LatLng(_el.lat, _el.long);
									_el.btn_select_store = $("<a><span class='fa fa-check'></span> Select</a>");
									_el.remove_pin = function(){
										this.marker.setMap(null);
									}; //

									if(_el.co_code.toLowerCase() === 'tbs'){
										_el.marker_image = "/image/ts-marker.png";
									}else{
										_el.marker_image = "/image/fit-marker.png";
									}

									_el.remove_selected = function(){
										_el.marker.setIcon(_el.marker_image);
										$(_el.panel_item).removeClass("selected");
									};



									_el.panel_item = $([
										"<div class='res-item'>",

											"<h1>",
												_el.dba,
											"</h1>",

											"<p class='address'>",
												_el.address_1, ("" !== _el.address_2 ? " " + _el.address_2 : "" ),
												"<br/>", _el.city, ", ", _el.state, " ", _el.postcode,
											"</p>",
											(_el.store_hours.length > 3 ? "<p class='s-hours'>" +_el.store_hours+  "</p>" : ""),
											"<p class='phone'><a href='tel:",_el.phone.replace(/[\-\s]/g, ''),"'>",
												_el.phone,
												"</a>",
											"</p>",

											"<div class='res-footer'>",

												"<a href='https://maps.google.com?saddr=Current+Location&daddr=",

												encodeURIComponent(_el.address_1 +
													("" !== _el.address_2 ? " " 	+
															_el.address_2 : "" ) 	+
															", " +
															_el.city + ", " +
															_el.state + " " +
															_el.postcode),


												"' target='_blank'><span class='fa fa-location-arrow'></span> Directions</a>",

											"</div>",

										"</div>"
									].join(""));

									_el.btn_book_appointment = $("<a class='link-buttons'><span class='fa fa-calendar'></span> Make an Appointment</a>");

									$(_el.btn_book_appointment).on("click", function(e){

										e.preventDefault();
										if(typeof localStorage !== 'undefined'){

											localStorage.setItem("store_address",
																	_el.address_1 +
																		("" !== _el.address_2 ? " " + _el.address_2 : ""));
											localStorage.setItem("store_city", _el.city);
											localStorage.setItem("store_state", _el.state);
											localStorage.setItem("store_postal_code", _el.postcode);
											localStorage.setItem("store_dba", _el.dba);
											localStorage.setItem("store_id", _el.store_id);
											localStorage.setItem("store_phone", _el.phone);
											localStorage.setItem("store_url", _el.url || "");
											localStorage.setItem("store_store_hours", _el.store_hours);
											localStorage.setItem("store_number", _el.store_number);


											$("#current-store").find("#header-phone").remove();
											window.store_select.els.store_container.update_selected_store();

											// go to
											window.location = "/content/register-your-event/";
										}



									}); // end of click assignment

									$(_el.panel_item)
										.find(".res-footer")
										.append(_el.btn_select_store)
										.before(_el.btn_book_appointment);

									$(_el.btn_select_store).on("click", function(e){

										if(typeof localStorage !== 'undefined'){

											localStorage.setItem("store_address",
																	_el.address_1 +
																		("" !== _el.address_2 ? " " + _el.address_2 : ""));
											localStorage.setItem("store_city", _el.city);
											localStorage.setItem("store_state", _el.state);
											localStorage.setItem("store_postal_code", _el.postcode);
											localStorage.setItem("store_dba", _el.dba);
											localStorage.setItem("store_id", _el.store_id);
											localStorage.setItem("store_phone", _el.phone);
											localStorage.setItem("store_url", _el.url || "");
											localStorage.setItem("store_store_hours", _el.store_hours);
											localStorage.setItem("store_number", _el.store_number);


											$("#current-store").find("#header-phone").remove();
											window.store_select.els.store_container.update_selected_store();
										}


									}); //




									$(_el.panel_item).on("click", function(){
										_el.p_data.remove_focus();
										_el.show_detail();

									}); //

									_el.drop_pin = function(){

										_el.marker = new google.maps.Marker({
											position: {lat: _el.lat, lng: _el.long},
											map: _map.map,
											title: _el.address_1,
											icon: _el.marker_image

										});


										_el.marker.addListener("click", function(){
											_el.p_data.remove_focus();
											_el.show_detail();
										}); //

									};

									_el.is_selected = function(){

										if(typeof localStorage !== 'undefined'){
											return localStorage.getItem("store_id") === this.store_id;
										}

										return false;

									}; //

									// this will de-focus on the highlighted one
									// and hightlight on the right one
									_el.show_detail = function(){

										var position = $(_el.panel_item).position();

										// focus on this
										_el.p_data.map.setCenter(this.gLatLng);
										_el.p_data.map.setZoom(18);

										$(_el.panel_item).addClass("selected");
										if($(window).width() >= 920){
											$(_el.p_data.result_panel).animate({
												"scrollTop": position.top + "px"
											}, 500);
										}else{
											$(_el.p_data.result_panel).animate({
												"scrollLeft": position.left + "px"
											}, 500);
										}

										_el.marker.setIcon("/image/selected-marker.png");

									}; //


									// panel item
									$(_map.result_panel.panel_wrapper)
										.append(_el.panel_item);

									if(is_vertical){
										$(_map.result_panel.panel_wrapper).css("width", "100%");
									}else{
										$(_map.result_panel.panel_wrapper).width((_ind + 1) * 320);
									}




									_el.drop_pin();
									_map.bound.extend(_el.gLatLng);

								} //end of each function


							); //

							//fit all bound
							_map.map.fitBounds(_map.bound);


						}; //


						the_map.do_resize = function(){



							if(typeof this.location_data !== 'undefined' &&
								this.location_data !== null ){
								this.map.fitBounds(this.bound);

							}

							if($(window).width() >= 920){

								if("undefined" !== typeof the_map.result_panel){

									$(the_map.result_panel.panel_wrapper)
									.css("width", "100%");

								}


							}else{
								$(the_map.result_panel.panel_wrapper).width(
									320 * the_map.location_data.length
								);
							}


						}; //

						the_map.clear  = function(){

							var _map = this;

							if(typeof _map.location_data === 'undefined' ||
									null === _map.location_data) return false;

							$.each(_map.location_data, function(_ind, _el){
								_el.remove_pin();
								$(_el.panel_item).remove();
							});


						}; //


						the_map.wait = function(){
							$(this).addClass("waiting");
						}; //

						the_map.is_waiting = function(){
							return $(this).hasClass("waiting");
						}; //


						the_map.remove_warning = function(){
							$(this).removeClass("waiting");
						}; //

						the_map.no_results = function(){

							$(this)
								.addClass("no-results");
							$(this
								.result_panel
								.panel_wrapper)
									.html(
										[
											"<div style='padding: 15px; font-style: italic;'>",
												"<p>Sorry, no locations found. Please use a larger radius and search again.</p>",
											"</div>"].join("")
									);


						};


						the_map.done = function(){
							this.remove_warning();
						};



						the_map.search = function(){

							var _map  			= this;


							if(_map.is_waiting()) return false;

							_map.wait();

							_map.remove_warning();
							_map.clear();



							if(typeof _map.posting_data === 'undefined' ||
								null === _map.posting_data){
								_map.collect_posting_data(_map.search);
								return false;
							}

							//fix data name
							_map.posting_data.rad = _map.posting_data.distance;


							//run ajax call here
							$.ajax({
								url 	: _map.p_data.params.url,
								type 	: "POST",
								dataType: "json",
								data 	: _map.posting_data,
								success: function(_response){
									if(null !== _response && _response.length > 0){
										_map.location_data = _response;
										_map.fetch();

									}else{

										if(_map.p_data.params.first_attempt){
											_map.p_data.params.first_attempt = false;
											_map.search_default();
										}else{
											_map.no_results();
										}
									}
								},
								complete: function(){

									_map.done();
									_map.posting_data = null;


								} //

							});





						}; //



					theMan.els.the_map = the_map;

					theMan.els.the_map.init();
					theMan.els.the_map.search_default();
					//theMan.els.the_map.html5_search();

					$("#btn-search-location").on("click", function(e){
						e.preventDefault();
						theMan.els.the_map.search();

					});//
					$("#btn-use-location").on("click", function(e){
						e.preventDefault();
						theMan.els.the_map.html5_search();

					});//

					$("#search-key").on("keypress", function(e){

						if(e.keyCode === 13) $("#btn-search-location").trigger("click");
					});

					$(window).resize(function(){

						theMan.els.the_map.do_resize();

					}); //


				}

				return false;
		}; //

	}; //



	var SideMenu = function(){

		this.els = {

			items: $(".has-sub>a")

		}; //


		this.init = function(){

			var theMan = this;

			if(this.els.items.length > 0){

				$(theMan.els.items).on("click", function(e){

					e.preventDefault();
					var self = this,
						p_data = $(self).parent();

					if($(p_data).hasClass("selected")){
						$(p_data).removeClass("selected");
					}else{
						$(".has-sub.selected").removeClass("selected");
						$(p_data).addClass("selected");
					}

				}); //

			}

		}; //


	}; //









	$(document).ready(function(){

		var slider_driver = new SliderDriver();
		slider_driver.init();




		//start the checking for scroller
		var scroll_driver = new ScrollerDriver();
		scroll_driver.init();



		//================================
		// loading store select
		// ===============================
		window.store_select = new StoreSelect();
		window.store_select.init();



		var store_locator = new StoreLocator();
		store_locator.init();


		//runnnig free wall
		var the_wall = $("#blog-wall");
		if(the_wall.length > 0){

			var wall = new Freewall("#blog-wall");
			wall.reset({
					selector: '.w-items',
					cellW: 320,
					cellH: 480,
					fixSize: 0,
					gutterX: 0,
					gutterY: 0,
					onResize: function() {
						wall.fitZone();
					}
				});
			wall.fitZone();
			$(window).trigger("resize");

		} // end of the wall



		// update menu driver
		var _wp_side_menu = $("#side-menu #menu-main");


		if(_wp_side_menu.length > 0){

			$(_wp_side_menu).removeClass("menu").addClass("main-menu");
			var _subnav = $(_wp_side_menu).find(".mn");
			if(_subnav.length > 0){
				$(_subnav).each(function(_inde, _el){

					if($(_el).find(".sub-menu").length > 0){
						$(_el).addClass("has-sub");
					}

				});
			}
		}



		// update main menu
		var _wp_main_menu = $("#header-nav-wrapper .menu-main-container > ul");
		if(_wp_main_menu.length > 0){
			$(_wp_main_menu).append(
					["<li class='other'>",
                	"<a href='#'' id='btn-other'>•••</a>",
                	"</li>"].join(""));
		}

		// then activate side menu
		var side_menu = new SideMenu();
		side_menu.init();


		$("#btn-other").on("click", function(e){
			e.preventDefault();
			$("body").addClass("side-menu");

		});
		$("#side-menu #close-btn").on("click", function(e){
			e.preventDefault();
			$("body").removeClass("side-menu");

		});


		$("#btn-show-filter").on("click", function(e){
			e.preventDefault();
			$("body").addClass("filtered");
		}); //

		$("#btn-close-filter").on("click", function(e){
			e.preventDefault();
			$("body").removeClass("filtered");
		}); //




		// checking all slider
		//$(window).load(function(){

			var slides = $(".slides");
			if(slides.length > 0){
				$(slides).each(function(_ind, _slide){
					var img = $(_slide).find("img"),
						link_buttons = $(_slide).find(".slide-buttons");

					if(link_buttons.length > 0 && img.length > 0){
						$(img[0])
							.addClass("has-link")
							.on("click", function(){
								window.location = $(link_buttons[0]).attr("href");
							});

					}

				}); //

			}


		//}); //


	}); //



})(jQuery);
