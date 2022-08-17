import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoultContainer } from './styles'

export function DefaultLayoult() {
  return (
    <LayoultContainer>
      <Header />
      <Outlet />
    </LayoultContainer>
  )
}
