import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useMirrorWorld } from "../hooks/useMirrorWorld";
import { saveAs } from 'file-saver'


const Home: NextPage = () => {
  
  const { user, mirrorworld, login } = useMirrorWorld()
  
  async function fetchNFTs() {
    try {
      const nfts = await mirrorworld.getNFTs({
        limit: 10,
        offset: 0
      })
      console.log("nfts", nfts)
    } catch (e) {
      console.error("Couldn't fetch NFTs", e)
    }
  }
  
  async function fetchSPLTokens() {
    try {
      const tokens = await mirrorworld.getTokens()
      console.log("tokens", tokens)
    } catch (e) {
      console.error("Couldn't fetch user tokens", e)
    }
  }
  
  async function fetchTransactions() {
    try {
      const trasnactions = await mirrorworld.getTransactions()
      console.log("trasnactions", trasnactions)
    } catch (e) {
      console.error("Couldn't fetch user trasnactions", e)
    }
  }
  
  const createFile = () => {

    const blob = new Blob([ "Licencia "+user?.wallet?.sol_address ], { type: 'text/plain;charset=utf-8' });
    saveAs( blob, '/mi-licencia.txt' );
  }

  return (
    <div className={styles.container}>
       <input className={styles.btn} id = "btn_autentificacion" value="Autentificacion"  onClick={login}></input>
      <div>
      {user ? (
          <div className="user-info">
              <ul>
              <li>Autentificado </li>
                <a href="http://localhost/fmetter/licencia">
                <input className={styles.btn} id = "btn_login" value="Login" onClick={createFile} ></input>
    </a>
              </ul>
          </div>
        ) : (
          <p>No User available</p>
        )}
      </div>
      
    </div>
  )
}

export default Home
