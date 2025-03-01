import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@core/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { ProfileDetailComponent } from './profile-detail';
import { getProfileReducer } from './store/profile.reducers';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule,
        MatDividerModule,
        FlexLayoutModule,
        MatTableModule,
        MatListModule,
        StoreModule.forFeature('profile', getProfileReducer)
    ]
})
export class ProfileModule { }
