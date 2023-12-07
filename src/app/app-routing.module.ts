import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './feature/admin/admin-process/components/example/example.component';
import { SignInComponent } from './feature/authentication/components/sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { signinAuthenticationGuard } from './core/guards/signin-authentication.guard';

const routes: Routes = [
  {path: 'example', component: ExampleComponent},
  {path: 'admin',
    loadChildren: () => import('../app/feature/admin/admin.module').then(x => x.AdminModule),
    // canActivate: [signinAuthenticationGuard]
  },
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
