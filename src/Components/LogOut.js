import React from "react";
export const Logout = (onLogout) => {
  onLogout();
  return (
    <div>
      <h1>User is logOut Successfully</h1>
    </div>
  );
};
