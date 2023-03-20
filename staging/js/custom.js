/**
File created by: Silent Coders

This file cotains global custom JS for the website AtlasUmrah.com

*/

$( document ).ready(function(){
    console.log( "Silent Coders ready" );
    
    $( window ).trigger( 'resize' );
    
    /* Main menu hover code dynamic overline */
    /*
    $( '#flexmenu li.main-menu-item' ).on( 'mouseenter', function( e ){
        console.log( "menu hovered" );
        var $width =  $( this ).width();
        console.log( "Width: " + $width );
        $( '#flexmenu li.main-menu-item:hover:before' ).css({
            width: "100px"
        });
    });
    
    $( '#flexmenu li.main-menu-item' ).on( 'mouseleave', function( e ){
        // console.log( "menu left" );
    });
    */
   
    $( '.sohail-carousel' ).on( 'init', function(event, slick){
        console.log( "Slick Initialized" );
        
        $( window ).trigger( 'resize' );
    });
    
    $( '.tours-list' ).slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4,dots:!0}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:601,settings:{slidesToShow:2,slidesToScroll:2,dots:!0,speed:600}},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,speed:600}}]
    });
   
   $( '.sohail-carousel' ).slick({
       adaptiveHeight: true,
       dots: false,
       speed: 300,
       infinite: true,
       autoplay: true,
       autoplaySpeed: 2000,
       
   });
   
    $( '.package-carousel' ).slick({
        slidesToShow: 3,
        responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,dots:!0}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:601,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,speed:600}},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,speed:600}}],
        adaptiveHeight: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });
    
    
    
    $( '.partners' ).slick({
        slidesToShow: 4,
        responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:769,settings:{slidesToShow:3,slidesToScroll:3,dots:!0}},{breakpoint:601,settings:{slidesToShow:2,slidesToScroll:2,dots:!0,speed:600}},{breakpoint:481,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,speed:600}}],
        adaptiveHeight: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    });
    
    
    $( '.testimonials' ).slick({
        slidesToShow: 1,
        adaptiveHeight: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });
   
    $('.hotel-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: false,
        asNavFor: '.hotel-slider-nav',
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        focusOnSelect: true
        
    });
    $('.hotel-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.hotel-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        adaptiveHeight: false,
    });
    
    $( '#form_enquiry' ).on( 'submit', function( e ){
        e.preventDefault();
        
        var name   = $( '#name' ).val();
        var email  = $( '#email' ).val();
        var mobile = $( '#mobile' ).val();
        
        if( name.trim() == "" ){
            alert( "Please enter your name !" );
            return;
        }
        if( email.trim() == "" ){
            alert( "Please enter your email !" );
            return;
        }
        if( mobile.trim() == "" ){
            alert( "Please enter your mobile !" );
            return;
        }
        
        $( '#btn_enquire' ).attr( "disabled", "disabled" );
        $.ajax({
            url: 'enquire-now.php',
            type: 'POST',
            data: $( '#form_enquiry' ).serialize(),
            success: function( returned_data ){
                alert( returned_data );
                $( '#btn_enquire' ).removeAttr( "disabled" );
                $( '#reset_form_enquiry' ).trigger( 'click' );
            }
        });
    });
    
    $( '.slick-arrow' ).text("");
    $( '.slick-dots' ).find( 'button' ).text( "" );
    
    
});

$( window ).resize(function(){
    var bodyWidth  = $( this ).width();
    var bodyHeight = $( this ).height();
    
    console.log( "Width: " + bodyWidth );
    console.log( "Height: " + bodyHeight );
    
    $( '.slick-slide > img' ).width( bodyWidth );
    
    
 
   
    
});