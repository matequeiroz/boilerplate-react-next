import * as S from './styles'

interface HomeProps {
  title: string
  description: string
}

export const Home = ({ title, description }: HomeProps) => (
  <S.Wrapper>
    <S.Logo
      src={'/img/logo.svg'}
      alt="Um átomo de cor branca com fundo rosa e a frase 'React Avançado'"
      data-testid="home-logo"
    />
    <S.Title data-testid="home-title">{title}</S.Title>
    <S.Description data-testid="home-description">{description}</S.Description>
    <S.Illustration
      data-testid="home-illustration"
      src={'/img/hero-illustration.svg'}
      alt="Figura de desenvolvedor sentado com telas com código a sua frente"
    />
  </S.Wrapper>
)
