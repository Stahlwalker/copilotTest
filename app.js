function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var numDays = Math.abs(beginDate.getTime() - endDate.getTime()) / (24 * 60 * 60 * 1000);
    return Math.round(numDays);
}
