import { Header } from '../../components/Header';
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  List,
  ListItem,
  Container,
  Divider
} from '@mui/material'

import exampleImg from '../../assets/example-img.jpeg'

import './styles.css';

const cardListStyle = {
  display: 'flex',
  maxWidth: '80rem'
}

const cardStyle = {
  borderRadius: '24px',
  maxHeight: '27rem'
}

function Main() {
  return (
    <div className="container-main">
      <Header />
      <Container component="main" disableGutters>
        <Typography style={{ marginBottom: '4rem' }} variant="h3">Nome da loja</Typography>
        <Container component="section" disableGutters>
          <Typography variant="body1" fontSize={34}>Seus produtos</Typography>
          <Button variant="contained" style={{ display: 'block', marginLeft: 'auto', marginBottom: '2rem' }}>Aidicionar Produto</Button>
          <List style={{ justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }} sx={cardListStyle} disablePadding>
            <ListItem style={{ justifyContent: 'center', maxWidth: '14.5rem' }} disableGutters disablePadding>
              <Card className="aaa" sx={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    sx={{ maxHeight: '240px' }}
                    component="img"
                    image={exampleImg}
                  />
                  <CardContent>
                    <Typography variant="h6" marginBottom=".75rem">
                      Nome do produto
                    </Typography>
                    <Typography variant="body1" fontSize={12} marginBottom=".75rem">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim iste eaque odio, error quo!
                    </Typography>
                    <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#656565DE">
                        3 unidades
                      </Typography>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#000000DE">
                        R$ 99.99
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
            <ListItem style={{ justifyContent: 'center', maxWidth: '14.5rem' }} disableGutters disablePadding>
              <Card className="aaa" sx={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    sx={{ maxHeight: '240px' }}
                    component="img"
                    image={exampleImg}
                  />
                  <CardContent>
                    <Typography variant="h6" marginBottom=".75rem">
                      Nome do produto
                    </Typography>
                    <Typography variant="body1" fontSize={12} marginBottom=".75rem">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim iste eaque odio, error quo!
                    </Typography>
                    <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#656565DE">
                        3 unidades
                      </Typography>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#000000DE">
                        R$ 99.99
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
            <ListItem style={{ justifyContent: 'center', maxWidth: '14.5rem' }} disableGutters disablePadding>
              <Card className="aaa" sx={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    sx={{ maxHeight: '240px' }}
                    component="img"
                    image={exampleImg}
                  />
                  <CardContent>
                    <Typography variant="h6" marginBottom=".75rem">
                      Nome do produto
                    </Typography>
                    <Typography variant="body1" fontSize={12} marginBottom=".75rem">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim iste eaque odio, error quo!
                    </Typography>
                    <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#656565DE">
                        3 unidades
                      </Typography>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#000000DE">
                        R$ 99.99
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
            <ListItem style={{ justifyContent: 'center', maxWidth: '14.5rem' }} disableGutters disablePadding>
              <Card className="aaa" sx={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    sx={{ maxHeight: '240px' }}
                    component="img"
                    image={exampleImg}
                  />
                  <CardContent>
                    <Typography variant="h6" marginBottom=".75rem">
                      Nome do produto
                    </Typography>
                    <Typography variant="body1" fontSize={12} marginBottom=".75rem">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim iste eaque odio, error quo!
                    </Typography>
                    <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#656565DE">
                        3 unidades
                      </Typography>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#000000DE">
                        R$ 99.99
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
            <ListItem style={{ justifyContent: 'center', maxWidth: '14.5rem' }} disableGutters disablePadding>
              <Card className="aaa" sx={cardStyle}>
                <CardActionArea>
                  <CardMedia
                    sx={{ maxHeight: '240px' }}
                    component="img"
                    image={exampleImg}
                  />
                  <CardContent>
                    <Typography variant="h6" marginBottom=".75rem">
                      Nome do produto
                    </Typography>
                    <Typography variant="body1" fontSize={12} marginBottom=".75rem">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim iste eaque odio, error quo!
                    </Typography>
                    <Container disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#656565DE">
                        3 unidades
                      </Typography>
                      <Typography variant="body2" fontSize={12} textTransform="uppercase" color="#000000DE">
                        R$ 99.99
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
          </List>
          <Divider />
        </Container>
      </Container>
    </div>
  );
}

export default Main;
