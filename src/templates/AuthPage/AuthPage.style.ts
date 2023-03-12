import styled from 'styled-components'

export const Grid = styled.div`
  background-color: #f0f5f9;
  display: flex;
  min-height: 100vh;
`

export const IntroductionContainerGrid = styled.div`
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
  max-width: 440px;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const ChildrenContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  width: 100%;
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
