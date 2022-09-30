import React from 'react';

const Carditem = () => {
    return (
        <>
            <div className="container-fluid row">
                <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Marca Cartorin</div>
                    <div className="card-body">
                        <h4 className="card-title">Carton corrugado</h4>
                        <p className="card-text">Placa dimension de 1.20 mtrs ancho por 0.80 mtrs de largo</p>
                        <h5 className="card-title">Precio:$</h5>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Marca Strech</div>
                    <div className="card-body">
                        <h4 className="card-title">Cinta Fragil</h4>
                        <p className="card-text">Contiene 30 mtrs.</p>
                        <h5 className="card-title">Precio:$</h5>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Marca Strech</div>
                    <div className="card-body">
                        <h4 className="card-title">Cinta para embalar</h4>
                        <p className="card-text">Contiene 50 mtrs.</p>
                        <h5 className="card-title">Precio:$</h5>
                    </div>
                </div>
                <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Marca Cintin</div>
                    <div className="card-body">
                        <h4 className="card-title">Cinta de enmascarar</h4>
                        <p className="card-text">Contiene 150 mtrs.</p>
                        <h5 className="card-title">Precio:$</h5>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Carditem;




