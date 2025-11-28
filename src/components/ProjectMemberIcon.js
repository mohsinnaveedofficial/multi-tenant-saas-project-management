import React from 'react';

function ProjectMemberIcon({ name }) {
  return (
    <div className="h-10 w-10 border-2 p-1.5 shadow-sm border-white flex justify-center items-center rounded-full bg-blue-600 text-white text-sm">
      <span className='overflow-hidden whitespace-nowrap'>{name}</span>
    </div>
  );
}

export default ProjectMemberIcon;
