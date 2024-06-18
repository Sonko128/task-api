import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Teacher'})
export class Teacher {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    age:number;
    @Column()
    weekness:string;
    @Column()
    email:string;
    @Column()
    teacher_id:number;
    @Column()
    location:string;
    @Column()
    mobile:number
    @Column()
    subject:string;
}
