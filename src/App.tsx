import React, { useState } from 'react';
import HomePage from 'pages/home';
import List from 'components/List/list';
import { Translation } from 'interfaces';
import Modal from 'components/Modal/modal';

function App() {
  const options: Translation[] = [
    {
      id: '1',
      sourceText: 'Hello',
      targetText: 'Bonjour',
      description: 'Hello in French',
    },
    {
      id: '2',
      sourceText: 'Hello',
      targetText: 'Bonjour',
      description: 'Hello in French',
    },
    {
      id: '3',
      sourceText: 'Hello',
      targetText: 'Bonjour',
      description: 'Hello in French',
    },
  ];

  const headers = ['id', 'sourceText', 'targetText'];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="App">
      <HomePage>
        <div>
          <h1>Home Page</h1>
          <p>Some content</p>
          <button onClick={handleOpen}>open modal</button>
          <Modal isOpen={open} handleClose={handleOpen}>
            some content
          </Modal>
          <List options={options} headers={headers} onOptionClick={(value)=> {}} />
        </div>
      </HomePage>
    </div>
  );
}

export default App;
