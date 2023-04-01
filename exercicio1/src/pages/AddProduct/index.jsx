import { Header } from '../../components/Header'
import {
  Button,
  Container,
  Divider,
  TextField,
  Typography
} from '@mui/material';

import './styles.css';

function AddProduct() {
  return (
    <div className="container-add-product">
      <Header />
      <Container
        component="main"
      >
        <Typography style={{ marginBottom: '4rem' }} variant="h3">Nome da loja</Typography>
        <Typography style={{ marginBottom: '3.5rem' }} variant="h4">Adicionar produto</Typography>
        <Container
          component="form"
          disableGutters
        >
          <Container
            disableGutters
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              maxWidth: '24.5rem',
              margin: '0',
              marginBottom: '8.25rem'
            }}>
            <TextField
              variant="standard"
              label="Nome do produto"
            />
            <Container
              disableGutters
              style={{
                display: 'flex',
                gap: '1.5rem'
              }}
            >
              <TextField
                variant="standard"
                label="Preço"
                placeholder="R$"
              />
              <TextField
                variant="standard"
                label="Estoque"
                placeholder="Un"
              />
            </Container>
            <TextField
              variant="standard"
              label="Descrição do produto"
            />
            <TextField
              variant="standard"
              label="Imagem"
            />
          </Container>
          <Divider
            style={{
              marginBottom: '2.25rem'
            }}
          />
          <Button
            variant="text"
            style={{
              marginRight: '1.75rem'
            }}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
          >
            Adicionar produto
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default AddProduct;
