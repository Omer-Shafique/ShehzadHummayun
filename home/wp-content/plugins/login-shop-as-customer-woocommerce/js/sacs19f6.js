/**
 * Main custom image function start.

 * @package WOOCP
 */

var modal = document.getElementById( "myModal" );
jQuery( document ).ready(
	function ($) {

		var currentUrl = window.location.href;

		// Remove the query parameter and its value
		var paramToRemove = 'login_as_customer_id';
		var updatedUrl = currentUrl.replace( new RegExp( '[?&]' + paramToRemove + '=[^&#]*(#.*)?$' ), '' );

		// Update the current URL without the specified parameter
		window.history.replaceState( {}, document.title, updatedUrl );


		

		// 		$.ajax(
		// 			{
		// 				type: 'POST',
		// 				url: products_php_vars.ajax_url,
		// 				data: {
		// 					action: 'ka_sac_show_customer_bar',
		// 				//	nonce:products_php_vars.nonce
		// 				},
		// 				success: function (response) {
                          
		// 				},
		// 				error: function (error) {
		// 					// Handle the error if needed
		// 				}
		// 			}
		// 		);

	

		
		jQuery( '.switch_user_button' ).on(
			'click',
			function (e) {
				e.preventDefault();

				// Get the modal

				modal.style.display = "block";

			}
		);

		var modal = document.getElementById( "myModal" );

		jQuery( '.close' ).on(
			'click',
			function (e) {
				e.preventDefault();

				// Get the modal

				modal.style.display = "none";

			}
		);

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

		var ajaxurl = products_php_vars.admin_url;
		var nonce   = products_php_vars.nonce;
		jQuery( '.search_customers' ).select2(
			{
				ajax: {
					url: ajaxurl, // AJAX URL is predefined in WordPress admin
					dataType: 'json',
					type: 'POST',
					delay: 250, // delay in ms while typing when to perform a AJAX search.
					data: function (params) {
						return {
							q: params.term, // search query
							action: 'add_customer_search', // AJAX action for admin-ajax.php
							nonce: nonce // AJAX nonce for admin-ajax.php
						};
					},
					processResults: function ( data ) {
						var options = [];
						if (data ) {
							// data is the array of arrays, and each of them contains ID and the Label of the option
							$.each(
								data,
								function ( index, text ) {
									// do not forget that "index" is just auto incremented value
									options.push( { id: text[0], text: text[1]  } );
								}
							);
						}
						return {
							results: options
						};
					},
					cache: true
				},
				multiple: false,
				placeholder: 'Choose Users',
				minimumInputLength: 3 // the minimum of symbols to input before perform a search
				}
		);
	}
);
