import React from 'react';
import './ToDoListItem.css';

class ToDoListItem extends React.Component {
  render() {
    // 登録する情報(Props)
    const {
      title,
      description,
      ...props
    } = this.props;

    // 登録されたTODOリストのデータを表示
    return (
      <div className="ToDoListItem" {...props}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;