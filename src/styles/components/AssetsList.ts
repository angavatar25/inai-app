import styled from "styled-components";

export const AssetListContainer = styled.div`
  @media screen and (min-width: 1280px) {
    max-height: 80vh;
    height: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const AssetAmount = styled.div`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  @media screen and (max-width: 1280px) {
    margin-bottom: 10px;
  }
`