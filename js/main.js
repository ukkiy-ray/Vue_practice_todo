(function() {
  'use strict';

  // two way data binding(to UI)

  // vm は view model の略
  // el は elements の略
  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    },
    methods: {
      //  addItem: function(e) {
      //    e.preventDefault();
      //    this.todos.push(this.newItem);
      //  }
      // e.preventDefault で画面遷移を防いでもいいが、よく行う処理のため html のディレクティブの方で書いても同じ処理になる。

      
      addItem: function() {
        this.todos.push(this.newItem);
        // push することで newItem に追加された内容が todos の末尾に追加されて、結果として html の li 要素に反映される

        this.newItem = '';
        // input 要素の中を空文字にする
      }
    }
  });
})();