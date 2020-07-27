import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />',()=>{
    const category = "puppy";
      

    test('debe mostrar <GifGrid /> correctamente', () => {     
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true            
        })
        
        const wrapper=shallow(<GifGrid category={category} />); 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes usando useFetchGifs', () => { 
        const gifs = [{
            id: "ABC",
            title: "Titulo",
            url: "https://imagenes/imagen.jpg"
        },{
            id: "DEF",
            title: "Titulo2",
            url: "https://imagenes/imagen2.jpg"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false            
        })

        const wrapper=shallow(<GifGrid category={category} />); 

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    })
});


