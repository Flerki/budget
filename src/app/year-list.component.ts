import {Component, OnInit} from '@angular/core';
import {ExpenseService} from './expense.service';

@Component({
    selector: 'year-list',
    template: `
        <div style="width: 600px" class="card">
            <div class="card-body">
                <h5 class="card-title">Expenses per year</h5>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Total</th>
                        <th scope="col">Month Avg.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let entry of data" [class.chosen]="entry.year === year" (click)="chooseYear(entry)" >
                        <td>{{entry.year}}</td>
                        <td>{{entry.total | number:'0.2-2'}}</td>
                        <td>{{entry.monthlyAverage | number:'0.2-2'}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    styles: [
        'tr {cursor: pointer;}',
        'tr:hover {background-color: #DDD;}',
        'tr.chosen {background-color: #EEE;}',
        'tr.chosen:hover {background-color: #DDD;}'
    ]
})
export class YearListComponent implements OnInit {
    data = [];
    year: number;

    constructor(private expenseService: ExpenseService) {
        this.data = expenseService.getPerYear();
    }

    ngOnInit() {
        this.expenseService.currentYear.subscribe(year => this.year = year);
    }

    chooseYear(yearInfo) {
        const chosenYear = yearInfo.year;
        this.expenseService.changeYear(chosenYear);
    }
}