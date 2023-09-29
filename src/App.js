import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CustomRoutes from './components/Routes/Routes';
import OffCanvasSidebar from './components/OffCanvasSidebar/OffCanvasSidebar';

function App() {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchAndDisplayData();
  }, [selectedId]);

  const fetchAndDisplayData = () => {
    axios.get("https://650b12ccdfd73d1fab0986f0.mockapi.io/Week15Crud")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  return (
    <div className="container-fluid bg-info fullHeight">
      <Router>
        <Navbar />             
        <OffCanvasSidebar />
        <CustomRoutes data={data} setSelectedId={setSelectedId} />
      </Router>
    </div>
  );
}

export default App;
