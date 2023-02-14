import { OrderStatus } from "./OrderStatus";

export class Order {

    private id: number
    private petId: number
    private quantity: number
    private shipDate: string
    private status: OrderStatus
    private complete: boolean
    
    constructor(id: number, petId: number, quantity: number, shipDate: string, status: OrderStatus, complete: boolean) {
        this.id = id
        this.petId = petId
        this.quantity = quantity
        this.shipDate = shipDate
        this.status = status,
        this.complete = complete
     }
}