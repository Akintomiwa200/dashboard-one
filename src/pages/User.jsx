import React, { useState } from 'react';
import UserNav from "../components/navigations/usernav/UserNav";
import Register from '../components/register/Register';

const User = () => {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <UserNav />
      

      {userData && (
        <div>
          <h2>User Details</h2>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{userData.userName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>{userData.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      
      <Register onRegister={handleUserData} />
    </div>
  );
};

export default User;
