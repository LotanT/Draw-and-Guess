import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { playerService } from '../services/players.service';

export function Wait() {

  const [rule, setRule] = useState('');

  useEffect(()=>{
    getRule()
    return(
        playerService.resetPlayers()
    )
  },[])

  const getRule = async () => {
      const rule = await playerService.getPlayerRule()
      setRule(rule)
  };

  return (
    <section className="wait main-layout">
      <div className="header">Waiting for another Player...</div>
      <Link to="/" className="main-btn">
        Go Back
      </Link>
    </section>
  );
}
