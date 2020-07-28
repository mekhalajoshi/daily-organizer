/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

const Dashboard = () => {
  const groups = useSelector((state) => state.groups);
  return (
    <div>
      <h2>Dashboard</h2>
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          <TaskList id={group.id} name={group.name} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
