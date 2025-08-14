import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Stack,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  useToast
} from '@chakra-ui/react'

function App() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [lista, setLista] = useState([])
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação de campos vazios
    if (!nome.trim() || !email.trim()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    
    // Validação de email
    if (!emailRegex.test(email.trim())) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, insira um email válido!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    
    const novoUsuario = {
      id: Date.now(),
      nome: nome.trim(),
      email: email.trim()
    }
    
    setLista([...lista, novoUsuario])
    setNome('')
    setEmail('')
    
    toast({
      title: 'Usuário adicionado',
      description: `${nome.trim()} foi adicionado com sucesso!`,
      status: 'success',
      duration: 3000, // 3 Segundos
      isClosable: true,
    })
  }

  return (
    <Container maxW="md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading 
          as="h1" 
          size="xl" 
          textAlign="center" 
          color="purple.500"
        >
          Cadastro de Usuários
        </Heading>
        
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                 <FormLabel>Nome</FormLabel>
                 <Input
                   type="text"
                   placeholder="Digite seu nome completo"
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   focusBorderColor="purple.500"
                 />
               </FormControl>
               
               <FormControl isRequired>
                 <FormLabel>Email</FormLabel>
                 <Input
                   type="email"
                   placeholder="Digite seu melhor email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   focusBorderColor="purple.500"
                 />
               </FormControl>
              
              <Button 
                type="submit" 
                colorScheme="purple" 
                size="lg" 
                width="full"
                mt={4}
              >
                Adicionar Usuário
              </Button>
            </VStack>
          </form>
        </Box>

        <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
          <Flex align="center" mb={4}>
            <Heading as="h2" size="lg" color="gray.700">
              Lista de Usuários
            </Heading>
            <Spacer />
            <Text fontSize="sm" color="gray.500">
              {lista.length} usuário{lista.length !== 1 ? 's' : ''}
            </Text>
          </Flex>
          
          {lista.length === 0 ? (
            <Box 
              textAlign="center" 
              py={8} 
              color="gray.500"
              fontStyle="italic"
            >
              <Text fontSize="lg">
                Nenhum usuário cadastrado ainda. Adicione o primeiro!
              </Text>
            </Box>
          ) : (
            <Stack spacing={3}>
              {lista.map((user) => (
                <Box 
                  key={user.id}
                  p={4} 
                  border="1px" 
                  borderColor="gray.200" 
                  borderRadius="md"
                  _hover={{ bg: "gray.50" }}
                >
                  <Text fontWeight="bold" color="purple.500">
                    {user.nome}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {user.email}
                  </Text>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </VStack>
    </Container>
  )

}

export default App
