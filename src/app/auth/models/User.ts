export class User {
    email: string;
    username: string;
    name: string;
    id: number;

    constructor(obj: any) {
        this.email = obj.email;
        this.username = obj.username;
        this.name = obj.name;
        this.id = obj.id;
    }
}