import React     from 'react';
import { Provider as ReduxProvider } from "react-redux";
import MainNav   from "../../modules/MainNav";
import MainPanel from "../../modules/MainPanel";
import getStore, {configureStore}  from '../functional/store';

configureStore();

const App: React.FC = () => {
  return (
    <ReduxProvider store={getStore()}>
      <div>
        <header>
            <MainNav />
            <MainPanel />
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
