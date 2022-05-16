$w.onReady(function () {

    $w("#datePicker1").disabledDaysOfWeek = [6, 0];

    let badDate1 = new Date(2020, 5, 6);

    let badDate2 = new Date(2020, 6, 11);

    $w("#datePicker1").disabledDates = [badDate1, badDate2];

});