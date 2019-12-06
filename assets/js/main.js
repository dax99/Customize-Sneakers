window.onload = function() {
/*$(document).ready(function() {
    $('#push').on('click',function(){
      $('#push, #pushed-center, #pushed-left-1, #pushed-right-1, #pushed-right-2').toggleClass('move');
      $('#push').toggleClass('rotate');
    });
  });*/
  var bodyindex=document.getElementById("index");
  var bodyAF1=document.getElementById("AF1");
  
  if (bodyindex!=null){
  var brojacNazad=1;
  document.querySelector("#start").addEventListener("click",function(){
    
    document.getElementById("omot"+brojacNazad).classList.add("hide");
    document.getElementById("omot2").classList.remove("hide");
    document.getElementById("nazad").classList.remove("hide");
    brojacNazad++;
    console.log(brojacNazad);
  })
  document.querySelector("#nazad").addEventListener("click",function(){   

    document.getElementById("omot"+brojacNazad).classList.add("hide");
    if(brojacNazad==4){
      brojacNazad--;
    }
    brojacNazad--;
    document.getElementById("omot"+brojacNazad).classList.remove("hide"); 
    if(brojacNazad==1){   
    document.getElementById("nazad").classList.add("hide");
    }
    console.log(brojacNazad);
  })
    document.querySelector("#col1").addEventListener("click",function(){    
    document.getElementById("omot"+brojacNazad).classList.add("hide");
    brojacNazad++;
    document.getElementById("omot"+brojacNazad).classList.remove("hide");  
    //document.getElementById("omot"+brojacNazad+1).classList.add("hide");
    console.log(brojacNazad);
  })
  document.querySelector("#col2").addEventListener("click",function(){    
    document.getElementById("omot"+brojacNazad).classList.add("hide");
    brojacNazad=brojacNazad+2;
    document.getElementById("omot"+brojacNazad).classList.remove("hide");   
    console.log(brojacNazad);
    
    
    
  })
  
  
 /* .addEventListener("click",function(){
  
  document.getElementById("omot1").classList.add("hide");
})*/


  var object1=$("#patika1");
  var object2=$("#patika2");
  var object3=$("#patika3");
  var object4=$("#patika4");

  var layer=$("#omot1");
  layer.mousemove(function(e){
    var valueX1=(e.pageX * -1/15);
    var valueY1=(e.pageY * 1/15);

    var valueX2=(e.pageX * -1/10);
    var valueY2=(e.pageY * -1/16);

    var valueX3=(e.pageX *  1/11);
    var valueY3=(e.pageY * -1/20);

    var valueX4=(e.pageX * 1/19);
    var valueY4=(e.pageY * 1/11);

    object1.css({
      'transform':'translate3d('+valueX1+'px,'+valueY1+'px,0) '
    });
    object2.css({
      'transform':'translate3d('+valueX2+'px,'+valueY2+'px,0) '
    });
    object3.css({
      'transform':'translate3d('+valueX3+'px,'+valueY3+'px,0) '
    });
    object4.css({
      'transform':'translate3d('+valueX4+'px,'+valueY4+'px,0) '
    });
    
  })
}
$("#demo01").animatedModal();

//AF1 STRANICA POCETAK


                  //let prom=document.getElementById("upper").id;
                   //console.log(prom);
if (bodyAF1!=null){
  var MestoBojenja;
  var SvePatike;
  var boja;
 document.querySelector("#LightBlue").addEventListener("click",function(){
   boja="LightBlue";
   let IzabranaBoja=this.id;
    SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
   for(let i = 0; i < SvePatike.length; i++)
   {
     SvePatike.item(i).classList.add("hide");
   }
   console.log(MestoBojenja+IzabranaBoja+"S");
  document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
  } )

  document.querySelector("#Red").addEventListener("click",function(){
    boja="Red";
    let IzabranaBoja=this.id;
    SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   } )

   document.querySelector("#Grey").addEventListener("click",function(){
    boja="Grey";
    let IzabranaBoja=this.id;
     SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   } )

/*    document.querySelector("#Black").addEventListener("click",function(){
    boja="Black";
    let IzabranaBoja=this.id;
     SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   } ) */
   document.querySelector("#White").addEventListener("click",function(){
    boja="White";
    let IzabranaBoja=this.id;
     SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   } )
   document.querySelector("#Black").addEventListener("click",function(){
    boja="Black";
    let IzabranaBoja=this.id;
     SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
    SvePatike="";
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   console.log(MestoBojenja+IzabranaBoja+"S");
   } )

  document.querySelector("#DarkBlue").addEventListener("click",function(){
    boja="DarkBlue";
    let IzabranaBoja=this.id;
     SvePatike=document.getElementsByClassName(MestoBojenja+"SlikaPatike");
    for(let i = 0; i < SvePatike.length; i++)
    {
      SvePatike.item(i).classList.add("hide");
    }
    SvePatike="";
   document.getElementById(MestoBojenja+IzabranaBoja+"S").classList.remove("hide");
   console.log(MestoBojenja+IzabranaBoja+"S");
   } )
  
   
  document.querySelector("#upper").addEventListener("click",function(){  
    MestoBojenja="Upper";
    document.getElementById("birajBoju").classList.add("right");
      }     
      )
  document.querySelector("#Swoosh").addEventListener("click",function(){ 
    MestoBojenja="Swoosh";
    document.getElementById("birajBoju").classList.add("right");
      }     
      )
      document.querySelector("#Midsole").addEventListener("click",function(){ 
        MestoBojenja="Midsole";
        document.getElementById("birajBoju").classList.add("right");
          }     
          )

      document.querySelector("#Outsole").addEventListener("click",function(){  
        MestoBojenja="Outsole";
        document.getElementById("birajBoju").classList.add("right");
          }     
          )
  document.querySelector("#izaberiBoju").addEventListener("click",function(){  
    document.getElementById("birajBoju").classList.remove("right");
    //document.querySelector(".Black").id=boja;
      }     
      )
}
//AF1 STRANICA KRAJ
  $(document).ready(function(){
    $(".slide-toggle").click(function(){
      $("#social").animate({
        
        width: "toggle",
        opacity: "show",
        
      }
      );

      $("#podaci").animate({
        
        
        opacity: "hide",
        
      }
      );
    });
  });

$(document).ready(function(){
  $(".slide-toggle2").click(function(){
  
    $("#podaci").animate({     
      width: "toggle",
      opacity: "show",     
    }
    );
    
    $("#social").animate({    
      opacity: "hide",     
    }
    );

  });
});
}