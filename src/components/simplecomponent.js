import React from 'react';
import {uid} from 'react-uid';
import empireImg from '../img/empire.svg';
import rebelImg from '../img/rebel.svg';
import scumImg from '../img/scum.svg';
import PropTypes from "prop-types";

const TableLine = (props) => {
  //let perso = props.perso;
  //let index = props.index;
  //let sideImg = props.sideImg;

  // destructuration de variable : 
  let {perso,index,sideImg,imgSize, className} = props;

  return (
    <tr className={className}>
      <td>{index}</td>
      <td>{perso.name}</td>
      <td>{perso.role}</td>
      <td>
        {/* Ma solution */}
        {sideImg.map((sid) => {
          return (sid.side == perso.side) ? <img key={uid(perso,sid)} src={sid.img} alt={sid.side} height={imgSize} width={imgSize}/> : null;
        })}
        {/* Solution attendue */}
        {perso.side === "Empire" && <img src={empireImg} alt={perso.side} height={imgSize} width={imgSize}/>}
        {perso.side === "Rebel" && <img src={rebelImg} alt={perso.side} height={imgSize} width={imgSize}/>}
        {perso.side === "Scum" && <img src={scumImg} alt={perso.side} height={imgSize} width={imgSize}/>}
      </td>
    </tr>
  )
};

// Default value des props
TableLine.defaultProps = {
    imgSize: "33px",
    className: "line"
}

// Typage des props
TableLine.propTypes = {
    perso: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    sideImg: PropTypes.array.isRequired,
    imgSize: PropTypes.string,
    className: PropTypes.string
}

const SimpleComponent = () => {
  const ainz = "Ainz";// Constante
  let ooal = "Ooal";  // Variable très locale
  var gown = "Gown";  // Variable

  let test = `hello ${ainz}`; // Nouvelle concat javascript vanilla
  console.log(test);

  const nom = "Luke Skywalker";
  const nom2 = "Han Solor";
  const episode = 6;

  let characters = [
    {name:'Darth Vador', role:'Sith', side:'Empire'},
    {name:'Luke Skywalker', role:'Pilot', side:'Rebel'},
    {name:'Boba Fett', role:'Bounty hunter', side:'Scum'},
    {name:'Han Solo', role:'Smuggler', side:'Rebel'},
    {name:'Sheev Palpatine', role:'Emperor', side:'Empire'},
    {name:'Leia Organa', role:'Princess', side:'Rebel'},
    {name:'Bib Fortuna', role:'Groom', side:'Scum'},
  ];

  let sideImg = [
    {side: "Empire", img: empireImg},
    {side: "Rebel", img: rebelImg},
    {side: "Scum", img: scumImg}
  ];

  return (
    // Comment here (hors tag jsx)
    // Le jsx ne peut retourner qu'un seul élément parent !!! ici, c'est le div
    <div className="App">
      {/* Comment here (in jsx tag) */}
      <p>Hello {ainz} {ooal} {gown} !</p> {/* <-- concat jsx  */}
      <p>Je suis {nom}, {episode >= 6 ? "chevalier Jedi," : "pilote rebelle,"} ami du capitaine {nom2}</p>
      <table border="1">
        <tr><th>#</th><th>Nom</th><th>Role</th><th>Faction</th></tr>
        {characters.map((perso, index) => (
          <TableLine key={uid(perso)} perso={perso} index={index} sideImg={sideImg} imgSize="20px" />
        ))}
      </table>
    </div>
  );
}

export default SimpleComponent;
