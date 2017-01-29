import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    //Scroll to the top
    scrollTop(e) {
        $('html, body').animate({ scrollTop: '0px' }, 300);
    }

}
