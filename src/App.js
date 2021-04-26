import React from 'react';
import './App.css';
import ToDoListItem from './ToDoListItem';

class App extends React.Component {

  // ToDoListをstateに定義、初期値はlocalStorageから取得または[]
  state = {
    todoList: JSON.parse(localStorage.getItem('todoList')) || []
  }

  // todoList itemの追加
  addTodo = (item, callBack) => {
    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.concat(item)
      },
      () => {
        // localStrageにtodoList stateを保存(stringifyでJSONをStringに変換)
        localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
      }
    )
  }

  // todoList itemの削除
  removeTodo = (item, callBack) => {
    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.filter(x => x !== item)
      },
      () => {
        // localStrageにtodoList stateを保存(stringifyでJSONをStringに変換)
        localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack()
      }
    )
  }

  render(){
    return (
      <div className="App">
        <form 
          className="App-form"
          onSubmit={e => {
            // formのデフォルトのイベントキャンセル
            e.preventDefault();
            // idがtitleの要素を取得
            const titleElement = e.target.elements['title'];
            // idがdescriptionの要素を取得
            const descriptionElement = e.target.elements['description'];

            // todoList stateに追加
            this.addTodo(
              {
                title: titleElement.value,
                description: descriptionElement.value
              },
              // stateの変更後に入力した値を空にする
              () => {
                titleElement.value = '';
                descriptionElement.value = '';
              }
            );
          }}
        >
          <div>
            <input
              id="title"
              placeholder="title"
            />
            <textarea
              id="description"
              placeholder="description"
            />
          </div>
          <div>
            <button
              type="submit"
            >
              登録
            </button>
          </div>
        </form>
        <div>
          {this.state.todoList.map(todo => (
            <ToDoListItem
              // 表示させるデータ
              title={todo.title}
              description={todo.description}
              // クリックされたアイテムをtodoListのstateから削除
              onClick={() => this.removeTodo(todo)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
