import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import CloseIcon from './components/CloseIcon';
import Modal from './components/modal/Modal';
import { autoCompleteData } from "./components/autocomplete/autoCompleteData";
import AutoComplete from './components/autocomplete/AutoComplete';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Button 
        children="open modal" 
        type="outline" 
        btnColor='blue'
        onClick={() => setShow(true)}
      />

      <Modal show={show} onClose={() => setShow(false)}>
        <div className="content">
          
          <AutoComplete data={autoCompleteData} />

          <Button 
            children={
                      <>
                        <CloseIcon 
                          width="20" 
                          height="20" 
                          style={{marginRight: "10px"}}
                        />
                        Close
                      </>
                      } 
            type="outline" 
            btnColor='blue'
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
