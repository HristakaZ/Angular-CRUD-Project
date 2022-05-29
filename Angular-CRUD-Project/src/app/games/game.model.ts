import { GameStudio } from "../game-studios/game-studio.model";

export class Game {
    id!: number;
    name!: string;
    dateOfCreation!: Date;
    dateOfPremiere!: Date;
    isAvailable!: boolean;
    gameStudio!: GameStudio;
}