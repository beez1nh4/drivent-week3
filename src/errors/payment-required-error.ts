import { ApplicationError } from "@/protocols";

export function paymentRequiredError(): ApplicationError {
  return {
    name: "PaymentRequiredError",
    message: "The payment is required to access this page!",
  };
}
