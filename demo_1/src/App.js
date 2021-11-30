import React from 'react';

const list = [
  {
    title: 'github',
    url: 'https://github.com/thedeveshpareek/reactjs',
    gitid: 'devesh pareek',
    
  },
  {
    title: 'Astc',
    url: 'https://www.educative.io/courses/road-to-react-with-hooks/7D1xREvKNl1',
    author: 'hello'
    
  },
];

function App() {
  return (
    <div>
      <h1>this is demo</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {list.map(function(item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
