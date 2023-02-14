export class User {

    private id: number
    private username: string
    private firstName: string
    private lastName: string
    private email: string
    private password: string
    private phone: string
    private userStatus: number

    constructor(id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number) {
        this.id = id
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phone = phone
        this.userStatus = userStatus
    }

    public get _id() {
        return this.id
    }
    public get _username() {
        return this.username
    }
    public get _firstName() {
        return this.firstName
    }
    public get _lastName() {
        return this.lastName
    }
    public get _email() {
        return this.email
    }
    public get _password() {
        return this.password
    }
    public get _phone() {
        return this.phone
    }
    public get _userStatus() {
        return this.userStatus
    }
}