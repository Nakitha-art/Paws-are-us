import React from "react";
import PawsAreUs from "pages/PawsAreUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pawsareus" element={<PawsAreUs />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
