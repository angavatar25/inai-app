import styled from "styled-components";

export const RouterContainer = styled.div`
  @media screen and (min-width: 1280px) {  
    background-color: #F4F4F4;
    min-height: 100vh;
    .content-container {
      background-color: #fff;
      max-width: 1280px;
      width: 100%;
      margin: auto;
      position: relative;
      display: flex;
      flex: 1;
      flex-grow: 1;
      .flex-grow {
        flex-grow: 1;
      }
    }
  }
`

export const DashboardContainer = styled.div`
  @media screen and (max-width: 1024px) {
    padding: 25px;
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0px;
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
  }
`
export const Title = styled.p<{ $fontSize: number, $color?: string, $fontWeight?: number }>`
  margin: 0;
  font-size: ${p => p.$fontSize ? p.$fontSize : 16}px;
  color: ${p => p.$color ? p.$color : '#000'};
  font-weight: ${p => p.$fontWeight ? p.$fontWeight : 800};
`
export const Button = styled.button`
  width: 100%;
  background-color: #1E293B;
  border-radius: 99px;
  color: #fff;
  font-size: 16px;
  line-height: 48px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`