export const signIn = async (data) => {
  if (data.user && data.token) {
    return { user: data.user, token: data.token };
  }
};
