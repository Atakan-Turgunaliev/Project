import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Футбольная форма',
          img: 'soccer uniform.jpg',
          desc: 'Футбольная форма Nike',
          category: 'football clothes',
          price: '39.99'
        },
        {
          id: 2,
          title: 'Тренировочный спортивный костюм',
          img: 'Тренировочный спортивный костюм.jpg',
          desc: 'Тренировочный спортивный костюм Barcelona Nike',
          category: 'football clothes',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Футбольные бутсы',
          img: 'бутсы.jpg',
          desc: 'Футбольная форма Nike',
          category: 'football shoes',
          price: '119.99'
        },
        {
          id: 4,
          title: 'Капитанская повязка',
          img: 'kapitanskajapovjazkared.jpg',
          desc: 'Капитанская повязка Nike',
          category: 'football accessories',
          price: '9.99'
        },
        {
          id: 5,
          title: 'Щитки футбольные',
          img: 'Щитки футбольные.jpg',
          desc: 'Щитки футбольные Nike',
          category: 'defense',
          price: '19.99'
        },
        {
          id: 6,
          title: 'Футбольный мяч',
          img: 'Футбольный мяч.jpg',
          desc: 'Футбольный мяч Nike',
          category: 'soccer ball',
          price: '25.99'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App;
