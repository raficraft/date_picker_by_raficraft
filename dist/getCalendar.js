"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCalendar = void 0;

require("core-js/modules/es.parse-int.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.parse-float.js");

var _calendarArray = require("./data/calendarArray");

class GetCalendar {
  constructor(startCalendar, endCalendar, format) {
    if (endCalendar < new Date().getFullYear()) {
      endCalendar = new Date().getFullYear();
    }

    if (startCalendar > new Date().getFullYear()) {
      startCalendar = new Date().getFullYear();
    }

    this.monthArray = _calendarArray.monthArray;
    this.dayArray = _calendarArray.dayArray;
    this.startCalendar = parseInt(startCalendar);
    this.endCalendar = parseInt(endCalendar); //Exemple Samedi 10 juillet 2021

    this.format = format;
    this.date = new Date();
    this.currentDate = {
      day: this.date.getDay(),
      // 6éme jour de la semaine [6] === samedi !! [0] === dimanche
      date: this.date.getDate(),
      // jour du mois 10
      month: this.date.getMonth(),
      // 6éme mois de l'année juillet [0] === janvier
      year: this.date.getFullYear(),
      //2021
      dayName: this.getDayName(this.date.getDay()),
      //samedi
      monthName: this.getMonthName(this.date.getMonth()),
      // juillet
      leapYear: this.isleapYear(this.date.getFullYear()),
      numberDayOfThisYear: this.getNumberDayOfYear(this.isleapYear(this.date.getFullYear()))
    };
    this.numberOfDays = 7;
    this.numberOfWeeks = 5;
    this.monthLengthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const terminalDateByCurrentDay = this.getTerminalDayByReferenceDate(this.currentDate.month, this.currentDate.date, this.currentDate.year, this.currentDate.day); //Create Array containe all year for this Calendar

    this.calendarArray = this.createCalendarArray(); //Define terminal date in calendarArray with the current year

    this.calendarArray[this.currentDate.year] = terminalDateByCurrentDay;
    this.createCalendarTerminal(this.calendarArray);
    this.createMonthCalendar(this.calendarArray);
    this.calendarArray["day"] = this.dayArray[this.format];
    this.calendarArray["month"] = this.monthArray[this.format];
  } //Method of calculating calendar items


  getMonthName(month) {
    return this.monthArray[this.format][month];
  }

  getMonthKeyByName(val) {
    let searchKey = 0;

    for (const [key, value] of Object.entries(this.monthArray[this.format])) {
      if (value.name === val) {
        searchKey = key;
      }
    }

    return searchKey;
  }

  getDayName(day) {
    return this.dayArray[this.format][day];
  }

  getDayNameByKey(key) {
    return this.dayArray[this.format][key];
  }

  getPrevDayKey(key) {
    return key - 1 < 0 ? 6 : key - 1;
  }

  getNextDayKey(key) {
    return key + 1 > 6 ? 0 : key + 1;
  }

  getFullDateWithName() {
    // Samedi 10 juillet 2021
    if (this.format === "fr") {
      return "".concat(this.currentDate.dayName.name, " ").concat(this.currentDate.date, " ").concat(this.currentDate.monthName.name, " ").concat(this.currentDate.year);
    } else if (this.format === "gb") {
      return "".concat(this.currentDate.monthName.name, " ").concat(this.currentDate.date, " ").concat(this.currentDate.dayName.name, " ").concat(this.currentDate.year);
    }
  }

  getFullDateWithAbbr() {
    // Sam 10 juil 2021
    if (this.format === "fr") {
      return "".concat(this.currentDate.dayName.abbr, " ").concat(this.currentDate.date, " ").concat(this.currentDate.monthName.abbr, " ").concat(this.currentDate.year);
    } else if (this.format === "gb") {
      return "".concat(this.currentDate.monthName.abbr, " ").concat(this.currentDate.date, " ").concat(this.currentDate.dayName.abbr, " ").concat(this.currentDate.year);
    }
  }

  getFullDateFormated(day, month, year) {
    const format = _calendarArray.date_format[this.format];
    const slicer = -format.yearLength;
    const dayFormatted = day < 10 ? "0" + day : day;
    const monthFormatted = month < 10 ? "0" + month : month;
    const separator = format.separator;
    const yearFormatted = year.toString().slice(slicer);

    switch (this.format) {
      case "us":
        return "".concat(monthFormatted).concat(separator).concat(dayFormatted).concat(separator).concat(yearFormatted);

      case "fr":
      case "gb":
      case "es":
      case "it":
        return "".concat(dayFormatted).concat(separator).concat(monthFormatted).concat(separator).concat(yearFormatted);

      case "de":
        return "".concat(yearFormatted).concat(separator).concat(monthFormatted).concat(separator).concat(dayFormatted);

      default:
        return;
    }
  } //Utility for manage february case


  isleapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  getNumberDayOfYear(leapYear) {
    return leapYear ? 366 : 365;
  }

  getFebruaryLength(leapYear) {
    return leapYear ? 29 : 28;
  }

  redifineMonthArray(year) {
    this.monthLengthArray[1] = this.getFebruaryLength(this.isleapYear(year));
  }
  /* Calculate all first and last day of year */

  /* Calculate the first and the last day of current Year 
  as well the last day of prev year and the first day of next year 
  in the current year Array
  */


  getTerminalDayByReferenceDate(month, date, year, day) {
    this.redifineMonthArray(year);
    const monthBeforeThisDate = this.monthLengthArray.slice(0, month); //number of days since the beginning of the year by contribution to the current date

    const totalDay = monthBeforeThisDate.reduce((acc, curr, index) => {
      return acc + curr;
    }, 0) + date;
    const isleapYear = this.isleapYear(year); //Calculate First Day of the current Year

    const firstDayOffset = day - (totalDay % 7 - 1);
    let keyToFirstDayOfThisYear = firstDayOffset < 0 ? 6 + firstDayOffset + 1 : firstDayOffset; //Calculate last Day of the current year

    const yearLength = this.getNumberDayOfYear(this.isleapYear(year));
    const lastDayOffset = yearLength % 7;
    let keyToLastDayOfThisYear = keyToFirstDayOfThisYear + lastDayOffset - 1 > 6 ? 0 : keyToFirstDayOfThisYear + lastDayOffset - 1;
    const lastDayOfPrevYear = this.getPrevDayKey(keyToFirstDayOfThisYear);
    const firstDayOfNextYear = this.getNextDayKey(keyToLastDayOfThisYear);
    return {
      yearInfo: {
        lastDayPrevYear: {
          key: lastDayOfPrevYear,
          year: year - 1,
          name: this.getDayNameByKey(lastDayOfPrevYear).name,
          abbr: this.getDayNameByKey(lastDayOfPrevYear).abbr,
          date: 31,
          month: this.getMonthName(11)
        },
        firstDay: {
          key: keyToFirstDayOfThisYear,
          year,
          name: this.getDayNameByKey(keyToFirstDayOfThisYear).name,
          abbr: this.getDayNameByKey(keyToFirstDayOfThisYear).abbr,
          date: 1,
          month: this.getMonthName(0)
        },
        lastDay: {
          key: keyToLastDayOfThisYear,
          year,
          name: this.getDayNameByKey(keyToLastDayOfThisYear).name,
          abbr: this.getDayNameByKey(keyToLastDayOfThisYear).abbr,
          date: 31,
          month: this.getMonthName(11)
        },
        firstDayNextYear: {
          key: firstDayOfNextYear,
          year: year + 1,
          name: this.getDayNameByKey(firstDayOfNextYear).name,
          abbr: this.getDayNameByKey(firstDayOfNextYear).abbr,
          date: 1,
          month: this.getMonthName(0)
        },
        isleapYear
      }
    };
  }
  /* Calculate the first and last day of prev year by contribution to the current year */


  getCalendarTerminalPrev(currentYear, currentTerminal) {
    const newYear = currentYear - 1;

    if (newYear >= this.startCalendar) {
      const isleapYear = this.isleapYear(newYear);
      const offset = isleapYear ? 1 : 0;
      const lastDayByRef = this.calendarArray[currentYear].yearInfo.lastDayPrevYear.key;
      const newFirstDay = lastDayByRef - offset < 0 ? 6 : lastDayByRef - offset;
      const lastDayOfPrevYear = this.getPrevDayKey(newFirstDay);
      this.calendarArray[newYear].yearInfo = {
        lastDayPrevYear: {
          key: lastDayOfPrevYear,
          year: newYear - 1,
          name: this.getDayNameByKey(lastDayOfPrevYear).name,
          abbr: this.getDayNameByKey(lastDayOfPrevYear).abbr,
          date: 31,
          month: this.getMonthName(11)
        },
        firstDay: {
          key: newFirstDay,
          year: newYear,
          name: this.getDayNameByKey(newFirstDay).name,
          abbr: this.getDayNameByKey(newFirstDay).abbr,
          date: 1,
          month: this.getMonthName(0)
        },
        lastDay: this.calendarArray[currentYear].yearInfo.lastDayPrevYear,
        //by ref
        firstDayNextYear: this.calendarArray[currentYear].yearInfo.firstDay,
        //by ref
        isleapYear //by calc

      };
      return this.getCalendarTerminalPrev(newYear, this.calendarArray[newYear]);
    }

    return false;
  }
  /* Calculate the first and last day of next year by contribution to the current year */


  getCalendarTerminalNext(currentYear, currentTerminal) {
    const newYear = currentYear + 1;

    if (newYear <= this.endCalendar) {
      const isleapYear = this.isleapYear(newYear);
      const offset = isleapYear ? 1 : 0;
      const firstDayByRef = this.calendarArray[currentYear].yearInfo.firstDayNextYear.key;
      const newLastDay = firstDayByRef + offset > 6 ? 0 : firstDayByRef + offset;
      const lastDayOfPrevYear = this.getNextDayKey(newLastDay);
      this.calendarArray[newYear].yearInfo = {
        lastDayPrevYear: this.calendarArray[currentYear].yearInfo.lastDay,
        //by ref
        firstDay: this.calendarArray[currentYear].yearInfo.firstDayNextYear,
        //by ref
        lastDay: {
          key: newLastDay,
          year: newYear,
          name: this.getDayNameByKey(newLastDay).name,
          abbr: this.getDayNameByKey(newLastDay).abbr,
          date: 31,
          month: this.getMonthName(11)
        },
        firstDayNextYear: {
          key: lastDayOfPrevYear,
          year: newYear + 1,
          name: this.getDayNameByKey(lastDayOfPrevYear).name,
          abbr: this.getDayNameByKey(lastDayOfPrevYear).abbr,
          date: 1,
          month: this.getMonthName(0)
        },
        isleapYear
      };
      return this.getCalendarTerminalNext(newYear, this.calendarArray[newYear]);
    }

    return false;
  }
  /* Create all the empty arrays for the years passed in parameter */


  createCalendarArray() {
    let calendarArray = [];

    for (let start = this.startCalendar; start <= this.endCalendar; start++) {
      calendarArray[start] = {
        yearInfo: {}
      };
    }

    return calendarArray;
  }

  createCalendarTerminal(calendarArray) {
    const currentYear = this.currentDate.year;
    this.getCalendarTerminalPrev(currentYear, calendarArray[currentYear]);
    this.getCalendarTerminalNext(currentYear, calendarArray[currentYear]);
  } // Create Month Calendar


  createMonthCalendar(calendarArray) {
    for (const key in calendarArray) {
      if (Object.hasOwnProperty.call(calendarArray, key)) {
        const yearArray = calendarArray[key];
        const year = parseFloat(key);
        const firstDayKey = yearArray.yearInfo.firstDay;
        this.redifineMonthArray(year);
        yearArray.month = [];

        for (const key in this.monthArray[this.format]) {
          if (Object.hasOwnProperty.call(this.monthArray[this.format], key)) {
            const month = this.monthArray[this.format][key];
            const monthKey = parseFloat(key);
            yearArray.month[monthKey] = {
              name: month.name,
              abbr: month.abbr,
              year: year,
              monthKey: monthKey,
              firstDay: firstDayKey,
              monthLength: this.monthLengthArray[monthKey]
            };
            yearArray.month[monthKey].calendar = [];
            this.createDayOfMonth(yearArray.month[monthKey].calendar, monthKey);
          }
        }

        this.createMonth(yearArray.month);
      }
    }
  }

  createDayOfMonth(calendar, monthKey) {
    const monthLenght = this.monthLengthArray[monthKey];

    for (let inc = 1; inc < monthLenght; inc++) {
      calendar[inc] = [];
    }
  }

  createMonth(monthArray) {
    for (const key in monthArray) {
      if (Object.hasOwnProperty.call(monthArray, key)) {
        const currentMonth = monthArray[key];
        const monthKey = currentMonth.monthKey;
        const monthLength = this.monthLengthArray[monthKey]; //L'on crée les datas de chaque pour le mois en cours + le jour suivant

        let firstDayKey = currentMonth.firstDay.key;
        let newKey = firstDayKey;

        for (let inc = 0; inc < monthLength; inc++) {
          if (inc > 0) {
            newKey = newKey + 1 > 6 ? 0 : newKey + 1;
          }

          currentMonth.calendar[inc] = {
            key: newKey,
            name: this.getDayNameByKey(newKey).name,
            abbr: this.getDayNameByKey(newKey).abbr,
            date: inc + 1,
            style: "current",
            year: currentMonth.year,
            month: this.getMonthName(currentMonth.monthKey),
            monthKey: currentMonth.monthKey,
            fullDate: this.getFullDateFormated(inc + 1, // day
            currentMonth.monthKey + 1, //monthKey
            currentMonth.year //year of this month
            )
          }; //calculate firstDay of this month

          if (currentMonth.monthKey < 11) {
            monthArray[monthKey + 1].firstDay = {
              key: this.getNextDayKey(newKey),
              name: this.getDayNameByKey(this.getNextDayKey(newKey)).name,
              abbr: this.getDayNameByKey(this.getNextDayKey(newKey)).abbr,
              date: 1
            };
          }
        }

        currentMonth.lastDay = currentMonth.calendar[monthLength - 1];
        this.createWeek(currentMonth);
      }
    }
  }

  createWeek(currentMonth) {
    const firstDay = currentMonth.firstDay;
    const lastDay = currentMonth.lastDay;
    currentMonth.offset = {
      start: firstDay.key + 1 > 7 ? 7 : 7 - firstDay.key === 7 ? 0 : 7 - firstDay.key,
      end: lastDay.key + 1 > 7 ? 7 : 7 - lastDay.key
    }; //CalculateWeek

    currentMonth.weeks = [];

    for (let i = 0; i < 6; i++) {
      if (7 * i + currentMonth.offset.start - 6 < currentMonth.monthLength) {
        let weekOffset = {
          start: i === 0 ? 0 : 7 * i + currentMonth.offset.start - 6,
          end: 7 * i + currentMonth.offset.start > currentMonth.monthLength ? currentMonth.monthLength : 7 * i + currentMonth.offset.start + 1
        };
        currentMonth.weeks[i] = currentMonth.calendar.slice(weekOffset.start, weekOffset.end);
      }
    }

    this.completeWeeks(currentMonth);
  }

  completeWeeks(currentMonth) {
    //Get prevMonthKey
    const prevMonthKeyIndex = currentMonth.monthKey - 1 < 0 ? 11 : currentMonth.monthKey - 1;
    const lengthOfPrevMonth = this.monthLengthArray[prevMonthKeyIndex];
    const completeWeekOffset = {
      firstWeek: 7 - currentMonth.offset.start - 1,
      lastWeek: currentMonth.offset.end
    }; //Get last week reference

    const lastWeekIndex = currentMonth.weeks.length - 1;
    const lastDayIndex = currentMonth.weeks[lastWeekIndex].length - 1;
    const referenceDay = {
      //this reference is the first day of first week of thes month
      first: currentMonth.weeks[0][0],
      //this reference is the last day of last week of thes month
      last: currentMonth.weeks[lastWeekIndex][lastDayIndex]
    };

    if (completeWeekOffset.firstWeek > 0) {
      for (let i = 0; i < completeWeekOffset.firstWeek; i++) {
        let newRefFirstDay = referenceDay.first.key - i - 1 < 0 ? referenceDay.first.key - i - 1 + 7 : referenceDay.first.key - i - 1;
        const newDay = {
          key: this.getPrevDayKey(referenceDay.first.key - i),
          name: this.getDayNameByKey(newRefFirstDay).name,
          abbr: this.getDayNameByKey(newRefFirstDay).abbr,
          date: lengthOfPrevMonth - i,
          style: "notCurrent",
          year: currentMonth.year,
          month: this.getMonthName(currentMonth.monthKey),
          monthKey: currentMonth.monthKey,
          fullDate: this.getFullDateFormated(lengthOfPrevMonth - i, // day
          currentMonth.monthKey, //monthKey
          currentMonth.year //year of this month
          )
        };
        currentMonth.weeks[0].splice(0, 0, newDay);
      }
    } //complete last week


    if (completeWeekOffset.lastWeek > 0) {
      for (let i = 0; i < completeWeekOffset.lastWeek; i++) {
        let lenghtOfLastWeek = currentMonth.weeks[lastWeekIndex].length;
        let newRefLastDay = referenceDay.last.key + i + 1 > 6 ? 0 : referenceDay.last.key + i + 1;
        const newDay = {
          key: this.getNextDayKey(referenceDay.last.key + i),
          name: this.getDayNameByKey(newRefLastDay).name,
          abbr: this.getDayNameByKey(newRefLastDay).abbr,
          date: i + 1,
          style: "notCurrent",
          year: currentMonth.year,
          month: this.getMonthName(currentMonth.monthKey),
          monthKey: currentMonth.monthKey,
          fullDate: this.getFullDateFormated(i + 1, // day
          currentMonth.monthKey + 2, //monthKey
          currentMonth.year //year of this month
          )
        };

        if (currentMonth.weeks[lastWeekIndex].length <= 6) {
          currentMonth.weeks[lastWeekIndex].splice(lenghtOfLastWeek, 0, newDay);
        }
      }
    }
  }

}

exports.GetCalendar = GetCalendar;