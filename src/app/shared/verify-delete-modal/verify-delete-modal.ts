import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  selector: 'app-vef-delete-modal',
  imports: [],
  templateUrl: './verify-delete-modal.html'
})
export class VerifyDeleteModal {
  @Input() message?: never | null;
  activeModal = inject(NgbActiveModal);
}
