import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/game/game.model';

@Injectable()
export class GameService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Game[]> {
    return this.httpClient.get<Game[]>('http://localhost:3000/games');
  }

  public getById(id: number): Observable<Game> {
    return this.httpClient.get<Game>(`http://localhost:3000/games/${id}`);
  }

  public delete(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:3000/games/${id}`);
  }

  public create(game: Game): Observable<Object> {
    return this.httpClient.post('http://localhost:3000/games', game);
  }

  public update(game: Game): Observable<Object> {
    return this.httpClient.put(`http://localhost:3000/games/${game.id}`, game);
  }
}
