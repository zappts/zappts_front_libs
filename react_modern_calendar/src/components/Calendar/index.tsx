import React, { useState, useCallback } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import { Calendar, DayRange, Day } from 'react-modern-calendar-datepicker';
import {
  Container,
  CalendarWrapper,
  Button,
  CalendarFooterWrapper,
  ButtonActionCalendar,
  DayRangeLabel,
} from './styles';

import customCalendarLanguage from './utils/customCalendarLanguage';

const CalendarComponent: React.FC = () => {
  // This state control the displayed day range
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });
  // This state control the applied day range. Is it that you will put on your hook or request
  const [appliedDayRange, setAppliedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });
  const [calendarVisible, setCalendarVisible] = useState(true);

  // Here goes your rules when user select some range.
  const handleSelectRange = useCallback(() => {
    if (!selectedDayRange.from && !selectedDayRange.to) return;

    // If user select only a date, I put the end of range equals to start date.
    if (!selectedDayRange.to) {
      selectedDayRange.to = selectedDayRange.from;
    }

    setAppliedDayRange({
      from: selectedDayRange.from,
      to: selectedDayRange.to,
    });
  }, [selectedDayRange]);

  // Here goes the rules when user click on clear days range button
  const handleClearRange = useCallback(() => {
    setSelectedDayRange({ to: null, from: null });
    setAppliedDayRange({ to: null, from: null })
  }, []);

  const transformDayInLabel = (range: Day): string => {
    return `${range.day}/${range.month}/${range.year}`;
  }
  
  return (
    <Container>
      {/* Testing if user has selected some range */}
      {(!!appliedDayRange.from && !!appliedDayRange.to)
        ? (
          <DayRangeLabel>
            {`
              ${transformDayInLabel(appliedDayRange.from)} to
              ${transformDayInLabel(appliedDayRange.to)}
              `}
          </DayRangeLabel>
        ) : (
          <DayRangeLabel>Select a date :)</DayRangeLabel>
        )}

      <Button
        active={calendarVisible}
        type="button"
        onClick={() => setCalendarVisible(!calendarVisible)}
      >
        {calendarVisible ? 'Open Calendar' : 'Close Calendar'}
      </Button>

      <CalendarWrapper invisible={calendarVisible}>
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        // Here I put a property and the object to change language to portuguese. Use if you need :)
        // locale={customCalendarLanguage}
        renderFooter={() => (
          <CalendarFooterWrapper>
            <ButtonActionCalendar
              type="button"
              className="applyButton"
              onClick={handleSelectRange}
            >
              Apply
            </ButtonActionCalendar>

            <ButtonActionCalendar
              type="button"
              className="clearData"
              onClick={handleClearRange}
            >
              Clear
            </ButtonActionCalendar>
          </CalendarFooterWrapper>
        )}
      />
      </CalendarWrapper>
    </Container>
  )
};

export default CalendarComponent;