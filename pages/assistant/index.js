const { Component } = require("react");
import Evidence from "../../components/Evidence";
import Ghost from "../../components/Ghost";
import Objective from "../../components/Objective";

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
          'Fingerprints',
          'Ghost Writing'
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
    objectives: [
      {
        name: 'Discover what type of Ghost we are dealing with',
        key: 'ghost type',
        checked: true,
      },
      {
        name: 'Have a member of your team witness a Ghost Event',
        key: 'ghost event',
        checked: false,
      },
      {
        name: 'Capture a photo of the Ghost',
        key: 'ghost photo',
        checked: false,
      },
      {
        name: 'Capture a photo of Dirty Water in a sink',
        key: 'dirty water',
        checked: false,
      },
      {
        name: 'Find evidence of the paranormal with an EMF Reader',
        key: 'emf reader',
        checked: false,
      },
      {
        name: 'Detect a room below 10 Celsius/50 Fahrenheit with a Thermometer',
        key: 'thermometer below 10c/50f',
        checked: false,
      },
      {
        name: 'Detect a Ghosts presence with a Motion Sensor',
        key: 'motion sensor',
        checked: false,
      },
      {
        name: 'Cleanse the area near the Ghost using Smudge Sticks',
        key: 'smudge sticks',
        checked: false,
      },
      {
        name: 'Prevent the Ghost from hunting with a Crucifix',
        key: 'crucifix',
        checked: false,
      },
      {
        name: 'Get a Ghost to walk through Salt',
        key: 'salt',
        checked: false,
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
    let objectives = this.state.objectives;
    objectives.forEach(o => o.checked = false);
    objectives[0].checked = true;
    this.setState({
      selectedEvidence: [],
      objectives,
    });
    let currentEvidences = document.querySelectorAll('.phass__objectives li');
    currentEvidences.forEach(ce => ce.className = '');
  }

  handleGhostMouseOver = (ghostType) => {
    if (!ghostType) return;

    this.resetHightlight();
    const over = this.state.ghosts.filter(g => g.type === ghostType);
    if (!over || over.length > 1) return;

    for (let i = 0; i < over[0].evidence.length; i += 1) {
      document.querySelector('button.phass__evidence[data-evidence-type="' + over[0].evidence[i] + '"]').classList.add('highlight');
    }
  }

  handleObjectiveClick = (e) => {
    if (!e) return;
    const found = this.state.objectives.findIndex(o => o.name === e.target.value);
    const objectives = this.state.objectives;
    objectives[found].checked = e.target.checked;
    this.setState({
      objectives,
    });
  }

  handleDoneEvidenceClick = (e) => {
    if (e.target.className === 'done') {
      e.target.classList.remove('done');
    } else {
      e.target.classList.add('done');
    }
  }

  resetHightlight = () => {
    const buttons = document.querySelectorAll('button.phass__evidence');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.remove('highlight');
    }
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
        <div className="modal fade" id="modalObjectives" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Optional Objectives</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="objectives">
                  {this.state.objectives.map(o => (
                    <Objective
                      name={o.name}
                      handleMouseClick={this.handleObjectiveClick}
                      checked={o.checked}
                      key={o.name}
                    />
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-4">
          </div>
          <div className="col-6 col-lg-4">
            <button className="phass__reset" onClick={this.handleReset} title="Reset">
              <img src="/reset.png" alt="Reset" />
            </button>
          </div>
        </div>
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
        <div className="row">
          <div className="col-12">
            <button className="phass__show-objectives" data-toggle="modal" data-target="#modalObjectives" title="Show objectives">
              <img src="/objectives.png" alt="Show Objectives" />
              Objectives:
            </button>
            <ul className="phass__objectives">
              {this.state.objectives.filter(of => of.checked).map(o => (
                <li key={o.key} onClick={this.handleDoneEvidenceClick}>{o.key}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="phass__possible-ghosts">Ghosts:</p>
            <ul className="phass__ghosts" onMouseLeave={this.resetHightlight}>
              {filteredGhosts.map(g => (
                <Ghost key={g.type} {...g} handleMouseOver={this.handleGhostMouseOver} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Assistant;