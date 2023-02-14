import { Category } from "./Category";
import { PetStatus } from "./PetStatus";
import { Tag } from "./Tag";

export class Pet {
    private id: number
    private category: Category
    private name: string
    private photoUrls: string[]
    private tags: Tag[]
    private status: PetStatus
    
    constructor(id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: PetStatus) {
        this.id = id
        this.category = category
        this.name = name
        this.photoUrls = photoUrls
        this.tags = tags
        this.status = status
    }
}