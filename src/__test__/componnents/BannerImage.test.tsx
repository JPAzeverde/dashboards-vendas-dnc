import { render } from '@testing-library/react'
import 'jest-styled-components'
import { BannerImage } from '@/componnents'

describe('BannerImage', () => {
    test('renders with correct styles', () =>
            { const { container } = render(<BannerImage />)
                expect(container.firstChild).toHaveStyleRule('background-image', 'url(/LoginImage.svg)')
                expect(container.firstChild).toHaveStyleRule('background-size', 'cover')
                expect(container.firstChild).toHaveStyleRule('height', '100vh')
                expect(container.firstChild).toHaveStyleRule('width', '50vw')
            }
        )
    }
)