import React     from 'react';
import MainNav   from "../../modules/MainNav";
import MainPanel from "../../modules/MainPanel";

const App: React.FC = () => {
  return (
    <div>
      <header>
          <MainNav />
          <MainPanel />
      </header>
    </div>
  );
}

export default App;
