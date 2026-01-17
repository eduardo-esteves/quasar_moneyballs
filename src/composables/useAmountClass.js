export function useAmountClass(amount) {
  return {
    'text-positive': amount > 0,
    'text-negative': amount < 0,
    'text-grey-6': !(amount > 0) && !(amount < 0)
  }
}
