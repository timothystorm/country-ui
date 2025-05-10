import {Component, inject, OnInit} from '@angular/core';
import {RegionalEntityService} from '../../services/regional-entity.service';
import {AsyncPipe, DecimalPipe, NgIf} from '@angular/common';
import {catchError, of, startWith, Subject, switchMap, tap, throwError} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegionalEntityModalComponent} from '../../shared/regional-entity-modal/regional-entity-modal.component';
import {RegionalEntity} from '../../models/regional-entity';
import {VerifyDeleteModal} from '../../shared/verify-delete-modal/verify-delete-modal';

@Component({
  standalone: true,
  selector: 'app-regional-entities-list',
  imports: [
    DecimalPipe,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './regional-entities-list.component.html',
  styleUrls: ['./regional-entities-list.component.css']
})
export class RegionalEntitiesListComponent implements OnInit {
  private modalService = inject(NgbModal);
  private entityService = inject(RegionalEntityService);
  private refresh$ = new Subject<void>();
  serviceError: string | null = null;
  regionalEntities$ = this.entityService.readRegionalEntities();
  reloadableRegionalEntities$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.regionalEntities$),
    catchError(err => {
      this.serviceError = err?.message ?? err;
      return throwError(() => err);
    })
  );

  ngOnInit() {
    this.refresh$.next();
  }

  openNewEntityEditor(): void {
    const modalRef = this.modalService.open(RegionalEntityModalComponent, {backdrop: true});
    modalRef.closed.subscribe(() => this.refresh$.next());
  }

  delete(id: number, name: string) {
    const modalRef = this.modalService.open(VerifyDeleteModal, {backdrop: true});
    modalRef.componentInstance.message = name;
    modalRef.closed.pipe(
      switchMap((attest: boolean) => {
        if (attest) return this.entityService.deleteRegionalEntity(id).pipe(tap(() => this.refresh$.next()));
        return of(null);
      })
    ).subscribe();
  }

  edit(regionalEntity: RegionalEntity) {
    const modalRef = this.modalService.open(RegionalEntityModalComponent, {backdrop: true});
    modalRef.componentInstance.regionalEntity = regionalEntity;
    modalRef.closed.subscribe(() => this.refresh$.next());
  }
}
