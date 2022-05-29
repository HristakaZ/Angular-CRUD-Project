import { Game } from "../games/game.model";

export class GameStudio {
    id!: number;
    name!: string;
    dateOfEstablishment!: Date;
    mainOffice!: string;
    games!: Game[];
}