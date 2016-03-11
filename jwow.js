/* (c) Serguey Arsentev, 2015. Licensed under MIT License 

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

$(function(){
  $("#container").css({width: '40cm', height: '85%'});
  var set = $("#container>*");
  var summaryHeight = 0;
  var bodyHeight = $("#container").innerHeight();
  var begin = 0;
  var size = set.size();
  var end = 0;
  var sliced;
  var set2 = null;
  var max_count = 1000;
  var count = 0;
  while ((end < size) && (count < max_count))
  {
    count++;
    set2 = set.eq(end);
    summaryHeight += set2.outerHeight(true);
    end++;
    if (summaryHeight > bodyHeight)
    {
      summaryHeight = 0;
      end--;
      sliced = set.slice(begin,end);
      sliced.wrapAll('<div class="group" style="float:left;"></div>');
      begin = end;
    }
  }
});

$(window).resize(function(){
  location.reload();
});
