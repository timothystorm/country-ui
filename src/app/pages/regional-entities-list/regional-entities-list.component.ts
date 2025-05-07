import {Component, inject, OnInit} from '@angular/core';
import {RegionalEntityService} from '../../services/regional-entity.service';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {startWith, Subject, switchMap} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegionalEntityModalComponent} from '../../shared/regional-entity-modal/regional-entity-modal.component';
import {RegionalEntity} from '../../models/regional-entity';

@Component({
  standalone: true,
  selector: 'app-regional-entities-list',
  imports: [
    DecimalPipe,
    AsyncPipe,
  ],
  templateUrl: './regional-entities-list.component.html',
  styleUrls: ['./regional-entities-list.component.css']
})
export class RegionalEntitiesListComponent implements OnInit {
  private modalService = inject(NgbModal);
  private entityService = inject(RegionalEntityService);
  private refresh$ = new Subject<void>();
  regionalEntities$ = this.entityService.getRegionalEntities();
  reloadableRegionalEntities$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.regionalEntities$)
  );

  ngOnInit() {
    this.refresh$.next();
  }

  openNewEntityEditor(): void {
    const modalRef = this.modalService.open(RegionalEntityModalComponent, {backdrop: true});
    modalRef.componentInstance.regionalEntity = {
      name: "New York",
      capital: "Albany",
      population: 1_000_000,
      squareKilometers: 120_000,
      hiAltitude: 1500000,
      loAltitude: 0
    } as RegionalEntity;
    modalRef.closed.subscribe(() => this.refresh$.next());
  }

  delete(id?: number) {
    if (id) this.entityService.deleteRegionalEntity(id).subscribe(() => this.refresh$.next());
  }
}
