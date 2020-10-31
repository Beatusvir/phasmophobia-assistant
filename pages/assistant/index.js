const { Component } = require("react");
import Evidence from "../../components/Evidence";
import Ghost from "../../components/Ghost";

class Assistant extends Component {
  state = {
    evidence: [
      'EMF Level 5',
      'Fingerprints',
      'Freezing Temperatures',
      'Ghost Orbs',
      'Ghost Writing',
      'Spirit Box'
    ],
    ghosts: [
      {
        type: 'Spirit',
        evidence: [
          'Fingerprints',
          'Ghost Writing',
          'Spirit Box',
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Wraith',
        evidence: [
          'Fingerprints',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Phantom',
        evidence: [
          'EMF Level 5',
          'Freezing Temperatures',
          'Ghost Orbs',
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Poltergeist',
        evidence: [
          'Spirit Box',
          'Fingerprints',
          'Ghost Orbs',
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Banshee',
        evidence: [
          'EMF Level 5',
          'Fingerprints',
          'Freezing Temperatures',
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Jinn',
        evidence: [
          'Ghost Orbs',
          'EMF Level 5',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Mare',
        evidence: [
          'Ghost Orbs',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Revenant',
        evidence: [
          'Ghost Orbs',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Shade',
        evidence: [
          'EMF Level 5',
          'Ghost Writing',
          'Ghost Orbs'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Demon',
        evidence: [
          'Freezing Temperatures',
          'Ghost Writing',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Yurei',
        evidence: [
          'Ghost Orbs',
          'Ghost Writing',
          'Freezing Temperatures'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
      {
        type: 'Oni',
        evidence: [
          'EMF Level 5',
          'Ghost Writing',
          'Spirit Box'
        ],
        weakness: '',
        strenght: '',
        tips: '',
      },
    ],
    selectedEvidence: [],
  }

  handleEvidenceClick = (e) => {
    const clicked = e.target.innerHTML;
    let current = this.state.selectedEvidence;
    const found = this.state.selectedEvidence.indexOf(clicked);
    found === -1 ? current.push(e.target.innerHTML) : current.splice(found, 1);
    this.setState({
      selectedEvidence: current,
    });
  }

  missingEvidence = (ghosts) => {
    let result = [];
    for (let i = 0; i < ghosts.length; i += 1) {
      for (let j = 0; j < this.state.selectedEvidence.length; j += 1) {
        const index = ghosts[i].evidence.indexOf(this.state.selectedEvidence[j]);
        if (index !== -1) {
          result.push(ghosts[i].evidence[index]);
        }
      }
    }
    return result;
  }

  disabledEvidence = (ghosts) => {
    let current = [];
    ghosts.map(g => {
      g.evidence.map(e => {
        if (current.indexOf(e) === -1) current.push(e);
      })
    })
    console.log(current);
    return current;
  }

  render() {
    const filteredGhosts = this.state.ghosts.filter(g => {
      return this.state.selectedEvidence.every(s => g.evidence.indexOf(s) !== -1);
    })
    const availableEvidence = this.disabledEvidence(filteredGhosts);
    return (
      <div className="phass">
        <div className="row">
          {this.state.evidence.map(e => (
            <Evidence
              key={e}
              type={e}
              disabled={availableEvidence.indexOf(e) === -1}
              selected={this.state.selectedEvidence.indexOf(e) !== -1}
              handleClick={this.handleEvidenceClick}
            />
          ))}
        </div>
        <div className="row">
          {filteredGhosts.map(g => (
            <Ghost key={g.type} {...g} />
          ))}
        </div>
        <div className="row">

        </div>
      </div>
    )
  }
}

export default Assistant;