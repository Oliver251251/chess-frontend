import React, {useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const ChessDel = () => {
    const params = useParams();
    const id = params.chessId;
    const navigate = useNavigate();
    const [chess, setChess] = useState([]);
    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`https://chess.sulla.hu/chess/${id}`);
                const chess = await res.json();
                setChess(chess);
            }catch(error){
                console.log("Hiba:\n", error);
            }
        })();
    }, [id]);

    return(
        <div className="container mt-5">
        <h2 className="text-center">Törlendő sakkozó: {chess.name}</h2>
            <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center align-item-center">
                <div className="col text-center">
                    <div className="card h-200">
                        <h3 className="text-dark text-center card-title">Sakkozó neve: {chess.name}</h3>
                        <h5 className="text-dark text-center">Születési éve: {chess.birth_date}</h5>
                        <h5 className="text-dark text-center">Nyert világbajnokságai: {chess.world_ch_won}</h5>
                            <div className="card-body align-items-center">
                                <Link to={chess.profile_url} className="fs-6" target="_blank">Profil link</Link>
                                <br/>
                                <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"} alt={chess.name}
                                className="img-fluid" style={{width: "250px"}}/>
                            </div>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                fetch(`https://chess.sulla.hu/chess/${id}`, {
                                    method: "DELETE",
                                })
                                .then(() => {
                                    navigate("/");
                                })
                                .catch(console.log);
                            }}>
                                <button class="bi bi-trash3 fs-3" type="submit">Törlés</button>&nbsp;&nbsp;&nbsp;
                                <Link to="/" className="justify-content-center align-item-center"><i class="bi bi-arrow-left fs-3">Vissza</i></Link>
                            </form>
                    </div>
                </div>
            </div>
    </div>
    );
};