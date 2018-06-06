import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import('../app1/app1.js'), pathPrefix('/app1'), { authToken: "DBVE$YTUEWFRJ&TRWVEDFUREGED@#TY5434" });

singleSpa.start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}

window.openApp2 = () => {
  if (!singleSpa.getAppNames().includes('app-2')) {
    singleSpa.registerApplication('app-2', () =>
      import('../app2/app2.js'), pathPrefix('/app2'), { el: document.getElementById("angular") });
  }

  singleSpaNavigate('/app2')
}