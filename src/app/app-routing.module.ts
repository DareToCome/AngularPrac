import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./rective/rective.module').then((m) => m.RectiveModule),
  },
  {
    path: 'tdf',
    loadChildren: () => import('./tdf/tdf.module').then((m) => m.TdfModule),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./for-api-call/for-api-call.module').then(
        (m) => m.ForApiCallModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
