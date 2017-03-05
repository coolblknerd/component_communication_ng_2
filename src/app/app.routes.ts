import { Routes, RouterModule } from '@angular/router';

import { InputOutputComponent } from './components/input-output/input-output.component';
import { MediatorComponent } from './components/mediator/mediator.component';

const routes = [
  { path: '', component: InputOutputComponent },
  { path: 'mediator', component: MediatorComponent }
]

export const Routing = RouterModule.forRoot(routes);
