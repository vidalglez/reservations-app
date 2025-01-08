import {
  initializeTimes,
  updateTimes,
} from "../../reducers/AvailableTimesReducer"

describe("Validate reducers", () => {
  test("Retrives same values provided in state", () => {
    const expectedState = {
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
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
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      selectedDate: "2025-01-07",
    }
    const action = { type: "SET_AVAILABLE_TIMES", payload: "2025-01-07" }
    expect(updateTimes(state, action)).toEqual(expectedState)
  })
})
