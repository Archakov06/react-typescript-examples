import React, { useReducer, useRef } from 'react';

interface Item {
  text: string;
  completed: boolean;
}

type State = Array<Item>;

type AddItem = { type: 'ADD'; payload: string };
type RemoveItem = { type: 'REMOVE'; payload: number };
type CompleteItem = { type: 'COMPLETE'; payload: number };

type Actions = AddItem | RemoveItem | CompleteItem;

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'ADD':
      return [...state, { text: action.payload, completed: false }];
    default:
      return state;
  }
}

const Todo: React.FC = () => {
  const initialState: State = [];
  const [state, dispatch] = useReducer<React.Reducer<State, Actions>>(
    reducer,
    initialState
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    if (inputRef && inputRef.current) {
      dispatch({ type: 'ADD', payload: inputRef.current.value });
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" placeholder="Текст задачи" />
        <button onClick={addItem}>Добавить</button>
      </div>
      <ul>
        {state.map((item: Item, index: number) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
