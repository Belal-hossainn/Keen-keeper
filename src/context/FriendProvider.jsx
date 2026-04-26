import { createContext, useState } from "react";
export const FriendContext = createContext();
const FriendProvider = ({ children }) => {
  
  const [connectFriends, setConnectFriends] = useState([]);
  

  return (
    <FriendContext.Provider value={{connectFriends, setConnectFriends }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;