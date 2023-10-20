import { Injectable } from "@angular/core";
import { Role, User} from './types';

@Injectable({
    providedIn: 'root'
})
export class RbacService{
    private _roles = new Map()
    private _authenticatedUser!: UserActivation

    setRoles(roles: Role[]){
        for(const role of roles){
            this._roles.set(role.userid, this._flatten(role, roles))
        }
    }

    setAuthenticatedUser(user: User){
        this._authenticatedUser = user
    }

    isGranted(roleOnPermission: string, user?: User): boolean{
        if(!user) {
            user = this._authenticatedUser;
        }if(!user){
            return false;
        }
        return this._roles.get(user.role.userid).includes(roleOnPermission)
    }

    private _flatten(forRole: Role, allRoles: Role[]): string[]{

        let results: string[] = [forRole.userid]

        for(const role of allRoles){
            if(forRole.extends === role.id){
                const parentRole = allRoles.find( r => r id === forRole.extends)

            }

        }

    }



}