//Data modeling service
import PropTypes from 'prop-types';

/**
 * Calorie Conversion
 * @param {number} calorie
 * @returns {string}
 */
export function converToKCal(calorie) {
  const kiloCal = calorie / 1000;
  return kiloCal.toFixed(3);
}

converToKCal.propTypes = {
  calorie: PropTypes.number.isRequired
}

/**
 * Percentage conversion
 * @param {number} score
 * @returns {number}
 */
export function converToPercent(score) {
  // let nombre = score;
  let pourcentage = score * 100; //Multiplication by 100 to convert to percentage
  return pourcentage + '%';
}

converToPercent.propTypes = {
  score: PropTypes.number.isRequired
};

/**
 * Function to retrieve only the day of a date
 * @param {string} date
 * @returns {string}
 */
export function converToDate(date) {
  // Create a Date object from the character string representing the date
  const maDate = new Date(date);
  // Extract the day of the month corresponding to this date
  const jour = maDate.getDate();
  // Display the day of the month
  return jour.toString();
}

converToDate.propTypes = {
  date: PropTypes.string.isRequired
};

/**
 * Function to display only the first letter of the retrieved day
 * @param {number} day
 * @returns {string}
 */
export function getDayOfWeek(day) {
  const daysOfWeek = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  ];
  const dayString = daysOfWeek[day - 1];
  return dayString.charAt(0);
}

getDayOfWeek.propTypes = {
  day: PropTypes.number.isRequired
};

/**
 * Function translate a specific object from English to French
 * @param {string} text
 * @returns {string}
 */
export function translateEnglishToFrench(text) {
  const dictionary = {
    energy: 'Energie',
    strength: 'Force',
    intensity: 'Intensité',
    speed: 'Vitesse',
    cardio: 'Cardio',
    endurance: 'Endurance'
  };

  const translatedWords = text.split(' ').map((word) => {
    const translatedWord = dictionary[word];
    return translatedWord ? translatedWord : word;
  });
  return translatedWords.join(' ');
}

translateEnglishToFrench.propTypes = {
  text: PropTypes.string.isRequired
};

export default {
  converToKCal,
  getDayOfWeek,
  converToDate,
  converToPercent,
  translateEnglishToFrench
};