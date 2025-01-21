import {
  initializeTimes,
  updateTimes,
  fetchAPI
} from "../../reducers/AvailableTimesReducer"

describe("Validate reducers", () => {

  beforeEach(() => {
    jest.resetModules()
    jest.mock("../../reducers/AvailableTimesReducer", () => ({
      fetchAPI: jest.fn().mockReturnValue(["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"])
    }))
  })

  test("Retrives same values provided in state", () => {
    const expectedState = {
      availableTimes: [],
      selectedDate: '',
    }
    expect(updateTimes(expectedState, {})).toEqual(initializeTimes())
  })

  test("should handle SET_AVAILABLE_TIMES", () => {
    const availableTimes = ["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"]
    const state = {
      availableTimes,
      selectedDate: new Date("2025-01-10T00:00:00"),
    }
    const expectedState = {
      availableTimes: ["17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:30", "22:30", "23:00"],
      selectedDate: new Date("2025-01-10T00:00:00"),
    }
    const action = { type: "SET_AVAILABLE_TIMES", payload: availableTimes }
    expect(updateTimes(state, action)).toEqual(expectedState)
  })
})
