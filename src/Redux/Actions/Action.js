import axios from "axios";


const baseUrl = "https://json-api-xrl5.onrender.com"

export const postUserData = (object) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${baseUrl}/devConnections`,object)
        dispatch({ type: "DATA_ADD_SUCCES", payload: data });
    }
    catch (error) {
        dispatch({ type: "DATA_ADD_FAIL", payload: error.message})
    }
}

export const getAllUser = () => async(dispatch) => {
    try {
        dispatch ({ type: "ALL_USER_REQUEST"});
        const {data} = await axios.get(`${baseUrl}/devConnections`);
        dispatch ({ type: "ALL_USER_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "ALL_USER_FAIL", payload: error.message})
    }
}

export const loginUser = (email, password ) => async (dispatch) => {

    try {
        dispatch ({ type: "LOGIN_USER_REQUEST"})
      const {data} = await axios.get(`${baseUrl}/devConnections`);

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
          dispatch({ type: "LOGIN_USER_SUCCESS", payload: user});
          localStorage.setItem('user', JSON.stringify(user));
          
      }  else {
        dispatch({ type: "LOGIN_USER_FAILURE" ,payload: "Data not match"});

      }
    } catch (error) {
        dispatch({ type: "LOGIN_USER_FAILURE" , payload: error.message});
    }
  };

  


export const getSingleuser = (id) => async(dispatch) => {
    try {
        dispatch ({ type: "SINGLE_USER_REQUEST"});
        const {data} = await axios.get(`${baseUrl}/devConnections/${id}`);
        dispatch ({ type: "SINGLE_USER_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "SINGLE_USER_FAIL", payload: error.message})
    }
}

export const addUserProfile = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_PROFILE_REQUEST"})
        const {data} = await axios.put(`${baseUrl}/devConnections/${id}`, updateObject)
        dispatch({ type: "ADD_PROFILE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_PROFILE_FAILURE", payload: error.message})
    }
}

export const addUserExperience = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_EXPERIENCE_REQUEST"})
        const {data} = await axios.put(`${baseUrl}/devConnections/${id}`, updateObject)
        dispatch({ type: "ADD_EXPERIENCE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_EXPERIENCE_FAILURE", payload: error.message})
    }
}


export const deleteExperience = (id, index) => async (dispatch) => {
    try {
      await axios.delete(`${baseUrl}/devConnections/${id}/experience/${index}`);
      dispatch({
        type: "DELETE_EXPERIENCE",payload: { id, index },
      });
    } catch (error) {
      dispatch({ type: "DELETE_EXPERIENCE_FAIL", payload: error.message})
    }
  };

  export const addUserEducation = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_EDUCATION_REQUEST"})
        const {data} = await axios.put(`${baseUrl}/devConnections/${id}`, updateObject)
        dispatch({ type: "ADD_EDUCATION_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_EDUCATION_FAILURE", payload: error.message})
    }
} 

export const addPost = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_POST_REQUEST"})
        const {data} = await axios.put(`${baseUrl}/devConnections/${id}`, updateObject)
        dispatch({ type: "ADD_POST_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_POST_FAILURE", payload: error.message})
    }
}