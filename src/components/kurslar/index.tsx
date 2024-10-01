import Container from '../container'
import { KursCard } from '../ui'
import './style.scss'


function index() {
  return (
    <div className='kurslar' id='kurslar'>
        <Container>
            <h1 className='title'>Bizning kurslar</h1>
              <div className="kurs-wrapper">
                  {
                    Array.from({ length: 4 }, (_, i) => i + 1).map(i => <KursCard key={i} />)
                  }
              </div>
        </Container>
    </div>
  )
}

export default index