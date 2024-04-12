import React, { useState } from 'react';
import './usernav.css';
import Register from '../../register/Register';

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='usermain'>
      <h2>User section</h2>
      <button onClick={() => setIsOpen(true)}>Add User</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <Register onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;
