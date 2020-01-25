import React, { Component } from 'react';

class Data extends Component{
    constructor(){
        super()
        this.state ={
            players: []
        }
    }
    componentDidMount() {
        const getPlayers = () =>{
          fetch('http://localhost:5000/api/players')
          .then(res => res.json())
          .then(players => {
            // console.log(players)
            this.setState({
              players: players
            })
          })
          .catch(err => {
            console.log(err)
          })
        }
        getPlayers()
      }
  
      render() {
        return ( 
          <div>
            {this.state.players.map(player => (
              <div>
              <h2>Name: {player.name}</h2>
              <h3>Searches: {player.searches}</h3>
              <h3>Country: {player.country}</h3>
              </div>
              ))}
          </div>
        );
      }
    }
export default Data;