import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  registerReducer,
  allUserReducer,
  loginReducer,
  singleUserReducer,
  profileReducer,
  experienceReducer,
  deleteExperienceReducer,
  educationReducer,
  postReducer
} from "./Redux/Reducers/Reducer";

const midleware = [thunk];
const reducer = combineReducers({
  register: registerReducer,
  allUser: allUserReducer,
  loginUser: loginReducer,
  singleUser: singleUserReducer,
  profile: profileReducer,
  userExperience: experienceReducer,
  deleteExperience: deleteExperienceReducer,
  userEducation: educationReducer,
  userPost: postReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
