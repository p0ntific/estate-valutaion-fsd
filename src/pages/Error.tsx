import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            Не удалось найти данную страницу
            <Link to="/">На главную</Link>
        </div>
    );
}

export default Error;
