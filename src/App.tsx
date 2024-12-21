import { useState } from 'react';
import './App.css';

import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt minima in
        animi rem, quaerat maiores nisi eaque eligendi rerum ipsam. Illo,
        possimus! Nisi perspiciatis officia consequatur, repellendus voluptas
        eveniet error.
      </Modal>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TodoList/>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
      <div className="tooltip-grid">
        <Tooltip content="this is a top tooltip" position="top">
          <div className="tooltip-target">Top</div>
        </Tooltip>
        <Tooltip content="this is a right tooltip" position="right">
          <div className="tooltip-target">Right</div>
        </Tooltip>
        <Tooltip content="this is a bottom tooltip" position="bottom">
          <div className="tooltip-target">Bottom</div>
        </Tooltip>
        <Tooltip content="this is a left tooltip" position="left">
          <div className="tooltip-target">Left</div>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
