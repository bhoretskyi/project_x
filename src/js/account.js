const LOCAL_KEY = "user";

class Account {
    constructor() {
        const auth = localStorage.getItem(LOCAL_KEY);
        if (auth) {
            this.authenticated = true;
            const user = JSON.parse(auth);
            this.userId = user.userId;
            this.userName = user.userName;
            this.userEmail = user.userEmail;
            this.userPassword = user.userPassword;
        } else {
            this.authenticated = false;
            this.userId = null;
            this.userName = null;
            this.userEmail = null;
            this.userPassword = null;
        }
    }

    signIn(name, email, password) {
        const userAccount = {
            userId: this.getId(),
            userName: name,
            userEmail: email,
            userPassword: password,
        };
        localStorage.setItem(LOCAL_KEY, JSON.stringify(userAccount));
        this.authenticated = true;
        this.userId = userAccount.userId;
        this.userName = userAccount.userName;
        this.userEmail = userAccount.userEmail;
        this.userPassword = userAccount.userPassword;
    }

    signOut() {
        localStorage.removeItem(LOCAL_KEY);
        this.authenticated = false;
        this.userId = null;
        this.userName = null;
        this.userEmail = null;
        this.userPassword = null;
    }

    getId() {
        return Math.random().toString(16).slice(2);
    }

    isAuthentificated() {
        return this.authenticated;
    }

    signUp(name, email, password) {
        const userAccount = {
            userId: this.getId(),
            userName: name,
            userEmail: email,
            userPassword: password,
        };
        localStorage.setItem(LOCAL_KEY, JSON.stringify(userAccount));
        this.authenticated = true;
        this.userId = userAccount.userId;
        this.userName = userAccount.userName;
        this.userEmail = userAccount.userEmail;
        this.userPassword = userAccount.userPassword;
    }
}

export default Account;
