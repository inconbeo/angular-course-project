import { NgModule } from '@angular/core';
// We create this module to handles all app routings
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
// import { CreateCharacterComponent } from './create-character/create-character.component';


const routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}]},
  // {path: 'new-character', component: CreateCharacterComponent},
  {path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule'},
  {path: '**', redirectTo: '/characters'}
];

// This can take javascript  as argument
@NgModule({
imports: [
  RouterModule.forRoot(routes), // register routes in RouterModule provided by Angular
],
// We have to export so it is available to other module
// if we want to use AppRoutingmodule
exports: [
  RouterModule
]
})
export class AppRoutingModule {

}
