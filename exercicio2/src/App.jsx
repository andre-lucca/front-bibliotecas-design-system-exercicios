import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  TextField,
  Typography
} from '@mui/material'

import { AddCircle, ClearAll, Close, Delete } from '@mui/icons-material'

import './App.css'

function App() {
  const petDataInitialState = {
    nome: '',
    sobrenome: '',
    raca: '',
    idade: '',
    avatar: ''
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [petData, setPetData] = useState({ ...petDataInitialState })
  const [petList, setPetList] = useLocalStorage('petList', [
    {
      id: 1,
      nome: 'Cão',
      sobrenome: 'da Silva',
      raca: 'Labrador',
      idade: '6 meses',
      avatar: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
    },
    {
      id: 2,
      nome: 'Feroso',
      sobrenome: 'Canino',
      raca: 'Jack Russel Terrier',
      idade: '2 anos',
      avatar: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3203924:1647286621/Jack-Russell-Terrier.jpg?f=default&$p$f=1227f5e'
    },
    {
      id: 3,
      nome: 'Ptolomeu',
      sobrenome: 'Pto',
      raca: 'Golden Retriever',
      idade: '4 anos',
      avatar: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ])

  const handleDeleteClick = (dogId) => {
    setPetList(petList.filter(dog => dog.id !== dogId))
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleAddPet = () => {
    if (Object.values(petData).includes('')) {
      return
    }

    const updatedPetList = [...petList]

    updatedPetList.push({
      id: petList.length + 1,
      ...petData
    })

    setPetList(updatedPetList)
    setPetData({ ...petDataInitialState })
    handleCloseModal()
  }

  const handleClearList = () => {
    setPetList([])
  }

  const handleInputChange = ({ target }) => {
    setPetData({ ...petData, [target.name]: target.value })
  }

  return (
    <div className="App">
      <Typography component="h1" variant="h2" color="grey" mb="3rem">
        Listagem de animais
      </Typography>
      <IconButton
        onClick={handleClearList}
      >
        <ClearAll />
      </IconButton>
      <List
        style={{
          width: '30rem',
        }}
      >
        {
          petList.map(dog => (
            <ListItem
              key={dog.id}
              disableGutters
              style={{
                backgroundColor: 'rgba(0 0 0 / .05',
                padding: '1rem',
                marginBottom: '.5rem',
                border: '1px solid gainsboro',
                borderRadius: '8px'
              }}
            >
              <ListItemAvatar>
                <Avatar src={dog.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={dog.nome}
                secondary={dog.sobrenome}
                style={{
                  flex: '2'
                }}
              />
              <ListItemText
                primary={dog.raca}
                secondary={dog.idade}
                style={{
                  flex: '3'
                }}
              />
              <IconButton
                onClick={() => handleDeleteClick(dog.id)}
              >
                <Delete />
              </IconButton>

            </ListItem>
          ))
        }
      </List>
      <IconButton
        onClick={handleOpenModal}
      >
        <AddCircle fontSize="large" />
      </IconButton>
      <Modal
        open={isModalOpen}
        sx={{
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: 450,
            p: 4,
            backgroundColor: 'white',
            outline: 0,
            borderRadius: 2
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              right: 10
            }}
            onClick={handleCloseModal}
          >
            <Close />
          </IconButton>
          <Typography color="gray" align="center" variant="h4" component="h2" mb={4}>
            Adicionar pet
          </Typography>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <TextField
              label="Nome do pet"
              name="nome"
              value={petData.nome}
              onChange={handleInputChange}
            />
            <TextField
              label="Sobrenome do Pet"
              name="sobrenome"
              value={petData.sobrenome}
              onChange={handleInputChange}
            />
            <TextField
              label="Raça"
              name="raca"
              value={petData.raca}
              onChange={handleInputChange}
            />
            <TextField
              label="Idade"
              name="idade"
              value={petData.idade}
              onChange={handleInputChange}
            />
            <TextField
              label="Avatar"
              name="avatar"
              value={petData.avatar}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2
              }}
              onClick={handleAddPet}
            >
              Adicionar
            </Button>
          </Container>
        </Box>
      </Modal>
    </div >
  )
}

export default App
