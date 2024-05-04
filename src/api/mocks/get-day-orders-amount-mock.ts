import { http, HttpResponse } from 'msw'
import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

export const getDaysOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/daily-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})