const { Component } = require("react");
import Evidence from "../../components/Evidence";
import Ghost from "../../components/Ghost";
import Objective from "../../components/Objective";

class Assistant extends Component {
  state = {
    currentStrength: '',
    currentWeakness: '',
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
        strength: 'Using Smudge Sticks on a Spirit will stop it attacking for 120 seconds instead of 90',
        weakness: 'The spirit has no discernible strengths, however is known to increase its hunting as your sanity drops',
        tips: '',
      },
      {
        type: 'Wraith',
        evidence: [
          'Fingerprints',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        strength: 'Wraiths almost never touch the ground, meaning footprint sounds are rare to non-existant. It can travel through walls and doors without opening them. Wraiths will however leave footprints in salt if stepped in',
        weakness: 'Wraiths have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking',
        tips: '',
      },
      {
        type: 'Phantom',
        evidence: [
          'EMF Level 5',
          'Freezing Temperatures',
          'Ghost Orbs',
        ],
        strength: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt',
        weakness: 'Taking a photo of the Phantom will make it temporarily disappear. The Photo Camera will make it disappear, but it will not stop a Hunt',
        tips: '',
      },
      {
        type: 'Poltergeist',
        evidence: [
          'Spirit Box',
          'Fingerprints',
          'Ghost Orbs',
        ],
        strength: 'A Poltergeist is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once',
        weakness: 'A Poltergeist is almost ineffective in an empty room',
        tips: '',
      },
      {
        type: 'Banshee',
        evidence: [
          'EMF Level 5',
          'Fingerprints',
          'Freezing Temperatures',
        ],
        strength: 'A Banshee will focus on one player at a time until it kills them',
        weakness: 'Banshees fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it',
        tips: '',
      },
      {
        type: 'Jinn',
        evidence: [
          'Ghost Orbs',
          'EMF Level 5',
          'Spirit Box'
        ],
        strength: 'A Jinn will travel at a faster speed if its victim is far away',
        weakness: 'Turning off the location`s power source will prevent the Jinn from using its ability',
        tips: '',
      },
      {
        type: 'Mare',
        evidence: [
          'Ghost Orbs',
          'Freezing Temperatures',
          'Spirit Box'
        ],
        weakness: 'Turning the lights on will lower its chance to attack',
        strength: 'Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box',
        tips: '',
      },
      {
        type: 'Revenant',
        evidence: [
          'EMF Level 5',
          'Fingerprints',
          'Ghost Writing'
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
          'Ghost Orbs'
        ],
        weakness: 'Conversely, a Shade will rarely start a Hunt when players are grouped together',
        strength: 'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect',
        tips: '',
      },
      {
        type: 'Demon',
        evidence: [
          'Freezing Temperatures',
          'Ghost Writing',
          'Spirit Box'
        ],
        weakness: 'Asking a Demon successful questions on the Ouija Board won`t lower the user`s sanity',
        strength: 'Demons are the most aggressive and enter hunt mode more',
        tips: '',
      },
      {
        type: 'Yurei',
        evidence: [
          'Ghost Orbs',
          'Ghost Writing',
          'Freezing Temperatures'
        ],
        weakness: 'Using Smudge Sticks on the Yurei`s Ghost Room will cause it to not wander around the location for ~90 seconds',
        strength: 'Yurei have been known to have a stronger effect on people`s Sanity',
        tips: '',
      },
      {
        type: 'Oni',
        evidence: [
          'EMF Level 5',
          'Ghost Writing',
          'Spirit Box'
        ],
        weakness: 'Being more active will make the Oni easier to find and identify',
        strength: 'Oni are more active when people are nearby and have been seen moving objects at great speed',
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

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip()
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
    console.log(over);
    if (!over) return;

    console.log('after');
    for (let i = 0; i < over[0].evidence.length; i += 1) {
      console.log(document.querySelector('button.phass__evidence[data-evidence-type="' + over[0].evidence[i] + '"]'));
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
    const availableEvidence = this.disabledEvidence(filteredGhosts);
    return (
      <div className="phass">
        <h1>Guys Heroku free tier is about to remove this app, I had to move it to <a href="https://phass.netlify.app/" style={{ color: 'cyan' }}>netlify.</a></h1>
        <h3 style={{ color: 'coral', textAlign: 'center' }}>Sorry for the trouble</h3>
      </div>
    )
  }
}

export default Assistant;