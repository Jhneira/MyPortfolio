import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
