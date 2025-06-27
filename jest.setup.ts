import '@testing-library/jest-dom'
import 'jest-styled-components'

// Adiciona suporte a TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util'

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder
}
