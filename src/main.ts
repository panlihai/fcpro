import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from "ag-grid-enterprise/main";
import { FccoreModule } from 'fccore';
LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_1Devs27_December_2017__MTUxNDMzMjgwMDAwMA==43985be14558a9fb6deb40beab6c16bd");
FccoreModule.forRoot(environment);
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
