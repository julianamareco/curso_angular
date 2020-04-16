import { NgModule } from '@angular/core';
import { DarkOnHoverDirective } from './dark-on-hover.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        DarkOnHoverDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        DarkOnHoverDirective
    ]
})
export class DarkOnHoverModule{}