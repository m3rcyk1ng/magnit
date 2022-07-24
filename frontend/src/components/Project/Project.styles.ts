import styled from "styled-components";

export const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
  align-items: center;
`
export const LeftBlock = styled.div`
	display: flex;
	flex-direction: column;
  align-items: flex-end;
`

export const RigthBlock = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const InfoRow = styled.div`
	display: flex;
  margin-bottom: 2rem;
`

export const InfoText = styled.p`
	font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.25rem;
`

export const ProjectImage = styled.img`
	width: 962px;
  height: 530px;
`

export const ProjectName = styled.h3`
  font-size: 2rem;
  line-height: 1.22;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
`
