import Barcode from 'react-barcode';
import './BarcodeComponent.css'; // Külső CSS fájl importálása

function BarcodeComponent(props) {
    let vonalkod = "L076" + props.raktartipus + props.sor + "-" + props.oszlop + "-" + props.emelet + props.elvalaszto + props.hely;

    return (
        <div className="Barcode">
            <Barcode value={vonalkod} />
        </div>
    );
}

export default BarcodeComponent;
