/* eslint-disable react/prop-types */

const computeQPI = (items) => {
  let sum = 0;
  let totalUnits = 0;

  for (let i of items) {
    let u = parseFloat(i.units);
    totalUnits += u;
    switch (i.grade) {
      case "A":
        sum += 4 * u;
        break;
      case "B+":
        sum += 3.5 * u;
        break;
      case "B":
        sum += 3 * u;
        break;
      case "C+":
        sum += 2.5 * u;
        break;
      case "C":
        sum += 2 * u;
        break;
      case "D":
        sum += 1 * u;
        break;
      case "F":
        sum += 0;
        break;
    }
  }
  //   return sum / totalUnits;
  const qpi = Number(Math.round(sum / totalUnits + "e2") + "e-2").toFixed(2);
  return qpi;
};

export default function GradesTable({ grades, search }) {
  return (
    <>
      <div className="border-2 border-orange-500 rounded-md overflow-hidden">
        <table>
          <tbody className="rounded-md">
            <tr>
              <th className="border border-gray-200 px-5 py-4">
                Course Number
              </th>
              <th className="border border-gray-200 px-5 py-4">Course Name</th>
              <th className="border border-gray-200 px-5 py-4">Units</th>
              <th className="border border-gray-200 px-5 py-4">Grade</th>
            </tr>
            {grades
              .filter(
                (grade) =>
                  grade.number.toLowerCase().includes(search.toLowerCase()) ||
                  grade.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((grade, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-5 py-4">
                    {grade.number}
                  </td>
                  <td className="border border-gray-200 px-5 py-4">
                    {grade.name}
                  </td>
                  <td className="border border-gray-200 px-5 py-4">
                    {grade.units}
                  </td>
                  <td className="border border-gray-200 px-5 py-4">
                    {grade.grade}
                  </td>
                </tr>
              ))}
            <tr>
              <th
                colSpan={3}
                className="border border-gray-200 px-5 py-4 text-right"
              >
                Total QP1:
              </th>
              <th className="border border-gray-200 px-5 py-4">
                {computeQPI(grades)}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
