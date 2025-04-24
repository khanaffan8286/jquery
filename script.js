$(document).ready(function () {
  $("p").click(function () {
    console.log("you click on parahgraph", this);
  });

  // $('.hide').hide(function() {
  //     console.log('you hide the parahgraph'); // which that wanted to hide
  // });

  // $('p').click(function() {
  //     console.log('You clicked on p');
  //     $(this).hide();
  // });

  //odd element

  //$('.odd').click();

  //$('*').click();

  //$('p.odd').click();  // click on all odd parahgraph

  //  $('p:first').click();  // click on first parahgraph

  $("p").dblclick(function () {
    console.log("you double click on parahgraph");
  });

  // $('p').mouseenter(function() {
  //     console.log('you enterd mouse')
  // });

  // $('p').mouseleave(function() {
  //     console.log('you levae the mouse')
  // });

  //   $("p").mouseup(function () {
  //     console.log("you up the mouse");
  //   });

  //   $("p").hover(
  //     function () {
  //       console.log("you hover on this parahgraph", this);
  //     },
  //     function () {
  //       console.log("Thanks for coming");
  //     }
  //   );

//   $("p").on({
//     click: function () {
//       console.log("you click on this", this);
//     },
//     mouseenter: function() {
//         console.log('you enterd in the mouse ');
//     },
//     mouseleave : function() {
//         console.log('you leave the mouse');
//     },
//     hover: function(){
//         console.log('you hover on the parahgraph');
//     },
//     dblclick : function(){
//         console.log('you double ciick on the parahgraph', this);
//     }

//   });

  // $('#btn').click(function() {
  //   $('#wiki').hide(1000);
  // });
  
  // $('#btn').click(function() {  // for in the message
  //   $('#wiki').fadeIn(2000);
  // });

  // $('#btn1').click(function() {     // for out the message 
  //   $('#wiki').fadeOut(2000);
  //   console.log('you delete the mess')
  // });

  $('#toggle').click(function() {
    $('#wiki').fadeToggle(2000);
    console.log('you togle the this')
  });

  $('#wiki').animate({
    opacity:0.3,
    height: '150px',
    width : '350px'
  },2000)


});
