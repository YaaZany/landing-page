import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./assets/pages";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dafult Layout */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
