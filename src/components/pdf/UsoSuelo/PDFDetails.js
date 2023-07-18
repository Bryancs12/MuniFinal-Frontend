const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];

const hours = { 0: 'cero', 1: 'un', 2: 'dos', 3: 'tres', 4: 'cuatro', 5: 'cinco', 6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve', 10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 100: 'dieci', 20: 'veinte', 21: 'veinti', 30: 'treinta', 40: 'cuarenta', 50: 'cincuenta' };

export function getDate() {
  return `${new Date().getDate()} de ${months[new Date().getMonth()]} del ${new Date().getFullYear()}`
}

export function getCompleteHour() {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${getTimes(hour, hours)} con ${getTimes(minutes, hours)} minutos del día ${new Date().getDate()} de ${months[new Date().getMonth()]} del ${getYear(hours)}`
}

export const getTimes = (time, obj) => {
  let getTime = 0;

  if (time > 15) {
    if (time > 19 && time < 30) {
      time % 10 === 0 ? getTime = obj[time] : getTime = `${obj[21]}${obj[time.toString().substring(1)]}`
    } else if (time > 15 && time < 20) {
      getTime = `${obj[time.toString().substring(0, 1) + '00']}${obj[time.toString().substring(1)]}`
    }
    else {
      time % 10 === 0 ? getTime = obj[time] : getTime = `${obj[time.toString().substring(0, 1) + '0']} y ${obj[time.toString().substring(1)]}`
    }
  } else {
    getTime = obj[time];
  }
  return getTime
}

export function getYear(obj) {
  const year = new Date().getFullYear().toString().substring(2);
  return `dos mil ${getTimes(year, obj)}`
}

export function generateDocID(id) {
  return `Oficio-US-${id?.toString().padStart(4, '0')}-${new Date().getFullYear()}`
}

export function idFormat(id) {

  return `${id?.substring(0, 1)}-${id?.substring(1, 5)}-${id.substring(5)}`;
}

export function plainFormat(plain) {
  return `${plain?.substring(0, 7)}-${plain?.substring(7)}`;
}

export function formatoNumeroFinca(numeroFinca) {
  return `${numeroFinca?.substring(0, 6)}-${numeroFinca?.substring(6)}`;
} 