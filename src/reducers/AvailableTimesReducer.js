const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(result) {
        resolve(result)
      }
      else {
        reject('Error fetching available times')
      }
    }, 1000)
  })
};

const submitAPI = function(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(true)
    }, 1000)
  })
  //return true;
};

const initializeTimes = () => {
  return {
    availableTimes: [],
    selectedDate: ''
  }
}

const updateTimes = (state, action) => {
  switch (action.type) {
      case "SET_AVAILABLE_TIMES":
        return {
          ...state,
          availableTimes: action.payload
        }
    default:
      return state
  }
}

export { initializeTimes, updateTimes, fetchAPI, submitAPI }