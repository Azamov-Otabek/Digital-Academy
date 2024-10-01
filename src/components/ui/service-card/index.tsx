
import { Button } from 'antd'
import './style.scss'

function ServiceCard() {
  return (
    <div className='service-card'>
        <img src="https://cdn-icons-png.flaticon.com/512/1712/1712098.png" alt="Service" />
        <h1>SEO optimallashtirish</h1>
        <p>SEO optimallashtirish SEO - bu sizning sayt qidiruv tizimida yuqori o’rinlarda turishi, raqobatchilardan saytingiz yuqorida bo’lishi.</p>
        <Button>Batafsil</Button>
    </div>
  )
}

export default ServiceCard