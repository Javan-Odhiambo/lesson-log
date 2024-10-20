const publicUrls = {
  //Auth
  LOGIN: "/login",
  SIGNUP: "/signup",
  PASSWORD_REQUEST: "/password-request",
  PASSWORD_RESET: "/password-reset",

  //App
  LANDING_PAGE: "/",
}

const privateUrls = {
  DASHBOARD: "/dashboard",
  GROUPS: "/groups",
  COURSES: "/courses",
  SETTINGS: "/settings",
  ASSIGNMENTS: "/assignments",
}

const urls = {...publicUrls, ...privateUrls}

export default urls;
