$( document ).ready(function(){
    //console.log( "umrah-packages.js ready");
    //start();
    
   

    
      $(".validateName").keypress(function (e) {
            if (window.event)
                code = e.keyCode;
            else
                code = e.which;
            if (code == 32 || (code >= 97 && code <= 122) || (code >= 65 && code <= 90))
                return true;
            else
                return false;
        });

 $(document).on("input", ".validateContact", function () {
            this.value = this.value.replace(/\D/g, '');
        });
    
    $( '.show-awwal-package' ).on( 'click', function( e ){
        $( '.package-information-block' ).addClass( "hidden" );
        $( '.awwal-umrah-package' ).removeClass( "hidden" );
    });
    
    $( '.show-aala-package' ).on( 'click', function( e ){
        $( '.package-information-block' ).addClass( "hidden" );
        $( '.aala-umrah-package' ).removeClass( "hidden" );
    });
    
    $( '.show-aala-plus-package' ).on( 'click', function( e ){
        $( '.package-information-block' ).addClass( "hidden" );
        $( '.aala-plus-umrah-package' ).removeClass( "hidden" );
    });
    
    $( '.show-azeem-package' ).on( 'click', function( e ){
        $( '.package-information-block' ).addClass( "hidden" );
        $( '.azeem-umrah-package' ).removeClass( "hidden" );
    });
    
    $( '.package-info-tab-item.pricing' ).on( 'click', function( e ){
        var package_block = $( this ).parents( '.package-information-block' ).attr( 'data-value' );
        $( '.' + package_block ).find( '.package-info-tab-description' ).addClass( "hidden" );
        $( '.' + package_block ).find( '.package-info-tab-description.pricing' ).removeClass( "hidden" );
        
        $( this ).siblings().removeClass( "active" );
        $( this ).addClass( "active" );
    });
    
    $( '.package-info-tab-item.hotels-accomodation' ).on( 'click', function( e ){
        var package_block = $( this ).parents( '.package-information-block' ).attr( 'data-value' );
        $( '.' + package_block ).find( '.package-info-tab-description' ).addClass( "hidden" );
        $( '.' + package_block ).find( '.package-info-tab-description.hotels-accomodation' ).removeClass( "hidden" );
        
        $( this ).siblings().removeClass( "active" );
        $( this ).addClass( "active" );
    });
    
    $( '.package-info-tab-item.inclusions' ).on( 'click', function( e ){
        var package_block = $( this ).parents( '.package-information-block' ).attr( 'data-value' );
        $( '.' + package_block ).find( '.package-info-tab-description' ).addClass( "hidden" );
        $( '.' + package_block ).find( '.package-info-tab-description.inclusions' ).removeClass( "hidden" );
        
        $( this ).siblings().removeClass( "active" );
        $( this ).addClass( "active" );
    });
    
    $( '.package-info-tab-item.exclusions' ).on( 'click', function( e ){
        var package_block = $( this ).parents( '.package-information-block' ).attr( 'data-value' );
        $( '.' + package_block ).find( '.package-info-tab-description' ).addClass( "hidden" );
        $( '.' + package_block ).find( '.package-info-tab-description.exclusions' ).removeClass( "hidden" );
        
        $( this ).siblings().removeClass( "active" );
        $( this ).addClass( "active" );
    });
    
    $( '.common-info-tabs div' ).on( 'click', function( e ){
        $( '.common-info-tabs div' ).removeClass( "active" );
        $( this ).addClass( 'active' );
        
        var data_value = $( this ).attr( 'data-value' );
        console.log( data_value );
        $( '.information' ).addClass( 'hidden' );
        
        /*$.each( $( '.information' ), function( i ){
            $( this ).addClass( "hidden" );
        });

         * 
         */        
        $( '.information.' + data_value ).removeClass( "hidden" );
        $( '.information.' + data_value ).addClass( "active" );
    });
    
    $( '.accomodations' ).slick();
    
    $( '.hotel-slideshow-theatre' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.hotel-slideshow-nav'
    });
    $('.hotel-slideshow-nav').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.hotel-slideshow-theatre',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    
    $( '.p-info' ).tooltip();
    
    $( '.hotel-gallery-link' ).on( 'click', function( e ){
        //e.preventDefault();
        var slideNo = parseInt( $( this ).attr( "data-value-slide" ) ) - 1;
        console.log( "Slide NO: " + slideNo);
        $( '.accomodations' ).slick('slickGoTo', slideNo );
    });
    
      
});