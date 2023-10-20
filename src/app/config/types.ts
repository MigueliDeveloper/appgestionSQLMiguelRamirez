export enum Roles{
    ADMINISTRADOR = 'ADMINISTRADOR',
    STAFF = 'STAFF',
    USER = 'USER'
}

export interface Role{
    id: number
    name: string
    userid: string
    extends?: number | null
}

export interface User {
    id: number
    name: string
    role: Role
}