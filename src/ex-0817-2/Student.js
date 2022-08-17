// import { data } from './data/student';
//js檔

import myData from './data/student.json';

function Student() {
  return (
    <>
      <h1>Student</h1>
      <hr />
      <ul>
        {myData.map((v, i) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Student;
