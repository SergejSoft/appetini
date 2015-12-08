$(document).ready(function() {
  $(window).scroll(function() {
    var elem = $('.navbar-main'),
      top = $(this).scrollTop();

    if (top > $('.f-navbar').height() + 90) {
      elem.addClass('onscroll');
    } else {
      elem.removeClass('onscroll');
    }
  });

  $('.scroll-to').on("click", scrollTo);

  function scrollTo(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
    $('body,html').animate({scrollTop: top}, 500);
  }

  var flexslider = $('#dish-slider');

  if (flexslider) {
    flexslider.flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  }

  $('#orderModal').on('show.bs.modal', function(event) {
    var modal = $(this),
      button = $(event.relatedTarget),
      itemsCount = $('#orderItemsCountSelect').val();
    if (itemsCount == 1) {
      modal.find('#orderItemsCount').text(' ' + itemsCount + ' обед');
    } else if (itemsCount < 5 && itemsCount > 1){
      modal.find('#orderItemsCount').text(' ' + itemsCount + ' обеда');
    } else {
      modal.find('#orderItemsCount').text(' ' + itemsCount + ' обедов');
    }
    modal.find('.count-select').val(itemsCount);
    modal.find('#dishId').val(button.data('id'));
  });

  $('#orderForm').on('submit', function(e) {
    e.preventDefault();
    $('#orderModal').modal('hide');
    $.post('order.php', $('#orderForm').serialize())
      .done(function(response) {
        new PNotify({
          title: 'Ваш заказ отправлен',
          text: 'Ожидайте звонка',
          type: 'success',
          styling: 'fontawesome'
        });
      });
  })
});
