import styled from 'styled-components'

export const Wrapper = styled.main`
  align-items: center;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
  text-align: center;
  width: 100%;
`

export const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: bold;
`

export const Description = styled.p`
  color: white;
  font-size: 1.6rem;
  margin-top: 20px;
`
