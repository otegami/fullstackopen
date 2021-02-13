import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({course}) => {
  // TODO key の値をユニークなものに変更したい
  const parts = course.parts.map(part => <Part key={part.name} part={ part } />)

  return (
    <div>
      { parts }
      <Total parts={course.parts} />
    </div>
  )
}

export default Content
