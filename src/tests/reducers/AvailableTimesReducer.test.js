import {
  initializeTimes,
  updateTimes,
  fetchAPI
} from "../../reducers/AvailableTimesReducer"

// jest.mock("../../reducers/AvailableTimesReducer", () => ({
//   ...jest.requireActual("../../reducers/AvailableTimesReducer"),
//   fetchAPI: jest.fn()
// }))

describe("Validate reducers", () => {

  beforeEach(() => {
    jest.resetModules()
    //fetchAPI.mockClear()
    //fetchAPI.mockReturnValue(["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"])
    jest.mock("../../reducers/AvailableTimesReducer", () => ({
      //...jest.requireActual("../../reducers/AvailableTimesReducer"),
      fetchAPI: jest.fn().mockReturnValue(["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"])
    }))
  })

  test("Retrives same values provided in state", () => {
    const expectedState = {
      availableTimes: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "23:30"],
      selectedDate: "",
    }
    expect(updateTimes(expectedState, {})).toEqual(initializeTimes)
  })

  test("should handle SET_AVAILABLE_TIMES", () => {
    const state = {
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      selectedDate: "",
    }
    const expectedState = {
      availableTimes: ["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"],
      selectedDate: new Date("2025-01-10T03:03:49.319Z"),
    }
    const action = { type: "SET_AVAILABLE_TIMES", payload: new Date("2025-01-10T03:03:49.319Z") }
    expect(updateTimes(state, action)).toEqual(expectedState)
  })
})
