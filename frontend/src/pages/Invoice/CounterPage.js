import React,{useState} from 'react'
import './Counter_Page.css'
import ModalS from './Services.js';
import ModalP from './Parts.js';
 
const CounterPage = () => {
    const [serviceTotal,setServiceTotal] = useState(0);
    const [partsTotal,setPartsTotal] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [total,setTotal] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenP, setModalOpenP] = useState(false);
    return (
        <div className="counter_sale">
            <div className="header">
                <a href="#" className="back_button">
                &larr;
                </a>
                <h2>Counter Sale</h2>
            </div>
 
            <div className="body">
                <div className="search__box">
                    <input className='search_box' placeholder="Search Customer"></input>
                    <button className='add_customer'>Add Customer</button>
                </div>
 
                <div className="services">
                    <h4>SERVICES</h4>
                    <button className="btn" onClick={() => {setModalOpen(true);}}>Add</button>
                    {modalOpen && <ModalS setOpenModal={setModalOpen} />}
                </div>
                <div className="parts_stocks">
                    <h4>PARTS/STOCKS</h4>
                    <button className="btn" onClick={() => {setModalOpenP(true);}}>Add</button>
                    {modalOpenP && <ModalP setOpenModalP={setModalOpenP} />}
                </div>
 
                <div className="selected">
                    <div className="service__total">
                        <span>Services Sub Total</span>
                        <span className="amount">{serviceTotal}</span>
                    </div>
                    <div className="parts__total">
                        <span>Parts Sub total</span>
                        <span className="amount">{partsTotal}</span>
                    </div>
                    <div className="discount">
                        <span>Discount</span>
                        <span className="amount">{discount}</span>
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <span className="amount">{total}</span>
                    </div>
                </div>
 
                <div className="footer">
                    <button>
                        Prepare Invoice
                    </button>
                </div>
 
            </div>
        </div>    
    )
}
 
export default CounterPage
