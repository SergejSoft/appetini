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
    modal.find('.count-select').val(itemsCount).trigger('change');
    modal.find('#dishId').val(button.data('id'));
  });

  $('#orderForm').on('submit', function(e) {
    e.preventDefault();
    $.post('order.php', $('#orderForm').serialize())
      .done(function(response) {
        $('#orderModal').modal('hide');
        new PNotify({
          title: 'Ваш заказ отправлен',
          text: 'Ожидайте звонка',
          type: 'success',
          styling: 'fontawesome'
        });
      });
  });

  $('.count-select').select2({
    minimumResultsForSearch: Infinity
  });

  $(window).stellar({horizontalScrolling: false});
});
