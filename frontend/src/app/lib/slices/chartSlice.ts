import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ChartDataState {
  candlestickData: any;
  lineChartData: any;
  barChartData: any;
  pieChartData: any;
  loading: boolean;
  error: string | null;
}

const initialState: ChartDataState = {
  candlestickData: null,
  lineChartData: null,
  barChartData: null,
  pieChartData: null,
  loading: false,
  error: null,
};

// Thunks to fetch data from the Django API
export const fetchCandlestickData = createAsyncThunk(
  "charts/fetchCandlestickData",
  async () => {
    const response = await axios.get(
      "http://localhost:8001/api/candlestick-data"
    );
    return response.data;
  }
);

export const fetchLineChartData = createAsyncThunk(
  "charts/fetchLineChartData",
  async () => {
    const response = await axios.get(
      "http://localhost:8001/api/line-chart-data"
    );
    return response.data;
  }
);

export const fetchBarChartData = createAsyncThunk(
  "charts/fetchBarChartData",
  async () => {
    const response = await axios.get(
      "http://localhost:8001/api/bar-chart-data"
    );
    return response.data;
  }
);

export const fetchPieChartData = createAsyncThunk(
  "charts/fetchPieChartData",
  async () => {
    const response = await axios.get(
      "http://localhost:8001/api/pie-chart-data"
    );
    return response.data;
  }
);

const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandlestickData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCandlestickData.fulfilled, (state, action) => {
        state.loading = false;
        state.candlestickData = action.payload;
      })
      .addCase(fetchCandlestickData.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch candlestick data";
      })
      .addCase(fetchLineChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLineChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.lineChartData = action.payload;
      })
      .addCase(fetchLineChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch line chart data";
      })
      .addCase(fetchBarChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBarChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.barChartData = action.payload;
      })
      .addCase(fetchBarChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch bar chart data";
      })
      .addCase(fetchPieChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPieChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.pieChartData = action.payload;
      })
      .addCase(fetchPieChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pie chart data";
      });
  },
});

export default chartSlice.reducer;
