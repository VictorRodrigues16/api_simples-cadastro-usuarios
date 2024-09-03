import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Users")
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;

    @Column({type: 'text'})
    password: string;

    @Column({type: 'text'})
    email: string;

}