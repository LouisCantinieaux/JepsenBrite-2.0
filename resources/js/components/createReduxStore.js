const initialState = {
  auth : { loggedIn : false,
          token : ''}
}

const createStorage = (state = initialState, action) => {
  switch(action.type) {
    case "LOG_IN":
      return {...state, auth : {loggedIn : true}}
    case "LOG_OUT" : 
      return {...state, auth : {loggedIn : false,token : ''}}
    default : 
      return state
  }
}

export default createStorage