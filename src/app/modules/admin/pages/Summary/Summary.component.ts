import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryComponent { }
