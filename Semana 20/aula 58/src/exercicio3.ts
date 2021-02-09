export interface User {
    age: number,
    nacionality: string
}

export interface Casino{
    location: string
}

export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.USA) {
            if(user.age >= 21) {
                allowed.push(user);
            }
            else {
                unallowed.push(user);
            }
        }
        else if(casino.location === LOCATION.BRAZIL) {
            if(user.age >= 18){
                 allowed.push(user);
            }
            else {
                unallowed.push(user);
            }
            break;
            }
        
    }
}

