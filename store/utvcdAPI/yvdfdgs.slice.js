import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_yvdfdg_list = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_list",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_list(payload)
    return response.data
  }
)
export const api_v1_yvdfdg_create = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_create",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_create(payload)
    return response.data
  }
)
export const api_v1_yvdfdg_retrieve = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_retrieve",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_retrieve(payload)
    return response.data
  }
)
export const api_v1_yvdfdg_update = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_update",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_update(payload)
    return response.data
  }
)
export const api_v1_yvdfdg_partial_update = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_partial_update",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_partial_update(payload)
    return response.data
  }
)
export const api_v1_yvdfdg_destroy = createAsyncThunk(
  "yvdfdgs/api_v1_yvdfdg_destroy",
  async payload => {
    const response = await apiService.api_v1_yvdfdg_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const yvdfdgsSlice = createSlice({
  name: "yvdfdgs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_yvdfdg_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yvdfdg_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yvdfdg_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_yvdfdg_list,
  api_v1_yvdfdg_create,
  api_v1_yvdfdg_retrieve,
  api_v1_yvdfdg_update,
  api_v1_yvdfdg_partial_update,
  api_v1_yvdfdg_destroy,
  slice: yvdfdgsSlice
}
