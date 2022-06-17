const ProgressCircle = (props) => {
  const data = props;
  const radius = 50 - data.strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: '#0290ff',
    strokeLinecap: 'round',
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - data.percentage) / 100) * diameter}px`,
  };

  return (
    <svg
      className="CircularProgressbar"
      viewBox="0 0 100 100"
      width={100}
      height={100}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={data.strokeWidth}
        fillOpacity={0}
        style={{
          stroke: '#d6d6d6',
        }}
      />
      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={data.strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />
    </svg>
  );
};

export default ProgressCircle;
