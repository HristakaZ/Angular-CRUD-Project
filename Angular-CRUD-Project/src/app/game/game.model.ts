import { GameStudio } from "../game-studio/game-studio.model";

export class Game {
    id!: number;
    name!: string;
    dateOfCreation!: Date;
    dateOfPremiere!: Date;
    isAvailable!: boolean;
    gameStudio!: GameStudio;
}