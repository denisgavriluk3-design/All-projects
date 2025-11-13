import { useState } from 'react'
import './App1.css'
import React from 'react'
import Feader from './assets/header'
import Footer from '../assets/App1/footer'
import Items from '../assets/App1/Items'
import Categories from '../assets/App1/categories'
import showFullitem from '../assets/App1/Showfullitem'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'some think',
                    img: 'main_page_img1.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'some think',
                    img: 'main_page_img2.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'tables',
                    price: '49.99'
                },
                {
                    id: 3,
                    title: 'some think',
                    img: 'main_page_img3.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'sofa',
                    price: '49.99'
                },
                {
                    id: 4,
                    title: 'some think',
                    img: 'main_page_img4.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'light',
                    price: '49.99'
                },
                {
                    id: 5,
                    title: 'some think',
                    img: 'main_page_img5.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 6,
                    title: 'some think',
                    img: 'main_page_img6.png',
                    desc: 'lorem iftiytfgkh fyudytgy gvfhcdtfygh vhgdfctuyf',
                    category: 'chairs',
                    price: '49.99'
                },
            ],
            showFullitem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Feader orders={this.state.orders} onDelete={this.deleteOrder} />
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onadd={this.addToOrder} />

                {this.state.showFullitem && <showFullitem onShowItem={this.onShowItem} onadd={this.addToOrder} item={this.state.fullItem} />}
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullitem: !this.state.showFullitem})
    }

    chooseCategory(category) {
        if(category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
    }

    chooseCategory(category){
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    } 


    addToOrder(item) { 
        let isInArray = false
        this.state.orders.forEach(elv=> {
            if(elv.id === item.id)
                isInArray = true
        })
        if(!isInArray)
        this.setState({ orders: [...this.state.orders, item] }) 
    }
}



/* http://localhost:5173/ */
export default App