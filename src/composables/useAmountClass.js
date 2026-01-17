export function useAmountClass(amount) {
  return {
    'text-positive': amount > 0,
    'text-negative': amount < 0
  }
}
