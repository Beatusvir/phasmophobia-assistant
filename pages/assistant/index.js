const { Component } = require("react");
import Evidence from "../../components/Evidence";
import Ghost from "../../components/Ghost";

class Assistant extends Component {
  state = {
    evidence: [
      {
        type: 'EMF Level 5',
        icon: '/emf.png'
      },
      {
        type: 'Fingerprints',
        icon: '/fingerprint.png'
      },
      {
        type: 'Freezing Temperatures',
        icon: '/freezingTemps.png'
      },
      {
        type: 'Ghost Orbs',
        icon: '/ghostOrb.png'
      },
      {
        type: 'Ghost Writing',
        icon: '/ghostWriting.png'
      },
      {
        type: 'Spirit Box',
        icon: '/spiritBox.png'
      },
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
          'EMF Level 5',
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

  handleEvidenceClick = (type) => {
    let current = this.state.selectedEvidence;
    const found = this.state.selectedEvidence.indexOf(type);
    found === -1 ? current.push(type) : current.splice(found, 1);
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

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      selectedEvidence: [],
    })
  }

  disabledEvidence = (ghosts) => {
    let current = [];
    ghosts.map(g => {
      g.evidence.map(e => {
        if (current.indexOf(e) === -1) current.push(e);
      })
    })
    return current;
  }

  render() {
    const filteredGhosts = this.state.ghosts.filter(g => {
      return this.state.selectedEvidence.every(s => g.evidence.indexOf(s) !== -1);
    })
    const availableEvidence = this.disabledEvidence(filteredGhosts);
    return (
      <div className="phass">
        <button className="phass__reset" onClick={this.handleReset} title="Reset">
          <img src="/reset.png" alt="Reset"/>
        </button>
        <div className="row">
          {this.state.evidence.map(e => (
            <Evidence
              key={e.type}
              type={e.type}
              icon={e.icon}
              disabled={availableEvidence.indexOf(e.type) === -1}
              selected={this.state.selectedEvidence.indexOf(e.type) !== -1}
              handleClick={this.handleEvidenceClick}
            />
          ))}
        </div>
        <p>Possible Ghosts:</p>
        <div className="row">
          {filteredGhosts.map(g => (
            <Ghost key={g.type} {...g} />
          ))}
        </div>
      </div>
    )
  }
}

export default Assistant;