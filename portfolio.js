$(document).ready(function(){
    
    $(".projectThumb").addClass("animationInit");
    $("#timeLine").addClass("transparent");
    
    
    //part to change slimscroll settings
    var oldSlimScroll = $.fn.slimScroll;
    $.fn.slimScroll = function( options ){
    options.wheelStep = 10;
    options.touchScrollStep=75;
    return oldSlimScroll.apply(this, [options] );
    };
    
    //Check window Orientation and pass to paddingTop
    
    
    var TOPPADDING =90;
   if(Math.abs(window.orientation) === 90) {
            TOPPADDING = 60;     
    }
    
    
    $('#fullpage').fullpage({
				sectionsColor: ['none', 'none', 'none', 'none'],//#221728
				anchors: ['firstPage', 'Work', 'Story', 'Contact'],
				menu: '#menu',
				scrollingSpeed: 1000,
                scrollOverflow: true,
                paddingTop:TOPPADDING,
        
              
                
        
                afterRender: function(){
                    var pluginContainer = $(this);
                   //alert("The resulting DOM structure is ready");
                    
                },
                 
        
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);

                    
                    if(index == 1 && direction =='down'){  //going to page 2
                        $("header").fadeIn( "slow" );
                        
                        // alert("Going to section 1!");
                        
                        
                        $(".navButtons").removeAttr('style');
                        $(".navButtons").addClass("secondNav");
                        $("#headerLogo, #headerTitle").css("opacity","1");
                        $(".projectThumb").addClass("elementsOnLoad");
                        
                    }       
                     
                    
                    if(index == 2 && direction =='down'){ 
                        //going to page 3 
                        $("#timeLine").addClass("elementsOnLoad");
                        $(".cd-timeline-block").addClass("timeLineBlockOnLoad delayTransition4");
                        
                    }
                    
                     if(index == 2 && direction =='up'){  //going yp page 1
                       //return false;
                        // this will prevent it going back
                    }
                    
                    if(index == 4 && direction =='up'){  //going to page 3
                        
                         
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
                     
                     $(".cd-timeline-block").addClass("timeLineBlockOnLoad delayTransition4");
                     
                     $("#timeLine").addClass("elementsOnLoad");
                     
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
        
        $.fn.fullpage.moveTo('Work');
        $(this).addClass("menuSelected"); 
        $(this).siblings().removeClass("menuSelected");
    });
    
      $("#header li:nth-child(2)").click(function(){
        
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
    
    $(".navButtons").css({transform: 'translateY('+ navInitTop +'px)'});
    
    
        
 
    
    
})