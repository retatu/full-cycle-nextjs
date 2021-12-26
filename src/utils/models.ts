export enum OrderStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected'
}

export const OrderStatusTranslating = {
  [OrderStatus.Approved]: 'Aprovado',
  [OrderStatus.Rejected]: 'Rejeitado',
  [OrderStatus.Pending]: 'Pendente'
}