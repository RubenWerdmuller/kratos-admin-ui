import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ThemeProvider } from '@fluentui/react';
import { activeTheme } from "./theme"
import { FluentProvider, webLightTheme } from '@fluentui/react-components';


const IdentitiesSite = React.lazy(() => import('./sites/identities/identies'));
const CreateIdentitySite = React.lazy(() => import("./sites/identities/create/create"));
const ViewIdentitySite = React.lazy(() => import("./sites/identities/view/view"));
const EditIdentitySite = React.lazy(() => import("./sites/identities/edit/edit"));
const OverviewSite = React.lazy(() => import("./sites/overview"));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={activeTheme}>
      <FluentProvider theme={webLightTheme}>
        <Router>
          <div className="outerDIV">
            <HeaderComponent />
            <div className='contentDIV'>
              <Suspense fallback={< div > Seite wird geladen ...</div>}>
                <Switch>
                  <Route path="/identities/create">
                    <CreateIdentitySite />
                  </Route>
                  <Route path="/identities/:id/view">
                    <ViewIdentitySite />
                  </Route>
                  <Route path="/identities/:id/edit">
                    <EditIdentitySite />
                  </Route>
                  <Route path="/identities">
                    <IdentitiesSite />
                  </Route>
                  <Route path="/overview">
                    <OverviewSite />
                  </Route>
                  <Redirect from='*' to='/identities' />
                </Switch>
              </Suspense>
            </div>
            <FooterComponent></FooterComponent>
          </div>
        </Router>
      </FluentProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// fluent ui
initializeIcons();