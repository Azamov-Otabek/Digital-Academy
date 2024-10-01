import { ServiceCard } from '@ui'
import Container from '../container'
import './style.scss'

function Services() {
  return (
    <div id='service'>
        <Container>
            <h1 style={{marginBottom: 50}}>Xizmatlar</h1>
            <div className="service-wrapper">
                {
                  Array.from({ length: 8 }, (_, i) => i + 1).map(index => (
                    <ServiceCard key={index} />
                  ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Services