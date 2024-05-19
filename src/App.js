
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Categories from './components/Categories';
import ItemsInfo from './components/ItemsInfo';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Trech Trek S",
          img: "phoneS.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "phones",
          price: "150.99"
        },
        {
          id: 2,
          title: "Trech Trek X",
          img: "phoneX.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "phones",
          price: "150.99"
        },
        {
          id: 3,
          title: "Trech Trek Laptop",
          img: "laptop.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "laptop",
          price: "150.99"
        },
        {
          id: 4,
          title: "Trech Trek MacAir",
          img: "air.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "macAir",
          price: "150.99"
        },
        {
          id: 5,
          title: "Trech Trek Headphones",
          img: "headphones.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "headphones",
          price: "150.99"
        }
      ],
      itemsInfo: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render()  {
    return (
      <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

          {this.state.itemsInfo && <ItemsInfo onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
          <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ itemsInfo: !this.state.itemsInfo })
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter( el => el.category === category)
    })
  }

  deleteOrder (id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;


