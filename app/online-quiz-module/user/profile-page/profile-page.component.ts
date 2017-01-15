import {ClientWithQuizzesDto} from "../../../dto/composed/ClientWithQuizzesDto";
import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../../services/ClientService";
import {Router} from "@angular/router";
import {LobbyService} from "../../../services/LobbyService";
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: `profile-page.component.html`,
  styleUrls: ['profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  clientWithQuizzesDto: ClientWithQuizzesDto;
  errorMessage: string;

  constructor(private clientService: ClientService, private lobbyService: LobbyService, private location: Location, private router: Router) {

  }

  ngOnInit(): void {
    this.clientService.getClientWithQuizzes().then(response => this.clientWithQuizzesDto = response).catch(error => this.errorMessage = 'An error occurred while retrieving client information')
  }

  createLobby(quizId: number): void {
    this.lobbyService.createSessionLobby(quizId).catch(error => this.errorMessage = 'Failed to create quiz lobby');
  }
}
