const letters = ["A", "B+", "B", "C+", "C", "D", "F"];

// eslint-disable-next-line react/prop-types
export default function GradeSelection({ onChange }) {
  return (
    <div>
      <p className="font-bold">Grade:</p>
      <div className="grid grid-cols-2">
        {letters.map((letter, index) => (
          <div key={index}>
            <input
              type="radio"
              name="grade_selection"
              id={letter}
              value={letter}
              onChange={onChange}
            ></input>
            <label htmlFor={letter} className="pl-1">
              {letter}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
