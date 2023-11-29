import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogService } from '../logger/LogService';
import { ClassComponentComponent } from "./class-component/class-component.component";
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [LogService],
    imports: [CommonModule, RouterOutlet, ClassComponentComponent, RouterLink, RouterLinkActive, HomeComponent]
})

export class AppComponent {
}
