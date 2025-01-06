import { About, Intro, Kurs, Reklam, Operators, Services, Swiper } from "@components"

function Home() {
  return (
    <>
      <Intro/>
      <About/>
      <Swiper/>
      <Kurs/>
      <Reklam/>
      <Services/>
      <Operators/>
    </>
  )
}

export default Home