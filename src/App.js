import logo from './logo.svg';
import './App.css';
import ToDoListItem from './ToDoListItem';

function App() {
  return (
    <div className="App">
      <div>
        <ToDoListItem
          title="TODOリスト作成"
          description="ReactでTODOリストを作成します！"
        />
      </div>
    </div>
  );
}

export default App;
