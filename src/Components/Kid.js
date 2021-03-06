import React, { Component } from 'react';

class Kid extends Component {

  constructor(props) {
    super(props);
    this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false };
  }

  //Kia hum is ke bager Kid ko mazeed dance steps yad karwa sakte the?
  static getDerivedStateFromProps(props, state) {
    const { danceSteps } = state
    const { furtherSteps } = props
    //Props ke zarye state ko update karna
    return {
      danceSteps: [...danceSteps, ...furtherSteps],
      startedPerforming: !!furtherSteps.length
      //'!!furtherSteps.length' is equivalent 'furtherSteps.length ? true : false'
    }
  }

  componentDidMount() {
    //Render ke baad chalta hai
    //Component ki zindagi me ek hi baar chalta hai
    //Is k ander initially koi kaam karwana ho to wo karwatay
    this.setState({
      danceSteps: ['step1', 'step2']
    })
  }

  qualified() {
    this.setState({ startedPerforming: false })
  }

  render() {
    const { dressColor, furtherSteps } = this.props;
    const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
    console.log('Kid.js danceSteps -->', danceSteps)
    // console.log('Kid.js: furtherSteps -->')
    // console.log(furtherSteps)
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
        <div>Emotion: {emotion}</div>
        {startedPerforming &&
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
          </div>}
      </div>
    );
  }
}

Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

export default Kid
