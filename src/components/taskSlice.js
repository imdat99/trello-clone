import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
  columns: {},
  columnOrder: [],
  currTaskIdToEdit: "",
  currColIdToEdit: "",
  isDialogOpen: false,
};
export const namespace = "TASK";
export const taskSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    /* Default reducers start */
    // Sets "currTaskIdToEdit" to the id of the current task being edited
    setCurrTaskIdToEdit: (state, action) => {
      state.currTaskIdToEdit = action.payload.taskId;
    },
    // Sets "currColIdToEdit" to the id of the current column in which the task is being edited
    setCurrColIdToEdit: (state, action) => {
      state.currColIdToEdit = action.payload.currTaskColId;
    },
    // Changes the state of the edit dialog box between open and close
    setDialogStatus: (state, action) => {
      state.isDialogOpen = action.payload;
    },
    /* Default reducers end */

    // Add new reducers here
    setAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setAllColumns: (state, action) => {
      state.columns = action.payload;
    },
    setColumnOrder: (state, action) => {
      state.columnOrder = action.payload;
    },

    dragColumns: (state, action) => {
      state.columnOrder = action.payload;
    },
    dragTasksSameColumn: (state, action) => {
      state.columns = action.payload;
    },
    dragTasksDifferentColumn: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  setCurrTaskIdToEdit,
  setCurrColIdToEdit,
  setDialogStatus,
  setAllTasks,
  setAllColumns,
  setColumnOrder,
} = taskSlice.actions;

export const taskStore = (store) => store[namespace];
const taskReducer = { namespace, reducer: taskSlice.reducer };
export default taskReducer;
