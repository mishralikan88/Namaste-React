

// child component of parent Instamart

const Section = ({ title, description,isVisible,setIsVisible}) => {
//   const [isVisible, setIsVisible] = useState(false); 
  return (
    <div>
      <h3>{title}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default Section;
