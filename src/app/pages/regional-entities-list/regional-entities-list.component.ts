import {Component, OnInit} from '@angular/core';
import {RegionalEntity} from '../../models/regional-entity';
import {RegionalEntityService} from '../../services/regional-entity.service';
import {DecimalPipe, NgForOf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-regional-entities-list',
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './regional-entities-list.component.html',
  styleUrl: './regional-entities-list.component.css'
})
export class RegionalEntitiesListComponent implements OnInit {
  regionalEntities: RegionalEntity[] = [];

  constructor(
    private service: RegionalEntityService
  ) {
    console.log('RegionalEntitiesListComponent');
  }

  ngOnInit() {
    this.service.getRegionalEntities().subscribe(data => this.regionalEntities = data);
  }
}
