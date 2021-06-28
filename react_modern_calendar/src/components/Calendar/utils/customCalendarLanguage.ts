import { CalendarDigit, Day } from 'react-modern-calendar-datepicker';

export default {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],

  weekDays: [
    {
      name: 'Domingo',
      short: 'D',
    },
    {
      name: 'Segunda-feira',
      short: 'S',
    },
    {
      name: 'Terça-feira',
      short: 'T',
    },
    {
      name: 'Quarta-feira',
      short: 'Q',
    },
    {
      name: 'Quinta-feira',
      short: 'Q',
    },
    {
      name: 'Sexta-feira',
      short: 'S',
    },
    {
      name: 'Sábado',
      short: 'S',
    },
  ],

  weekStartingIndex: 0,

  getToday(gregorainTodayObject: Day): Day {
    return gregorainTodayObject;
  },

  toNativeDate(date: Day): Date {
    return new Date(date.year, date.month - 1, date.day);
  },

  getMonthLength(date: Day): number {
    return new Date(date.year, date.month, 0).getDate();
  },

  transformDigit(digit: CalendarDigit): CalendarDigit {
    return digit;
  },

  nextMonth: 'Próximo mês',
  previousMonth: 'Mês anterior',
  openMonthSelector: 'Abrir seletor de mês',
  openYearSelector: 'Abrir seletor de ano',
  closeMonthSelector: 'Fechar seletor de mês',
  closeYearSelector: 'Fechar seletor de ano',
  defaultPlaceholder: 'Selecione...',

  from: 'de',
  to: 'para',

  digitSeparator: ',',

  yearLetterSkip: 0,

  isRtl: false,
};
