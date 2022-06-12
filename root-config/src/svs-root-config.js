import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

const routes = constructRoutes(
  document.querySelector("#svs-microfrontend-layout")
);

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
