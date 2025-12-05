export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface RegisterRequest {
    id?: number;
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    role?: Role;
}

export interface AuthenticationRequest {
    email: string;
    password: string;
}

export interface AuthenticationResponse {
    token: string;
    refreshToken?: string;
}

export interface User {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    role?: Role;
}