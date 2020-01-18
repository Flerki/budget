import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoryOverviewComponent} from './category/category-overview.component';
import {YearListComponent} from './year-list.component';
import {MonthOverviewComponent} from './month-overview.component';
import {SortableHeaderDirective} from './sortable-header.directive';
import {DateOverviewComponent} from "./date-overview.component";
import {MonthListComponent} from "./month-list.component";
import {MortgageComponent} from "./mortgage/mortgage.component";
import {PerYearComponent} from "./category/per-year.component";

@NgModule({
    declarations: [
        AppComponent,
        CategoryOverviewComponent,
        YearListComponent,
        MonthListComponent,
        MonthOverviewComponent,
        SortableHeaderDirective,
        DateOverviewComponent,
        MortgageComponent,
        PerYearComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
