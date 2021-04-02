import React from "react"
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"

describe("pruebas en el addcategory",() => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>) 
    });

    test("debe de mostrarse correctamente", () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test("debe de cambiar la caja de texto", () => {
        
        const input = wrapper.find("input");
        const value = "hola Mundo"
        input.simulate( "change", { target: {value} } )

        expect(wrapper.find("p").text().trim()).toBe(value)

    });

    test("NO debe de postear la informacion con submit", () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled();

    });

    test("debe de llamar el setCategories y limpiar la caja de texto", () => {
        // simular el inputchange
        //simular el submit
        //setcategories se  debe de haber llamado
        //el valor del input debe de estar ""
        const value = "Hola Mundo"
        wrapper.find("input").simulate("change",{ target: {value} })
        wrapper.find("input").simulate("submit", { preventDefault(){} })
        
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find("input").prop("value")).toBe("")

    });

})