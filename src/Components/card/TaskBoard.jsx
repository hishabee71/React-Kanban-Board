import React from 'react';

const TaskBoard = ({Style, children}) => {
  return (
    <div className={`${Style} bg-white border-gray-300 rounded-md shadow-md p-4 relative`}>
      {children}
    </div>
  )
}

export default TaskBoard;