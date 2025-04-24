import { Component } from '@angular/core';
import { FormatPipe } from '../../pipes/format.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormatPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'tp01_ANGULAR_ePsi';
}
