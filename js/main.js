(function() {
  'use strict';

  // two way data binding(to UI)

  // vm は view model の略
  // el は elements の略
  var vm = new Vue({
    el: '#app',
    data: {
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    }
  });
})();