"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthArray = exports.dayArrayTable = exports.dayArray = exports.date_format = void 0;
const monthArray = {
  fr: [{
    name: "janvier",
    abbr: "janv"
  }, {
    name: "février",
    abbr: "fév"
  }, {
    name: "mars",
    abbr: "mars"
  }, {
    name: "avril",
    abbr: "avr"
  }, {
    name: "mai",
    abbr: "may"
  }, {
    name: "juin",
    abbr: "juin"
  }, {
    name: "juillet",
    abbr: "juil"
  }, {
    name: "août",
    abbr: "août"
  }, {
    name: "septembre",
    abbr: "sept"
  }, {
    name: "octobre",
    abbr: "oct"
  }, {
    name: "novembre",
    abbr: "nov"
  }, {
    name: "décembre",
    abbr: "déc"
  }],
  gb: [{
    name: "january",
    abbr: "jan"
  }, {
    name: "february",
    abbr: "feb"
  }, {
    name: "march",
    abbr: "mar"
  }, {
    name: "april",
    abbr: "apr"
  }, {
    name: "may",
    abbr: "may"
  }, {
    name: "june",
    abbr: "june"
  }, {
    name: "july",
    abbr: "july"
  }, {
    name: "august",
    abbr: "aug"
  }, {
    name: "september",
    abbr: "sept"
  }, {
    name: "october",
    abbr: "oct"
  }, {
    name: "november",
    abbr: "nov"
  }, {
    name: "december",
    abbr: "dec"
  }],
  us: [{
    name: "january",
    abbr: "jan"
  }, {
    name: "february",
    abbr: "feb"
  }, {
    name: "march",
    abbr: "mar"
  }, {
    name: "april",
    abbr: "apr"
  }, {
    name: "may",
    abbr: "may"
  }, {
    name: "june",
    abbr: "june"
  }, {
    name: "july",
    abbr: "july"
  }, {
    name: "august",
    abbr: "aug"
  }, {
    name: "september",
    abbr: "sept"
  }, {
    name: "october",
    abbr: "oct"
  }, {
    name: "november",
    abbr: "nov"
  }, {
    name: "december",
    abbr: "dec"
  }],
  es: [{
    name: "enero",
    abbr: "ene"
  }, {
    name: "febrero",
    abbr: "feb"
  }, {
    name: "marzo",
    abbr: "mar"
  }, {
    name: "abril",
    abbr: "apr"
  }, {
    name: "mayo",
    abbr: "may"
  }, {
    name: "junio",
    abbr: "jun"
  }, {
    name: "julio",
    abbr: "july"
  }, {
    name: "agosto",
    abbr: "ago"
  }, {
    name: "septiembre",
    abbr: "sept"
  }, {
    name: "octubre",
    abbr: "oct"
  }, {
    name: "noviembre",
    abbr: "nov"
  }, {
    name: "diciembre",
    abbr: "dic"
  }],
  it: [{
    name: "gennaio",
    abbr: "genn"
  }, {
    name: "febbraio",
    abbr: "febbr"
  }, {
    name: "marzo",
    abbr: "mar"
  }, {
    name: "aprile",
    abbr: "apr"
  }, {
    name: "maggio",
    abbr: "magg"
  }, {
    name: "giugno",
    abbr: "giugno"
  }, {
    name: "luglio",
    abbr: "luglio"
  }, {
    name: "agosto",
    abbr: "ag"
  }, {
    name: "settembre",
    abbr: "sett"
  }, {
    name: "ottobre",
    abbr: "ott"
  }, {
    name: "novembre",
    abbr: "nov"
  }, {
    name: "dicembre",
    abbr: "dic"
  }],
  de: [{
    name: "Januar",
    abbr: "jan"
  }, {
    name: "Februar",
    abbr: "feb"
  }, {
    name: "März",
    abbr: "marz"
  }, {
    name: "April",
    abbr: "apr"
  }, {
    name: "Mai",
    abbr: "mai"
  }, {
    name: "Juni",
    abbr: "juni"
  }, {
    name: "Juli",
    abbr: "july"
  }, {
    name: "August",
    abbr: "aug"
  }, {
    name: "September",
    abbr: "sept"
  }, {
    name: "Oktober",
    abbr: "okt"
  }, {
    name: "November",
    abbr: "nov"
  }, {
    name: "Dezember",
    abbr: "dec"
  }]
};
exports.monthArray = monthArray;
const dayArray = {
  fr: [{
    name: "dimanche",
    abbr: "di"
  }, {
    name: "lundi",
    abbr: "lu"
  }, {
    name: "mardi",
    abbr: "ma"
  }, {
    name: "mercredi",
    abbr: "me"
  }, {
    name: "jeudi",
    abbr: "je"
  }, {
    name: "vendredi",
    abbr: "ve"
  }, {
    name: "samedi",
    abbr: "sam"
  }],
  gb: [{
    name: "sunday",
    abbr: "sun"
  }, {
    name: "monday",
    abbr: "mon"
  }, {
    name: "tuesday",
    abbr: "tue"
  }, {
    name: "wednesday",
    abbr: "wed"
  }, {
    name: "thursday",
    abbr: "thu"
  }, {
    name: "friday",
    abbr: "fri"
  }, {
    name: "saturday",
    abbr: "sat"
  }],
  us: [{
    name: "sunday",
    abbr: "sun"
  }, {
    name: "monday",
    abbr: "mon"
  }, {
    name: "tuesday",
    abbr: "tue"
  }, {
    name: "wednesday",
    abbr: "wed"
  }, {
    name: "thursday",
    abbr: "thu"
  }, {
    name: "friday",
    abbr: "fri"
  }, {
    name: "saturday",
    abbr: "sat"
  }],
  es: [{
    name: "Domingo",
    abbr: "dom"
  }, {
    name: "Lunes",
    abbr: "lun"
  }, {
    name: "Martes",
    abbr: "mar"
  }, {
    name: "Miércoles",
    abbr: "mié"
  }, {
    name: "Jueves",
    abbr: "juv"
  }, {
    name: "Viernes",
    abbr: "vie"
  }, {
    name: "Sábado",
    abbr: "sáb"
  }],
  it: [{
    name: "domenica",
    abbr: "do"
  }, {
    name: "lunedì",
    abbr: "lun"
  }, {
    name: "martedì",
    abbr: "mar"
  }, {
    name: "mercoledì",
    abbr: "mer"
  }, {
    name: "giovedì",
    abbr: "gio"
  }, {
    name: "venerdì",
    abbr: "ven"
  }, {
    name: "sabato",
    abbr: "sab"
  }],
  de: [{
    name: "Montag",
    abbr: "mo"
  }, {
    name: "Dienstag",
    abbr: "di"
  }, {
    name: "Mittwoch",
    abbr: "mi"
  }, {
    name: "Donnerstag",
    abbr: "do"
  }, {
    name: "Freitag",
    abbr: "fr"
  }, {
    name: "Samstag",
    abbr: "sa"
  }, {
    name: "Sonntag",
    abbr: "so"
  }]
};
exports.dayArray = dayArray;
const dayArrayTable = {
  fr: [{
    name: "lundi",
    abbr: "lu"
  }, {
    name: "mardi",
    abbr: "ma"
  }, {
    name: "mercredi",
    abbr: "me"
  }, {
    name: "jeudi",
    abbr: "je"
  }, {
    name: "vendredi",
    abbr: "ve"
  }, {
    name: "samedi",
    abbr: "sam"
  }, {
    name: "dimanche",
    abbr: "di"
  }],
  gb: [{
    name: "monday",
    abbr: "mon"
  }, {
    name: "tuesday",
    abbr: "tue"
  }, {
    name: "wednesday",
    abbr: "wed"
  }, {
    name: "thursday",
    abbr: "thu"
  }, {
    name: "friday",
    abbr: "fri"
  }, {
    name: "saturday",
    abbr: "sat"
  }, {
    name: "sunday",
    abbr: "sun"
  }],
  us: [{
    name: "monday",
    abbr: "mon"
  }, {
    name: "tuesday",
    abbr: "tue"
  }, {
    name: "wednesday",
    abbr: "wed"
  }, {
    name: "thursday",
    abbr: "thu"
  }, {
    name: "friday",
    abbr: "fri"
  }, {
    name: "saturday",
    abbr: "sat"
  }, {
    name: "sunday",
    abbr: "sun"
  }],
  es: [{
    name: "Lunes",
    abbr: "lun"
  }, {
    name: "Martes",
    abbr: "mar"
  }, {
    name: "Miércoles",
    abbr: "mié"
  }, {
    name: "Jueves",
    abbr: "juv"
  }, {
    name: "Viernes",
    abbr: "vie"
  }, {
    name: "Sábado",
    abbr: "sáb"
  }, {
    name: "Domingo",
    abbr: "dom"
  }],
  it: [{
    name: "lunedì",
    abbr: "lun"
  }, {
    name: "martedì",
    abbr: "mar"
  }, {
    name: "mercoledì",
    abbr: "mer"
  }, {
    name: "giovedì",
    abbr: "gio"
  }, {
    name: "venerdì",
    abbr: "ven"
  }, {
    name: "sabato",
    abbr: "sab"
  }, {
    name: "domenica",
    abbr: "do"
  }],
  de: [{
    name: "Dienstag",
    abbr: "di"
  }, {
    name: "Mittwoch",
    abbr: "mi"
  }, {
    name: "Donnerstag",
    abbr: "do"
  }, {
    name: "Freitag",
    abbr: "fr"
  }, {
    name: "Samstag",
    abbr: "sa"
  }, {
    name: "Sonntag",
    abbr: "so"
  }, {
    name: "Montag",
    abbr: "mo"
  }]
};
exports.dayArrayTable = dayArrayTable;
const date_format = {
  fr: {
    placeholder: "jj/mm/yyyy",
    separator: "/",
    yearLength: 4
  },
  gb: {
    placeholder: "dd/mm/yy",
    separator: "/",
    yearLength: 2
  },
  us: {
    placeholder: "mm-dd-yy",
    separator: "-",
    yearLength: 2
  },
  es: {
    placeholder: "dd-mm-yy",
    separator: "-",
    yearLength: 2
  },
  it: {
    placeholder: "dd.mm.yy",
    separator: ".",
    yearLength: 2
  },
  de: {
    placeholder: "yyyy-mm-dd",
    separator: "-",
    yearLength: 4
  }
};
exports.date_format = date_format;