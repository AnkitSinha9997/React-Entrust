import './styles.css'
import Image from './landscape.jpg'
import LOGO from './leaves.svg'
import Counter from './Counter'
const App = () => {
  return (
    <>
      <h1>
        Welcome to webpack configuration {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={Image} alt="img" />
      <img src={LOGO} alt="img" />
      <Counter />
    </>
  )
}
export default App
