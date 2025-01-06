import Container from '../container'
import { KursCard } from '../ui'
import { courses } from '../../data/courses'
import './style.scss'


function index() {
  return (
    <div className='kurslar' id='kurslar'>
        <Container>
            <h1 className='title'>Bizning kurslar</h1>
              <div className="kurs-wrapper">
                  {
                   courses.map((e, i) => <KursCard key={i} data={e}/>)
                  }
              </div>
        </Container>
    </div>
  )
}

export default index