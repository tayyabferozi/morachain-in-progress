import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing";
// import Discover from "./screens/Discover";
// import Login from "./screens/Login";
// import SignUp from "./screens/SignUp";
// import NFTs from "./screens/NFTs";
import NFTPresale from "./screens/NFTPresale";
import NFTPresale2 from "./screens/NFTPresale2";
// import Staking from "./screens/Staking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/discover" element={<NFTPresale2 />} />
        {/* <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} /> */}
        <Route exact path="/NFTPresale" element={<NFTPresale />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route exact path="/" element={<Landing />} />
        {/* <Route path="/nfts" element={<NFTs />} />
        <Route path="/staking" element={<Staking />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
