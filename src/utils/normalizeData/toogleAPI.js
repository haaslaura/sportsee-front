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
  if (isMock === true) {
    // console.log('users', users)
    return users
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
}

/**
 * Get user activity information
 * @param {number} id user id
 * @returns {Promise<Object>} data: user activity information
 */
async function getUserActivityInformations(id) {
  if (isMock === true) {
    // console.log('activities', activities);
    return activities
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/activity`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
}

/**
 * Get user AverageSessions
 * @param {number} id user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
async function getUserAverageSessions(id) {
  if (isMock === true) {
    // console.log('averageSessions', averageSessions)
    return averageSessions
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/average-sessions`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
}

/**
 * Get user performance
 * @param {number} id user id
 * @returns {Promise<Object>} data : user performance
 */
async function getUserPerformance(id) {
  if (isMock === true) {
    // console.log('performances', performances);
    return performances
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${id}/performance`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
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