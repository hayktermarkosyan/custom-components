import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import CloseIcon from './components/CloseIcon';
import Modal from './components/modal/Modal';

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
          <Button 
            children="blocked button" 
            type="block" 
            btnColor="grey"
            labelColor='black'
          />

          <Button 
            children="disabled button" 
            disabled 
            btnColor="red"
            labelColor='black'
          />

          <Button 
            children="rounded button" 
            type="rounded" 
            btnColor='yellow'
            labelColor='red'
          />

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
