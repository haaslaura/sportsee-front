import PropTypes from 'prop-types'
import users from '../mocksdata/users.json'
import activities from '../mocksdata/activities.json'
import performances from '../mocksdata/performances.json'
import averageSessions from '../mocksdata/averageSessions.json'

const BASE_URL = 'http://localhost:8000/user'
const isMock = true // switch entre les données mockées et l'API

/**
 * Get user informations
 * @param {number} inputId user id
 * @returns {Promise<Object>} data: informations of the user
 */
async function getUserInformations(inputId) {

  if (isMock) {
    console.log("users: ", users)
    
    const user = users.find(({ id }) => id === parseInt(inputId))
    return user
  
  } else {
    try {

      const response = await fetch(`${BASE_URL}/${inputId}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()
      return data

    } catch (error) {
      console.error("Error fetching user data:", error)
      throw error
    }
  }
}

/**
 * Get user activity information
 * @param {number} inputId user id
 * @returns {Promise<Object>} data: user activity information
 */
async function getActivities(inputId) {

  if (isMock) {
    // console.log("activities: ", activities)
    const activity = activities.find(({userId}) => userId === parseInt(inputId))
    return activity
    
  } else {
    try {

      const response = await fetch(`${BASE_URL}/${inputId}/activity`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()
      return data

    } catch (error) {
      console.error("Error fetching activities data:", error)
      throw error
    }
  }
}


/**
 * Get user AverageSessions
 * @param {number} inputId user id
 * @returns {Promise<Object>} data: user AverageSessions
 */
async function getAverageSessions(inputId) {

  if (isMock) {
    // console.log("averageSessions: ", averageSessions)
    const average = averageSessions.find(({ userID }) => userID === parseInt(inputId))
    return average

  } else {
    try {

      const response = await fetch(`${BASE_URL}/${inputId}/average-sessions`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()
      return data

    } catch (error) {
      console.error("Error fetching average sessions data:", error)
      throw error
    }
  }
}

/**
 * Get user performance
 * @param {number} inputId user id
 * @returns {Promise<Object>} data : user performance
 */
async function getUserPerformances(inputId) {

  if (isMock) {
    // console.log("performances: ", performances)
    const performance = performances.find(({ userId }) => userId === parseInt(inputId))
    return performance

  } else {
    try {

      const response = await fetch(`${BASE_URL}/${inputId}/performance`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json()
      return data

    } catch (error) {
      console.error("Error fetching performance data:", error)
      throw error
    }
  }
}

const Api = {
  getUserInformations: PropTypes.func.isRequired,
  getActivities: PropTypes.func.isRequired,
  getUserAverageSessions: PropTypes.func.isRequired,
  getUserPerformance: PropTypes.func.isRequired
}

Api.propTypes = Api;

export default {
  getUserInformations,
  getAverageSessions,
  getActivities,
  getUserPerformances
}