import { todos } from "../src/redux/reducers.js";

describe("todos reducer test", () => {
  test("ADD_TODO", () => {
    const state = [];
    const action = (text) => ({
      type: "ADD_TODO",
      id: 0,
      text: text,
      done: false,
      start: { hours: 17, minutes: 48 },
    });
    const result = todos(state, action("Task 1"));

    expect(result).toEqual([
      {
        id: 0,
        text: "Task 1",
        done: false,
        start: { hours: 17, minutes: 48 },
        end: {},
        lapse: {},
      },
    ]);
  });

  test("COMPLETE_TODO", () => {
    const state = [
      {
        id: 0,
        text: "Task 1",
        done: false,
        start: { hours: 17, minutes: 48 },
        end: {},
        lapse: {},
      },
    ];
    const action = (id, done) => ({
      type: "COMPLETE_TODO",
      id,
      done,
      end: done ? { hours: 18, minutes: 47 } : {},
    });
    const result = todos(state, action(0, true));

    expect(result).toEqual([
      {
        id: 0,
        text: "Task 1",
        done: true,
        start: { hours: 17, minutes: 48 },
        end: { hours: 18, minutes: 47 },
        lapse: { hours: 0, minutes: 59 },
      },
    ]);
  });

  test("EDIT_TODO", () => {
    const state = [
      {
        id: 0,
        text: "Task 1",
        done: false,
        start: { hours: 17, minutes: 48 },
        end: {},
        lapse: {},
      },
    ];
    const action = (id, text) => ({
      type: "EDIT_TODO",
      id,
      text,
    });
    const result = todos(state, action(0, "Edit Task 1"));

    expect(result).toEqual([
      {
        id: 0,
        text: "Edit Task 1",
        done: false,
        start: { hours: 17, minutes: 48 },
        end: {},
        lapse: {},
      },
    ]);
  });

  test("REMOVE_TODO", () => {
    const state = [
      {
        id: 0,
        text: "Task 1",
        done: false,
        start: { hours: 17, minutes: 48 },
        end: {},
        lapse: {},
      },
    ];
    const action = (id) => ({
      type: "REMOVE_TODO",
      id,
    });
    const result = todos(state, action(0));

    expect(result).toEqual([]);
  });
});
