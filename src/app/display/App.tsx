import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import MainNav   from "../../modules/MainNav";
import MainPanel from "../../modules/MainPanel";
import getStore, {configureStore}  from '../functional/store';

// Sample redux workflow
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { actions } from '../functional/actions';
import {RootState, AllActions} from '../';

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

/*const mapStateToProps = (state: RootState) => {
  const appState = state.app;

  return {
      foo: appState.foo,
      bar: appState.bar,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
  return {
      setBar: (bar: number) => {
          dispatch(actions.sampleActionWithPayload(bar));
      },
      toggleFoo: () => {
        dispatch(actions.sampleAction());
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
*/

export default App;


