type userInfo = {
  name: string,
  email: string,
  id: string,
}

export const getUserInfo = () :userInfo => JSON.parse(localStorage.getItem("userInfo") ?? '{}');
export const setUserInfo = (userInfo: userInfo) :void => localStorage.setItem("userInfo", JSON.stringify(userInfo));
