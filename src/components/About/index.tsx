import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';

const About: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('남자')

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeGender = (event:any) => {
    setGender(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type='text' value={name} onChange={handleChangeName} />
      </label>
      <br />
      <select value={gender} onChange={handleChangeGender}>
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
      <button type='submit'>제출</button>
    </form>
  );
}

export default About;
