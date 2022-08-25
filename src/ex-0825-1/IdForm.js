import React from 'react';

function IdFrom() {
  return (
    <>
      <h1>IdFrom</h1>
      <input type="text" id="fullName" />
      <button
        onClick={() => {
          document.getElementById('fullName').focus();
        }}
      >
        focus
      </button>
      <button
        onClick={() => {
          document.getElementById('fullName').blur();
        }}
      >
        blur
      </button>
      <button
        onClick={() => {
          alert(document.getElementById('fullName').value);
        }}
      >
        get value
      </button>
      <hr />
    </>
  );
}

export default IdFrom;
