// Nutrition Tracker API.
const NT_API_URL = window.location.hostname === 'localhost' ?
  'http://localhost:8000/api/' :
  'https://nutritional-tracker-api.herokuapp.com/api/';

// CalorieNinja API.
const CALNIN_API_URL = "https://api.calorieninjas.com/v1/nutrition?query=";

export { NT_API_URL, CALNIN_API_URL };