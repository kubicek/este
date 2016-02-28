import { combineReducers } from 'redux';
import { reduxFields } from '../lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

import {authStateReducer} from 'redux-auth';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';

const appReducer = combineReducers({
  auth: authStateReducer,
  device,
  intl,
  reduxFields,
  routing,
  todos,
  ui,
  users
});

export default appReducer;
