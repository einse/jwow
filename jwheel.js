/* From http://bizikov.ru/blog/gorizontal-ny-j-skroll-sajta/ */

$(function () {
  $("body").mousewheel(function (event, delta) {
    this.scrollLeft -= (delta * 100);
    event.preventDefault();
  });
});
