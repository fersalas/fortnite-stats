import * as React                    from "react";
import { Provider as ReduxProvider } from "react-redux";
import getStore, {configureStore}    from '../functional/store';
// App Components
import { MainNav }                   from "../../modules/mainNav";
import { StatCardsContainer }        from "../../modules/mainPanel";
import { SideBar }                   from '../../modules/sidebar';

configureStore();

const drawerWidth = 240;

const App: React.FC = () => {
  return (
    <ReduxProvider store={getStore()}>
      <div style={{display: 'flex'}}>
          <MainNav drawerWidth={drawerWidth} />
          <SideBar drawerWidth={drawerWidth} />
          <StatCardsContainer />
      </div>
    </ReduxProvider>
  );
}

export default App;


