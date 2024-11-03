export interface Farm {
  key: string
  name: string
  totalArea: {
    unit: string
    magnitude: number
  }
}

export interface FarmFindAllResponse extends Farm {}  