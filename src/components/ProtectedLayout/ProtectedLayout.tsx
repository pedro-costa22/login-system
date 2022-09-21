
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if(!auth.email) {
        return (
            <>
                <h1>Acesso negado! Você precisa acessar sua conta para visualizar essa página.</h1>
            </>
        )
    }

    return children
    

}