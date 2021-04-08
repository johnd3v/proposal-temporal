// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.from
description: Fast path for converting other Temporal objects to Temporal.Calendar by reading internal slots
info: |
    sec-temporal.plainmonthday.from step 3:
      3. Return ? ToTemporalMonthDay(_item_, _options_).
    sec-temporal-totemporalmonthday step 3.e:
      c. Set _calendar_ to ? GetOptionalTemporalCalendar(_item_).
    sec-temporal-getoptionaltemporalcalendar step 2:
      2. Return ? ToOptionalTemporalCalendar(_calendar_).
    sec-temporal-tooptionaltemporalcalendar step 2:
      3. Return ? ToTemporalCalendar(_temporalCalendarLike_).
    sec-temporal-totemporalcalendar step 1.a:
      a. If _temporalCalendarLike_ has an [[InitializedTemporalDate]], [[InitializedTemporalDateTime]], [[InitializedTemporalMonthDay]], [[InitializedTemporalYearMonth]], or [[InitializedTemporalZonedDateTime]] internal slot, then
        i. Return _temporalCalendarLike_.[[Calendar]].
includes: [compareArray.js, temporalHelpers.js]
---*/

TemporalHelpers.checkToTemporalCalendarFastPath((temporalObject, calendar) => {
  const result = Temporal.PlainMonthDay.from({ monthCode: "M05", day: 2, calendar: temporalObject });
  assert.sameValue(result.calendar, calendar, "Temporal object coerced to calendar");
});
