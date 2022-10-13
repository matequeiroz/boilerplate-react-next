import * as S from './styles'

export const Home: React.FC = () => (
  <S.Wrapper>
    <S.Logo
      src={'/img/logo.svg'}
      alt="Um átomo de cor branca com fundo rosa e a frase 'React Avançado'"
      data-testid="home-logo"
    />
    <S.Title data-testid="home-title">React Avançado</S.Title>
    <S.Description data-testid="home-description">
      ReactJS, Typescript, NextJS e Styled-Components
    </S.Description>
    <S.Illustration
      data-testid="home-illustration"
      src={'/img/hero-illustration.svg'}
      alt="Figura de desenvolvedor sentado com telas com código a sua frente"
    />
  </S.Wrapper>
)
