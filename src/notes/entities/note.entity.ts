import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Note'})
export class Note {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    grade:string;
    @Column()
    subject:string;
    @Column()
    filename:string;
}
