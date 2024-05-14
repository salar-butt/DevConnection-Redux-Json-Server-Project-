export const registerReducer = (state = { register: [] }, action) => {
  switch (action.type) {
    case "DATA_ADD_REQUEST":
      return {
        loading: true,
      };

    case "DATA_ADD_SUCCES":
      return {
        ...state,
        loading: false,
        register: action.payload,
      };
    case "DATA_ADD_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const allUserReducer = (state = { allUser: [] }, action) => {
  switch (action.type) {
    case "ALL_USER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_USER_SUCCES":
      return {
        ...state,
        loading: false,
        allUser: action.payload,
      };
    case "ALL_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        loading: true,
        succes: false,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
        succes: true,
      };
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        succes: false,
      };
    default:
      return state;
  }
};

export const singleUserReducer = (state = { singleuser: {} }, action) => {
  switch (action.type) {
    case "SINGLE_USER_REQUEST":
      return {
        loading: true,
      };
    case "SINGLE_USER_SUCCES":
      return {
        ...state,
        loading: false,
        singleuser: action.payload,
      };
    case "SINGLE_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const profileReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case "ADD_PROFILE_REQUEST":
      return {
        loading: true,
      };
    case "ADD_PROFILE_SUCCES":
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case "ADD_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const experienceReducer = (state = { experience: [] }, action) => {
  switch (action.type) {
    case "ADD_EXPERIENCE_REQUEST":
      return {
        loading: true,
      };
    case "ADD_EXPERIENCE_SUCCES":
      return {
        ...state,
        loading: false,
        experience: action.payload,
      };
    case "ADD_EXPERIENCE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const deleteExperienceReducer = (state = { experience: [] }, action) => {
  switch (action.type) {
    case "DELETE_EXPERIENCE":
      const { id, index } = action.payload;
      const user = state.find((user) => user.id === id);
      if (user) {
        user.experience = user.experience.filter((exp) => exp.id !== index);
      }
      return [...state];

    case "DELETE_EXPERIENCE_FAIL":
      return {...state,
      error: action.payload}

    default:
      return state;
  }
};

export const educationReducer = (state = { education: [] }, action) => {
  switch (action.type) {
    case "ADD_EDUCATION_REQUEST":
      return {
        loading: true,
      };
    case "ADD_EDUCATION_SUCCES":
      return {
        ...state,
        loading: false,
        education: action.payload,
      };
    case "ADD_EDUCATION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const postReducer = (state = { post: [] }, action) => {
  switch (action.type) {
    case "ADD_POST_REQUEST":
      return {
        loading: true,
      };
    case "ADD_POST_SUCCES":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case "ADD_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
