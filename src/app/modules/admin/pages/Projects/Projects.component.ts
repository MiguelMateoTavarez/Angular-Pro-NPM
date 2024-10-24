import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsComponent { }
