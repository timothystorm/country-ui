import {Routes} from '@angular/router';
import {RegionalEntitiesListComponent} from './pages/regional-entities-list/regional-entities-list.component';

export const routes: Routes = [
  {path: '', component: RegionalEntitiesListComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
