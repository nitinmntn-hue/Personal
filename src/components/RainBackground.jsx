
const RainBackground = () => {
  const drops = []

  return (
    <div className="rain">
      {Array.from({ length: 26 }, (_, i) => (
        <div
          key={i}
          className="drop"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 7 + 1}s`, // duration is critical
            animationDelay: `${Math.random() * -10}s`,
          }}
        >{String.fromCharCode(97 + i)}
        </div>
      ))}

    </div>

  );

};



export default RainBackground;
