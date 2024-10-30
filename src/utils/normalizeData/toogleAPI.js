import PropTypes from 'prop-types';

import users from '../../mocksdata/users.json';
import activities from '../../mocksdata/activities.json';
import averageSessions from '../../mocksdata/averageSessions.json';
import performances from '../../mocksdata/performances.json';

const BASE_URL = 'http://localhost:8000/user'
const isMock = true // switch entre les données mockées et l'API

/**
 * Get user informations
 * @param {number} id user id
 * @returns {Promise<Object>} data: informations of the user
 */
async function getUserInformations(id) {

  if (isMock) {
    return { data: users }
  }
  return {url: `${BASE_URL}/${id}`}
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
async function getUserActivityInformations(id) {

  if (isMock) {
    return { data: activities }
  }

  return { url: `${BASE_URL}/${id}/activity` }
}


/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
async function getUserAverageSessions(id) {

  if (isMock) {
    return { data: averageSessions }
  }

  return { url: `${BASE_URL}/${id}/average-sessions` }
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
async function getUserPerformance(id) {

  if (isMock) {
    return { data: performances }
  }

  return { url: `${BASE_URL}/${id}/performance` }
}

const Api = {
  getUserInformations: PropTypes.func.isRequired,
  getUserActivityInformations: PropTypes.func.isRequired,
  getUserAverageSessions: PropTypes.func.isRequired,
  getUserPerformance: PropTypes.func.isRequired
}

Api.propTypes = Api;

export default {
  getUserInformations,
  getUserAverageSessions,
  getUserActivityInformations,
  getUserPerformance
}