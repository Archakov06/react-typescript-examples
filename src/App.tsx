import React from 'react';

import Counter from './steps/Counter';
import Todo from './steps/Todo';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="example">
        <Counter initialValue={0} />
      </div>
      <div className="example">
        <Todo />
      </div>
    </div>
  );
};

export default App;
