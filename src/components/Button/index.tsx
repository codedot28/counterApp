import Button from '@mui/material/Button';

// import styled from '@emotion/styled';

// const Container = styled.button`
//   border: 0;
//   color: #ffffff;
//   background-color: #ff5722;
//   cursor: pointer;
//   padding: 8px 16px;
//   border-radius: 4px;

//   &:hover {
//     background-color: #ff5722;
//     opacity: 0.8;
//   }

//   &:active {
//     box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

export const Buttons = ({ label, onClick }: Props) => {
  return <Button size="small" variant="contained" onClick={onClick}>{label}</Button>;
};
