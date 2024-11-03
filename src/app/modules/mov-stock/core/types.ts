export interface StockRemoval {
    elementKey: string;
    quantity: {
      unit: string;
      magnitude: number;
    };
    occurrenceDate: string;
    observations: string;
    sourceLocationKey: string;
  }

  export interface StockAddition {
    elementKey: string;
    quantity: {
      unit: string;
      magnitude: number;
    };
    occurrenceDate: string;
    observations: string;
    amount: {
      currencyCode: string;
      amount: number;
    };
    destinationLocationKey: string;
  }


  export interface StockLog {
    key: string;
    farmKey: string;
    elementKey: string;
    quantity: {
      unit: string;
      magnitude: number;
    };
    amount: {
      currencyCode: string;
      amount: number;
    };
    sourceLocationKey: string;
    destinationLocationKey: string;
    destinationCropGlebeKeys: string;
    occurrenceDate: string;
    observations: string;
  }

    export interface StockMovementFindAllResponse extends StockRemoval {}
    export interface StockMovementFindAllResponse extends StockAddition {}
    export interface StockLogFindAllResponse extends StockLog {}