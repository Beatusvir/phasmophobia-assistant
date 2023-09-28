const { Component } = require("react");
import Evidence from "../../components/Evidence";
import Ghost from "../../components/Ghost";
import Timer from "../../components/Timer";
import Objective from "../../components/Objective";

class Assistant extends Component {
  state = {
    currentStrength: '',
    currentWeakness: '',
    evidence: [
      {
        type: 'D.O.T.S Projector',
        icon: '/dots.png'
      },
      {
        type: 'EMF Level 5',
        icon: '/emf.png'
      },
      {
        type: 'Ultraviolet',
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
    ghostName: '',
    ghosts: [
      {
        type: 'Banshee',
        evidence: [
          'D.O.T.S Projector',
          'Ultraviolet',
          'Ghost Orbs',
        ],
        strength: 'A Banshee will focus on one player at a time until it kills them',
        weakness: 'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it',
        tips: '',
      },
      {
        type: 'Demon',
        evidence: [
          'Freezing Temperatures',
          'Ghost Writing',
          'Ultraviolet'
        ],
        weakness: 'Asking a Demon successful questions on the Ouija Board won`t lower the user`s sanity',
        strength: 'Demons are the most aggressive and enter hunt mode more',
        tips: '',
      },
      {
        type: 'Deogen',
        evidence: [
          'Spirit Box',
          'Ghost Writing',
          'D.O.T.S Projector'
        ],
        weakness: 'Deogen require a lot of energy to form and will move very slowly when approaching its victim',
        strength: 'Deogen constantly sense the living. You can run but you can\'t hide',
        tips: '',
      },
      {
        type: 'Goryo',
        evidence: [
          'EMF Level 5',
          'Ultraviolet',
          'D.O.T.S Projector'
        ],
        weakness: 'They are rarely seen far from their place of death',
        strength: 'A Goryo will usually only show itself on camera if there are no people nearby',
        tips: '',
      },
      {
        type: 'Hantu',
        evidence: [
          'Ultraviolet',
          'Ghost Orbs',
          'Freezing Temperatures'
        ],
        strength: 'Moves faster in colder areas',
        weakness: 'Moves slower in warmer areas',
        tips: '',
      },
      {
        type: 'Jinn',
        evidence: [
          'Ultraviolet',
          'EMF Level 5',
          'Freezing Temperatures'
        ],
        strength: 'A Jinn will travel at a faster speed if its victim is far away',
        weakness: 'Turning off the location`s power source will prevent the Jinn from using its ability',
        tips: '',
      },
      {
        type: 'Mare',
        evidence: [
          'Ghost Orbs',
          'Ghost Writing',
          'Spirit Box'
        ],
        weakness: 'Turning the lights on will lower its chance to attack',
        strength: 'Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box',
        tips: '',
      },
      {
        type: 'Moroi',
        evidence: [
          'Freezing Temperatures',
          'Spirit Box',
          'Ghost Writing'
        ],
        weakness: 'Moroi suffer from hyperosmia, weakening them for longer periods',
        strength: 'The weaker their victims, the stronger the Moroi becomes',
        tips: '',
      },
      {
        type: 'Myling',
        evidence: [
          'EMF Level 5',
          'Ultraviolet',
          'Ghost Writing'
        ],
        weakness: 'Mylings more frequently make paranormal sounds',
        strength: 'A Myling is known to be quieter when hunting',
        tips: '',
      },
      {
        type: 'Obake',
        evidence: [
          'EMF Level 5',
          'Ultraviolet',
          'Ghost Orbs'
        ],
        weakness: 'Sometimes this ghost will shapeshift, leaving behind unique evidence',
        strength: 'When interacting with the environment, an Obake will rarely leave a trace',
        tips: '',
      },
      {
        type: 'Oni',
        evidence: [
          'EMF Level 5',
          'Freezing Temperatures',
          'D.O.T.S Projector'
        ],
        weakness: 'Being more active will make the Oni easier to find and identify',
        strength: 'Oni are more active when people are nearby and have been seen moving objects at great speed',
        tips: '',
      },
      {
        type: 'Onryo',
        evidence: [
          'Freezing Temperatures',
          'Ghost Orbs',
          'Spirit Box'
        ],
        weakness: 'When threatened, this ghost will be less likely to hunt',
        strength: 'Extinguishing a flame can cause an Onryo to attack',
        tips: '',
      },
      {
        type: 'Phantom',
        evidence: [
          'D.O.T.S Projector',
          'Ultraviolet',
          'Spirit Box'
        ],
        strength: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt',
        weakness: 'Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt',
        tips: '',
      },
      {
        type: 'Poltergeist',
        evidence: [
          'Spirit Box',
          'Ultraviolet',
          'Ghost Writing'
        ],
        strength: 'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once',
        weakness: 'A Poltergeist is almost ineffective in an empty room',
        tips: '',
      },
      {
        type: 'Raiju',
        evidence: [
          'EMF Level 5',
          'Ghost Orbs',
          'D.O.T.S Projector'
        ],
        weakness: 'Constantly disrupt electronic equipment',
        strength: 'Moves faster near electrical devices',
        tips: '',
      },
      {
        type: 'Revenant',
        evidence: [
          'Ghost Writing',
          'Ghost Orbs',
          'Freezing Temperatures'
        ],
        weakness: 'Hiding from the Revenant will cause it to move very slowly',
        strength: 'A Revenant will travel at a significantly faster speed when hunting a victim. Additionally, the Revenant can freely switch whoever it is targeting during a Hunt',
        tips: '',
      },
      {
        type: 'Shade',
        evidence: [
          'EMF Level 5',
          'Ghost Writing',
          'Freezing Temperatures'
        ],
        weakness: 'Conversely, a Shade will rarely start a Hunt when players are grouped together',
        strength: 'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect',
        tips: '',
      },
      {
        type: 'Spirit',
        evidence: [
          'EMF Level 5',
          'Ghost Writing',
          'Spirit Box',
        ],
        strength: 'Using Smudge Sticks on a Spirit will stop it attacking for 120 seconds instead of 90',
        weakness: 'The spirit has no discernible strengths, however is known to increase its hunting as your sanity drops',
        tips: '',
      },
      {
        type: 'Thaye',
        evidence: [
          'Ghost Orbs',
          'Ghost Writing',
          'D.O.T.S Projector'
        ],
        weakness: 'Thaye will weaken over time, making them weaker, slower and less aggressive',
        strength: 'Upon entering the location, Thaye will become active, defensive and agile',
        tips: '',
      },
      {
        type: 'The Mimic',
        evidence: [
          'Ghost Orbs',
          'Freezing Temperatures',
          'Spirit Box',
          'Ultraviolet'
        ],
        weakness: 'A Mimic\'s ghost orbs will give away its presence, moving around it when it roams around a house',
        strength: 'The Mimi\'s strength is that it can copy traits of other ghosts',
        tips: '',
      },
      {
        type: 'The Twins',
        evidence: [
          'EMF Level 5',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        weakness: 'The Twins will often interact with the environment at the same time',
        strength: 'Either Twin can be angered and initiate an attack on their prey',
        tips: '',
      },
      {
        type: 'Wraith',
        evidence: [
          'D.O.T.S Projector',
          'EMF Level 5',
          'Spirit Box'
        ],
        strength: 'Wraiths almost never touch the ground, meaning footprint sounds are rare to non-existant. It can travel through walls and doors without opening them. Wraiths will however leave footprints in salt if stepped in',
        weakness: 'Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking',
        tips: '',
      },
      {
        type: 'Yokai',
        evidence: [
          'Spirit Box',
          'Ghost Orbs',
          'D.O.T.S Projector',
        ],
        strength: 'Talking near a Yokai will anger it and cause it to attack more often',
        weakness: 'While hunting, it can only hear voices close to it',
        tips: '',
      },
      {
        type: 'Yurei',
        evidence: [
          'D.O.T.S Projector',
          'Ghost Orbs',
          'Freezing Temperatures'
        ],
        weakness: 'Using Smudge Sticks on the Yurei`s Ghost Room will cause it to not wander around the location for ~90 seconds',
        strength: 'Yurei have been known to have a stronger effect on people`s Sanity',
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
        name: 'Find evidence of the paranormal with an EMF Reader',
        key: 'emf reader',
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
      {
        name: 'Detect a ghost pressence with a candle',
        key: 'candle',
        checked: false,
      },
      {
        name: 'Escape the Ghost during a hunt with no deaths',
        key: 'escape hunt',
        checked: false,
      },
      {
        name: 'Use smudge stick while the Ghost is hunting a player',
        key: 'smudge hunt',
        checked: false,
      },
      {
        name: 'Get an average sanity below 25%',
        key: 'sanity',
        checked: false,
      },
    ],
    selectedEvidence: [],
    hiddenEvidence: [],
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip()
  }

  handleEvidenceClick = (e, type) => {
    if (e.target.classList.contains('phass__evidence-hide')) {
      this.updateHiddenEvince(type);
      return;
    }
    let current = this.state.selectedEvidence;
    const found = this.state.selectedEvidence.indexOf(type);
    found === -1 ? current.push(type) : current.splice(found, 1);
    this.setState({
      selectedEvidence: current,
    });
  }

  updateHiddenEvince = (evidence) => {
    let hiddenEvidence = this.state.hiddenEvidence;
    let currentIndex = hiddenEvidence.indexOf(evidence);
    if (currentIndex !== -1) {
      hiddenEvidence.splice(currentIndex, 1);
    } else {
      hiddenEvidence.push(evidence);
    }
    this.setState({
      hiddenEvidence,
    })
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
      hiddenEvidence: [],
      objectives,
      ghostName: '',
    });
    let currentEvidences = document.querySelectorAll('.phass__objectives li');
    currentEvidences.forEach(ce => ce.className = '');
  }

  handleGhostMouseOver = (ghostType) => {
    if (!ghostType) return;

    this.resetHightlight();
    const over = this.state.ghosts.filter(g => g.type === ghostType);
    if (!over) return;

    for (let i = 0; i < over[0].evidence.length; i += 1) {
      document.querySelector('button.phass__evidence[data-evidence-type="' + over[0].evidence[i] + '"]').classList.add('highlight');
    }
    this.setState({
      currentStrength: over[0].strength,
      currentWeakness: over[0].weakness,
    });
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

  handleGhostNameInput = (e) => {
    this.setState({
      ghostName: e.target.value,
    })
  }

  resetHightlight = () => {
    const buttons = document.querySelectorAll('button.phass__evidence');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.remove('highlight');
    }
    this.setState({
      currentStrength: '',
      currentWeakness: '',
    });
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
    const hiddenGhosts = this.state.ghosts.filter(g => {
      return this.state.hiddenEvidence.every(s => g.evidence.indexOf(s) === -1);
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
          <div className="col-12 col-md-6">
            <Timer />
          </div>
          <div className="col-12 col-md-6">
            <button className="phass__reset" onClick={this.handleReset} title="Reset">
              <img src="/reset.png" alt="Reset" />
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.evidence.map(e => (
            <Evidence
              key={e.type}
              type={e.type}
              icon={e.icon}
              disabled={availableEvidence.indexOf(e.type) === -1}
              selected={this.state.selectedEvidence.indexOf(e.type) !== -1}
              hidden={this.state.hiddenEvidence.indexOf(e.type) !== -1}
              handleClick={this.handleEvidenceClick}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row form-group">
              <label className="col-form-label col-4 col-lg-1" htmlFor="ghost-name">Name:</label>
              <div className="col-8 col-lg-3">
                <input className="form-control pass__ghost-name" type="text" onInput={this.handleGhostNameInput} value={this.state.ghostName} />
              </div>
            </div>
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
                <Ghost key={g.type} {...g} hidden={hiddenGhosts.filter(hg => hg.type === g.type).length === 0} handleMouseOver={this.handleGhostMouseOver} />
              ))}
            </ul>
          </div>
          <div className="col-12">
            <div className="phass__ghost-info">
              <p className="phass__ghost-strength">{this.state.currentStrength}</p>
              <p className="phass__ghost-weakness">{this.state.currentWeakness}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Assistant;