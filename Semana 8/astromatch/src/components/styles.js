import styled from 'styled-components'

//APP

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

export const CardContainer = styled.div`
    width: 390px;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 3px solid #6F2B8C;
    border-radius: 5px;
`

export const LogoImg = styled.img`
    width: 200px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
    text-decoration-line: underline; 
`

//Home

export const ImgContainer = styled.img`
    width: 250px;
    height: 300px;
    border: 0.6px solid #6F2B8C;
    border-radius: 5px;
    justify-self: center;
    margin-left: 70px;

`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;

`
export const NameContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const BioContainer = styled.div`
    margin-left: 10px;
`
//MATCHES 

export const MatchesContainer = styled.div`
    height: 465px;
    overflow: auto;
    margin: 15px;
`

export const MatchesProfiles = styled.div`
    display: flex;
`

export const MatchesPhotos = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin-bottom: 15px;
    margin-right: 8px;
`