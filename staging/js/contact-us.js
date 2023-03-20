$( document ).ready(function(){
    
    
    var $container = $('#container');

            $container.isotope({})

            $('#filter-select').change(function() {
                $container.isotope({
                    filter: this.value
                });
            });
            
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
        
    $( '#contact_us' ).on( 'submit', function( e ){
        e.preventDefault();
        
        var name   = $( '#name' ).val();
        var email  = $( '#email' ).val();
        var mobile = $( '#mob' ).val();
        var subject = $( '#subject' ).val();
        
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
        
        $( '#btnSubmitContact' ).attr( "disabled", "disabled" );
        $.ajax({
            url: 'contact-form.php',
            type: 'POST',
            data: $( '#contact_us' ).serialize(),
            success: function( returned_data ){
                alert( returned_data );
                $( '#btnSubmitContact' ).removeAttr( "disabled" );
                $( '#reset_form_enquiry' ).trigger( 'click' );
            }
        });
    });
    
});