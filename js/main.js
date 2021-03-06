(function() {
  'use strict';

  // two way data binding(to UI)

  // vm は view model の略
  // el は elements の略
  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },

    // watch でデータの監視をして localStorage に保存
    watch: {
      //  todos: function() {
      //    localStorage.setItem('todos', JSON.stringify(this.todos));
      //    alert('Data Saved!');
      //  }

      //  上の処理だとデータの中身の isDone 等の変更まではチェックされないため、 deep オプションで深層まで監視する
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
          //  alert('Data Saved!');
        },
        deep: true
      }
    },

    // ページがマウントされるタイミングでデータを読み取る
    mounted: function(){
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },

    methods: {
      //  addItem: function(e) {
      //    e.preventDefault();
      //    this.todos.push(this.newItem);
      //  }
      // e.preventDefault で画面遷移を防いでもいいが、よく行う処理のため html のディレクティブの方で書いても同じ処理になる。


      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        // push することで newItem に追加された内容が todos の末尾に追加されて、結果として html の li 要素に反映される

        this.newItem = '';
        // input 要素の中を空文字にする
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
          // 引数の (index) 番目から1つ削除
        }
      },
      purge: function() {
        if (!confirm('delete finished?')) {
          return;
        }
        //  this.todos = this.todos.filter(function(todo) {
        //    return !todo.isDone;
        //  });
        //  todo の isDone が true のものを返すことで終わっていないタスクのみ残す

        //  フィルターの処理が重複するため下の remaining を使って DRY に書く
        this.todos = this.remaining;
      }
    },

    // データから動的にプロパティを計算してくれる算出プロパティ
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();