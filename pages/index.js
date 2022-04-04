import React, { useEffect } from "react";
import axios from "axios";

const Index = ({ user, userFollowerStats }) => {
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);

  return <div>Home Page!</div>;
};

export default Index;
