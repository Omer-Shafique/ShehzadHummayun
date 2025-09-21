$ = jQuery;

document.addEventListener("DOMContentLoaded", function() {
	let search = document.querySelector('.customIcon.search');
	let searchBar = document.querySelector('.searchBar');
	let accountSubmenu = document.querySelector('.customIcon .account .accountSubmenu');
	search.addEventListener('click', function(){
		// searchBar.classList.toggle('active');
		accountSubmenu.classList.remove('active');
		
	});
	
	/* document.addEventListener('click', function(event){
		var isClickInside = searchBar.contains(event.target);
		
		if (!isClickInside && !search.contains(event.target)) {
			searchBar.classList.remove('active');
		}
	}); */

	if (document.body.classList.contains('logged-in')) {
		let account = document.querySelector('.customIcon .account');
		let accountIcon = document.querySelector('.customIcon .account svg');
		let accountSubmenu = document.querySelector('.customIcon .account .accountSubmenu');
		account.classList.add('submenu');
		accountIcon.addEventListener('click', function(){
			accountSubmenu.classList.toggle('active');
		});
	} else {
		let account = document.querySelector('.customIcon .account');
		account.addEventListener('click', function(){
			window.location.href = "/my-account";
		});
	}
});

$(document).ready(function() {
  let $search = $('.customIconHeader.search');
  let $searchBar = $('.searchBar');
  let $accountSubmenu = $('.customIconHeader .account .accountSubmenu');
  
  $search.on('click', function() {
      // $searchBar.toggleClass('active');
      $accountSubmenu.removeClass('active');
  });
  
  /* $(document).on('click', function(event) {
      if (!$searchBar.is(event.target) && $searchBar.has(event.target).length === 0 && 
          !$search.is(event.target) && $search.has(event.target).length === 0) {
          $searchBar.removeClass('active');
      }
  }); */

  if ($('body').hasClass('logged-in')) {
      let $account = $('.customIconHeader .account');
      let $accountIcon = $('.customIconHeader .account svg');
      let $accountSubmenu = $('.customIconHeader .account .accountSubmenu');
      
      $account.addClass('submenu');
      $accountIcon.on('click', function() {
          $accountSubmenu.toggleClass('active');
      });
  } else {
      let $account = $('.customIconHeader .account');
      $account.on('click', function() {
          window.location.href = "/my-account";
      });
  }
});

// Menu toggle body scroll add and remove

jQuery(document).on('click', '.custom-mega-menu .elementor-menu-toggle', function() {
  jQuery("body").css("overflow", "hidden");
  jQuery("body").addClass('mobile-menu-active');
});

jQuery(document).on('click', '.close-btn a', function(event) {
  event.preventDefault();
  jQuery("body").css("overflow", "scroll");
  jQuery("body").removeClass('mobile-menu-active');
});

jQuery(document).ready(function($) {

    $('.search-close').on('click', function(event) {
       event.preventDefault();
       $('.searchBar').removeClass('active');
       $("body").css("overflow", "scroll");
    });
    
    $('.customIcon.search').on('click', function() {
        $('.searchBar').toggleClass('active');
    });
    
    var logout_url = $('#logout-url').val();
		$('.custom-logout a').attr('href',logout_url);
});

/* var swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
}); */

$(document).ready(function () {
  $('.quote-posts.startwithWHY, .quote-posts.teambuilding, .quote-posts.leadership').hide();
});

$('.quote-filter').on('click', function() {
  $('.quote-filter').removeClass('active-hash');
  $(this).addClass('active-hash');
  $('.quote-posts').hide();
  $('.'+$(this).attr('hash')).show();

  if($(this).attr('hash') == 'all') {
    $('.quote-posts.all').show();
  }
});

$(document).ready(function () {
  // $('.elementor-widget-woocommerce-product-add-to-cart form.cart').attr('target', '_blank');
  // $('.elementor-widget-wc-add-to-cart form.cart').attr('target', '_blank');
  // $('.elementor-widget-wc-add-to-cart .add_to_cart_button.elementor-button').attr('target', '_blank');

  $(".top-banner").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".stamped-reviews").slick({
    autoplay: false,
    autoplaySpeed: 6000,
    prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          appendArrows: $('.slick-nav-buttons'),
          prevArrow: '<i class="fa fa-chevron-left"></i>',
          nextArrow: '<i class="fa fa-chevron-right"></i>',
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          appendArrows: $('.slick-nav-buttons'),
          prevArrow: '<i class="fa fa-chevron-left"></i>',
          nextArrow: '<i class="fa fa-chevron-right"></i>',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".optimism-reviews").slick({
    autoplay: false,
    autoplaySpeed: 6000,
    appendArrows: $('.slick-nav-buttons'),
    prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false // Hide arrows for screens ≤ 480px
        }
      }
    ]
  });
  
});

$(document).ready(function () {
  $(".woocommerce-MyAccount-navigation-link--thinkific_dashboard a").attr(
    "target",
    "_blank"
  );
  $(document).on("change", ".enroll_userinfo_copy", function () {
    var parent_id = $(this).parents(".group-main").attr("id");
    if (this.checked) {
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--firstname input"
      )
        .eq(0)
        .val($("#billing_first_name").val());
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--lastname input"
      )
        .eq(0)
        .val($("#billing_last_name").val());
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--email input"
      )
        .eq(0)
        .val($("#billing_email").val());
    } else {
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--firstname input"
      )
        .eq(0)
        .val("");
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--lastname input"
      )
        .eq(0)
        .val("");
      $(
        "#" +
          parent_id +
          " .enroll-inputs .bulk-sales-item .bulk-sales-input--email input"
      )
        .eq(0)
        .val("");
    }
  });
});

/* $(".edit-enrollment-button").on("click", function () {
  var order_id = $(this).attr("id");
  var edit_form = $("#enroll-edit-form-" + order_id).html();
  Swal.fire({
    title: "Order <b>" + order_id + "",
    // icon: "info",
    iconHtml: "",
    html: "" + edit_form + "",
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
  });
}); */

$(".edit-enrollment-button").on("click", function () {
  var button = $(this);
  button.html('<i class="fas fa-circle-notch fa-spin"></i>');
  var order_id = $(this).attr("id");
  jQuery.ajax({
    type: "post",
    dataType: "json",
    url: ajax_call.ajax_url,
    data: {
      action: "get_enrollment_edit_form",
      order_id: order_id,
    },
    success: function (response) {
      button.html("Add/Edit Participants");
      Swal.fire({
        title: "Update Enrollment Details",
        // icon: "info",
        iconHtml: "",
        // html: 'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',
        html: response.data,
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Update Info",
        cancelButtonText: "Cancel",
        width: "70em",
        customClass: {
          container: 'update-enrollment-popup'
        },
        preConfirm: () => {
          $(".submit").trigger("click");
          var validate = validate_fields();

          // var validate = true;
          if (validate == true) {
            var first_name = $("input[name$='first_name']")
              .map(function () {
                return $(this).val();
              })
              .get();

            var last_name = $("input[name$='last_name']")
              .map(function () {
                return $(this).val();
              })
              .get();

            var email = $("input[name$='email']")
              .map(function () {
                return $(this).val();
              })
              .get();


            var item_sku = $("input[name$='item_sku']").map(function () { return $(this).val(); }).get();
            var enrollment_id = $("input[name$='enrollment_id']").map(function () { return $(this).val(); }).get();
            var item_id = $("input[name$='item_id']").map(function () { return $(this).val(); }).get();
            var item_product_id = $("input[name$='item_product_id']").map(function () { return $(this).val(); }).get();
            var item_number = $("input[name$='item_number_id']").map(function () { return $(this).val(); }).get();

            
            var enrollments = [];
            $(email).each(function (i) {
              enrollments.push({
                // enrollment_id: $("." + (i + 1) + "_enrollment-id").val(),
                // item_id: $("." + (i + 1) + "_item-id").val(),
                // item_sku: $("." + (i + 1) + "_item-sku").val(),
                // item_product_id: $("." + (i + 1) + "_item-product-id").val(),
                // item_number: $("." + (i + 1) + "_item-number-id").val(),
                enrollment_id: enrollment_id[i],
                item_sku: item_sku[i],
                item_id: item_id[i],
                item_product_id: item_product_id[i],
                item_number: item_number[i],
                first_name: first_name[i],
                last_name: last_name[i],
                email: this,
              });
            });

            let timerInterval;
            jQuery.ajax({
              type: "post",
              dataType: "json",
              url: ajax_call.ajax_url,
              data: {
                action: "update_enrollment_by_id",
                // enrollment_id: enrollment_id,
                enrollments: enrollments,
                order_id: order_id,
                // item_sku: item_sku,
              },
              beforeSend: function () {
                Swal.fire({
                  allowEscapeKey: false,
                  allowEnterKey: false,
                  allowOutsideClick: false,
                  title: "Please Wait...!",
                  html: "",
                  customClass: {
                    container: 'wait-enrollment-popup'
                  },
                  // timer: 2000,
                  // timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    /* const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft();
                    }, 100); */
                  },
                  /* willClose: () => {
                    clearInterval(timerInterval);
                  }, */
                });
              },
              success: function (response) {
                if (response == 1) {
                  Swal.fire(
                    "Success!",
                    "Enrollment details updated!",
                    "success"
                  );
                  return true;
                } else {
                  Swal.fire("Error!", "Please try after sometime!", "error");
                  return false;
                }
              },
            });
            // return true;
          } else {
            return false;
          }
        },
      }).then(function (response) {
        
      });
    },
    error: function (error) {

    },
  });
});

function validate_fields(if_valid) {
  var validate = $("#enroll-edit").validate({
    debug: true,
    rules: {
      
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    invalidHandler: function (event, validator) {
      // 'this' refers to the form
      var errors = validator.numberOfInvalids();
    },
  });

  $("input[name$='first_name']").rules("add", {
    required: true,
  });

  $("input[name$='last_name']").rules("add", {
    required: true,
  });

  $("input[name$='email']").rules("add", {
    required: true,
    email: true,
    laxEmail: true,
  });

  jQuery.validator.addMethod(
    "laxEmail",
    function (value, element) {
      // allow any non-whitespace characters as the host part
      return (
        this.optional(element) ||
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        )
      );
    },
    "Please enter a valid email address."
  );

  return $("#enroll-edit").valid();
}




$(document).on('click', '#add-participant', function() {
	var sku = $(this).data('sku');
	var enrollment_id = $(this).data('enrollment_id');
	var item_id = $(this).data('item_id');
	var item_product_id = $(this).data('item_product_id');
	var i = $(this).data('i');

	var rows = $('.item-'+sku+' .form-section-inner').length;
	var total_rows = rows+1;

	newRowAdd =
		'<div class="form-section-inner" data-row="'+total_rows+'">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_sku" value="'+sku+'" class="'+total_rows+'_item-sku">' + 
    '<input type="hidden" name="'+item_product_id+'_'+total_rows+'_enrollment_id" value="0" class="'+total_rows+'_enrollment-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_id" value="'+item_id+'" class="'+total_rows+'_item-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_product_id" value="'+item_product_id+'" class="'+total_rows+'_item-product-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_number_id" value="'+total_rows+'" class="'+total_rows+'_item-number-id">' +
		'<div class="item-number">#'+total_rows+'</div>' +
		'<div class="input-fields">' +
			'<div class="field-input"><label><span>First Name</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="text" name="'+item_product_id+'_'+total_rows+'_first_name" required=""></label></div>' +
			'<div class="field-input"><label><span>Last Name</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="text" name="'+item_product_id+'_'+total_rows+'_last_name" required=""></label></div>' +
			'<div class="field-input"><label><span>Email</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="email" name="'+item_product_id+'_'+total_rows+'_email" required=""></label></div>' +
		'</div>' +
		'</div>';
	
	$('.item-'+sku+' .form-section-inner-2').append(newRowAdd);
});

$(document).on('click', '.add-bc-participant', function() {
	var parent_section_id = $(this).parents('.uh-product').attr('id');
	var sku = $(this).data('sku');
	var enrollment_id = $(this).data('enrollment_id');
	var item_id = $(this).data('item_id');
	var item_product_id = $(this).data('item_product_id');
	var i = parseInt($(this).attr('data-i'));

	var rows = $('#'+parent_section_id+' .form-section-inner').length;
  
	var total_rows = parseInt(i+1);
  // var total_rows = rows+i-1;
  var participant_count = rows+1;

  $(this).attr('data-i', total_rows);

  newRowAdd =
		'<div class="form-section-inner" data-row="'+total_rows+'">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_sku" value="'+sku+'" class="'+total_rows+'_item-sku">' + 
    '<input type="hidden" name="'+item_product_id+'_'+total_rows+'_enrollment_id" value="0" class="'+total_rows+'_enrollment-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_id" value="'+item_id+'" class="'+total_rows+'_item-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_product_id" value="'+item_product_id+'" class="'+total_rows+'_item-product-id">' +
		'<input type="hidden" name="'+item_product_id+'_'+total_rows+'_item_number_id" value="'+total_rows+'" class="'+total_rows+'_item-number-id">' +
		'<div class="item-number">#'+participant_count+'</div>' +
		'<div class="input-fields">' +
			'<div class="field-input"><label><span>First Name</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="text" name="'+item_product_id+'_'+total_rows+'_first_name" required=""></label></div>' +
			'<div class="field-input"><label><span>Last Name</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="text" name="'+item_product_id+'_'+total_rows+'_last_name" required=""></label></div>' +
			'<div class="field-input"><label><span>Email</span>&nbsp;<abbr class="required" title="required">*</abbr><br><input type="email" name="'+item_product_id+'_'+total_rows+'_email" required=""></label></div>' +
		'</div>' +
		'</div>';
	
	if(rows+1 == 20) {
    $('#'+parent_section_id+' .add-participant').remove();
  }

  $('#'+parent_section_id+' .form-section-inner-2').append(newRowAdd);
});


$(document).on('click', '.read-full-review', function() {
  var parent_id = $(this).parents('div.review-widget-inner').attr('id');
  var content = $('#'+parent_id).find('span.review-content').html();
  var title = $('#'+parent_id).find('div.review-title').text();
  
  Swal.fire({
    // title: title,
    html: '<div class="review-content-popup"><h3 class="review-title-popup">'+title+'</h3>'+content+'</div>',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: true,
    showConfirmButton: false,
    width: 600,
    customClass: {
      container: 'review-popup'
    },
  })
});


if( $('#productCarousel').length ) {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: "classic",
    },
  });
  
  const productCarousel = new Carousel(
    document.getElementById('productCarousel'),
    {
      transition: 'slide',
      preload: 3, // Smoother navigation when using lazy loaded images
  
      Dots: false,
      Thumbs: {
        type: 'classic',
        Carousel: {
          dragFree: false,
          slidesPerPage: 'auto',
          Navigation: true,
  
          axis: 'x',
        },
      },
    },
    { Thumbs }
  );
}

jQuery( document ).on( 'elementor/popup/show', ( event, id, instance ) => {
  if ( id === 304063 ) {
    Fancybox.bind('[data-fancybox="pop-gallery"]', {
      Thumbs: {
        type: "classic",
      },
    });
    
    const productCarousel_popup = new Carousel(
      document.getElementById('productCarousel_popup'),
      {
        transition: 'slide',
        preload: 3, // Smoother navigation when using lazy loaded images
    
        Dots: false,
        Thumbs: {
          type: 'classic',
          Carousel: {
            dragFree: false,
            slidesPerPage: 'auto',
            Navigation: true,
    
            axis: 'x',
          },
        },
      },
      { Thumbs }
    );
  }

  if ( id === 304194 ) {
    Fancybox.bind('[data-fancybox="pop-gallery"]', {
      Thumbs: {
        type: "classic",
      },
    });

    const productCarousel_popup_2 = new Carousel(
      document.getElementById('productCarousel_popup_2'),
      {
        transition: 'slide',
        preload: 3, // Smoother navigation when using lazy loaded images
    
        Dots: false,
        Thumbs: {
          type: 'classic',
          Carousel: {
            dragFree: false,
            slidesPerPage: 'auto',
            Navigation: true,
    
            axis: 'x',
          },
        },
      },
      { Thumbs }
    );
  }
} );

/* Fancybox.bind('[data-fancybox="gallery-a"]', {
  // Custom options for the first gallery
});   */  

/* Fancybox.bind('[data-fancybox="gallery-b"]', {
  // Custom options for the second gallery
  Carousel : {
    infinite: false
  },
  Thumbs: {
    type: "classic",
  },
}); */


/* $(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

}); */



$(document).on('change', '.product-qty', function() {
	var $qtyInputs = $(".qty-input");
	var $inputs = $qtyInputs.find(".product-qty");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	var $this = $(this);
	var $minusBtn = $this.siblings(".qty-count--minus");
	var $addBtn = $this.siblings(".qty-count--add");
	var qty = parseInt($this.val());

	

	if (isNaN(qty) || qty <= qtyMin) {
		$this.val(qtyMin);
		$minusBtn.attr("disabled", true);
	} else {
		$minusBtn.attr("disabled", false);
		
		if(qty >= qtyMax){
			$this.val(qtyMax);
			$addBtn.attr('disabled', true);
		} else {
			$this.val(qty);
			$addBtn.attr('disabled', false);
		}
	}
	update_url_single('quantity', qty);
});

$(document).on('click', '.qty-count', function() {
	var $qtyInputs = $(".qty-input");
	var $inputs = $qtyInputs.find(".product-qty");
	var qtyMin = parseInt($inputs.attr("min"));
	var qtyMax = parseInt($inputs.attr("max"));

	var operator = this.dataset.action;
	var $this = $(this);
	var $input = $this.siblings(".product-qty");
	var qty = parseInt($input.val());

	if (operator == "add") {
		qty += 1;
		if (qty >= qtyMin + 1) {
			$this.siblings(".qty-count--minus").attr("disabled", false);
		}

		if (qty >= qtyMax) {
			$this.attr("disabled", true);
		}
	} else {
		qty = qty <= qtyMin ? qtyMin : (qty -= 1);
		
		if (qty == qtyMin) {
			$this.attr("disabled", true);
		}

		if (qty < qtyMax) {
			$this.siblings(".qty-count--add").attr("disabled", false);
		}
	}

	$input.val(qty);
	
	// update_url_single('quantity', qty);
    update_url_single_with_selector('quantity', qty, '.book-club-buy-now a.elementor-button', true);
});

$(document).on('change', '.purchase-options input', function() {
	$('.purchase-options').removeClass('active-block')
	$(this).parents('.purchase-options').addClass('active-block');
	var products = $(this).data('product');
	var qty = $('.product-qty').val();
	update_url('add-to-cart', products);
});

$(document).on('change', '.aop-library-bundle input', function() {
  if(this.checked) {
		var products = $(this).data('product');
	} else {
		var products = $(this).data('other_product');
	}
	var qty = $('.product-qty').val();
	update_url_single('add-to-cart', products);
});

$(document).on('change', '#tbp-select-participants', function() {

	var price = parseInt($(this).val());
	var quantity = parseInt($('option:selected', this).attr('data-quantity'));
	var combo_price = parseInt(150);
	var savings = parseInt( (price*2) - (price+combo_price) );
	var total_amount = parseInt( price );
	if($('#upgrade-to-bundle').is(":checked")) {
		total_amount += combo_price
	}

	$('.tbp-total').text(total_amount);
	$('.tbp-upgrade-total').text(parseInt(price+combo_price));
	$('.tbp-save').text(savings);

	update_url('quantity', quantity);
});

$(document).on('change', '#upgrade-to-bundle', function() {
	var price = $('#tbp-select-participants').find(":selected").val();
	var combo_price = parseInt(150);
	// var savings = parseFloat( (price*2) - (price+combo_price) );
	var savings = parseInt( price-combo_price );
	var total_amount = parseInt( price );
	var bundle_product_id = '';
	var base_product_id = $('#tbp-select-participants').attr('data-product');
	var combo_product_ids = base_product_id;
	
	if(this.checked) {
		total_amount += combo_price
		bundle_product_id = $(this).attr('data-bundle-product');
		combo_product_ids = base_product_id+','+bundle_product_id;
	}

	update_url('add-to-cart', combo_product_ids);

	$('.tbp-total').text(total_amount);
	// $('.tbp-save').text(savings);
});

$(document).on('change', '.tbp-select-participants', function() {
	
	var parent_section_selector = $(this).parent('.select-bundle-parent').attr('id');
	var price = parseInt($(this).val());
	var quantity = parseInt($('option:selected', this).attr('data-quantity'));
	var combo_price = parseInt(150);
	var savings = parseInt( (price*2) - (price+combo_price) );
	var total_amount = parseInt( price );
	if($('#'+parent_section_selector+' .upgrade-to-bundle').is(":checked")) {
		total_amount += combo_price
	}

	$('#'+parent_section_selector+' .tbp-total').text(total_amount);
	$('#'+parent_section_selector+' .tbp-upgrade-total').text(parseInt(price+combo_price));
	$('#'+parent_section_selector+' .tbp-save').text(savings);

	update_bundle_url('quantity', quantity, parent_section_selector);
});

$(document).on('change', '.upgrade-to-bundle', function() {
	var parent_section_selector = $(this).parents('.select-bundle-parent').attr('id');
	var price = $('#'+parent_section_selector+' .tbp-select-participants').find(":selected").val();
	var combo_price = parseInt(150);
	// var savings = parseFloat( (price*2) - (price+combo_price) );
	var savings = parseInt( price-combo_price );
	var total_amount = parseInt( price );
	var bundle_product_id = '';
	var base_product_id = $('#'+parent_section_selector+' .tbp-select-participants').attr('data-product');
	var combo_product_ids = base_product_id;
	
	if(this.checked) {
		total_amount += combo_price
		bundle_product_id = $(this).attr('data-bundle-product');
		combo_product_ids = base_product_id+','+bundle_product_id;
	}

	update_bundle_url('add-to-cart', combo_product_ids, parent_section_selector);
	

	$('#'+parent_section_selector+' .tbp-total').text(total_amount);
	// $('.tbp-save').text(savings);
});

function update_bundle_url(param, value, parent_section_selector) {
	var currentUrl = $('#'+parent_section_selector+' .tbp-add-to-cart-btn a.elementor-button').attr('href');
	var url = new URL(currentUrl);
	url.searchParams.set(param, value);
    if (typeof value === 'undefined' || value == '') {
        url.searchParams.delete(param);
    }
	var newUrl = url.href;
	$('#'+parent_section_selector+' .tbp-add-to-cart-btn a.elementor-button').attr('href', newUrl);

  /* if(param == "quantity") {
    var currentUrlSticky = $('.book-club-buy-now-sticky a.elementor-button').attr('href');
    var urlSticky = new URL(currentUrlSticky);
    urlSticky.searchParams.set(param, value);
    var newUrlSticky = urlSticky.href;
    $('.book-club-buy-now-sticky a.elementor-button').attr('href', newUrlSticky);
  } */
}

function update_url(param, value) {
	var currentUrl = $('.tbp-add-to-cart-btn a.elementor-button').attr('href');
	var url = new URL(currentUrl);
	url.searchParams.set(param, value);
    if (typeof value === 'undefined' || value == '') {
        url.searchParams.delete(param);
    }
	var newUrl = url.href;
	$('.tbp-add-to-cart-btn a.elementor-button').attr('href', newUrl);

  /* if(param == "quantity") {
    var currentUrlSticky = $('.book-club-buy-now-sticky a.elementor-button').attr('href');
    var urlSticky = new URL(currentUrlSticky);
    urlSticky.searchParams.set(param, value);
    var newUrlSticky = urlSticky.href;
    $('.book-club-buy-now-sticky a.elementor-button').attr('href', newUrlSticky);
  } */
}


function update_url_single(param, value) {
	var currentUrl = $('.book-club-buy-now a.elementor-button').attr('href');
	var url = new URL(currentUrl);
	url.searchParams.set(param, value);
    if (typeof value === 'undefined' || value == '') {
        url.searchParams.delete(param);
    }
	var newUrl = url.href;
	$('.book-club-buy-now a.elementor-button').attr('href', newUrl);

  /* if(param == "quantity") {
    var currentUrlSticky = $('.book-club-buy-now-sticky a.elementor-button').attr('href');
    var urlSticky = new URL(currentUrlSticky);
    urlSticky.searchParams.set(param, value);
    var newUrlSticky = urlSticky.href;
    $('.book-club-buy-now-sticky a.elementor-button').attr('href', newUrlSticky);
  } */
}

function update_url_single_with_selector(param, value, selector, update_upgrade_btn) {
    // Use the provided selector to get the current URL
    var currentUrl = $(selector).attr('href');
    var url = new URL(currentUrl);

    if (typeof value === 'undefined' || value === '') {
        url.searchParams.delete(param);
    } else {
        url.searchParams.set(param, value);
    }

    var newUrl = url.href;

    // Update the href using the same selector
    $(selector).attr('href', newUrl);

    if (update_upgrade_btn) {
        var currentUrl2 = $('.library-upgrade-btn a.elementor-button').attr('href');
        if (!currentUrl2) return;

        var url2 = new URL(currentUrl2);

        if (typeof value === 'undefined' || value === '') {
            url2.searchParams.delete(param);
        } else {
            url2.searchParams.set(param, value);
        }

        var newUrl2 = url2.href;
        $('.library-upgrade-btn a.elementor-button').attr('href', newUrl2);
    }
}


/* var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
}); */

var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
        
        /* setTimeout(() => {
          $('body, html').animate({
            scrollTop: $(this).offset().top
           }, 500)
        }, 400) */
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});

$('.course-accordion-body__contents li').on('click', function(event) {
  event.preventDefault();
});

jQuery(document).ready(function($) {

  $( '.fue-unsubscribe-form :input[type=checkbox]' ).on( 'change', function() {
    var num_checked = $(".fue-unsubscribe-form :input[type=checkbox]:checked").length;

    if ( num_checked > 0 ) {
      $( '#fue_submit' ).prop( 'disabled', false );
    } else {
      $( '#fue_submit' ).prop( 'disabled', true );
    }
  } ).trigger( 'change' );

} );

  //Make event quantity by default 1 
  jQuery(document).ready(function($){
    jQuery(window).on( "load", function(){
      jQuery( '.tribe-tickets__tickets-item-quantity-number input.tribe-tickets__tickets-item-quantity-number-input').attr('min','1');
    });
  });


$(document).ready(function($) {
    jQuery('.checkout-continue-btn a').click(function () {
        $('.step-1').hide();
        $('.step-2').show();
        $('li[data-step="step-2"]').addClass('active');

        if( $('.step-2').is(":visible") && $('#payment_method_ppcp-gateway').is(":checked") ) {
          $('.ppc-button-wrapper').show();
        }
    });

    $('.simon-progressBar li').on('click', function() {
        var step = $(this).data('step');
        $(this).addClass('active');
        $(this).nextAll().removeClass('active');

        $('.co-step').hide();
        $('.'+step).show();

        if( $('.step-1').is(":visible") && $('#payment_method_ppcp-gateway').is(":checked") ) {
            $('.ppc-button-wrapper').hide();
        } else if( $('.step-2').is(":visible") && $('#payment_method_ppcp-gateway').is(":checked") ) {
            $('.ppc-button-wrapper').show();
        }
    });
});

$(document).on("updated_checkout", function (event) {
    if( $('[data-step=step-2]').hasClass('active') ) {
        $('.step-2').show();
    }
});

// Team Building Program Bundle on click event to open modal
jQuery(document).on('click', '.program-bundle', function() {
    var popup_id = $(this).data('popup');
    elementorProFrontend.modules.popup.showPopup( {id:popup_id}, event);
    // $('#elementor-popup-modal-'+popup_id+' #upgrade-to-bundle').trigger('click');
});


jQuery(document).on('click', '#tbp-1-single, #tbp-2-single', function() {
  var popup_id = $(this).data('popup');
  elementorProFrontend.modules.popup.showPopup( {id:popup_id}, event);
  $('#elementor-popup-modal-'+popup_id+' .single-course input').prop('checked', true).trigger('change');
  // var products = $(this).data('product');
	// update_url('add-to-cart', products);
});

$('#billing_email_verify').bind("drag drop cut copy paste",function(e) {
  e.preventDefault();
});

$( document.body ).on( 'update_checkout', function(){
  $('.ywgc-gift-card-applied th, .ywgc-gift-card-applied td').attr('colspan', 2);
});

$( document.body ).on( 'updated_checkout', function(){
  $('.ywgc-gift-card-applied th, .ywgc-gift-card-applied td').attr('colspan', 2);
});

$(document).ready(function () {
  $("a[href='#library-reviews']").click(function (event) {

    // event.preventDefault();
    
    const $stickySection = $(".elementor-sticky");
    const $targetSection = $('[data-section="library-reviews"]');
    
    if ($targetSection.length) {
      let scrollOffset = $targetSection.offset().top;

      // Check if sticky section exists and adjust its height
      if ($stickySection.length) {
        const stickyHeight = $stickySection.outerHeight();
        scrollOffset -= stickyHeight; // Adjust for sticky section height
      }

      // Smooth scrolling
      $("html, body").animate({ scrollTop: scrollOffset }, "fast");
    } else {
      // console.error('Section with data-section="library-reviews" not found.');
    }
  });
});

$(document).ready(function() {
  // When an anchor link is clicked
  $('.scroll-link').on('click', function(e) {
    e.preventDefault(); // Prevent the default action

    /* // Get the section to scroll to from the 'data-section' attribute
    var sectionId = $(this).data('section');

    // Scroll to the section
    $('html, body').animate({
      scrollTop: $('#' + sectionId).offset().top
    }, "fast"); // You can adjust the duration (1000ms) */

    var $stickySection = $(".elementor-sticky");
    var $targetSection_id = $(this).data('section');
    var $targetSection = $('[data-section-name="'+$targetSection_id+'"]');

    if ($targetSection.length) {
      let scrollOffset = $targetSection.offset().top;

      // Check if sticky section exists and adjust its height
      if ($stickySection.length) {
        const stickyHeight = $stickySection.outerHeight();
        scrollOffset -= stickyHeight; // Adjust for sticky section height
      }
  
      // Smooth scrolling
      $("html, body").animate({ scrollTop: scrollOffset }, "fast");
    }
  });
});

jQuery( function( $ ) {
	$( document ).on('click', '.custom-add-to-cart a', function( event ) {

        var parent_element = $(this).parents('.add-to-cart-section');
        
        var button = $(this);
        // https://stgsimonsinek.wpengine.com/checkout/?add-to-cart=346445&test=121212&quantity=1
        var full_url = $(this).attr('href');
        var params = new URLSearchParams(full_url.split('?')[1]);
        var product_id = params.get('add-to-cart');
        var quantity = params.get('quantity');
        // const urlParams = new URLSearchParams(full_url);
        // const quantity = getAllUrlParams(full_url).quantity;
        // const product_id = getAllUrlParams(full_url).product;
		event.preventDefault();
	
		const data = {
			product_id: product_id,
			quantity: quantity,
		}

		$.ajax( {
			type: 'POST',
			url: wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart' ),
			data: data,
			dataType: 'json',
			beforeSend: function( xhr ) {
				// you can set the button loading state here
				$('.redirect-copy').hide();
				button.find('.elementor-button-content-wrapper').hide();
				button.find('.elementor-button-content-wrapper').after('<span class="atc-loader"><i class="fas fa-circle-notch fa-spin"></i></span>');
			},
			complete: function( res ) {
				// you can remove the button loading state here
				// button.find('.elementor-button-content-wrapper').append('<span><i class="fas fa-circle-notch fa-spin"></i></span>');
				button.find('.elementor-button-content-wrapper').show();
				$('.atc-loader').remove();
				
				/* $('.add-to-cart-section')
					.append('<p class="redirect-copy">Redirecting to checkout....</p>').fadeIn(500, function() {
					setTimeout(() => {
						$('.redirect-copy').fadeOut(500);
					}, 3000);
				}); */

				// if (!$('.add-to-cart-section').hasClass('sticky')) {
					$(parent_element).not('.sticky.add-to-cart-section')
						.append('<p class="redirect-copy" style="display: none;">Redirecting to checkout....</p>') // Append hidden element
						.find('p:last') // Target the newly added <p>
						.fadeIn(500, function() { // Fade-in effect over 500ms
							setTimeout(() => {
								$(this).fadeOut(500, function() {
									$(this).remove(); // Remove the element after fade-out (optional)
								});
							}, 2000); // Wait for 2 seconds before starting fade-out
						});
				// }

				/* $('.cart-msg p')
					.hide()
					.text('Redirecting to checkout....')
					.fadeIn(500, function() {
					setTimeout(() => {
						$(this).fadeOut(500);
					}, 3000);
				}); */

				button.blur();
				window.location.href = "/checkout";
			},
			success: function( res ) {
        $( document.body ).trigger( 'added_to_cart', [ res.fragments, res.cart_hash ] );
			},
		});

	} );
	
} );

(function ($) {

    $(document).on('click', '.single_add_to_cart_button', function (e) {
        e.preventDefault();

        var parent_element = $(this).parents('.add-to-cart-section');

        var $thisbutton = $(this),
            $form = $thisbutton.closest('form.cart'),
            id = $thisbutton.val(),
            product_qty = $form.find('input[name=quantity]').val() || 1,
            product_id = $form.find('input[name=product_id]').val() || id,
            variation_id = $form.find('input[name=variation_id]').val() || 0;

        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: product_qty,
            variation_id: variation_id,
        };

        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);

        $.ajax({
            type: 'post',
            url: wc_add_to_cart_params.ajax_url,
            data: data,
            beforeSend: function (response) {
                $('.redirect-copy').remove();
                // $thisbutton.hide();
                $thisbutton.html('<span class="atc-loader"><i class="fas fa-circle-notch fa-spin"></i></span>');
            },
            complete: function (response) {
                // $thisbutton.addClass('added').removeClass('loading');
				// $thisbutton.append('<span><i class="fas fa-circle-notch fa-spin"></i></span>');
				$thisbutton.html('Add to cart');
				$('.atc-loader').remove();

                $(parent_element)
                    .append('<p class="redirect-copy" style="display: none;">Redirecting to checkout....</p>') // Append hidden element
                    .find('p:last') // Target the newly added <p>
                    .fadeIn(500, function() { // Fade-in effect over 500ms
                        setTimeout(() => {
                            $(this).fadeOut(500, function() {
                                $(this).remove(); // Remove the element after fade-out (optional)
                            });
                        }, 2000); // Wait for 2 seconds before starting fade-out
                    });

                window.location.href = "/checkout";
            },
            success: function (response) {

                if (response.error && response.product_url) {
                    window.location = response.product_url;
                    return;
                } else {
                    $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                }
            },
        });

        return false;
    });
})(jQuery);


// Upsells popup start

jQuery( document ).on('click', '.upsells-popup a', function( event ) {
	event.preventDefault();
	elementorProFrontend.modules.popup.showPopup( {id:376916} );
	// update_upsells_popup_links(quantity);
} );

jQuery( document ).on( 'elementor/popup/show', ( event, id, instance ) => {
	var btn_url = $('.upsells-popup a').attr('href');
	if( id == 376916 ) {

        const upgrade_sources = {
            "329246": "aop-upgrade",
            "1426": "fyw-upgrade",
            "323742": "hcaw-upgrade",
            "346445": 'nsg-upgrade',
            "360359": 'btlpat-upgrade',
        };

		$('.continue-with-this-btn a').attr('href', btn_url);
	
		var upgrade_btn_url = $('.upsells-popup-upgrade-btn a').attr('href');
	
		var urlParams = new URLSearchParams(new URL(btn_url).search);
        var quantity = urlParams.get('quantity');
        var product_id = urlParams.get('add-to-cart');
        var upgrade_source = upgrade_sources[product_id] || '';

        urlParams.set('source', upgrade_source);

        // Update upgrade button with quantity (and same source)
		var upgrade_btn_url = $('.upsells-popup-upgrade-btn a').attr('href');
		var new_upgrade_url = new URL(upgrade_btn_url);
		if (quantity) {
			new_upgrade_url.searchParams.set('quantity', quantity);
		}
		new_upgrade_url.searchParams.set('source', upgrade_source);
		$('.upsells-popup-upgrade-btn a').attr('href', new_upgrade_url.toString());
	}
});

/* function update_upsells_popup_links(quantity) {
	// console.log('full_url', full_url);
	// console.log('here');
	jQuery( document ).on( 'elementor/popup/show', ( event, id, instance ) => {
		console.log('id', id);
		var btn_url = $('.upsells-popup a').attr('href');
		if( id == 376916 ) {
			// setTimeout(function() {
				$('.continue-with-this-btn a').attr('href', btn_url);
				console.log('full_url', btn_url);

				var upgrade_btn = $('.upsells-popup-upgrade-btn a').attr('href');
				console.log('upgrade_btn', upgrade_btn);
			// }, 1000);
		}
	});
} */

// Upsells popup end


$(document).on('click', '.library-read-full-review', function() {
  var parent_id = $(this).closest('div.optimism-reviews-widget-inner').attr('id');
  var content = $('#' + parent_id).find('span.optimism-review-content').html();
  var title = $('#' + parent_id).find('div.review-widget-header .optimism-review-title').text();

  Swal.fire({
      html: '<div class="review-content-popup">' +
              '<h3 class="review-title-popup">' + title + '</h3>' +
              '<div id="rating-stars-container"></div>' + content +
            '</div>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: true,
      showConfirmButton: false,
      width: 600,
      customClass: {
          container: 'review-popup library-review-popup'
      },
      didOpen: function() {
          // Append stars **after** the modal is opened
          for (let i = 0; i < 5; i++) {
              $("#rating-stars-container").append('<i class="active fa fa-star"></i> ');
          }
      }
  });
});

jQuery(document).ready(function($) {
  var home_blog_posts = new Swiper(".home-blog-posts", {
      slidesPerView: 2.8,
      spaceBetween: 20,
      // initialSlide: 2,
      // loop: true,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: true,
      // },
      pagination: {
          enabled: true,
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          enabled: false,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          1024: {
              slidesPerView: 2.15,
              spaceBetween: 20
          },
          768: {
            slidesPerView: 2.15,
            spaceBetween: 20
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          0: {
              spaceBetween: 20,
              slidesPerView: 1.15
          }
      }
  });
});

jQuery(document).ready(function($) {

  	$('.ecs-post-loop .popup-open-btn').on('click', function() {
  	    var video_url = $(this).data('video');
    	if(video_url) {
        	Fancybox.show([
    			{
    				src: video_url,
    				// width: 640,
    				// height: 360,
    			},
        	]);
    	}
    });

    if (jQuery('body').hasClass('postid-2642')) {  // Change 123 to your page ID
        function toggleStickyClass() {
            var $tol_banner = jQuery('.tol-banner-section').height();
            var $window = jQuery(window);
            var $sticky = jQuery('.sticky');
            var $footer = jQuery('footer');

            var windowHeight = $window.height();
            var scrollTop = $window.scrollTop();
            var footerOffsetTop = $footer.offset().top;

            var footerInView = (scrollTop + windowHeight) > footerOffsetTop;

            if (!footerInView && scrollTop > $tol_banner) {
                $sticky.addClass('visible');
            } else {
                $sticky.removeClass('visible');
            }
        }

        jQuery(window).on('scroll resize', toggleStickyClass);
        toggleStickyClass();
    }

  var sw2 = new Swiper(".our-digital-products-2", {
      slidesPerView: 2.8,
      spaceBetween: 30,
      slidesPerGroup: 1,
      // initialSlide: 2,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: true,
      },
      pagination: {
          enabled: true,
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
      },
      navigation: {
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          0: {
              enabled: false,
              spaceBetween: 0,
              slidesPerView: 1,
              slidesPerGroup: 1,
              pagination: { 
                  enabled: false
              },
              navigation: { 
                enabled: false
              }
          },
          768: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
              pagination: {
                  enabled: true
              },
              navigation: { 
                enabled: false
              }
          },
          1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 1,
              pagination: {
                  enabled: true
              },
              navigation: { 
                enabled: false
              }
          },
          1300: {
              slidesPerView: 2.8,
              spaceBetween: 30,
              slidesPerGroup: 1,
              // pagination: {
              //     enabled: true,
              //     el: ".swiper-pagination",
              //     clickable: true,
              // },
          },
          // 1512: {
          //     slidesPerView: 3,
          //     spaceBetween: 30,
          // },
      }
  });
});


/* $('.library-plan-block').on('click', function() {
    let parent_id = $(this).parents('.library-plan-block-parent').attr('id');
    console.log('parent_id', parent_id);

    
	$('#'+  parent_id +' .library-plan-block').removeClass('active-lib-block')
	$(this).addClass('active-lib-block');
    $(this).find('input[type="radio"]').prop('checked', true);
    
	var products = $(this).find('input[type="radio"]').data('product');
    console.log('products', products);

    if(parent_id == 'library-plan-block-1') {
        console.log(1212);
        $('#library-plan-block-2 .library-plan-block input[data-product="'+products+'"]').parents('.library-plan-block').trigger('click');
    }
    
    if(parent_id == 'library-plan-block-2') {
        $('#library-plan-block-1 .library-plan-block input[data-product="'+products+'"]').parents('.library-plan-block').trigger('click');
    }
	// var qty = $('.product-qty').val();
	// update_url('add-to-cart', products);
    update_url_single_with_selector('add-to-cart', products, '.library-add-to-cart a.elementor-button', false);
}); */


function activateLibraryBlock($block, triggerPartners = true) {
    let parent_id = $block.parents('.library-plan-block-parent').attr('id');

    // Remove active from siblings
    $('#' + parent_id + ' .library-plan-block').removeClass('active-lib-block');
    $block.addClass('active-lib-block');
    $block.find('input[type="radio"]').prop('checked', true);

    let products = $block.find('input[type="radio"]').data('product');

    // Sync with all partner blocks if needed
    if (triggerPartners) {
        $('.library-plan-block-parent').each(function () {
            let partner_id = $(this).attr('id');

            // Skip the block we just activated
            if (partner_id === parent_id) return;

            let $partner = $('#' + partner_id + ' .library-plan-block input[data-product="' + products + '"]').parents('.library-plan-block');
            if ($partner.length) {
                activateLibraryBlock($partner, false); // prevent recursion
            }
        });
    }

    update_url_single_with_selector('add-to-cart', products, '.library-add-to-cart a.elementor-button', false);
}

$('.library-plan-block').on('click', function () {
    activateLibraryBlock($(this));
});