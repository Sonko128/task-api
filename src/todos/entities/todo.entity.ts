//import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'todos'})

export class Todo {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    password: string;
}
