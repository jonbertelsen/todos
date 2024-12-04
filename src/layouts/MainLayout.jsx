import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
      <header>Home Todos Login</header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; Jon Bertelsen</footer>
    </>
  )
}

export default MainLayout
