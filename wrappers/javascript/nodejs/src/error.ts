import type { AriesAskarErrorObject } from 'aries-askar-test-shared'

import { AriesAskarError } from 'aries-askar-test-shared'

import { allocateStringBuffer } from './ffi'
import { nativeAriesAskar } from './library'

export const handleError = () => {
  const nativeError = allocateStringBuffer()
  nativeAriesAskar.askar_get_current_error(nativeError)

  const ariesAskarErrorObject = JSON.parse(nativeError.deref() as string) as AriesAskarErrorObject

  if (ariesAskarErrorObject.code === 0) return

  throw new AriesAskarError(ariesAskarErrorObject)
}
