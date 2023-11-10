import './card.list.container.css';
const Card = ({ monster }) => {
    const { id, name, email } = monster;

    return (
      <div className='cardcontainer'>
        <img
          alt={`monster ${name}`}
         src={`https://robohash.org/${id*3}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  };

export default Card
