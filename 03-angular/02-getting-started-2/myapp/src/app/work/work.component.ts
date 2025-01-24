import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  @Input() img = '';
  @Input() author = '';
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }
}
