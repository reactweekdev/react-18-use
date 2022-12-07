export default class User {
    readonly id: string
    readonly name: string
    readonly username: string

    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.username = data.username
    }
}
