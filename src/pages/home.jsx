import { Link } from "react-router";
// import r from "../hooks/randomParamsId";
import paramsId from "../hooks/randomParamsId";
const Home = () => {
    return (<>
        <div className="card bg-base-100 w-100 shadow-2xl">
            <div className="card-body">
                <h1 className="text-2xl font-bold">Kalkulator Pemula</h1>
                <p>Silahkan pilih operasi matematika yang ingin Anda lakukan:</p>
                <div className="divider"></div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <Link to={`${paramsId("+")}`} className="btn btn-neutral">(+) Penjumlahan</Link>
                    <Link to={`${paramsId("÷")}`} className="btn btn-error">(÷) Pembagian</Link>
                    <Link to={`${paramsId("x")}`} className="btn btn-info">(x) Perkalian</Link>
                    <Link to={`${paramsId("-")}`} className="btn btn-primary">(-) Pengurangan</Link>
                </div>
                <div>
                    Yang Dibuat Oleh Pemula Dan Untuk Pemula
                </div>
            </div>
        </div></>)
}

export default Home;
