import Container from "../container"
import Digital_reklam from '../../assets/images/reklam.jpg'
import './style.scss'

function index() {
  return (
    <div>
        <Container>
            <img className="reklam" src={Digital_reklam} alt="Digital Academy" />
        </Container>
    </div>
  )
}

export default index
