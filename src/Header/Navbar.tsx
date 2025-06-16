import { LogoutOutlined } from "@ant-design/icons"
import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom"

export const Navbar=()=>
{
    const navigate = useNavigate()
    return<>
    <section>
        <div className={styles.narBar}>
            <p>Elon Musk</p>
            <div className={styles.logoutBg}
            onClick={()=>
            {
                localStorage.setItem("token","")
                window.location.reload()
            }
            }
            >
            <LogoutOutlined/>
            </div>
        </div>
    </section>
    </>
}
