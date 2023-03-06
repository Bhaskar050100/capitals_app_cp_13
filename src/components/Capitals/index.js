import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {resultNameId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({resultNameId: event.target.value})
  }

  render() {
    const {resultNameId} = this.state
    const result = countryAndCapitalsList.find(each => each.id === resultNameId)

    return (
      <div className="cont">
        <div className="inner-cont">
          <div className="details-cont">
            <h1 className="head">Countries And Capitals</h1>
            <div className="line">
              <select onChange={this.onChangeCapital} value={resultNameId}>
                {countryAndCapitalsList.map(eachItem => (
                  <option key={eachItem.id} value={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="para">is capital of which country?</p>
            </div>
            <h1 className="ans">{result.country}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
