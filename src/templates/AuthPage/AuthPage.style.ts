import styled from 'styled-components'

export const Grid = styled.div`
  background-color: #f0f5f9;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const IntroductionContainerGrid = styled.div`
  grid-column: 1/3;
  padding: 16px;
`

export const IntroductionContent = styled.div`
  background-color: #52616b;
  border-radius: 16px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 32px;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 48px 16px;
`

export const CarouselContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CarouselProfile = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`
