// for (let i = 0; i < $('.tab-button').length; i++){

//   $('.tab-button').eq(i).on('click', function(){
//     탭열기(i)
//   })

// };

$('.list').click(function(e){
  
  탭열기(e.target.dataset.id)
  
})

function 탭열기(구멍){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}


  