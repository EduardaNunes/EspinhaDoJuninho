 
    var count = 0;
    
    $(document).ready(function(){
        
        $(".espinha").click(function(){
        
                $(this).hide();
                count++;
            
        if (count == 5){
            
            $("h1").css("color", "green").text("Obrigado por ajudar! Agora Juninho está contente :D");
            $("#boca").css("border-radius", "0 0 50% 50%").slideUp(2000).slideDown(2000);
                             
        }
    
        });
    });    
