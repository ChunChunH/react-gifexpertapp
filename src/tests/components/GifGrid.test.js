import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import React from "react"
import useFetchGifs from "../../hooks/useFetchGifs"
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en gif grid", () => {

    const category = "One Punch"

    test("tomatchsnapshot", () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })


        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })

    test("Debe mostrar items cuando se cargan imágenes con useFetchGifs", () => {

        const gifs = [{
            id:"ABC",
            url:"https://lochalhost/cualquiera.jpg",
            title:"MY title"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false)
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
        
    })
})