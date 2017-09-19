import React from 'react';
import axios from 'axios';
import { Header } from '../components/Header';
import Date from '../components/Date';
import { Gold22k } from '../components/Gold22k';
import { Gold24k } from '../components/Gold24k';
import { Silver } from '../components/Silver';
import { Footer } from '../components/Footer';

export default class App extends React.Component {
 constructor(props) {
    super(props);
      this.state = {
        j22kdata: [],
        j24kdata: [],
        jsildata: []
    };
  }

  componentDidMount() {
    axios.get('https://nammajson.herokuapp.com/db')
      .then(res => {
        this.setState({ 
            j22kdata: res.data.dataset.gold22.data[0],
            j24kdata: res.data.dataset.gold24.data[0],
            jsildata: res.data.dataset.silver.data[0],
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Date />
        <Gold22k data={this.state.j22kdata} />
        <Gold24k data={this.state.j24kdata} />
        <Silver data={this.state.jsildata} />
        <Footer />
      </div>
    );
  }
}
