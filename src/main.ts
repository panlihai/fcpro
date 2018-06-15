import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from "ag-grid-enterprise/main";
import { FccoreModule } from 'fccore';
import * as GC from '@grapecity/spread-sheets';
GC.Spread.Sheets.LicenseKey = "10.128.40.241|10.128.40.242|20.128.25.249|20.128.25.250|20.128.25.251|20.128.25.252|20.128.25.253,128761725868288#A08bMuk/avorJgproto/avozJukzqukfJjlLiOiEmTDJCLigDOygjN8UjM7EjN7gjMxIiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPRhjeCdjT0FTSxlmdQtyUwtGNKp7MIZFZ4sETXZnTwkkbGdUbzcXZyYlRztmR5kFe7R7cDBTWll4VKFTZOR7a8ZGU8l7S5dnNCVFeX34YQNnajFVM8IkI0IyUiwyMwETO6kTO7ETM0IicfJye35XX3JyMiZzZiojIDJCLiETMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiIwATM4MDMgQTM5ADOxAjMiojI4J7QiwiIzUjMuUjMugjMx8CMywiM5IjL5IjL8ITMuAjMsETNy8SNy8COyEjLwIDLwUjMuUjMugjMx8CMywSO4IjL5IjL8ITMuAjMsIDNy8CM48COyEjLwEDLxQjMuADNugjMx8CMxIiOiMXbEJCLig1jlzahlDZmpnInm/KnODMi";
LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Key_Not_for_Production_1Devs27_December_2017__MTUxNDMzMjgwMDAwMA==43985be14558a9fb6deb40beab6c16bd");
FccoreModule.forRoot(environment);
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
