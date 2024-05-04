import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock)

export async function enableMSW() {
  if (env.MODE !== 'mock') {
    return
  }

  await worker.start()
}
