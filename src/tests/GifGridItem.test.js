import React from 'react';
import {shallow} from "enzyme";
import GifGridItem from "../components/GifGridItem"

describe('pruebas en gifgriditem', () => {
    test('debe de mostrarse correctamente el componente', () => {

        const wrapper = shallow(<GifGridItem/>)

        expect (wrapper).toMatchSnapshot();

    })
    
})
