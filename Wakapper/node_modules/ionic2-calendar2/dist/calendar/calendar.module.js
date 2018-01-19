import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
// import { TickTockService } from './services';
var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [],
                    declarations: [
                        CalendarComponent,
                    ],
                    exports: [
                        CalendarComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
export { CalendarModule };
//# sourceMappingURL=calendar.module.js.map