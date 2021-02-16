// const TOKEN_KEY = 'jwt';

// export const login = () => {
//     localStorage.setItem(TOKEN_KEY, 'TestLogin');
// }
export const login = (jwt) => {
localStorage.setItem("token", jwt);
}

// export const logout = () => {
//     localStorage.removeItem("token");
//     this.props.history.push('/')
// }

export const isLogin = () => {
    if (localStorage.getItem("token")) {
        return true;
    }

    return false;
}