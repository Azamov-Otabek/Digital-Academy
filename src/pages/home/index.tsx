import { About, Intro, Kurs, Operators, Services, Swiper } from "@components"

function Home() {
  return (
    <>
      <Intro/>
      <About/>
      <Swiper/>
      <Kurs/>
      <Services/>
      <Operators/>
    </>
  )
}

export default Home