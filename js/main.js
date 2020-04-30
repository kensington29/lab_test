// jsを記述する際はここに記載していく

// ナビゲーション固定
// $(document).ready( function() {
  // $('.snavi_menu').smint({
    // 'scrollSpeed' : 1000
  // });
// });


// ABOUT部スライダー表示
$(function() {
  $('#box_about_imgs').slick({
        infinite: true,
        dots:true,
        slidesToShow: 1,
        centerMode: true, //要素を中央寄せ
        centerPadding:'22%', //両サイドの見えている部分のサイズ
        autoplay:true, //自動再生
        // responsive: [{
        //      breakpoint: 480,
        //           settings: {
        //                centerMode: false,
        //      }
        // }]
   });
  });