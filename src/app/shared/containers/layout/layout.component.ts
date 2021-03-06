import {Component, OnInit} from '@angular/core';
import {TeamsDataService} from '../../../services/teams-data/teams-data.service';
import {Conference} from '../../../data/team-data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  conferences: Conference[];
  leagueId: number;

  constructor(public teamsDataService: TeamsDataService) {
  }

  ngOnInit() {
    this.getConferences();
  }

  getConferences(): void {
    this.teamsDataService.getLeagueId().subscribe(id => (this.leagueId = id));
    this.teamsDataService
      .getConferences()
      .subscribe(conference => (this.conferences = conference));
  }
}
