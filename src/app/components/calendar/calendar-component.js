import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { Inject } from 'angular2/angular2';
import { Calendar } from "./model/calendar/calendar";

@Component({ selector: 'calendar', bindings: [] })
@View({
	templateUrl: 'app/components/calendar/calendar-component.html',
	directives: [NgFor, NgIf],
	pipes: []
})
export class CalendarComponent {

	constructor() {
		// 视图模式，一个三个，可以切换，默认是显示日期的
		this.ViewStates = Object.freeze({
			DATE: 0,
			MONTH: 1,
			YEAR: 2
		});
		
		this.calendar = new Calendar();
		
		this.weekdays = ["日", "一", "二", "三", "四", "五", "六"];
		this.months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

		this.viewMode = this.ViewStates.DATE;	

		if (this.selectedDate) {
			this.calendar.year = this.selectedDate.getFullYear();
			this.calendar.month = this.selectedDate.getMonth();
			this.calendar.date = this.selectedDate.getDate();
		}
	}

	dateInRange(day) {
		if (!day) {
			return true;
		}

		if (this.minDate) {
			if (day.date - this.minDate < 0) {
				return false;
			}
		}
		if (this.maxDate) {
			if (day.date - this.maxDate > 0) {
				return false;
			}
		}
		return true;
	}

	selectDate(day) {
		if (this.dateInRange(day)) {
			this.calendar.selectedDate = day;
		}
	}

	selectMonth(month) {
		this.calendar.month = month;
		this.viewMode = this.ViewStates.DATE;
	}

	selectYear(year) {
		this.calendar.year = year;
		this.viewMode = this.ViewStates.MONTH;
	}
}
