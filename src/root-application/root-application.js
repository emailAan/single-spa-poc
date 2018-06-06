import * as singleSpa from 'single-spa';

//stuff to read
// https://github.com/CanopyTax/single-spa/issues/123


let state = { currentApp: 'app1' }

singleSpa.start();

function isCurrentApp(app) {
  return (location) => state.currentApp === app
}

window.openApp = (appName) => {
  if (!singleSpa.getAppNames().includes(appName)) {

    singleSpa.registerApplication(appName, () =>
      import(`../${appName}/index.js`), isCurrentApp(appName), { el: document.getElementById(appName) });
  }

  state.currentApp = appName;
  singleSpa.triggerAppChange();
}