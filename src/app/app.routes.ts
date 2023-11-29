import { Routes } from '@angular/router';
import { ClassComponentComponent } from './class-component/class-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'class-component', component: ClassComponentComponent},
    {path: 'about-component', component: AboutComponent},
    {path: '', component: HomeComponent}
];
