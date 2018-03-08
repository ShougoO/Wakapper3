import { Injectable } from '@angular/core';

@Injectable()
export class CalendarProvider {

    constructor() {}
    public getCalendarYM(year, month){
        let c = this.generateCalendar(year, month);
        return c;
    }
    generateCalendar(year, month){
        let day = this.calc_day(year, month);
        let year_days =  [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let leap_year_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        day -= 1;
        if (day < 0){
            day += 7;
        }

        let leap_year_flag = this.leap_year_judge(year);
        let result_month = [];

        if(leap_year_flag){
            result_month = this.generateDate(year, leap_year_days, month, day);
        }else{
            result_month = this.generateDate(year, year_days, month, day);
        }
        let c = {
            year:year,
            month:month,
            week: result_month
        }
        return c;
    }
    calc_day(year, month, day:any = 1){
        var startDate = new Date(year, month - 1 , 1);
        return startDate.getDay() + 1;
    }
    leap_year_judge(year){
        if ((year % 400) == 0) {
            return true;
        }else if((year % 100) == 0){
            return true;
        }else if((year % 4) == 0){
            return true;
        }else{
            return false;
        }
    }
    generateDate(year, year_date, month, first_day){
        let cur_day = 1;
        let other_day = 1;
        let first_day_chk = false;
        let result_month = [];
        for(var w = 0; w< 6; w++){
            var week = [];
            for(var i = 1; i <= 7; i++){
                var day = {};
                day["day"]="";
                if(i <= first_day && !first_day_chk){
                    let last_m = this.lastMonth(year, month);
                    day["day"] = year_date[last_m[1]] - first_day + i;
                    day["other"] = true;
                }else{
                    if(!first_day_chk){
                        first_day_chk = true;
                    }
                    if(cur_day <= year_date[month]){
                        day["day"] = cur_day;
                    }else{
                        day["day"] = other_day;
                        day["other"] = true;
                        other_day += 1;
                    }
                    cur_day += 1;
                }
                week.push(day);
            }
            result_month.push(week);
        }
        return result_month;
    }
    public getToday(){
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let date = today.getDate();
        return [year, month, date];
    }
    public nextMonth(year, month){
        let next_year = year;
        let next_month = month + 1;
        if(13 <= next_month){
            next_month = 1;
            next_year = next_year + 1;
        }
        return [next_year, next_month];
    }
    public lastMonth(year, month){
        let last_year = year;
        let last_month = month - 1;
        if(last_month <= 0){
            last_month = 12;
            last_year = last_year - 1;
        }
        return [last_year, last_month];
    }
}
