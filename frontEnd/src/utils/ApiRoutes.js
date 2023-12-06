export const host = "http://localhost:5000";

// Auth Routes
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/v1/auth/allusers`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;

//  Dish Routes
export const dishGetAll = `${host}/api/v1/dish/getAll`;
export const dishAdd = `${host}/api/v1/dish/addDish`;
export const dishUpdate = `${host}/api/v1/dish/updateDish`;
export const dishDelete = `${host}/api/v1/dish/deleteDish`;
export const dishGet = `${host}/api/v1/dish/getDish`;

// Order Routes
export const orderAdd = `${host}/api/v1/order/addOrder`;
export const orderUpdate = `${host}/api/v1/order/updateOrder`;
export const orderDelete = `${host}/api/v1/order/deleteOrder`;
export const orderGet = `${host}/api/v1/order/getOrder`;
export const orderGetAll = `${host}/api/v1/order/getAll`;