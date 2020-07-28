import React from 'react';
import { useSelector } from 'react-redux';

const taskList = (props) => {
  const { id } = props;
  const tasks = useSelector((state) => state.tasks);
  const groupTasks = tasks.filter((task) => task.group === id);
  return (
    <div>
      {groupTasks.map((task) => <div key={task.id}>{task.name}</div>)}
    </div>
  );
};

export default taskList;
