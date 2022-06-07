import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameStudio } from '../game-studio.model';
import { Observable } from 'rxjs';

@Injectable()
export class GameStudioService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<GameStudio[]> {
    return this.httpClient.get<GameStudio[]>('http://localhost:3000/gameStudios');
  }

  public getById(id: string): Observable<GameStudio> {
    return this.httpClient.get<GameStudio>(`http://localhost:3000/gameStudios/${id}`);
  }

  public delete(id: string): Observable<Object> {
    return this.httpClient.delete(`http://localhost:3000/gameStudios/${id}`);
  }

  public create(gameStudio: GameStudio): Observable<Object> {
    return this.httpClient.post('http://localhost:3000/gameStudios', gameStudio);
  }

  public update(gameStudio: GameStudio): Observable<Object> {
    return this.httpClient.put(`http://localhost:3000/gameStudios/${gameStudio.id}`, gameStudio);
  }
}
