import "./ItemList.css"
import Item from "./Item/Item"
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ItemList = ({ productos }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false); 
    };

    return (
        <main className="main">
            <header className="headerGrid">
                <div className="header-grid-total"> Cantidad articulos: {productos.length}</div>
                <div>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            {selectedOption ? selectedOption : 'Ordenar por'}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Ordenar Por:</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect('Precio de menor a mayor')}>Precio de menor a mayor</DropdownItem>
                            <DropdownItem onClick={() => handleOptionSelect('Precio de mayor a menor')}>Precio de mayor a menor</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
            </header>
            <section className="grid">
                {productos.map(prod => <Item key={prod.id} {...prod} />)}
            </section>
        </main>

    )
}
export default ItemList