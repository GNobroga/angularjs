import coreModule from "../core-module";

export interface IAuthService {
    login(credentials: { email: string; password: string; }): boolean;
}

const users = [
    { email: 'admin@admin.com', password: 'admin' }
]

coreModule.service('authService', function () {
    const login: IAuthService['login'] = (credentials) => {
        const user = users.find(({ email }) => credentials.email === email);
        if (user == null || user.password !== credentials.password) {
            throw new Error('Email ou senha inválidos');
        }
        return true;
    };

    Object.assign(this, { 
        login
    });
});