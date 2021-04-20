import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ToolkitTest from './pages/toolkit-test';
import MaterialUiTest from './pages/material-ui-test';
import AntdTest from './pages/antd-test';
import TailwindTest from './pages/tailwind-test';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ToolkitTest} />
        <Route path='/test1' component={MaterialUiTest} />
        <Route path='/test2' component={AntdTest} />
        <Route path='/test3' component={TailwindTest} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
