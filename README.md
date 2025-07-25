# 💳 Payment System Architecture — Factory & Abstract Factory Patterns

A mock payment system that demonstrates how to use **Factory Method** and **Abstract Factory** design patterns to create flexible, modular, and scalable architectures in TypeScript.

---

## 📚 Assignment Context

In real-world applications, working with payment systems means handling variability, dependencies, and scalability. In this assignment, I separated object creation from usage by applying the **Factory Method** and **Abstract Factory** patterns — a core step toward clean, adaptable architecture that responds well to changing business and tech needs.

---

## 📋 Task Description

I implemented a **mock architecture** for a payment system supporting three providers:

- `Stripe`
- `PayPal`
- `ApplePay`

Each provider implements the same functionality:

- `authorize → capture → refund`

> 💡 The real SDKs are not required — the logic is simulated using `console.log`.

### Example Output

```ts
console.log(`[Stripe] Authorizing $${amount}`);
...
console.log(`[ApplePay] Refunding transaction ${transactionId}`);

### Project Structure
/src
  /core
    PaymentProvider.ts        # Interface for a payment provider
    PaymentProviderFactory.ts # Interface for provider factories
  /providers
    /stripe
      StripePaymentProvider.ts # Stripe provider implementation
      StripeFactory.ts         # Factory for Stripe
    /paypal
      PaypalPaymentProvider.ts # PayPal provider implementation
      PaypalFactory.ts         # Factory for PayPal
    /apple
      ApplePaymentProvider.ts  # Apple Pay provider implementation
      AppleFactory.ts          # Factory for Apple Pay
  /app
    PaymentContext.ts         # Context for working with providers
  main.ts                    # Usage example
package.json
tsconfig.json

### Expected Outcome
- All XxxPaymentProvider classes implement the PaymentProvider interface;
- All XxxFactory classes implement the PaymentProviderFactory interface;
- The PaymentContext class works with any provider factory via the interface;
- main.ts demonstrates the full payment cycle with the selected provider;
- All code is strongly typed, does not use new outside of factories, and is easily extensible.

### Running the Project

# Run with Stripe provider
npx ts-node src/main.ts stripe

# Run with PayPal provider
npx ts-node src/main.ts paypal

# Run with Apple Pay provider
npx ts-node src/main.ts apple

### On execution, the program:
- Creates the appropriate provider factory;
- Initializes the payment context;
- Performs the full operation cycle (authorize, capture, refund).