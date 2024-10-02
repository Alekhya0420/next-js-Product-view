import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";
import { base_url } from "@/api/api";


interface InitialStateType {
  status: number;
  data:object; 
  isLoading: boolean;
}


export let RegInfo = createAsyncThunk("info/pujaInfo", async (data: any) => {
  const res = await axiosInstance.post(base_url, data);
  console.log(res?.data);
  return res?.data;
});

export let LogInfo = createAsyncThunk("info/LogInfo", async (data: any) => {
  const res = await axiosInstance.get(base_url, data);
  console.log(res?.data);
  return res?.data;
});

export let DeleteInfo = createAsyncThunk("info/Delete", async (data: any) => {
  const res = await axiosInstance.delete(`${base_url}/${data}`);
  console.log(res?.data);
  return res?.data;
});

export let UpdateInfo = createAsyncThunk("info/UpdateInfo",async(data:any) => {
  const res = await axiosInstance.patch(`${base_url}/${data.id}`,
    {
      id:data.id,
      password:data.password,
    }
  );
  console.log(res?.data);
  return res?.data;
});

const initialState: InitialStateType = {
  status:0,
  data: {}, 
  isLoading: false,
};

// Create the slice with proper typing
const AuthSlice = createSlice({
  name: "auth",
  initialState, 
  
  extraReducers: (builder) => {
    
    builder.addCase(RegInfo.pending, (state) => {
        state.isLoading = true;
      });

     builder.addCase(RegInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status=action.payload.status
      });

      builder.addCase(RegInfo.rejected, (state,action) => {
        state.isLoading = false;
      });

        builder.addCase(LogInfo.pending, (state) => {
          state.isLoading = true;
        });
  
       builder.addCase(LogInfo.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload.data;
          state.status=action.payload.status
        });
  
        builder.addCase(LogInfo.rejected, (state,action) => {
          state.isLoading = false;
      });

      builder.addCase(DeleteInfo.pending, (state) => {
        state.isLoading = true;
      });

     builder.addCase(DeleteInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.status=action.payload.status
      });

      builder.addCase(DeleteInfo.rejected, (state,action) => {
        state.isLoading = false;
    });

    builder.addCase(UpdateInfo.pending, (state) => {
      state.isLoading = true;
    });

   builder.addCase(UpdateInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status=action.payload.status
    });

    builder.addCase(UpdateInfo.rejected, (state,action) => {
      state.isLoading = false;
  });

  }
});

export default AuthSlice.reducer;


