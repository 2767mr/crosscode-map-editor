import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-floating-window',
	templateUrl: './floating-window.component.html',
	styleUrls: ['./floating-window.component.scss']
})
export class FloatingWindowComponent implements OnInit {
	
	@Input() top: string | number = 0;
	@Input() right: string | number = 0;
	
	constructor() {
	}
	
	ngOnInit() {
	}
	
	onDragEnd($event) {
		// console.log($event);
	}
	
}
