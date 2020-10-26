import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() control: FormControl;
  @Input() label: string;
  ngOnInit(): void {}
  showErrors(): any {
    return this.control.errors && this.control.touched;
  }
}
