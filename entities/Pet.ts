import { Category } from "./Category";
import { PetStatus } from "./PetStatus";
import { Tag } from "./Tag";

export class Pet {
    constructor(
        private id: number,
        private category: Category,
        private name: string,
        private photoUrls: string[],
        private tags: Tag[],
        private status: PetStatus
    ) { }
}