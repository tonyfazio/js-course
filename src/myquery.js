(function () {

  var QueryWrapper = function (elems) {
    // TODO
    this.get =function (num){
      if (elems.length === undefined){
        return elems;
      } else{
        return elems[num];
      }
      // return this;
    }

    this.each = function (func) {
      for (var i = 0; i<elems.length; i++){
        func(elems[i], i);
      }
      return this;
    }

    this.css = function (property, value){
      if (property && !value){
        for (var key in property){
          var val = property[key];
          for (var i = 0; i<elems.length; i++){
            elems[i].style[key] = val;
          }
        }
        return this;
      }
      else{
        for (var i = 0; i<elems.length; i++){
          elems[i].style[property] = value;
        }
        return this;
      }
    }

    this.hide = function(){
      return this.css('display', 'none');
    }

    this.show = function (){
      return this.css('display', 'block');
    }

    this.addClass = function (x){
    console.log('elems in addClass func', elems);
     for (var i = 0; i<elems.length; i++){
       elems[i].className = elems[i].className + " "+ x;
     }
     return this;
    }

    this.length = elems.length;
    return this;

  };

  var myQuery = function (selector) {
    //TOD
    var first = selector.charAt(0);
    var elements = [];
    switch (first){
      case '#':
        elements = document.getElementById(selector.slice(1));
        break;
      case '.':
        elements = document.getElementsByClassName(selector.slice(1));
        break;
      default:
        elements = document.getElementsByTagName(selector);
        break;
    }

    return new QueryWrapper(elements);

  };

  myQuery.each = function (array, func) {
    for (var i = 0; i<array.length; i++){
      func(array[i]);
    }
  };

  window.$ = myQuery;

  $.version = 'beta';

})();
