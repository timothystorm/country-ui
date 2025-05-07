import {AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegionalEntity} from '../../models/regional-entity';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RegionalEntityService} from '../../services/regional-entity.service';

@Component({
  standalone: true,
  selector: 'app-regional-entity-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './regional-entity-modal.component.html'
})
export class RegionalEntityModalComponent implements OnInit, AfterViewInit {
  private entityService = inject(RegionalEntityService);

  activeModal = inject(NgbActiveModal);

  @Input() regionalEntity?: RegionalEntity;
  @ViewChild('focusInput') input?: ElementRef;

  nameControl = new FormControl<string>('', [Validators.required]);
  capitalControl = new FormControl('', [Validators.required]);
  populationControl = new FormControl<number | null>(null, [Validators.required]);
  areaControl = new FormControl<number | null>(null, [Validators.required]);
  hiAltitude = new FormControl<number | null>(null, [Validators.required]);
  loAltitude = new FormControl<number | null>(null, [Validators.required]);
  form = new FormGroup({
    name: this.nameControl,
    capital: this.capitalControl,
    population: this.populationControl,
    squareKilometers: this.areaControl,
    hiAltitude: this.hiAltitude,
    loAltitude: this.loAltitude,
  });

  ngOnInit() {
    if (this.regionalEntity) this.form.patchValue(this.regionalEntity);
  }

  ngAfterViewInit() {
    this.input?.nativeElement.focus();
  }

  submit(): void {
    this.entityService.saveRegionalEntity(this.form.getRawValue()).subscribe(() => this.activeModal.close());
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}
