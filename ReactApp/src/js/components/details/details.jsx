import React from 'react';
import PropTypes from 'prop-types';

const Details= (props) => {
    return (
         <Modal
          contentLabel="Example Modal"
        >

          <h2>Hello</h2>
          <button>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    );
}

export default Details;