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

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('in', style({ opacity: 0.3 })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate('0.7s 0.5s linear')
            ])
        ])
    ]
})
export class PhotosComponent implements OnInit {
    //Aws bucket.
    public bucket: string = 'https://s3.amazonaws.com/ph-balanced/thumbnails/';
    public thumbs: Array<string> = [];

    //Images we want from the bucket.
    private assets = [
        'IMG_0018.jpg',
        'IMG_0030.jpg',
        'IMG_0103.jpg',
        'IMG_0104.jpg',
        'IMG_0129.jpg',
        'IMG_0130.jpg',
        'IMG_0152.jpg',
        'IMG_0207.jpg',
        'IMG_0211.jpg',
        'IMG_0212.jpg',
        'IMG_0291.jpg',
        'IMG_0302.jpg',
        'IMG_0304.jpg',
        'IMG_0312.jpg',
        'IMG_0334.jpg',
        'IMG_0370.jpg',
        'IMG_0372.jpg',
        'IMG_0384.jpg',
        'IMG_0386.jpg',
        'IMG_0420.jpg',
        'IMG_0496.jpg',
        'IMG_0503.jpg',
        'IMG_0509.jpg',
        'IMG_0522.jpg',
        'IMG_0523.jpg',
        'IMG_0525.jpg',
        'IMG_0531.jpg',
        'IMG_0553.jpg',
        'IMG_0646.jpg',
        'IMG_0651.jpg',
        'IMG_0704.jpg',
        'IMG_0776.jpg',
        'IMG_0796.jpg',
        'IMG_0819.jpg',
        'IMG_0821.jpg',
        'IMG_0847.jpg',
        'IMG_0850.jpg',
        'IMG_0860.jpg',
        'IMG_0861.jpg',
        'IMG_0862.jpg',
        'IMG_0879.jpg',
        'IMG_0893.jpg',
        'IMG_0901.jpg',
        'IMG_1013.jpg',
        'IMG_1030.jpg',
        'IMG_1039.jpg',
        'IMG_1081.jpg',
        'IMG_1111.jpg',
        'IMG_1121.jpg',
        'IMG_1140.jpg',
        'IMG_1171.jpg',
        'IMG_1192.jpg',
        'IMG_1228.jpg',
        'IMG_1236.jpg',
        'IMG_1250.jpg',
        'IMG_1274.jpg',
        'IMG_1300.jpg',
        'IMG_1331.jpg',
        'IMG_1340.jpg',
        'IMG_1413.jpg',
        'IMG_1499.jpg',
        'IMG_1614.jpg',
        'IMG_1761.jpg',
        'IMG_1977.jpg',
        'IMG_2547.jpg',
        'IMG_2591.jpg',
        'IMG_2632.jpg',
        'IMG_2654.jpg',
        'IMG_3533.jpg',
        'IMG_3720.jpg',
        'IMG_4178.jpg'
    ];

    constructor() {
    }

    ngOnInit() {
        this.thumbs = _.shuffle(this.assets);
    }


    //Get the image source from the url.
    getImage(item: string) {
        const image = this.bucket + item;
        return image;
    };
}
