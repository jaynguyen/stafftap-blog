!function(a) {
    var b = !1;
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (b = !0);
    var c = function() {
        this.els = {
            slider_wrapper: a("#slider-wrapper"),
            slider_content_wrapper: a(".slide-content-wrapper"),
            slides: null,
            header_wrapper: a("#header-wrapper"),
            status_bar: a("<div id='status-bar'></div>"),
            nav_wrapper: a("<div id='slider-nav-wrapper'></div>"),
            nav_previous: a("<a class='nav-prev'><span class='fa fa-angle-left'></span></a>"),
            nav_next: a("<a class='nav-next'><span class='fa fa-angle-right'></span></a>")
        }, this.params = {
            speed: 700,
            delay: 8e3,
            w_width: a(window).width(),
            w_height: a(window).height(),
            watcher: null,
            c_width: 0,
            c_height: 0,
            current_index: 0
        }, this.init = function() {
            var b = this;
            return 0 === b.els.slider_wrapper.length ? !1 : 0 === b.els.slider_content_wrapper.length ? !1 : (b.els.slides = a(b.els.slider_content_wrapper).find(".slides"), 
            0 === b.els.slides.length ? !1 : (b.activate(), a(b.els.slider_wrapper).after(b.els.status_bar), 
            b.add_nav(), b.els.nav_wrapper.update_position(), void (b.params.wather = setInterval(function() {
                b.watch_resize();
            }, 100))));
        }, this.add_nav = function() {
            var b = this, c = b.els.nav_next, d = b.els.nav_previous, e = b.els.nav_wrapper;
            a(c).on("click", function(a) {
                a.preventDefault(), clearTimeout(b.params.timeout), b.next_slide(b.params.current_index + 1);
            }), a(d).on("click", function(a) {
                a.preventDefault(), clearTimeout(b.params.timeout), b.next_slide(b.params.current_index - 1);
            }), a(e).append(c).append(d), e.update_position = function() {
                a(b.els.slider_wrapper).position();
                a(e).css({
                    top: Math.floor(a(window).height() / 2)
                });
            }, a(b.els.slider_wrapper).before(e);
        }, this.watch_resize = function() {
            var b = this, c = a(window).width(), d = a(window).height();
            (b.params.c_width !== c || b.params.c_height !== d) && (b.params.c_width = c, b.params.c_height = d, 
            b.resize(), b.els.nav_wrapper.update_position());
        }, this.resize = function() {
            a(this.els.slider_wrapper).height(a(window).height() - a(this.els.header_wrapper).height());
            for (var b = 0; b < this.els.slides.length; b++) this.els.slides[b].resize();
        }, this.activate = function() {
            var b = this;
            a(b.els.slider_wrapper).height(a(window).height()), b.load_slides(0, b.prepare_slides);
        }, this.load_slides = function(b, c) {
            var d = this, e = null, f = null;
            if ("undefined" == typeof b && (b = 0), e = d.els.slides[b], "undefined" == typeof e) return "function" == typeof c && c.apply(d), 
            !0;
            if (f = a(e).find(">img"), 0 === f.length) return d.load_slides(b + 1, c);
            e.index = b, e.bg_img = f, e.is_loaded = !1, e.the_man = d, e.status_btn = a("<a href='' class='status-buttons'></a>"), 
            a(d.els.status_bar).append(e.status_btn), a(e.status_btn).on("click", function(a) {
                a.preventDefault();
                clearTimeout(d.params.timeout), d.next_slide(b);
            }), e.resize = function() {
                var c = this.the_man, d = this, e = this.bg_img, f = a(window).width(), g = a(window).height() - a(c.els.header_wrapper).height(), h = 0, i = 0, j = 0, k = 0;
                "undefined" == typeof e.img_width && (e.img_width = d.img_width, e.img_height = d.img_height, 
                e.ratio = e.img_width / e.img_height), h = f, i = Math.floor(h / e.ratio), g > i ? (i = g, 
                h = Math.floor(i * e.ratio), j = 0, k = -1 * Math.floor((h - f) / 2)) : (k = 0, 
                j = -1 * Math.floor((i - g) / 2)), a(e).width(h).height(i).css({
                    top: j + "px",
                    left: k + "px"
                }), a(d).css({
                    left: b * f
                }).width(f).height(g);
            };
            var g = new Image();
            return g.src = a(f).attr("src"), g.onload = function() {
                e.is_loaded = !0, e.img_width = g.width, e.img_height = g.height, d.all_loaded() && d.prepare_slides(0, d.run_slides);
            }, d.load_slides(b + 1, c);
        }, this.all_loaded = function() {
            var b = this, c = b.els.slides, d = !0;
            return a.each(c, function(a, b) {
                return "undefined" == typeof b.is_loaded || b.is_loaded ? void 0 : (d = !1, !1);
            }), d;
        }, this.prepare_slides = function(b, c) {
            var d = this, e = null;
            return "undefined" == typeof b ? !1 : (e = d.els.slides[b], "undefined" == typeof e ? ("function" == typeof c && c.apply(d), 
            !0) : (e.resize(), a(d.els.slider_content_wrapper).width(b * a(window).width()), 
            d.prepare_slides(b + 1, c)));
        }, this.run_slides = function() {
            var b = this;
            a(b.els.slider_wrapper).addClass("active"), b.next_slide();
        }, this.next_slide = function(b) {
            var c = this, d = b || 0, e = c.els.slides[d], f = null;
            "undefined" == typeof e && (e = c.els.slides[0], d = 0), f = a(e).position(), a(c.els.slider_wrapper).animate({
                scrollLeft: f.left + "px"
            }, c.params.speed, function() {
                a(c.els.slides[c.params.current_index].status_btn).removeClass("active"), a(e.status_btn).addClass("active"), 
                c.params.current_index = d;
            }), c.params.timeout = setTimeout(function() {
                c.next_slide(d + 1);
            }, c.params.delay);
        };
    }, d = function() {
        this.els = {
            header_wrapper: a("#header-wrapper")
        }, this.params = {
            current_scroll: -1,
            header_timer: null
        }, this.init = function() {
            var b = this;
            b.els.header_wrapper.length > 0 && (b.els.header_wrapper.height = a(b.els.header_wrapper).height(), 
            setInterval(function() {
                b.check_header();
            }, 100));
        }, this.check_header = function() {
            var b = this, c = a(window).scrollTop();
            c !== b.params.current_scroll && (b.params.current_scroll = c, c > b.els.header_wrapper.height ? a(b.els.header_wrapper).hasClass("scrolling") || a(b.els.header_wrapper).addClass("scrolling") : a(b.els.header_wrapper).hasClass("scrolling") && a(b.els.header_wrapper).removeClass("scrolling"));
        };
    }, e = function() {
        this.els = {
            store_container: null,
            btn_current_store: a("#current-store"),
            the_map: null
        }, this.params = {
            lat: 40.6247894,
            lng: -74.2809734,
            url: "/index.php?route=stores/stores/ajaxGetAllStoresInRadius",
            default_radius: 20,
            first_attempt: !0
        }, this.init = function() {
            var a = this, b = a.els.btn_current_store;
            b.length > 0 && a.prepare_store_select();
        }, this.prepare_store_select = function() {
            var b = this, c = a([ "<div class='overlay-wrapper' id='store-select-overlay'>", "<div class='overlay-container'>", "<h1 class='overlay-title'>Select your store</h1>", "<a id='btn-close-overlay'><span class='fa fa-times'></span></a>", "<div id='store-select' class='overlay-content-wrapper'>", "<div class='form-container'>", "<div class='input-rows-wrapper'>", "<div class='input-rows width-70'>", "<input type='text' placeholder='Postal code (e.g. xxxxx)' value='' name='st-keyword'/>", "</div>", "<div class='input-rows width-20'>", "<div class='b-select'>", "<select name='radius' id='radius'>", "<option value=''>Radius (M)</option>", "<option value='5'>5</option>", "<option value='10'>10</option>", "<option value='20'>20</option>", "<option value='25'>25</option>", "</select>", "</div>", "</div>", "<div class='input-rows width-10'>", "<a href='#' id='btn-do-store-search'><span class='fa fa-search'></span></a>", "</div>", "</div>", "<div id='store-result'>", "<div class='loading'><p>Please wait ... <span class='fa fa-spin fa-circle-o-notch'></span></p></div>", "<div id='store-map'></div>", "</div>", "</div>", "</div>", "</div>", "</div>" ].join(""));
            a("body").append(c), c.p_data = b, c.show = function() {
                this.remove_warning(), a("body").addClass("show-store-select"), this.update_position(), 
                this.run_map(), this.the_map.html5_search();
            }, c.is_showing = function() {
                return a("body").hasClass("show-store-select");
            }, c.hide = function() {
                this.remove_warning(), a("body").removeClass("show-store-select"), a(this.overlay_container).css("margin-top", 0);
            }, c.wait = function() {
                this.remove_warning(), a("body").addClass("waiting");
            }, c.no_results = function() {
                this.remove_warning(), a("body").addClass("no-results");
            }, c.remove_warning = function() {
                a("body").removeClass("no-results waiting");
            }, c.done = function() {
                this.remove_warning();
            }, c.update_position = function() {
                var b = a(window).height(), c = this.overlay_container || null, d = 0;
                null === c && (c = a(this).find(".overlay-container"), this.overlay_container = c), 
                d = a(c).height(), a(c).css("margin-top", Math.floor((b - d) / 3) + "px");
            }, c.init_map = function() {
                var b = this, c = a(b).find("#store-map"), d = {};
                d.center = {
                    lat: b.p_data.params.lat,
                    lng: b.p_data.params.lng
                }, d.zoom = 15, b.the_map = new google.maps.Map(a(c)[0], d), b.the_map.geocoder = new google.maps.Geocoder(), 
                b.the_map.geocoder.map = b.the_map;
            }, c.update_selected_store = function() {
                var b = this, d = this.store_detail || null, e = a("<a href='/contact' id='btn-change-store'><i class='fa fa-chevron-right'></i> Change Store</a>"), f = null;
                null === d && (d = a([ "<div id='store-detail'>", "<div class='store-detail-content'>", "</div>", "<div class='store-detail-footer'>", "</div>", "</div>" ].join("")), 
                this.store_detail = d, a(this.store_detail).on("click", "#btn-change-store", function() {}), 
                a(this.store_detail).on("click", "#btn-close-detail", function(c) {
                    c.preventDefault(), a(b.p_data.els.btn_current_store).parent().removeClass("show-detail");
                }), a(this.p_data.els.btn_current_store).after(this.store_detail)), "undefined" == typeof localStorage || null === localStorage.getItem("store_id") ? a(c.p_data.els.btn_current_store).removeClass("has-store").find(".store-name").html("Select a store") : (a(c.p_data.els.btn_current_store).addClass("has-store").find(".store-name").html([ localStorage.getItem("store_address"), ", ", localStorage.getItem("store_city") ].join("")).after([ "<a id='header-phone' href='tel:", localStorage.getItem("store_phone"), "'>", localStorage.getItem("store_phone"), "</a>" ].join("")), 
                a(d).find(".store-detail-content").html([ "<h1 id='sd-dba'>", localStorage.getItem("store_dba"), "</h1>", "<a id='btn-close-detail'><span class='fa fa-times'></span></a>", "<p id='sd-address'>", localStorage.getItem("store_address"), "<br>", localStorage.getItem("store_city"), ", ", localStorage.getItem("store_state"), " ", localStorage.getItem("store_postal_code"), "</p>", "<p id='sd-phone'>", "<a href='tel:", localStorage.getItem("store_phone").replace(/[\s\-]/g, ""), "'>", localStorage.getItem("store_phone"), "</a>", "</p>", "" !== localStorage.getItem("store_store_hours") ? "<p id='sd-hours'><strong>Open Hours:</strong><br/>" + localStorage.getItem("store_store_hours").replace(/&lt;/g, "<").replace(/&gt;/g, ">") + "</p>" : "" ].join("")), 
                f = a([ "<a href='https://maps.google.com?saddr=Current+Location&daddr=", encodeURIComponent(localStorage.getItem("store_address") + ", " + localStorage.getItem("store_city") + ", " + localStorage.getItem("store_state") + " " + localStorage.getItem("store_postal_code")), "' target='_blank'><span class='fa fa-location-arrow'></span> Directions</a>" ].join("")), 
                a(d).find(".store-detail-footer").empty().append(f).append(e));
            }, c.run_map = function() {
                var b = this, c = b.the_map || null;
                (null === c || "undefined" == typeof c) && (b.init_map(), c = b.the_map, c.p_data = b), 
                b.the_map.html5_search = function() {
                    var b = this;
                    geo_position_js.init() ? geo_position_js.getCurrentPosition(function(c) {
                        "undefined" != typeof c.coords.latitude ? (b.posting_data = {
                            distance: a(b.p_data).find("select[name='radius']").val(),
                            lat: c.coords.latitude,
                            lng: c.coords.longitude
                        }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.p_data.params.default_radius), 
                        b.search()) : a.ajax({
                            type: "GET",
                            dataType: "json",
                            url: "http://ip-api.com/json/" + window.client_ip,
                            success: function(c) {
                                "undefined" != typeof c.status && "success" === c.status && (b.posting_data = {
                                    distance: a(b.p_data).find("select[name='radius']").val(),
                                    lat: c.lat,
                                    lng: c.lon
                                }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.p_data.params.default_radius), 
                                b.search());
                            },
                            error: function() {
                                b.posting_data = {
                                    distance: a(b.p_data).find("select[name='radius']").val(),
                                    lat: b.p_data.p_data.params.lat,
                                    lng: b.p_data.p_data.params.lng
                                }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.params.default_radius), 
                                b.search();
                            },
                            complete: function() {}
                        });
                    }, function() {}) : alert("HTML5 geolocation is not available on this browser. Please use our search tool below.");
                }, b.the_map.collect_posting_data = function(b) {
                    var c = this, d = a(c.p_data).find("input[name='st-keyword']"), e = a(c.p_data).find("select[name='radius']"), f = "", g = {
                        postal_code: "",
                        distance: "",
                        lat: null,
                        lng: null
                    };
                    f = a(d).val().replace(/\s*/, ""), /^\d{5}(\-\d{4})*$/.test(f) && (g.postal_code = f), 
                    f = a(e).val().replace(/\s*/, ""), g.distance = /^\d{1,}$/.test(f) ? f : 5, "" === g.postal_code ? (g.lat = c.p_data.p_data.params.lat, 
                    g.lng = c.p_data.p_data.params.lng, c.posting_data = g, "function" == typeof b && b.apply(c)) : c.geocoder.geocode({
                        address: g.postal_code
                    }, function(a, d) {
                        d === google.maps.GeocoderStatus.OK ? (c.setCenter(a[0].geometry.location), g.lat = a[0].geometry.location.lat(), 
                        g.lng = a[0].geometry.location.lng(), c.posting_data = g, "function" == typeof b && b.apply(c)) : alert("Geocode was not successful for the following reason: " + d);
                    });
                }, b.the_map.fetch = function() {
                    var b = this;
                    return "undefined" == typeof b.location_data || null === b.location_data ? !1 : (b.bound = new google.maps.LatLngBounds(), 
                    a(b.location_data).each(function(c, d) {
                        d.p_data = b, d.lat = parseFloat(d.lat), d["long"] = parseFloat(d["long"]), d.remove_pin = function() {
                            this.marker.setMap(null);
                        }, d.drop_pin = function() {
                            d.marker = new google.maps.Marker({
                                position: {
                                    lat: d.lat,
                                    lng: d["long"]
                                },
                                map: b,
                                title: d.address_1
                            }), d.marker.addListener("click", function() {
                                d.show_detail();
                            });
                        }, d.is_selected = function() {
                            return "undefined" != typeof localStorage ? localStorage.getItem("store_id") === this.store_id : !1;
                        }, d.show_detail = function() {
                            var b = this, c = b.p_data.detail_container || null, e = a([ "<a href='#'>", "<span id='not-selected'>Select</span>", "<span id='checking'>wait...</span>", "<span id='selected'>Selected</span>", "</a>" ].join("")), f = a("<a href='#'><span class='fa fa-times'></span></a>");
                            null === c && (c = a([ "<div id='detail-container'>", "</div>" ].join("")), b.p_data.detail_container = c, 
                            a(b.p_data.p_data).find("#store-result").append(c)), d.is_selected() && a(e).addClass("selected"), 
                            a(c).html([ "<h1>", "<span class='city-state'>", b.city, ", ", b.state, "</span>", "<span class='address-1'>", b.address_1, "" !== b.address_2 ? " " + b.address_2 : "", "<br/>", b.city, " ", b.state, ", ", b.postcode, "</span>", "</h1>", "<div class='detail-content'>", "<p class='detail-p distance'><label>Distance</label>", parseFloat(b.distance).toFixed(2), " miles away", "</p>", "<p class='detail-p phone'><label>Phone</label>", b.phone, "</p>", "" !== b.url ? "<p class='detail-p links'><a href='" + b.url + "'><span class='fa fa-link'></span> Store details</a></p>" : "", "" !== b.store_hours ? "<p class='detail-p open-hours'><strong>Open Hours:<br/></strong>" + b.store_hours.replace(/&lt;/g, "<").replace(/&gt;/g, ">") + "</p>" : "", "</div>", "<div class='ft-details'>", "</div>" ].join("")), 
                            a(e).on("click", function(b) {
                                var c = this;
                                a(c).addClass("checking"), b.preventDefault(), d.remember_me(function() {
                                    a(c).removeClass("checking").addClass("selected"), d.p_data.p_data.update_selected_store(), 
                                    setTimeout(function() {
                                        d.p_data.p_data.hide();
                                    }, 800);
                                }, function() {
                                    a(c).removeClass("checking"), alert("System cannot select this store. Please try again.");
                                });
                            }), a(f).on("click", function(a) {
                                a.preventDefault(), d.hide_detail();
                            }), a(c).find(".ft-details").append(e).append(f), a("body").addClass("show-map-detail");
                        }, d.hide_detail = function() {
                            a("body").removeClass("show-map-detail");
                        }, d.remember_me = function(a, b) {
                            var c = this;
                            "undefined" != typeof localStorage ? (localStorage.setItem("store_address", c.address_1 + ("" !== c.address_2 ? " " + c.address_2 : "")), 
                            localStorage.setItem("store_city", c.city), localStorage.setItem("store_state", c.state), 
                            localStorage.setItem("store_postal_code", c.postcode), localStorage.setItem("store_dba", c.dba), 
                            localStorage.setItem("store_id", c.store_id), localStorage.setItem("store_phone", c.phone), 
                            localStorage.setItem("store_url", c.url || ""), localStorage.setItem("store_store_hours", c.store_hours), 
                            localStorage.setItem("store_number", c.store_number), "function" == typeof a && a.apply(c)) : "function" == typeof b && b.apply(c);
                        }, d.drop_pin(), b.bound.extend(new google.maps.LatLng(d.lat, d["long"]));
                    }), void b.fitBounds(b.bound));
                }, b.the_map.do_resize = function() {
                    "undefined" != typeof this.location_data && null !== this.location_data && this.fitBounds(this.bound);
                }, b.the_map.clear = function() {
                    var b = this;
                    return "undefined" == typeof b.location_data || null === b.location_data ? !1 : void a.each(b.location_data, function(a, b) {
                        b.remove_pin();
                    });
                }, b.the_map.search_default = function() {
                    var b = this;
                    b.posting_data = {
                        distance: a(b.p_data).find("select[name='radius']").val(),
                        lat: b.p_data.p_data.params.lat,
                        lng: b.p_data.p_data.params.lng
                    }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.params.default_radius), 
                    b.search();
                }, b.the_map.search = function() {
                    var b = this;
                    return b.p_data.is_waiting ? !1 : (b.p_data.wait(), b.p_data.remove_warning(), b.clear(), 
                    "undefined" == typeof b.posting_data || null === b.posting_data ? (b.collect_posting_data(b.search), 
                    !1) : (b.posting_data.rad = b.posting_data.distance, void a.ajax({
                        url: b.p_data.p_data.params.url,
                        type: "POST",
                        dataType: "json",
                        data: b.posting_data,
                        success: function(a) {
                            a.length > 0 ? (b.location_data = a, b.fetch()) : b.p_data.p_data.params.first_attempt ? (b.search_default(), 
                            b.p_data.p_data.params.first_attempt = !1) : b.p_data.no_results();
                        },
                        complete: function() {
                            b.p_data.done(), b.posting_data = null;
                        }
                    })));
                };
            }, b.els.store_container = c, b.add_events(), b.els.store_container.update_selected_store();
        }, this.add_events = function() {
            var b = this, c = b.els.store_container;
            a(c).on("click", "#btn-close-overlay", {
                the_data: b
            }, function(a) {
                a.data.the_data.els.store_container.hide();
            }), a(c).on("click", "#btn-do-store-search", {
                the_data: b
            }, function(a) {
                a.preventDefault(), a.data.the_data.els.store_container.the_map.search();
            }), a(b.els.btn_current_store).on("click", {
                the_data: b
            }, function(b) {
                var c = b.target;
                if (a(c).is("a") && "header-phone" === a(c).attr("id")) return !0;
                b.preventDefault();
                {
                    var d = this, e = a(d).parent();
                    a(d).attr("href");
                }
                a(d).hasClass("has-store") ? a(e).hasClass("show-detail") ? a(e).removeClass("show-detail") : a(e).addClass("show-detail") : window.location = a(this).attr("href");
            });
        };
    }, f = function() {
        this.els = {
            loc_wrapper: a("#stores-locator-wrapper"),
            header_wrapper: a("#header_wrapper"),
            the_map: null
        }, this.params = {
            lat: 40.6247894,
            lng: -74.2809734,
            url: "/index.php?route=stores/stores/ajaxGetAllStoresInRadius",
            default_radius: 100,
            first_attempt: !0
        }, this.init = function() {
            var a = this;
            a.els.loc_wrapper.length > 0 && a.prepare_map();
        }, this.prepare_map = function() {
            var b = this, c = a(b.els.loc_wrapper).find("#the-map");
            return c.length > 0 && (c.p_data = b, c.init = function() {
                var b = this, d = {};
                d.center = {
                    lat: b.p_data.params.lat,
                    lng: b.p_data.params.lng
                }, d.zoom = 15, b.map = new google.maps.Map(a(c)[0], d), b.map.geocoder = new google.maps.Geocoder(), 
                b.map.geocoder.map = b.map;
            }, c.collect_posting_data = function(b) {
                var c = this, d = a(c.p_data.els.loc_wrapper).find("#search-key"), e = a(c.p_data.els.loc_wrapper).find("#distance"), f = "", g = {
                    postal_code: "",
                    distance: "",
                    lat: null,
                    lng: null
                };
                f = a(d).val().replace(/\s*/, ""), "" !== f.replace(/^\s|\s$/, "") && (g.postal_code = f), 
                f = a(e).val().replace(/\s*/, ""), g.distance = /^\d{1,}$/.test(f) ? f : 5, "" === g.postal_code ? (g.lat = c.p_data.params.lat, 
                g.lng = c.p_data.params.lng, c.posting_data = g, "function" == typeof b && b.apply(c)) : c.map.geocoder.geocode({
                    address: g.postal_code
                }, function(a, d) {
                    d === google.maps.GeocoderStatus.OK ? (c.map.setCenter(a[0].geometry.location), 
                    g.lat = a[0].geometry.location.lat(), g.lng = a[0].geometry.location.lng(), c.posting_data = g, 
                    "function" == typeof b && b.apply(c)) : alert("Geocode was not successful for the following reason: " + d);
                });
            }, c.html5_search = function() {
                var b = this;
                geo_position_js.init() ? geo_position_js.getCurrentPosition(function(c) {
                    "undefined" != typeof c.coords.latitude ? (b.posting_data = {
                        distance: a(b.p_data.els.loc_wrapper).find("#distance").val(),
                        lat: c.coords.latitude,
                        lng: c.coords.longitude
                    }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.params.default_radius), 
                    b.search()) : a.ajax({
                        type: "GET",
                        dataType: "json",
                        url: "http://ip-api.com/json/" + window.client_ip,
                        success: function(c) {
                            "undefined" != typeof c.status && "success" === c.status && (b.posting_data = {
                                distance: a(b.p_data.els.loc_wrapper).find("#distance").val(),
                                lat: c.lat,
                                lng: c.lon
                            }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.params.default_radius), 
                            b.search());
                        },
                        error: function() {
                            b.posting_data = {
                                distance: a(b.p_data.els.loc_wrapper).find("#distance").val(),
                                lat: b.p_data.params.lat,
                                lng: b.p_data.params.lng
                            }, "" === b.posting_data.distance && (b.posting_data.distance = b.p_data.params.default_radius), 
                            b.search();
                        },
                        complete: function() {}
                    });
                }, function() {}) : alert("HTML5 geolocation is not available on this browser. Please use our search tool below.");
            }, c.search_default = function() {
                var a = this;
                a.posting_data = {
                    distance: 1e3,
                    lat: a.p_data.params.lat,
                    lng: a.p_data.params.lng
                }, "" === a.posting_data.distance && (a.posting_data.distance = a.p_data.params.default_radius), 
                a.search();
            }, c.remove_focus = function() {
                a(this.location_data).each(function(a, b) {
                    b.remove_selected();
                });
            }, c.fetch = function() {
                var b = this, c = a(window).width() >= 920;
                return "undefined" == typeof b.location_data || null === b.location_data ? !1 : (b.bound = new google.maps.LatLngBounds(), 
                "undefined" == typeof b.result_panel && (b.result_panel = a([ "<div id='result-panel'>", "</div>" ].join("")), 
                b.btn_prev = a([ "<a class='nav-btn' id='btn-prev'>", "<span class='fa fa-angle-left'></span>", "</a>" ].join("")), 
                b.btn_next = a([ "<a class='nav-btn' id='btn-next'>", "<span class='fa fa-angle-right'></span>", "</a>" ].join("")), 
                a(b.btn_next).on("click", function(c) {
                    c.preventDefault(), a(b.result_panel).animate({
                        scrollLeft: a(b.result_panel).scrollLeft() + 320 + "px"
                    }, 500);
                }), a(b.btn_prev).on("click", function(c) {
                    c.preventDefault();
                    {
                        var d = this;
                        a(d).position();
                    }
                    a(b.result_panel).animate({
                        scrollLeft: a(b.result_panel).scrollLeft() - 320 + "px"
                    }, 500);
                }), a(b.result_panel).append(b.btn_prev).append(b.btn_next), a(b).before(b.result_panel), 
                _panel_wrapper = a("<div id='result-wrapper'></div>"), a(b.result_panel).append(_panel_wrapper), 
                b.result_panel.panel_wrapper = _panel_wrapper), a(b.result_panel.panel_wrapper).empty(), 
                a(b.location_data).each(function(d, e) {
                    e.p_data = b, e.lat = parseFloat(e.lat), e["long"] = parseFloat(e["long"]), e.gLatLng = new google.maps.LatLng(e.lat, e["long"]), 
                    e.btn_select_store = a("<a><span class='fa fa-check'></span> Select</a>"), e.remove_pin = function() {
                        this.marker.setMap(null);
                    }, e.marker_image = "tbs" === e.co_code.toLowerCase() ? "/image/ts-marker.png" : "/image/fit-marker.png", 
                    e.remove_selected = function() {
                        e.marker.setIcon(e.marker_image), a(e.panel_item).removeClass("selected");
                    }, e.panel_item = a([ "<div class='res-item'>", "<h1>", e.dba, "</h1>", "<p class='address'>", e.address_1, "" !== e.address_2 ? " " + e.address_2 : "", "<br/>", e.city, ", ", e.state, " ", e.postcode, "</p>", e.store_hours.length > 3 ? "<p class='s-hours'>" + e.store_hours + "</p>" : "", "<p class='phone'><a href='tel:", e.phone.replace(/[\-\s]/g, ""), "'>", e.phone, "</a>", "</p>", "<div class='res-footer'>", "<a href='https://maps.google.com?saddr=Current+Location&daddr=", encodeURIComponent(e.address_1 + ("" !== e.address_2 ? " " + e.address_2 : "") + ", " + e.city + ", " + e.state + " " + e.postcode), "' target='_blank'><span class='fa fa-location-arrow'></span> Directions</a>", "</div>", "</div>" ].join("")), 
                    e.btn_book_appointment = a("<a class='link-buttons'><span class='fa fa-calendar'></span> Make an Appointment</a>"), 
                    a(e.btn_book_appointment).on("click", function(b) {
                        b.preventDefault(), "undefined" != typeof localStorage && (localStorage.setItem("store_address", e.address_1 + ("" !== e.address_2 ? " " + e.address_2 : "")), 
                        localStorage.setItem("store_city", e.city), localStorage.setItem("store_state", e.state), 
                        localStorage.setItem("store_postal_code", e.postcode), localStorage.setItem("store_dba", e.dba), 
                        localStorage.setItem("store_id", e.store_id), localStorage.setItem("store_phone", e.phone), 
                        localStorage.setItem("store_url", e.url || ""), localStorage.setItem("store_store_hours", e.store_hours), 
                        localStorage.setItem("store_number", e.store_number), a("#current-store").find("#header-phone").remove(), 
                        window.store_select.els.store_container.update_selected_store(), window.location = "/content/register-your-event/");
                    }), a(e.panel_item).find(".res-footer").append(e.btn_select_store).before(e.btn_book_appointment), 
                    a(e.btn_select_store).on("click", function() {
                        "undefined" != typeof localStorage && (localStorage.setItem("store_address", e.address_1 + ("" !== e.address_2 ? " " + e.address_2 : "")), 
                        localStorage.setItem("store_city", e.city), localStorage.setItem("store_state", e.state), 
                        localStorage.setItem("store_postal_code", e.postcode), localStorage.setItem("store_dba", e.dba), 
                        localStorage.setItem("store_id", e.store_id), localStorage.setItem("store_phone", e.phone), 
                        localStorage.setItem("store_url", e.url || ""), localStorage.setItem("store_store_hours", e.store_hours), 
                        localStorage.setItem("store_number", e.store_number), a("#current-store").find("#header-phone").remove(), 
                        window.store_select.els.store_container.update_selected_store());
                    }), a(e.panel_item).on("click", function() {
                        e.p_data.remove_focus(), e.show_detail();
                    }), e.drop_pin = function() {
                        e.marker = new google.maps.Marker({
                            position: {
                                lat: e.lat,
                                lng: e["long"]
                            },
                            map: b.map,
                            title: e.address_1,
                            icon: e.marker_image
                        }), e.marker.addListener("click", function() {
                            e.p_data.remove_focus(), e.show_detail();
                        });
                    }, e.is_selected = function() {
                        return "undefined" != typeof localStorage ? localStorage.getItem("store_id") === this.store_id : !1;
                    }, e.show_detail = function() {
                        var b = a(e.panel_item).position();
                        e.p_data.map.setCenter(this.gLatLng), e.p_data.map.setZoom(18), a(e.panel_item).addClass("selected"), 
                        a(window).width() >= 920 ? a(e.p_data.result_panel).animate({
                            scrollTop: b.top + "px"
                        }, 500) : a(e.p_data.result_panel).animate({
                            scrollLeft: b.left + "px"
                        }, 500), e.marker.setIcon("/image/selected-marker.png");
                    }, a(b.result_panel.panel_wrapper).append(e.panel_item), c ? a(b.result_panel.panel_wrapper).css("width", "100%") : a(b.result_panel.panel_wrapper).width(320 * (d + 1)), 
                    e.drop_pin(), b.bound.extend(e.gLatLng);
                }), void b.map.fitBounds(b.bound));
            }, c.do_resize = function() {
                "undefined" != typeof this.location_data && null !== this.location_data && this.map.fitBounds(this.bound), 
                a(window).width() >= 920 ? "undefined" != typeof c.result_panel && a(c.result_panel.panel_wrapper).css("width", "100%") : a(c.result_panel.panel_wrapper).width(320 * c.location_data.length);
            }, c.clear = function() {
                var b = this;
                return "undefined" == typeof b.location_data || null === b.location_data ? !1 : void a.each(b.location_data, function(b, c) {
                    c.remove_pin(), a(c.panel_item).remove();
                });
            }, c.wait = function() {
                a(this).addClass("waiting");
            }, c.is_waiting = function() {
                return a(this).hasClass("waiting");
            }, c.remove_warning = function() {
                a(this).removeClass("waiting");
            }, c.no_results = function() {
                a(this).addClass("no-results"), a(this.result_panel.panel_wrapper).html([ "<div style='padding: 15px; font-style: italic;'>", "<p>Sorry, no locations found. Please use a larger radius and search again.</p>", "</div>" ].join(""));
            }, c.done = function() {
                this.remove_warning();
            }, c.search = function() {
                var b = this;
                return b.is_waiting() ? !1 : (b.wait(), b.remove_warning(), b.clear(), "undefined" == typeof b.posting_data || null === b.posting_data ? (b.collect_posting_data(b.search), 
                !1) : (b.posting_data.rad = b.posting_data.distance, void a.ajax({
                    url: b.p_data.params.url,
                    type: "POST",
                    dataType: "json",
                    data: b.posting_data,
                    success: function(a) {
                        null !== a && a.length > 0 ? (b.location_data = a, b.fetch()) : b.p_data.params.first_attempt ? (b.p_data.params.first_attempt = !1, 
                        b.search_default()) : b.no_results();
                    },
                    complete: function() {
                        b.done(), b.posting_data = null;
                    }
                })));
            }, b.els.the_map = c, b.els.the_map.init(), b.els.the_map.search_default(), a("#btn-search-location").on("click", function(a) {
                a.preventDefault(), b.els.the_map.search();
            }), a("#btn-use-location").on("click", function(a) {
                a.preventDefault(), b.els.the_map.html5_search();
            }), a("#search-key").on("keypress", function(b) {
                13 === b.keyCode && a("#btn-search-location").trigger("click");
            }), a(window).resize(function() {
                b.els.the_map.do_resize();
            })), !1;
        };
    }, g = function() {
        this.els = {
            items: a(".has-sub>a")
        }, this.init = function() {
            var b = this;
            this.els.items.length > 0 && a(b.els.items).on("click", function(b) {
                b.preventDefault();
                var c = this, d = a(c).parent();
                a(d).hasClass("selected") ? a(d).removeClass("selected") : (a(".has-sub.selected").removeClass("selected"), 
                a(d).addClass("selected"));
            });
        };
    };
    a(document).ready(function() {
        var b = new c();
        b.init();
        var h = new d();
        h.init(), window.store_select = new e(), window.store_select.init();
        var i = new f();
        i.init();
        var j = a("#blog-wall");
        if (j.length > 0) {
            var k = new Freewall("#blog-wall");
            k.reset({
                selector: ".w-items",
                cellW: 320,
                cellH: 480,
                fixSize: 0,
                gutterX: 0,
                gutterY: 0,
                onResize: function() {
                    k.fitZone();
                }
            }), k.fitZone(), a(window).trigger("resize");
        }
        var l = a("#side-menu #menu-main");
        if (l.length > 0) {
            a(l).removeClass("menu").addClass("main-menu");
            var m = a(l).find(".mn");
            m.length > 0 && a(m).each(function(b, c) {
                a(c).find(".sub-menu").length > 0 && a(c).addClass("has-sub");
            });
        }
        var n = a("#header-nav-wrapper .menu-main-container > ul");
        n.length > 0 && a(n).append([ "<li class='other'>", "<a href='#'' id='btn-other'>•••</a>", "</li>" ].join(""));
        var o = new g();
        o.init(), a("#btn-other").on("click", function(b) {
            b.preventDefault(), a("body").addClass("side-menu");
        }), a("#side-menu #close-btn").on("click", function(b) {
            b.preventDefault(), a("body").removeClass("side-menu");
        }), a("#btn-show-filter").on("click", function(b) {
            b.preventDefault(), a("body").addClass("filtered");
        }), a("#btn-close-filter").on("click", function(b) {
            b.preventDefault(), a("body").removeClass("filtered");
        });
        var p = a(".slides");
        p.length > 0 && a(p).each(function(b, c) {
            var d = a(c).find("img"), e = a(c).find(".slide-buttons");
            e.length > 0 && d.length > 0 && a(d[0]).addClass("has-link").on("click", function() {
                window.location = a(e[0]).attr("href");
            });
        });
    });
}(jQuery);
//# sourceMappingURL=core.js.map