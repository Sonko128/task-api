import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Student'})
export class Student {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    age:number;
    @Column()
    weakness:string;
    @Column()
    pnumber:number;
    @Column()
    grade:number;
    @Column()
    studentid:number;
    @Column()
    location:string;
    @Column()
    parent_name:string;
    @Column()
    email:string;
    @Column()
    class_teacher:string;
}
