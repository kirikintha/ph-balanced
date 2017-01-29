import {
    Component, OnInit, Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

declare var _: any;
declare var $: any;
declare var moment: any;

@Component({
    selector: 'app-slides',
    templateUrl: './slides.component.html',
    styleUrls: ['./slides.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate('0.7s 0.5s linear')
            ])
        ])
    ]
})
export class SlidesComponent implements OnInit {

    public year = moment.tz(new Date(), 'America/Denver').format('YYYY');

    //Aws bucket.
    public bucket: string = 'https://s3.amazonaws.com/ph-balanced/backgrounds/';

    public slides: Array<string> = [];

    private assets = [
        'IMG_0507.jpg',
        'IMG_0698.jpg',
        'IMG_0789.jpg',
        'IMG_0793.jpg',
        'IMG_0933.jpg',
        'IMG_0951.jpg',
        'IMG_1014.jpg',
        'IMG_1059.jpg',
        'IMG_1099.jpg',
        'IMG_1115.jpg',
        'IMG_1342.jpg',
        'IMG_1527.jpg',
        'IMG_1657.jpg',
        'IMG_1764.jpg',
        'IMG_1808.jpg',
        'IMG_2201.jpg',
        'IMG_2223.jpg',
        'IMG_2444.jpg',
        'IMG_2550.jpg',
        'IMG_3632.jpg',
        'IMG_3659.jpg',
        'IMG_3676.jpg',
        'IMG_3752.jpg',
        'IMG_4381.jpg'
    ];

    constructor() { }

    ngOnInit() {
        this.slides = _.shuffle(this.assets);
    }

    //Scroll to the next slide.
    scrollNext(delta: number) {
        const target = $('#slide-' + delta);
        $('html, body').animate({ scrollTop: target.offset().top + 'px' }, 300);
    }

}
