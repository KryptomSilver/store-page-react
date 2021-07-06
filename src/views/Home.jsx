import React from "react";
import Chart from "../components/Chart";
import Chart2 from "../components/Chart2";
import ChartPie from "../components/ChartPie";
import Item from "../components/Item";

const Home = () => {
    const data = [
        { name: "Enero", no_ventas: 100 },
        { name: "Febrero", no_ventas: 50 },
        { name: "Marzo", no_ventas: 20 },
        { name: "Mayo", no_ventas: 60 },
        { name: "Junio", no_ventas: 202 },
        { name: "Julio", no_ventas: 13 },
        { name: "Agosto", no_ventas: 78 },
        { name: "Septiembre", no_ventas: 33 },
        { name: "Octubre", no_ventas: 85 },
        { name: "Noviembre", no_ventas: 200 },
        { name: "Diciembre", no_ventas: 3 },
    ];
    const data2 = [
        { name: "Polvo", no_ventas: 50 },
        { name: "Mascarilla 1", no_ventas: 25 },
        { name: "Labial", no_ventas: 30 },
        { name: "Tinte", no_ventas: 10 },
    ];
    const users = [
        { name: "Usuario", value: 12 },
        { name: "Admin", value: 2 },
        { name: "Provedor", value: 12 }
    ];
    return (
        <div className=" mt-3 contenedor">
            <div className="row">
                <div className="col-6">
                    <Item
                        width="38.3rem"
                        height="30rem"
                        animated="animate__fadeIn animate__slow"
                    >
                        <h4 className="text-center">Productos mas vendidos</h4>

                        <Chart2 data={data2} width={550} height={400} />
                    </Item>
                </div>
                <div className="col-6">
                    <Item
                        width="38.3rem"
                        height="30rem"
                        animated="animate__fadeIn animate__slow"
                    >
                        <h4 className="text-center">Usuarios</h4>
                        <ChartPie data={users}  width={550} height={400}/>
                    </Item>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Item
                        width="78rem"
                        height="21rem"
                        animated="animate__fadeIn animate__slower"
                    >
                        <h4 className="text-center">Ventas</h4>
                        <Chart data={data} width={1200} height={270} />
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Home;
