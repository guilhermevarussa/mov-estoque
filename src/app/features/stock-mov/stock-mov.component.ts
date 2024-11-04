import { Component, OnInit } from '@angular/core'
import { StockItemService } from '../../modules/stock-items/core/service'
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from 'primeng/dynamicdialog'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { MovStockService } from '../../modules/mov-stock/core/services'
import { StockLog } from '../../modules/mov-stock/core/types'
import { CommonModule } from '@angular/common'
import { InputText, InputTextModule } from 'primeng/inputtext'
import { CalendarModule } from 'primeng/calendar'
import { Button, ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-stock-mov',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputTextModule,CalendarModule,ButtonModule],
  providers: [],
  templateUrl: './stock-mov.component.html',
  styleUrl: './stock-mov.component.scss'
})
export class StockMovComponent implements OnInit {
  addMovForm!: FormGroup

  constructor (
    private stockMovService: MovStockService,
    public movStockReference: DynamicDialogConfig,
    public dialogService: DynamicDialogRef,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit (): void {
    this.createAddMovForm()
    if (this.movStockReference.data) {
      this.addMovForm.patchValue({
        destinationLocationKey: this.movStockReference.data.stockItem.key,
        elementKey: this.movStockReference.data.stockItem.elementKey,
        unit: this.movStockReference.data.stockItem.unit,
        currencyCode:this.movStockReference.data.stockItem.amount.currencyCode,
        amount: this.movStockReference.data.stockItem.amount,
        quantity: this.movStockReference.data.stockItem.quantity,
        occurrenceDate: new Date()
      })
    }
    console.log(this.movStockReference.data,'asasfdoaposdaospd')
  }

  createAddMovForm(): void {
    this.addMovForm = this.formBuilder.group({
      elementKey: ['', Validators.required],
      quantity: this.formBuilder.group({
        unit: ['KG', Validators.required],
        magnitude: [0, Validators.required]
      }),
      occurrenceDate: ['', Validators.required],
      observations: [''],
      amount: this.formBuilder.group({
        currencyCode: ['BRL', Validators.required],
        amount: [0, Validators.required]
      }),
      destinationLocationKey: ['', Validators.required]
    });
  }

  onSubmit(): void {


    console.log(this.addMovForm.value);
    if (this.addMovForm.valid) {

      console.log(this.addMovForm.value);
      this.stockMovService.addStock(this.addMovForm.value).subscribe({
        next: (response) => {
          console.log('Movimento de estoque adicionado com sucesso', response);
        },
        error: (error) => {
          console.error('Erro ao adicionar movimento de estoque', error);
        }
      });
    }
    this.dialogService.close();
  }

  onCancel (): void {
    this.dialogService.close()
  }
}
