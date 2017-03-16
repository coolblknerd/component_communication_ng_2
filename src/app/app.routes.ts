import { Routes, RouterModule } from '@angular/router';

import { InputOutputComponent } from './components/input-output/input-output.component';
import { MediatorComponent } from './components/mediator/mediator.component';
import { ParentComponent } from './components/parent/parent.component';
import { ParentAPIComponent } from './components/parent-api/parent-api.component';

const routes = [
  { path: '', component: InputOutputComponent },
  { path: 'mediator', component: MediatorComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'api', component: ParentAPIComponent }
]

export const Routing = RouterModule.forRoot(routes);
