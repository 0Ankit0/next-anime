import React, { useState } from "react";
import Layout from "./Layout";
import Aside from "./Aside";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <p>Hi</p>
    </Layout>
  );
};

export default Dashboard;
