import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  private provider: PaymentProvider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number): void {
    const transactionId = this.generateTransactionId();
    this.provider.authorize(amount);
    this.provider.capture(transactionId);
    this.provider.refund(transactionId);
  }

  private generateTransactionId(): string {
    return `tx-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }
}