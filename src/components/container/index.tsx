import './style.scss'


function Container({children}:any) {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container