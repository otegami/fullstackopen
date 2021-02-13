import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({course}) => {
  const parts = course.parts.map(part => <Part key={part.id} part={ part } />)

  return (
    <div>
      { parts }
      <Total parts={course.parts} />
    </div>
  )
}

export default Content
