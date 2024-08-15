import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
    const [auto, setAuto] = useState(true);
    return (
      <div className="container">
        <h1 className="text-start mt-5">Monitor</h1>
        <p className="text-start">Monitor Extension</p>
      </div>
    );
  }
;

export default App;
