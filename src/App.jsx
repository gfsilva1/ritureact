import { Banner } from './components/Banner'
import { Carousel } from './components/Carousel'
import { Header } from './components/Header'
import { Ritmo } from './components/Ritmo';

const ritmos = [
  {
    id: 1,
    name: 'Jongo',
    description: 'Lochas dochas'
  },
  {
    id: 2,
    name: 'Cururu',
    description: 'Lochas dochas'
  },
];

export function App() {

  return (
    <div>
      <Header />
      <Banner />
      <Carousel />
      <div>
        {ritmos.map(ritmo => {
          return (
            <Ritmo
              name={ritmo.name}
              description={ritmo.description}
            />
          )
        })}
      </div>
    </div>
  )
}
