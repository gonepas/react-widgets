import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    id: 0,
    title: 'What does this mean ?',
    content: 'This means nothing'
  },
  {
    id: 1,
    title: 'How many people are there',
    content: 'just 12 people. Maybe. I don\' know'
  },
  {
    id: 2,
    title: 'What is NodeJS',
    content: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.'
  }
];

const App = () => {
  return (
      <div>
        {/*<Accordion items={items}/>*/}
        <Search />
      </div>
  );
}

export default App