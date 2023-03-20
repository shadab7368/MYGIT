$( document ).ready(function(){
    $( '#newsletter-form' ).on( 'submit', function( e ){
        e.preventDefault();
        //alert( "Form is submitting" );
        $( '#submit_newsletter' ).attr( "disabled", "disabled" );
        $.ajax({
            url: 'newsletter-form.php',
            type: 'POST',
            data: $( '#newsletter-form' ).serialize(),
            success: function( returned_data ){
                //console.log( returned_data );
                $( '#submit_newsletter' ).removeAttr( "disabled" );
                alert( returned_data );
                $( '#reset_newsletter-form' ).trigger( 'click' );
            }
        });
    });
});