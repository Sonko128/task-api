import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity({name:'Assign'})
export class Assign {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    grade:string;
    @Column()
    subject:string;
    @Column()
    filename:string;

}
