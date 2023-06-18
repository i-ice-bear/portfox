import React from "react";
import NavbarComponent from "@/Components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="m-auto">
        <NavbarComponent />
        <motion.div
          className="container"
        >
          Something State
        </motion.div>
      </div>
    </>
  );
};

export default Home;
