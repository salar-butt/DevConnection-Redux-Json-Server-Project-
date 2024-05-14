import axios from "axios";

export const postUserData = (object) => async(dispatch) => {
    try {
        const {data} = await axios.post("http://localhost:5000/register",object)
        dispatch({ type: "DATA_ADD_SUCCES", payload: data });
    }
    catch (error) {
        dispatch({ type: "DATA_ADD_FAIL", payload: error.message})
    }
}

export const getAllUser = () => async(dispatch) => {
    try {
        dispatch ({ type: "ALL_USER_REQUEST"});
        const {data} = await axios.get(`http://localhost:5000/register`);
        dispatch ({ type: "ALL_USER_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "ALL_USER_FAIL", payload: error.message})
    }
}

export const loginUser = (email, password ) => async (dispatch) => {

    try {
        dispatch ({ type: "LOGIN_USER_REQUEST"})
      const {data} = await axios.get("http://localhost:5000/register");

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
        const {data} = await axios.get(`http://localhost:5000/register/${id}`);
        dispatch ({ type: "SINGLE_USER_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "SINGLE_USER_FAIL", payload: error.message})
    }
}

export const addUserProfile = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_PROFILE_REQUEST"})
        const {data} = await axios.put(`http://localhost:5000/register/${id}`, updateObject)
        dispatch({ type: "ADD_PROFILE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_PROFILE_FAILURE", payload: error.message})
    }
}

export const addUserExperience = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_EXPERIENCE_REQUEST"})
        const {data} = await axios.put(`http://localhost:5000/register/${id}`, updateObject)
        dispatch({ type: "ADD_EXPERIENCE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_EXPERIENCE_FAILURE", payload: error.message})
    }
}


export const deleteExperience = (id, index) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/register/${id}/experience/${index}`);
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
        const {data} = await axios.put(`http://localhost:5000/register/${id}`, updateObject)
        dispatch({ type: "ADD_EDUCATION_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_EDUCATION_FAILURE", payload: error.message})
    }
} 

export const addPost = (id, updateObject) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_POST_REQUEST"})
        const {data} = await axios.put(`http://localhost:5000/register/${id}`, updateObject)
        dispatch({ type: "ADD_POST_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "ADD_POST_FAILURE", payload: error.message})
    }
}