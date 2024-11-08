/*****************************/
/*** DATA RECOVERY SERVICE ***/
/*****************************/

import PropTypes from "prop-types"
import users from "../mocksdata/users.json"
import activities from "../mocksdata/activities.json"
import performances from "../mocksdata/performances.json"
import averageSessions from "../mocksdata/averageSessions.json"

const BASE_URL = "http://localhost:3000/user"
const isMock = true // switch between the mocked data and the API

/**
 * Modify a key for a single user object
 * @param {object} userObject single user
 * @returns {object} single user with a modified key
 */
function renameKey(userObject) {

  const keyValues = Object.keys(userObject).map(key => {
    if (key === "todayScore") {
      return { ["score"]: userObject[key] }
    }
    return { [key]: userObject[key] }
  })
  // return the modified object with its new key
  return Object.assign({}, ...keyValues)
}

/**
 * Get user informations
 * @param {number} inputId user id
 * @returns {Promise<Object>} data: informations of the user
 */
async function getUserInformations(inputId) {

  if (isMock) {
    // console.log("users: ", users)
    const user = users.find(({ id }) => id === parseInt(inputId))
    const modifiedUser = renameKey(user)    
    return { data: modifiedUser }
  
  } else {
    try {
      const response = await fetch(`${BASE_URL}/${inputId}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const apiData = await response.json()

      // Access the object in {data} to modify the key
      if (apiData.data) {
        const modifiedUser = renameKey(apiData.data)        
        return {data: modifiedUser}
      }
      return apiData

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
    return { data: activity }
    
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
    const average = averageSessions.find(({ userId }) => userId === parseInt(inputId))    
    return { data: average }

  } else {
    try {
      const response = await fetch(`${BASE_URL}/${inputId}/average-sessions`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
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
    return { data: performance }

  } else {
    try {
      const response = await fetch(`${BASE_URL}/${inputId}/performance`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
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
  getAverageSessions: PropTypes.func.isRequired,
  getUserPerformances: PropTypes.func.isRequired
}

Api.propTypes = Api

export default {
  getUserInformations,
  getAverageSessions,
  getActivities,
  getUserPerformances
}