import {
    Component, OnInit, Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate('0.7s 1s linear')
            ])
        ])
    ]
})
export class FooterComponent implements OnInit {

    constructor() { }

    public closed: boolean = false;

    ngOnInit() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('footer').fadeOut();
            } else {
                $('footer').fadeIn();
            }
        });
    }

    //Toggle the content on and off.
    toggleSlides() {
        if (this.closed === false) {
            this.closed = true;
            $('.slide article, .the-work').fadeOut();
        } else {
            this.closed = false;
            $('.slide article, .the-work').fadeIn();
        }
    }

}
