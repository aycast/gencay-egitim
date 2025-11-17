import { AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  template: `
  Example<br>
  <input type="text" [(ngModel)]="data"><br>
  <ng-content></ng-content>

  <div class="logs">
    <h3>Lifecycle logs</h3>
    <div *ngFor="let m of logs">{{ m }}</div>
  </div>`,
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges, OnInit,DoCheck ,AfterContentInit, AfterViewChecked{
  @Input() data: string = '';
  logs: string[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    const msg = '1. ngOnChanges called';
    console.log(msg);
   // this.logs.push(msg);
  }
  ngOnInit(): void {
    const msg = '2. ngOnInit';
    console.log(msg);
   // this.logs.push(msg);
  }
  ngDoCheck(): void {
    const msg = '3. ngDoCheck';
    console.log(msg);
   // this.logs.push(msg);
  }
  ngAfterContentInit(): void {
    const msg = '4. ngAfterContentInit';
    console.log(msg);
   // this.logs.push(msg);
  }
  ngAferViewInit(): void {
    const msg = '5. ngAfterViewInit';
    console.log(msg);
   // this.logs.push(msg);
  }
  ngAfterViewChecked(): void {
    const msg = '6. ngAfterViewChecked';
    console.log(msg);
   // this.logs.push(msg);
  }
}
