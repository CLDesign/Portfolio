$(document).ready(function(){
  
    $('#fullpage').fullpage({
				sectionsColor: ['none', 'none', 'none', 'none'],//#221728
				anchors: ['firstPage', 'Work', 'Story', 'Contact'],
				menu: '#menu',
				scrollingSpeed: 1000,
                scrollOverflow: true,
                
        
                afterRender: function(){
                    var pluginContainer = $(this);
                   //alert("The resulting DOM structure is ready");
                },
                 
        
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);

                    
                    if(index == 1 && direction =='down'){  //going to page 2
                        $("header").fadeIn( "slow" );
                        
                        // alert("Going to section 1!");
                        $(".navButtons").css("top",20);
                        $("#headerLogo, #headerTitle").css("opacity","1");
                        
                        
                    }       
                     
                     if(index == 2 && direction =='up'){  //going yp page 1
                       //return false;
                        // this will prevent it going back
                    }

                  
                },
        
        
        
             afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                    //using index
                if(index == 2){
                   //$("#header li:first-child").delay( 800 ).css("color","red");
                     $("#header li:nth-child(1)").addClass("menuSelected").siblings().removeClass("menuSelected");
                }
                 if(index == 3){
                   //$("#header li:first-child").delay( 800 ).css("color","red");
                     $("#header li:nth-child(2)").addClass("menuSelected").siblings().removeClass("menuSelected");
                }
                 if(index == 4){
                   //$("#header li:first-child").delay( 800 ).css("color","red");
                     $("#header li:nth-child(3)").addClass("menuSelected").siblings().removeClass("menuSelected");
                }
                 }            
                            
                    });
    
    $('.projectThumb').click(function() {
  //alert( "Handler for .click() called." );
        //$(this).css({"width":"100%",
                   //"height":"100px"});
});
    
    
    
    $("#header li:first-child").click(function(){
        //alert( "Handler for .click() called." );
        $.fn.fullpage.moveTo('Work');
        $(this).addClass("menuSelected"); 
        $(this).siblings().removeClass("menuSelected");
    });
    
      $("#header li:nth-child(2)").click(function(){
        //alert( "Handler for .click() called." );
        $.fn.fullpage.moveTo('Story');
        $(this).addClass("menuSelected");
          $(this).siblings().removeClass("menuSelected");
    });
    
    $("#header li:nth-child(3)").click(function(){
        //alert( "Handler for .click() called." );
        $.fn.fullpage.moveTo('Contact');
        $(this).addClass("menuSelected");
        $(this).siblings().removeClass("menuSelected");
    });
    
    
    var titleHeight = $( "#introTitle" ).height(); 

    
    
    var titileTop = $( "#introTitle" ).offset(); 
    var navInitTop = titileTop.top+titleHeight+10;
    
    
    
    console.log("TitleTop" + titileTop.top);
    
    console.log(navInitTop);
    
    $(".navButtons").css("top",navInitTop);
    
    
        
 
    
    
})