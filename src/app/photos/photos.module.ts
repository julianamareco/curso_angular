import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

//Boa prática importar em todas as modules criadas o CommonModulo para tornar disponível as diretivas do angular

@NgModule({
    declarations : [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule{}